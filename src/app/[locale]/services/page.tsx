import { getDictionary, Locale } from '@/lib/dictionary';
import ServicesClient from './ServicesClient';
import { Metadata } from 'next';
import { buildAlternates, getLocalizedPath } from '@/lib/layout-translations';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.pageMeta.services;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      'Software Services', 'Web Development', 'Mobile App Development', 'Custom SaaS',
      'AI Solutions', 'Cloud Engineering', 'Enterprise Software', 'UI/UX Design',
      'agentic AI development', 'digital transformation services', 'business workflow automation',
      'cloud-native modernization', 'cybersecurity services', 'data analytics and AI solutions',
    ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: buildAlternates('/services', locale).canonical,
      type: 'website',
      siteName: 'ERYON AI',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Services by ERYON AI' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.jpg'],
    },
    alternates: buildAlternates('/services', locale),
  };
}

const SERVICE_IDS = [
  'web-applications', 'mobile-applications', 'custom-saas', 'crm-erp-solutions',
  'real-estate-software', 'gym-management-software', 'ecommerce-solutions',
  'business-automation', 'ai-solutions', 'data-analytics', 'devops-cloud', 'ui-ux-design',
];

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SERVICE_IDS.map((id, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.eryonai.com${getLocalizedPath(`/services/${id}`, locale)}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServicesClient dict={dict.services} locale={locale} />
    </>
  );
}
