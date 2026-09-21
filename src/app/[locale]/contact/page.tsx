import ContactSection from '@/components/ContactSection';
import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { buildAlternates } from '@/lib/layout-translations';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.pageMeta.contact;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      'contact ERYON AI', 'hire software developers India', 'custom software development quote',
      'AI development agency contact', 'web development consultation', 'free project consultation',
    ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: buildAlternates('/contact', locale).canonical,
      type: 'website',
      siteName: 'ERYON AI',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact ERYON AI' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.jpg'],
    },
    alternates: buildAlternates('/contact', locale),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Contact ERYON AI',
              speakable: {
                '@type': 'SpeakableSpecification',
                xpath: [
                  '/html/head/title',
                  '/html/head/meta[@name=\'description\']/@content'
                ]
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.eryonai.com' },
                { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://www.eryonai.com/contact' },
              ]
            }
          ])
        }}
      />
      <div className="pt-20 bg-[#0f172a]">
        <ContactSection dict={dict.contact} />
      </div>
    </main>
  );
}
