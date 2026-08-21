import { notFound } from 'next/navigation';
import { getServicePage, getAllServiceSlugs } from '@/lib/service-page-data';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';

// Generate static routes for all 12 services at build time
export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dynamic metadata per service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = getServicePage(resolvedParams.slug);
  
  if (!data) {
    return {
      title: 'Service Not Found | Eryon AI',
    };
  }
  
  const url = `https://www.eryonai.com/services/${resolvedParams.slug}`;
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
      url,
      type: 'website',
      siteName: 'ERYON AI',
      images: [data.hero.heroImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.meta.title,
      description: data.meta.description,
    },
    alternates: { canonical: url },
  };
}

export default async function ServiceDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = getServicePage(resolvedParams.slug);

  if (!data) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.meta.title,
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eryonai.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.eryonai.com/services" },
      { "@type": "ListItem", "position": 3, "name": data.meta.title, "item": `https://www.eryonai.com/services/${resolvedParams.slug}` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbJsonLd]) }}
      />
      <ServicePageTemplate data={data} />
    </>
  );
}
