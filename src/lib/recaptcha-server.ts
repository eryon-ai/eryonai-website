/**
 * Server-side helper — verifies a reCAPTCHA v3 token with Google.
 * Returns success=true and a score between 0.0 (bot) and 1.0 (human).
 * Reject submissions with score < 0.5.
 */
export async function verifyRecaptcha(
  token: string
): Promise<{ success: boolean; score: number; action?: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn('RECAPTCHA_SECRET_KEY not set — skipping verification');
    return { success: true, score: 1 };
  }

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  });

  const data = await res.json();
  return {
    success: data.success === true,
    score: data.score ?? 0,
    action: data.action,
  };
}
