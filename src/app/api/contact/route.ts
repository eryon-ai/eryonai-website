import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit } from '@/lib/rate-limit';
import { verifyRecaptcha } from '@/lib/recaptcha-server';

export async function POST(req: NextRequest) {
  // ── 1. Rate limit: max 3 contact submissions per IP per 10 minutes ─────────
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  const { allowed, retryAfterSeconds } = rateLimit(ip, { max: 3, windowMs: 10 * 60_000 });
  if (!allowed) {
    return NextResponse.json(
      { error: `Too many requests. Try again in ${retryAfterSeconds}s.` },
      { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } }
    );
  }

  const body = await req.json();
  const { name, email, company, service, budget, message, _trap, _startedAt, recaptchaToken } = body;

  // ── 2. Honeypot ───────────────────────────────────────────────────────────
  if (_trap) return NextResponse.json({ success: true });

  // ── 3. Time check ─────────────────────────────────────────────────────────
  const elapsed = _startedAt ? Date.now() - Number(_startedAt) : Infinity;
  if (elapsed < 3000) return NextResponse.json({ success: true });

  // ── 4. reCAPTCHA v3 verification ──────────────────────────────────────────
  if (recaptchaToken) {
    const { success, score } = await verifyRecaptcha(recaptchaToken);
    if (!success || score < 0.5) {
      return NextResponse.json({ error: 'Bot detected. Please try again.' }, { status: 403 });
    }
  }

  // ── 5. Basic field validation ─────────────────────────────────────────────
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,   // your Gmail address
      pass: process.env.SMTP_PASS,   // Gmail App Password (not regular password)
    },
  });

  const html = `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px 40px;">
        <p style="margin: 0; font-size: 13px; color: #00b4d8; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">New Project Inquiry</p>
        <h1 style="margin: 8px 0 0; font-size: 24px; color: #f8fafc; font-weight: 800;">ERYON AI</h1>
      </div>

      <!-- Body -->
      <div style="padding: 32px 40px; background: #ffffff;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 140px;">
              <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Name</p>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600;">${name}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Email</p>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <a href="mailto:${email}" style="margin: 0; font-size: 15px; color: #0066ff; font-weight: 600; text-decoration: none;">${email}</a>
            </td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Company</p>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 15px; color: #0f172a;">${company}</p>
            </td>
          </tr>` : ''}
          ${service ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Service</p>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 15px; color: #0f172a;">${service}</p>
            </td>
          </tr>` : ''}
          ${budget ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Budget</p>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">
              <p style="margin: 0; font-size: 15px; color: #0f172a; font-weight: 600;">${budget}</p>
            </td>
          </tr>` : ''}
        </table>

        <!-- Message -->
        <div style="margin-top: 24px; background: #f8fafc; border-radius: 10px; padding: 20px; border: 1px solid #e2e8f0;">
          <p style="margin: 0 0 8px; font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em;">Project Details</p>
          <p style="margin: 0; font-size: 15px; color: #374151; line-height: 1.7;">${message.replace(/\n/g, '<br/>')}</p>
        </div>

        <!-- Reply CTA -->
        <div style="margin-top: 28px; text-align: center;">
          <a href="mailto:${email}?subject=Re: Your Inquiry to ERYON AI"
            style="display: inline-block; background: linear-gradient(135deg, #0066ff, #00b4d8); color: #fff; font-weight: 700; font-size: 14px; padding: 13px 28px; border-radius: 10px; text-decoration: none;">
            Reply to ${name}
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="padding: 20px 40px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">ERYON AI · connect@eryonai.com · +91 82852 56571</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ERYON AI Contact Form" <${process.env.SMTP_USER}>`,
      to: 'connect@eryonai.com',
      replyTo: email,
      subject: `🚀 New Inquiry: ${service || 'General'} — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Mail send error:', err);
    return NextResponse.json({ error: 'Failed to send email. Check SMTP config.' }, { status: 500 });
  }
}
