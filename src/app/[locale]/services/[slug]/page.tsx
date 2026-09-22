import { notFound } from 'next/navigation';
import { getServicePage, getAllServiceSlugs } from '@/lib/service-page-data';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import { buildAlternates, getLocalizedPath } from '@/lib/layout-translations';
import type { Locale } from '@/lib/dictionary';

// Generate static routes for all 12 services at build time
export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

type Props = { params: Promise<{ slug: string; locale: Locale }> };

// Dynamic metadata per service page
export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params;
  const data = getServicePage(slug);

  if (!data) {
    return {
      title: 'Service Not Found | Eryon AI',
    };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: [
      'ERYON AI',
      data.hero.badge,
      `${data.hero.badge} company`,
      `${data.hero.badge} services`,
      'enterprise software development',
      'custom software engineering',
      'digital transformation',
      'software development agency',
    ],
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: buildAlternates(`/services/${slug}`, locale, { translated: false }).canonical,
      type: 'website',
      siteName: 'ERYON AI',
      images: [data.hero.heroImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.meta.title,
      description: data.meta.description,
      images: [data.hero.heroImage],
    },
    alternates: buildAlternates(`/services/${slug}`, locale, { translated: false }),
  };
}

export default async function ServiceDynamicPage({ params }: Props) {
  const { slug, locale } = await params;
  const data = getServicePage(slug);

  if (!data) {
    notFound();
  }

  const base = 'https://www.eryonai.com';
  const pageUrl = `${base}${getLocalizedPath(`/services/${slug}`, locale)}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.meta.title,
    "url": pageUrl,
    "description": data.meta.description,
    "provider": {
      "@type": "Organization",
      "name": "ERYON AI",
      "url": "https://www.eryonai.com"
    },
    "serviceType": data.hero.badge
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${base}${getLocalizedPath('/', locale)}` },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${base}${getLocalizedPath('/services', locale)}` },
      { "@type": "ListItem", "position": 3, "name": data.meta.title, "item": pageUrl }
    ]
  };

  return (
    <div lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbJsonLd]) }}
      />
      <ServicePageTemplate data={data} />
    </div>
  );
}
