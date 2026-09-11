import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { buildAlternates } from '@/lib/layout-translations';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.pageMeta.about;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      'ERYON AI', 'software engineering agency India', 'AI ML development company',
      'cloud native development New Delhi', 'enterprise software company India',
      'full stack development agency', 'cybersecurity company India',
    ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: buildAlternates('/about', locale).canonical,
      type: 'website',
      siteName: 'ERYON AI',
      images: [{ url: '/logo-full.jpg', width: 1200, height: 630, alt: 'About ERYON AI' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/logo-full.jpg'],
    },
    alternates: buildAlternates('/about', locale),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.eryonai.com' },
              { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.eryonai.com/about' },
            ]
          })
        }}
      />
      <div className="pt-20 bg-[#0f172a]">
        <AboutSection dict={dict.about} />
        <WhyUsSection dict={dict.whyUs} />
        <TestimonialsSection dict={dict.testimonials} />
      </div>
    </main>
  );
}
