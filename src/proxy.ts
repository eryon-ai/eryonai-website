import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, isLocale, type Locale } from "@/i18n/config";

// Home-page language detection:
// 1. the visitor's saved choice (eryon_lang cookie, set by the language switcher)
// 2. browser language (Accept-Language); a browser that lists languages we don't serve stays on English
// 3. country (Vercel / Cloudflare geo header), only when the browser sends no language
// Only "/" is redirected; every other URL is served exactly as requested.
const COUNTRY: Record<string, Locale> = {
  JP: "ja",
  DE: "de", AT: "de", CH: "de",
  FR: "fr", BE: "fr",
  ES: "es", MX: "es", CO: "es", AR: "es", CL: "es", PE: "es",
  AE: "ar", SA: "ar", QA: "ar", KW: "ar", BH: "ar", OM: "ar", EG: "ar",
};

function detect(req: NextRequest): Locale | null {
  const saved = req.cookies.get("eryon_lang")?.value;
  if (saved === "en") return null;
  if (saved && isLocale(saved)) return saved;

  // Browser language beats country: an English browser in Dubai or Zurich stays on English.
  const prefs = (req.headers.get("accept-language") || "").toLowerCase().split(",").map((p) => p.split(";")[0].trim().slice(0, 2)).filter(Boolean);
  for (const p of prefs) {
    if (p === "en") return null;
    if ((LOCALES as readonly string[]).includes(p)) return p as Locale;
  }
  if (prefs.length) return null;

  // No usable browser language (rare): fall back to country.
  const country = (req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry") || "").toUpperCase();
  return COUNTRY[country] ?? null;
}

export function proxy(req: NextRequest) {
  const lang = detect(req);
  if (!lang) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}`;
  const res = NextResponse.redirect(url, 307);
  res.headers.set("Vary", "Accept-Language, Cookie, CF-IPCountry, X-Vercel-IP-Country");
  return res;
}

export const config = { matcher: "/" };
