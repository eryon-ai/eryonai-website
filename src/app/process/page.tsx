


import ProcessSection from '@/components/ProcessSection';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Engineering Process | ERYON AI',
  description: 'Discover our proven agile engineering process, from discovery and design to deployment and continuous maintenance.',
  openGraph: {
    title: 'Our Engineering Process | ERYON AI',
    description: 'Discover our proven agile engineering process, from discovery and design to deployment and continuous maintenance.',
    url: 'https://www.eryonai.com/process',
    type: 'website',
    siteName: 'ERYON AI',
    images: [{ url: '/logo-full.jpg', width: 1200, height: 630, alt: 'ERYON AI Process' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Engineering Process | ERYON AI',
    description: 'Discover our proven agile engineering process, from discovery and design to deployment and continuous maintenance.',
    images: ['/logo-full.jpg'],
  },
  alternates: {
    canonical: 'https://www.eryonai.com/process',
  },
};

export default function ProcessPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Process', item: 'https://www.eryonai.com/process' },
            ]
          })
        }}
      />
      <div className="pt-20 bg-[#0f172a]">
        <ProcessSection />
      </div>


    </main>
  );
}
