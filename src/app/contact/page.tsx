import ContactSection from '@/components/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Consultation | ERYON AI',
  description:
    'Get in touch with ERYON AI for custom software development, AI/ML solutions, web applications, and mobile app development. Free consultation with response within 24 hours. Based in New Delhi, serving clients globally.',
  keywords: [
    'contact ERYON AI', 'hire software developers India', 'custom software development quote',
    'AI development agency contact', 'web development consultation', 'free project consultation',
  ],
  openGraph: {
    title: 'Contact ERYON AI | Free Project Consultation',
    description:
      'Start your next project with ERYON AI. Get a free consultation and tailored proposal within 24 hours.',
    url: 'https://www.eryonai.com/contact',
    type: 'website',
    siteName: 'ERYON AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ERYON AI | Free Project Consultation',
    description: 'Start your next project with ERYON AI. Response within 24 hours.',
  },
  alternates: {
    canonical: 'https://www.eryonai.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <div className="pt-20">
        <ContactSection />
      </div>
    </main>
  );
}
