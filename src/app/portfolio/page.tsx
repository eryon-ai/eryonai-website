


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
  },
  alternates: {
    canonical: 'https://www.eryonai.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <main>

      <div className="pt-20 bg-[#0f172a]">
        <PortfolioSection />
      </div>


    </main>
  );
}
