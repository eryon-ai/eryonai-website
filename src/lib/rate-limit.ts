/**
 * Simple in-memory rate limiter.
 * For multi-instance deployments (Vercel), swap this for Upstash Redis.
 */

const store = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(
  ip: string,
  { max = 5, windowMs = 60_000 }: { max?: number; windowMs?: number } = {}
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || entry.resetAt < now) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= max) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count++;
  return { allowed: true, retryAfterSeconds: 0 };
}
