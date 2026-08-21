


import TechStackSection from '@/components/TechStackSection';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Technology Stack | ERYON AI',
  description: 'Explore the modern, scalable technologies we use to build robust enterprise applications, including React, Next.js, Node.js, and Cloud native tools.',
  openGraph: {
    title: 'Our Technology Stack | ERYON AI',
    description: 'Explore the modern, scalable technologies we use to build robust enterprise applications.',
    url: 'https://www.eryonai.com/tech-stack',
    type: 'website',
    siteName: 'ERYON AI',
    images: [{ url: '/logo-full.jpg', width: 1200, height: 630, alt: 'ERYON AI Tech Stack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Technology Stack | ERYON AI',
    description: 'Explore the modern, scalable technologies we use to build robust enterprise applications.',
    images: ['/logo-full.jpg'],
  },
  alternates: {
    canonical: 'https://www.eryonai.com/tech-stack',
  },
};

export default function TechStackPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Tech Stack', item: 'https://www.eryonai.com/tech-stack' },
            ]
          })
        }}
      />
      <div className="pt-20 bg-[#0f172a]">
        <TechStackSection />
      </div>


    </main>
  );
}
