// Languages and localized routing. English lives at the root (no prefix); the others under /{lang}.
export const LOCALES = ["ja", "de", "fr", "es", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export type Lang = "en" | Locale;
export const LANGS: Lang[] = ["en", ...LOCALES];

export const LANG_INFO: Record<Lang, { native: string; dir: "ltr" | "rtl"; html: string; og: string; date: string }> = {
  en: { native: "English", dir: "ltr", html: "en-IN", og: "en_IN", date: "en-GB" },
  ja: { native: "日本語", dir: "ltr", html: "ja", og: "ja_JP", date: "ja-JP" },
  de: { native: "Deutsch", dir: "ltr", html: "de", og: "de_DE", date: "de-DE" },
  fr: { native: "Français", dir: "ltr", html: "fr", og: "fr_FR", date: "fr-FR" },
  es: { native: "Español", dir: "ltr", html: "es", og: "es_ES", date: "es-ES" },
  ar: { native: "العربية", dir: "rtl", html: "ar", og: "ar_AE", date: "ar-AE" },
};

export const isLocale = (s: string): s is Locale => (LOCALES as readonly string[]).includes(s);

// Pages that exist in every language (same set the old site translated). Everything else is English only.
export const TRANSLATED = ["/", "/about", "/services", "/process", "/technology", "/work", "/contact", "/contact/success", "/insights", "/privacy", "/terms", "/cookie-policy"];

export function isTranslated(path: string) {
  const p = path.split(/[?#]/)[0];
  return TRANSLATED.includes(p) || /^\/insights\/[^/]+$/.test(p);
}

/** Localized href: prefixes translated pages with /{lang}; English-only pages keep their English URL. */
export function lp(path: string, lang: Lang) {
  if (lang === "en" || !isTranslated(path)) return path;
  return path === "/" || path.startsWith("/?") || path.startsWith("/#") ? `/${lang}${path.slice(1)}` : `/${lang}${path}`;
}

/** Split a pathname into its language and the English path. */
export function splitLang(pathname: string): { lang: Lang; path: string } {
  const seg = pathname.split("/")[1] ?? "";
  if (isLocale(seg)) return { lang: seg, path: pathname.slice(seg.length + 1) || "/" };
  return { lang: "en", path: pathname || "/" };
}
