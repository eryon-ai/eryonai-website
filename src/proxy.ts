import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'ja', 'de', 'fr', 'es', 'ar'];

const COUNTRY_LOCALE_MAP: Record<string, string> = {
  // Japan
  JP: 'ja',
  // DACH (German)
  DE: 'de',
  AT: 'de',
  CH: 'de',
  // Francophone
  FR: 'fr',
  BE: 'fr',
  // Hispanic
  ES: 'es',
  MX: 'es',
  CO: 'es',
  AR: 'es',
  CL: 'es',
  PE: 'es',
  // Middle East / Arabic
  AE: 'ar',
  SA: 'ar',
  QA: 'ar',
  KW: 'ar',
  BH: 'ar',
  OM: 'ar',
  EG: 'ar',
};

// Real public/ assets and generated files. Any other path containing a dot (e.g. /index.html,
// /wp-login.php) must NOT reach the [locale] route, where it was read as a locale and crashed with a 500.
const STATIC_FILE = /\.(?:png|jpe?g|gif|webp|avif|svg|ico|mp4|webm|txt|xml|json|js|css|map|woff2?|ttf|otf|pdf)$/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip static files, APIs, sitemaps, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/.well-known') ||
    STATIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 2. Strip explicit /en prefix to keep English URLs clean (e.g. /en/about -> /about)
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const newPath = pathname.replace(/^\/en/, '') || '/';
    // Permanent: /en/... and the bare URL are the same page, so consolidate signals on the bare one.
    return NextResponse.redirect(new URL(newPath + request.nextUrl.search, request.url), 308);
  }

  // 3. Check if pathname starts with a non-en locale
  const pathnameHasNonEnLocale = SUPPORTED_LOCALES.some(
    (locale) => locale !== 'en' && (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  );

  if (pathnameHasNonEnLocale) {
    // Already has a localized path, let the [locale] segment handle it naturally
    return NextResponse.next();
  }

  // 4. Handle root '/' auto-detection for visitors
  if (pathname === '/') {
    const cookieLang = request.cookies.get('eryon_lang')?.value;

    if (cookieLang === 'en') {
      return NextResponse.rewrite(new URL('/en', request.url));
    }

    if (cookieLang && SUPPORTED_LOCALES.includes(cookieLang)) {
      return NextResponse.redirect(new URL(`/${cookieLang}`, request.url));
    }

    // Auto-detect via Geo IP
    const geoCountry = (
      request.headers.get('x-vercel-ip-country') ||
      request.headers.get('cf-ipcountry') ||
      ''
    ).toUpperCase();

    let matchedLocale: string | null = COUNTRY_LOCALE_MAP[geoCountry] || null;

    if (!matchedLocale) {
      const acceptLang = request.headers.get('accept-language')?.toLowerCase() || '';
      for (const locale of SUPPORTED_LOCALES) {
        if (locale !== 'en' && (acceptLang.startsWith(locale) || acceptLang.includes(`,${locale}`))) {
          matchedLocale = locale;
          break;
        }
      }
    }

    if (matchedLocale && matchedLocale !== 'en') {
      const response = NextResponse.redirect(new URL(`/${matchedLocale}`, request.url));
      response.cookies.set('eryon_lang', matchedLocale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      return response;
    }

    // Default root falls back to /en internally
    return NextResponse.rewrite(new URL('/en', request.url));
  }

  // 5. For any other path without a locale (e.g., /about, /portfolio)
  // Rewrite it to /en/... so that the [locale] folder catches it as 'en'
  return NextResponse.rewrite(new URL(`/en${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
