// reCAPTCHA v3 in the browser. The script loads on first form interaction, not on page load.
type Grecaptcha = { ready: (cb: () => void) => void; execute: (key: string, o: { action: string }) => Promise<string> };
declare global { interface Window { grecaptcha?: Grecaptcha } }

const KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export function loadRecaptcha() {
  if (!KEY || document.getElementById("recaptcha-js")) return;
  const s = document.createElement("script");
  s.id = "recaptcha-js";
  s.src = `https://www.google.com/recaptcha/api.js?render=${KEY}`;
  s.async = true;
  document.head.appendChild(s);
}

/** Resolves to a token, or "" if reCAPTCHA isn't configured / didn't load in time (server then relies on other checks). */
export async function recaptchaToken(action: string): Promise<string> {
  if (!KEY) return "";
  loadRecaptcha();
  const deadline = Date.now() + 3000;
  while (!window.grecaptcha && Date.now() < deadline) await new Promise((r) => setTimeout(r, 100));
  const g = window.grecaptcha;
  if (!g) return "";
  try {
    return await Promise.race([
      new Promise<string>((res, rej) => g.ready(() => g.execute(KEY, { action }).then(res, rej))),
      new Promise<string>((res) => setTimeout(() => res(""), 3000)),
    ]);
  } catch {
    return "";
  }
}
