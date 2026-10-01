import type { Metadata } from "next";
import { site } from "./site";
import { LANGS, LANG_INFO, isTranslated, lp, type Lang } from "@/i18n/config";

const ogImage = { url: "/opengraph-image.png", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` };

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  noindex,
  lang = "en",
}: {
  title: string;
  description: string;
  path: string; // English path; localized automatically
  type?: "website" | "article";
  noindex?: boolean;
  lang?: Lang;
}): Metadata {
  const url = lp(path, lang);
  // hreflang only for pages that exist in every language.
  const languages = isTranslated(path) && !noindex
    ? { ...Object.fromEntries(LANGS.map((l) => [l, lp(path, l)])), "x-default": path }
    : undefined;
  return {
    title,
    description,
    alternates: { canonical: url, ...(languages && { languages }) },
    openGraph: { title, description, url, siteName: site.name, type, locale: LANG_INFO[lang].og, images: [ogImage] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

export const abs = (path: string) => new URL(path, site.url).toString();

export const orgRef = { "@id": `${site.url}/#organization` };

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: abs("/brand/eryon-cosmic.png"),
  foundingDate: String(site.founded),
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: "Delhi", postalCode: "110001", addressCountry: "IN" },
  areaServed: site.countries.map((name) => ({ "@type": "Country", name })),
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50 },
  sameAs: Object.values(site.social),
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: orgRef,
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
