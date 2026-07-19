
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/home/TrustedBySection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import MetricsSection from '@/components/home/MetricsSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import ProcessPipelineSection from '@/components/home/ProcessPipelineSection';
import BlogTeaserSection from '@/components/home/BlogTeaserSection';
import FinalCTASection from '@/components/home/FinalCTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERYON AI | Enterprise Custom Software Development & AI Solutions',
  description:
    'ERYON AI is a premium enterprise software development agency specializing in custom Web Development, AI/ML integrations, Mobile Apps, SaaS platforms, and Cloud DevOps. 150+ projects delivered. Based in New Delhi, India — serving clients globally.',
  keywords: [
    'ERYON AI', 'enterprise software development', 'AI solutions company',
    'custom web development India', 'mobile app development agency',
    'cloud devops services', 'machine learning development',
    'digital transformation agency', 'SaaS development company',
    'Next.js development agency', 'React development company India',
  ],
  openGraph: {
    title: 'ERYON AI — Enterprise Custom Software Development & AI Solutions',
    description:
      'Premium IT services: AI/ML, Web, Mobile & Cloud solutions for modern enterprises. 150+ projects, 80+ clients worldwide.',
    url: 'https://www.eryonai.com',
    type: 'website',
    siteName: 'ERYON AI',
    images: [{ url: '/logo-full.jpg', width: 1200, height: 630, alt: 'ERYON AI — Enterprise Software & AI Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERYON AI — Enterprise Software Development & AI Solutions',
    description: 'Building Scalable Digital Systems for Modern Businesses. AI, Web, Mobile & Cloud — engineered for excellence.',
    images: ['/logo-full.jpg'],
  },
  alternates: {
    canonical: 'https://www.eryonai.com',
  },
};

export default function Home() {
  const homepageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ERYON AI',
    url: 'https://www.eryonai.com',
    logo: 'https://www.eryonai.com/logo-full.jpg',
    image: 'https://www.eryonai.com/logo-full.jpg',
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
      'https://www.instagram.com/eryonai.solutions',
      'https://github.com/eryon-ai',
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '80',
      bestRating: '5',
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trusted By — marquee strip */}
      <TrustedBySection />

      {/* 3. Core Capabilities */}
      <CapabilitiesSection />

      {/* 4. Animated Metrics */}
      <MetricsSection />

      {/* 5. Featured Case Studies */}
      <CaseStudiesSection />

      {/* 6. Engineering Process Pipeline */}
      <ProcessPipelineSection />

      {/* 7. Blog Teaser */}
      <BlogTeaserSection />

      {/* 8. Final CTA */}
      <FinalCTASection />
    </main>
  );
}
