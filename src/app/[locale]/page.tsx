import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/home/TrustedBySection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import MetricsSection from '@/components/home/MetricsSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import ProcessPipelineSection from '@/components/home/ProcessPipelineSection';
import BlogTeaserSection from '@/components/home/BlogTeaserSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { buildAlternates } from '@/lib/layout-translations';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      'ERYON AI', 'enterprise software development', 'AI solutions company',
      'custom web development India', 'mobile app development agency',
      'cloud devops services', 'machine learning development',
      'digital transformation agency', 'SaaS development company',
      'Next.js development agency', 'React development company India',
      'AI-native software development', 'agentic AI development company',
      'digital transformation services India', 'cloud-native modernization',
      'multi-cloud architecture consulting', 'cybersecurity services India',
      'business workflow automation', 'data analytics and AI solutions',
      'enterprise software development company New Delhi',
      'healthcare software development', 'real estate CRM development',
    ],
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: buildAlternates('/', locale).canonical,
      type: 'website',
      siteName: 'ERYON AI',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ERYON AI — Enterprise Software & AI Solutions' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/og-image.jpg'],
    },
    alternates: buildAlternates('/', locale),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const homepageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ERYON AI',
    url: `https://www.eryonai.com${locale === 'en' ? '' : `/${locale}`}`,
    logo: 'https://www.eryonai.com/og-image.jpg',
    image: 'https://www.eryonai.com/og-image.jpg',
    description:
      'ERYON AI is a premium enterprise software development agency specializing in custom Web Development, AI/ML integrations, Mobile Apps, SaaS platforms, and Cloud DevOps.',
    telephone: '+91-78278-86571',
    email: 'connect@eryonai.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6139,
      longitude: 77.2090,
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Canada' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Application Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Machine Learning Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development (iOS & Android)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud DevOps & Infrastructure' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom SaaS Platform Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Solutions' } },
      ],
    },
    sameAs: [
      'https://www.linkedin.com/company/113904195',
      'https://www.instagram.com/eryonaisoftwaresolutions?utm_source=qr',
      'https://github.com/eryon-ai',
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      xpath: [
        '/html/head/title',
        '/html/head/meta[@name=\'description\']/@content'
      ]
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: dict.faq.items.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <main lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([homepageJsonLd, faqJsonLd]) }}
      />
      {/* 1. Hero */}
      <HeroSection dict={dict.hero} />

      {/* 2. Trusted By — marquee strip */}
      <TrustedBySection dict={dict.trusted} />

      {/* 3. Core Capabilities */}
      <CapabilitiesSection dict={dict.capabilities} />

      {/* 4. Animated Metrics */}
      <MetricsSection dict={dict.metrics} />

      {/* 5. Featured Case Studies */}
      <CaseStudiesSection dict={dict.caseStudiesHome} />

      {/* 5b. Industries */}
      <IndustriesSection dict={dict.industries} locale={locale} />

      {/* 6. Engineering Process Pipeline */}
      <ProcessPipelineSection dict={dict.processPipeline} />

      {/* 7. Blog Teaser */}
      <BlogTeaserSection dict={dict.blogTeaser} />

      {/* 8. FAQ */}
      <FAQSection dict={dict.faq} />

      {/* 9. Final CTA */}
      <FinalCTASection dict={dict.cta} />
    </main>
  );
}
