import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rate-limit';

type LeadBody = {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
};

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ─── Sync data to Google Sheets Webhook ───────────────────────────── */
async function syncToGoogleSheet(data: any) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, type: 'lead', timestamp: new Date().toISOString() }),
    });
  } catch (err) {
    console.warn('⚠️ Google Sheet sync failed (but lead was processed):', err);
  }
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  const { allowed, retryAfterSeconds } = rateLimit(ip, { max: 5, windowMs: 10 * 60_000 });
  if (!allowed) {
    return NextResponse.json(
      { error: `Too many requests. Try again in ${retryAfterSeconds}s.` },
      { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } }
    );
  }

  const body = (await req.json()) as LeadBody;
  const { name, email, company, service, budget, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }

  // Sync to Google Sheet immediately (Async)
  syncToGoogleSheet({ name, email, company, service, budget, message });

  // If SMTP is not configured...
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('📋 [LEAD — SMTP not configured, logging only]', {
      name, email, company, service, budget, message,
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
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
      <div style="background: linear-gradient(135deg, #0f172a, #1e3a5f); padding: 24px 32px;">
        <p style="margin: 0; font-size: 11px; color: #00b4d8; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">New Chatbot Lead</p>
        <h2 style="margin: 6px 0 0; font-size: 20px; color: #f8fafc; font-weight: 800;">ERYON AI</h2>
      </div>
      <div style="padding: 24px 32px; background: #fff;">
        <p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Name</p>
        <p style="margin: 0 0 16px; font-size: 15px; color: #0f172a; font-weight: 600;">${name}</p>
        <p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Email</p>
        <p style="margin: 0 0 16px; font-size: 15px; color: #0066ff; font-weight: 600;">${email}</p>
        ${company ? `<p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Company</p><p style="margin: 0 0 16px; font-size: 15px; color: #0f172a;">${company}</p>` : ''}
        ${service ? `<p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Service</p><p style="margin: 0 0 16px; font-size: 15px; color: #0f172a;">${service}</p>` : ''}
        ${budget ? `<p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Budget</p><p style="margin: 0 0 16px; font-size: 15px; color: #0f172a;">${budget}</p>` : ''}
        <p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Message</p>
        <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
      </div>
      <div style="padding: 16px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">ERYON AI · connect@eryonai.com</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ERYON AI Chatbot" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_TO_EMAIL || 'connect@eryonai.com',
      replyTo: email,
      subject: `🤖 New Chatbot Lead — ${name}`,
      html,
    });
    
    // Sync to Google Sheet (async)
    syncToGoogleSheet({ name, email, company, service, budget, message });
    
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Lead mail error:', err);
    return NextResponse.json({ error: 'Failed to send lead email.' }, { status: 500 });
  }
}
