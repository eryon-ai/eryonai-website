import TechStackSection from '@/components/TechStackSection';
import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { buildAlternates } from '@/lib/layout-translations';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.pageMeta.techStack;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: buildAlternates('/tech-stack', locale).canonical,
      type: 'website',
      siteName: 'ERYON AI',
      images: [{ url: '/logo-full.jpg', width: 1200, height: 630, alt: 'ERYON AI Tech Stack' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/logo-full.jpg'],
    },
    alternates: buildAlternates('/tech-stack', locale),
  };
}

export default async function TechStackPage({ params }: Props) {
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
              { '@type': 'ListItem', position: 2, name: 'Tech Stack', item: 'https://www.eryonai.com/tech-stack' },
            ]
          })
        }}
      />
      <div className="pt-20 bg-[#0f172a]">
        <TechStackSection dict={dict.techStack} />
      </div>
    </main>
  );
}
