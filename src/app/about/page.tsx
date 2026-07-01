import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ERYON AI | Enterprise Software Engineering Agency | New Delhi, India',
  description:
    'ERYON AI is an enterprise software engineering agency in New Delhi, India, specializing in AI/ML solutions, cloud-native architectures, full-stack development, and cybersecurity. 150+ projects delivered, 80+ enterprise clients, 98% satisfaction rate.',
  keywords: [
    'ERYON AI', 'software engineering agency India', 'AI ML development company',
    'cloud native development New Delhi', 'enterprise software company India',
    'full stack development agency', 'cybersecurity company India',
  ],
  openGraph: {
    title: 'About ERYON AI | Enterprise Software Engineering Agency',
    description:
      'ERYON AI is an enterprise-grade software engineering partner in New Delhi, India. 150+ projects, 80+ clients, specializing in AI, cloud, and full-stack development.',
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
      <div className="pt-20">
        <AboutSection />
        <WhyUsSection />
        <TestimonialsSection />
      </div>
    </main>
  );
}

