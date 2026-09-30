import { EMAIL_RE, clientIp, rateLimited, respond, sendMail, syncToSheet } from "@/lib/mail";
import { recaptchaOk } from "@/lib/recaptcha";

const s = (f: FormData, k: string, max = 200) => String(f.get(k) ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  const fail = "/contact?error=1#form";
  if (rateLimited(`contact:${clientIp(req)}`)) {
    return respond(req, false, "", fail, { error: "Too many submissions. Please wait a few minutes or email us directly." }, 429);
  }
  const f = await req.formData();
  // Bots: honeypot filled, or submitted faster than a person can type. Pretend success.
  if (s(f, "website") || Number(f.get("_elapsed") ?? 99999) < 3000) return respond(req, true, "/contact/success", fail);
  if (!(await recaptchaOk(s(f, "recaptchaToken", 4000), "contact"))) {
    return respond(req, false, "", fail, { error: "We couldn't verify this submission. Please try again or email us directly." }, 403);
  }

  const d = {
    name: s(f, "name", 100),
    email: s(f, "email", 200),
    company: s(f, "company", 150),
    phone: s(f, "phone", 40),
    projectType: s(f, "projectType", 100),
    budget: s(f, "budget", 100),
    timeline: s(f, "timeline", 100),
    message: s(f, "message", 5000),
  };
  const errors: Record<string, string> = {};
  if (!d.name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(d.email)) errors.email = "Please enter a valid work email.";
  if (!d.projectType) errors.projectType = "Please choose a project type.";
  if (d.message.length < 20) errors.message = "Please describe your project in a few sentences (at least 20 characters).";
  if (Object.keys(errors).length) return respond(req, false, "", fail, { error: "Please check the highlighted fields.", errors });

  syncToSheet("contact", {
    name: d.name, email: d.email, company: d.company, service: d.projectType, budget: d.budget, message: d.message,
    phone: d.phone, timeline: d.timeline,
  });

  try {
    await sendMail({
      subject: `New project enquiry — ${d.name}${d.company ? ` (${d.company})` : ""}`,
      replyTo: d.email,
      fields: [
        ["Name", d.name], ["Email", d.email], ["Company", d.company], ["Phone", d.phone],
        ["Project type", d.projectType], ["Budget", d.budget], ["Timeline", d.timeline], ["Message", d.message],
      ],
    });
  } catch (err) {
    console.error("[contact] send failed", err);
    // The enquiry is already safe in the Google Sheet, so don't make the visitor resubmit.
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) return respond(req, true, "/contact/success", fail);
    return respond(req, false, "", fail, { error: "We couldn't send your message. Please email connect@eryonai.com directly." }, 502);
  }
  return respond(req, true, "/contact/success", fail);
}
