/**
 * reCAPTCHA v3 server check (same env vars and threshold as the old site).
 * Without RECAPTCHA_SECRET_KEY, or without a token, it returns true so the honeypot/timing checks decide.
 */
export async function recaptchaOk(token: string | null | undefined, action: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || !token) return true;
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(5000),
    });
    const data = (await res.json()) as { success?: boolean; score?: number; action?: string };
    return data.success === true && (data.score ?? 0) >= 0.5 && (!data.action || data.action === action);
  } catch (err) {
    // Google unreachable: don't lose a real lead over it; the other bot checks still apply.
    console.warn("[recaptcha] verification failed", err);
    return true;
  }
}
