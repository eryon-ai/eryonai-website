import PortfolioSection from '@/components/PortfolioSection';
import { Metadata } from 'next';
import { getDictionary, Locale } from '@/lib/dictionary';
import { buildAlternates, getLocalizedPath } from '@/lib/layout-translations';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.pageMeta.portfolio;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: buildAlternates('/portfolio', locale).canonical,
      type: 'website',
      siteName: 'ERYON AI',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ERYON AI Portfolio' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.jpg'],
    },
    alternates: buildAlternates('/portfolio', locale),
  };
}

const CASE_STUDY_SLUGS = [
  'gym-dashboard', 'hospital-hrms', 'velorian-watches',
  'marblemart-crm', 'marblemart-web', 'edunexus-erp',
  'atelier-clothing', 'realist-crm', 'infra-erp',
  'craverush', 'origin', 'hirestream', 'kyprox', 'auraplanters', 'echosync',
];

export default async function PortfolioPage({ params }: Props) {
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
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.eryonai.com' },
                { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.eryonai.com/portfolio' },
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: CASE_STUDY_SLUGS.map((slug, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `https://www.eryonai.com${getLocalizedPath(`/case-study/${slug}`, locale)}`,
              })),
            },
          ])
        }}
      />
      <div className="pt-20 bg-[#0f172a]">
        <PortfolioSection dict={dict.portfolio} />
      </div>
    </main>
  );
}
