import nodemailer from "nodemailer";
import { NextResponse, after } from "next/server";
import { site } from "./site";

// ponytail: in-memory rate limit is per server instance; move to Redis/Upstash if deployed across many instances.
const hits = new Map<string, { n: number; reset: number }>();
export function rateLimited(key: string, max = 5, windowMs = 10 * 60_000) {
  const now = Date.now();
  const h = hits.get(key);
  if (!h || h.reset < now) {
    hits.set(key, { n: 1, reset: now + windowMs });
    return false;
  }
  return ++h.n > max;
}

export const clientIp = (req: Request) =>
  req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function sendMail({
  subject,
  fields,
  replyTo,
  attachment,
}: {
  subject: string;
  fields: [string, string][];
  replyTo: string;
  attachment?: File;
}) {
  const { SMTP_USER, SMTP_PASS, LEAD_TO_EMAIL } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    // Fail loudly rather than silently dropping a lead.
    throw new Error("SMTP_USER / SMTP_PASS not configured");
  }
  const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: SMTP_USER, pass: SMTP_PASS } });
  const rows = fields
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#5a6472;vertical-align:top">${esc(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join("");
  await transporter.sendMail({
    from: `"Eryon Website" <${SMTP_USER}>`,
    to: LEAD_TO_EMAIL || site.email,
    replyTo: oneLine(replyTo),
    subject: oneLine(subject),
    html: `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
    text: fields.map(([k, v]) => `${k}: ${v}`).join("\n"),
    attachments: attachment
      ? [{ filename: oneLine(attachment.name), content: Buffer.from(await attachment.arrayBuffer()) }]
      : undefined,
  });
}

/**
 * Mirror a submission to the Google Sheet webhook (same payload shape as the old site, so the
 * existing Apps Script keeps working). Runs after the response via `after()`, so it never delays
 * or fails the request — and still completes on serverless hosts like Vercel.
 */
export function syncToSheet(type: "contact" | "application" | "subscription", data: Record<string, string>) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) return;
  const body = JSON.stringify({ ...data, type, timestamp: new Date().toISOString() });
  after(() =>
    fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body, signal: AbortSignal.timeout(5000) })
      .then(() => undefined)
      .catch((err) => console.warn(`[sheet] ${type} sync failed`, err)),
  );
}

/** JSON for fetch clients, redirect for native form posts. */
export function respond(req: Request, ok: boolean, success: string, fallback: string, body: object = {}, status = 400) {
  const wantsJson = req.headers.get("accept")?.includes("application/json");
  if (wantsJson) return NextResponse.json(ok ? { ok: true } : body, { status: ok ? 200 : status });
  // Build the redirect from the public host (proxy/Docker bind addresses like 0.0.0.0 leak into req.url).
  const h = req.headers;
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const base = host ? `${h.get("x-forwarded-proto") ?? new URL(req.url).protocol.replace(":", "")}://${host}` : req.url;
  return NextResponse.redirect(new URL(ok ? success : fallback, base), 303);
}
