


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
  },
  alternates: {
    canonical: 'https://www.eryonai.com/process',
  },
};

export default function ProcessPage() {
  return (
    <main>

      <div className="pt-20">
        <ProcessSection />
      </div>


    </main>
  );
}
