import { EMAIL_RE, clientIp, rateLimited, respond, sendMail, syncToSheet } from "@/lib/mail";
import { recaptchaOk } from "@/lib/recaptcha";

// Newsletter signup. The Google Sheet is the subscriber list; the email is just a notification.
export async function POST(req: Request) {
  const back = "/insights";
  if (rateLimited(`subscribe:${clientIp(req)}`, 10, 60 * 60_000)) {
    return respond(req, false, "", back, { error: "Too many attempts. Please try again later." }, 429);
  }
  const f = await req.formData();
  const email = String(f.get("email") ?? "").trim().slice(0, 200);
  if (String(f.get("website") ?? "")) return respond(req, true, "/thank-you", back); // honeypot
  if (!EMAIL_RE.test(email)) return respond(req, false, "", back, { error: "Please enter a valid email address." });
  if (!(await recaptchaOk(String(f.get("recaptchaToken") ?? ""), "subscribe"))) {
    return respond(req, false, "", back, { error: "We couldn't verify this signup. Please try again." }, 403);
  }

  syncToSheet("subscription", { email });
  try {
    await sendMail({ subject: `New newsletter subscriber — ${email}`, replyTo: email, fields: [["Email", email]] });
  } catch (err) {
    console.log("[subscribe] notification email skipped", (err as Error).message);
  }
  return respond(req, true, "/thank-you", back);
}
