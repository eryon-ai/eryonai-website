


import PortfolioSection from '@/components/PortfolioSection';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Portfolio & Case Studies | ERYON AI',
  description: 'View our recent enterprise projects, web applications, and AI integrations. See how ERYON AI drives results for clients globally.',
  openGraph: {
    title: 'Project Portfolio & Case Studies | ERYON AI',
    description: 'View our recent enterprise projects, web applications, and AI integrations.',
    url: 'https://www.eryonai.com/portfolio',
    type: 'website',
    siteName: 'ERYON AI',
    images: [{ url: '/logo-full.jpg', width: 1200, height: 630, alt: 'ERYON AI Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Portfolio & Case Studies | ERYON AI',
    description: 'View our recent enterprise projects, web applications, and AI integrations.',
    images: ['/logo-full.jpg'],
  },
  alternates: {
    canonical: 'https://www.eryonai.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.eryonai.com' },
              { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.eryonai.com/portfolio' },
            ]
          })
        }}
      />
      <div className="pt-20 bg-[#0f172a]">
        <PortfolioSection />
      </div>


    </main>
  );
}
