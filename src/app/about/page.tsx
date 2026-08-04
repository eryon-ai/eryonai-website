import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ERYON AI | Enterprise Software Engineering Agency | New Delhi, India',
  description:
    'ERYON AI is an enterprise software engineering agency in New Delhi — AI/ML, cloud-native architecture, full-stack development. 150+ projects, 80+ clients.',
  keywords: [
    'ERYON AI', 'software engineering agency India', 'AI ML development company',
    'cloud native development New Delhi', 'enterprise software company India',
    'full stack development agency', 'cybersecurity company India',
  ],
  openGraph: {
    title: 'About ERYON AI | Enterprise Software Engineering Agency',
    description:
      'Enterprise-grade software engineering partner in New Delhi. 150+ projects, 80+ clients — AI, cloud, and full-stack development.',
    url: 'https://www.eryonai.com/about',
    type: 'website',
    siteName: 'ERYON AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ERYON AI | Enterprise Software Engineering Agency',
    description: 'Enterprise-grade AI, cloud, and full-stack engineering. Based in New Delhi, serving clients worldwide.',
  },
  alternates: {
    canonical: 'https://www.eryonai.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <div className="pt-20 bg-[#0f172a]">
        <AboutSection />
        <WhyUsSection />
        <TestimonialsSection />
      </div>
    </main>
  );
}

