import type { Metadata } from "next";
import { Inter, Manrope, IBM_Plex_Mono } from "next/font/google";
import Header, { type NavData } from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import Analytics from "./Analytics";
import { JsonLd } from "./ui";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { articles } from "@/lib/insights";
import { insightCategories } from "@/lib/site";
import { organizationLd, websiteLd } from "@/lib/seo";
import { LANG_INFO, lp, type Lang } from "@/i18n/config";
import { getMessages, lArticle, lCategory, lIndustry, lService } from "@/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", weight: ["500", "600", "700", "800"] });
// Mono is decorative metadata only: not preloaded, so it never competes with the LCP text fonts.
const plex = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", display: "swap", weight: ["400"], preload: false });

/** Root metadata shared by every language's root layout. */
export function rootMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: { default: getMessages(lang).meta.home.title, template: `%s | ${site.name}` },
    description: site.description,
    applicationName: site.name,
    openGraph: { siteName: site.name, locale: LANG_INFO[lang].og, type: "website" },
    twitter: { card: "summary_large_image" },
    formatDetection: { telephone: false },
    // Google Search Console ownership (carried over from the old site — keep it).
    verification: { google: "KXlOIYo51Qf47LJO6lz0zt9pi7UyH4RRk0a8Pvijarg" },
  };
}

function navData(lang: Lang): NavData {
  const t = getMessages(lang).ui.header;
  const latest = lArticle(articles[0], lang);
  return {
    services: services.map((s) => ({ href: `/services/${s.slug}`, label: lService(s, lang).nav })),
    industries: industries.map((i) => ({ href: `/industries/${i.slug}`, label: lIndustry(i, lang).name })),
    insights: [
      { href: lp("/insights", lang), label: t.allInsights },
      ...insightCategories.map((c) => ({ href: lp(`/insights?category=${c.slug}`, lang), label: lCategory(c.slug, lang) })),
      { href: lp("/work", lang), label: t.caseStudies },
    ],
    latest: { href: lp(`/insights/${latest.slug}`, lang), title: latest.title },
  };
}

export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const m = getMessages(lang);
  const info = LANG_INFO[lang];
  return (
    <html lang={info.html} dir={info.dir} className={`${inter.variable} ${manrope.variable} ${plex.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <a href="#main" className="sr-only z-50 bg-blue px-4 py-3 text-white focus:not-sr-only focus:fixed focus:start-4 focus:top-4">
          Skip to content
        </a>
        <Header nav={navData(lang)} t={{ nav: m.ui.nav, header: m.ui.header }} lang={lang} />
        <main id="main" className="flex-1">{children}</main>
        <Footer lang={lang} />
        <CookieBanner t={m.ui.cookie} policyHref={lp("/cookie-policy", lang)} />
        <Analytics />
        <JsonLd data={[organizationLd, websiteLd]} />
      </body>
    </html>
  );
}
