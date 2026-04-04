import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rate-limit';
import { verifyRecaptcha } from '@/lib/recaptcha-server';

/* ─── Sync data to Google Sheets Webhook ───────────────────────────── */
async function syncToGoogleSheet(data: any) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, type: 'subscription', timestamp: new Date().toISOString() }),
    });
  } catch (err) {
    console.warn('⚠️ Google Sheet sync failed (but subscription was processed):', err);
  }
}

export async function POST(req: NextRequest) {
  // ── 1. Rate limit: 10 per IP per hour ─────────────────────────────────────
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';
  const { allowed, retryAfterSeconds } = rateLimit(ip, { max: 10, windowMs: 60 * 60_000 });
  if (!allowed) {
    return NextResponse.json(
      { error: `Too many requests. Try again in ${retryAfterSeconds}s.` },
      { status: 429 }
    );
  }

  const { email, recaptchaToken } = await req.json();

  // Sync to Google Sheet immediately (Async)
  syncToGoogleSheet({ email });
  
  // ── 2. reCAPTCHA v3 ───────────────────────────────────────────────────────
  if (recaptchaToken) {
    const { success, score } = await verifyRecaptcha(recaptchaToken);
    if (!success || score < 0.5) {
      return NextResponse.json({ error: 'Bot detected.' }, { status: 403 });
    }
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  // If SMTP is not configured, log the subscription and return success gracefully
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('📨 [SUBSCRIPTION — SMTP not configured, logging only]', {
      email,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ success: true });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
      <div style="background: linear-gradient(135deg, #0f172a, #1e3a5f); padding: 24px 32px;">
        <p style="margin: 0; font-size: 11px; color: #00b4d8; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">New Newsletter Subscriber</p>
        <h2 style="margin: 6px 0 0; font-size: 20px; color: #f8fafc; font-weight: 800;">ERYON AI</h2>
      </div>
      <div style="padding: 28px 32px; background: #fff;">
        <p style="margin: 0 0 6px; font-size: 13px; color: #94a3b8; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">Subscribed email</p>
        <p style="margin: 0 0 24px; font-size: 17px; color: #0066ff; font-weight: 700;">${email}</p>
        <p style="margin: 0; font-size: 14px; color: #64748b; line-height: 1.6;">
          Add this email to your newsletter list / CRM. They opted in for AI trends, tech insights, and ERYON AI updates.
        </p>
      </div>
      <div style="padding: 16px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">ERYON AI · connect@eryonai.com</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ERYON AI Website" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_TO_EMAIL || 'connect@eryonai.com',
      replyTo: email,
      subject: `📨 New Newsletter Subscriber — ${email}`,
      html,
    });

    // Sync to Google Sheet (async)
    syncToGoogleSheet({ email });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe mail error:', err);
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}
