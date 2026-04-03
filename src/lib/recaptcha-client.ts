/**
 * Client-side helper — executes reCAPTCHA v3 and returns a token.
 * Call this just before form submission.
 */
export function getRecaptchaToken(action: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const grecaptcha = (window as any).grecaptcha;
    if (!grecaptcha) {
      reject(new Error('reCAPTCHA not loaded'));
      return;
    }
    grecaptcha.ready(() => {
      grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(reject);
    });
  });
}
