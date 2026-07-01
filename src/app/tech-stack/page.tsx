


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
  },
  alternates: {
    canonical: 'https://www.eryonai.com/tech-stack',
  },
};

export default function TechStackPage() {
  return (
    <main>

      <div className="pt-20">
        <TechStackSection />
      </div>


    </main>
  );
}
