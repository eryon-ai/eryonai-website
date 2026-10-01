import { getJob } from "@/lib/careers";
import { EMAIL_RE, clientIp, rateLimited, respond, sendMail, syncToSheet } from "@/lib/mail";
import { recaptchaOk } from "@/lib/recaptcha";

const s = (f: FormData, k: string, max = 200) => String(f.get(k) ?? "").trim().slice(0, max);
const MAX_CV = 5 * 1024 * 1024;
const CV_TYPES = [".pdf", ".doc", ".docx"];

export async function POST(req: Request) {
  if (rateLimited(`apply:${clientIp(req)}`, 3)) {
    return respond(req, false, "", "/careers", { error: "Too many submissions. Please try again later." }, 429);
  }
  const f = await req.formData();
  const job = getJob(s(f, "job"));
  const back = job ? `/careers/${job.slug}?error=1#apply` : "/careers";
  if (s(f, "website") || Number(f.get("_elapsed") ?? 99999) < 3000) return respond(req, true, "/careers/success", back);
  if (!(await recaptchaOk(s(f, "recaptchaToken", 4000), "apply"))) {
    return respond(req, false, "", back, { error: "We couldn't verify this submission. Please try again or email your CV directly." }, 403);
  }

  const d = {
    name: s(f, "name", 100),
    email: s(f, "email", 200),
    phone: s(f, "phone", 40),
    linkedin: s(f, "linkedin", 300),
    portfolio: s(f, "portfolio", 300),
    note: s(f, "note", 3000),
  };
  const cv = f.get("cv");
  const errors: Record<string, string> = {};
  if (!job) errors.job = "This role is no longer open.";
  if (!d.name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(d.email)) errors.email = "Please enter a valid email.";
  if (!(cv instanceof File) || !cv.size) errors.cv = "Please attach your CV.";
  else if (cv.size > MAX_CV) errors.cv = "CV must be 5 MB or smaller.";
  else if (!CV_TYPES.some((t) => cv.name.toLowerCase().endsWith(t))) errors.cv = "CV must be a PDF or Word document.";
  if (Object.keys(errors).length) return respond(req, false, "", back, { error: "Please check the highlighted fields.", errors });

  syncToSheet("application", {
    name: d.name, email: d.email, service: job!.title, message: d.note, phone: d.phone, linkedin: d.linkedin, portfolio: d.portfolio,
  });

  try {
    await sendMail({
      subject: `Application — ${job!.title} — ${d.name}`,
      replyTo: d.email,
      fields: [["Role", job!.title], ["Name", d.name], ["Email", d.email], ["Phone", d.phone], ["LinkedIn", d.linkedin], ["Portfolio / GitHub", d.portfolio], ["Note", d.note]],
      attachment: cv as File,
    });
  } catch (err) {
    console.error("[apply] send failed", err);
    return respond(req, false, "", back, { error: "We couldn't submit your application. Please email your CV to connect@eryonai.com." }, 502);
  }
  return respond(req, true, "/careers/success", back);
}
