import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Services & Solutions | ERYON AI',
  description: 'Explore our comprehensive list of 12 solution categories and 140+ service offerings, from Web and Mobile Apps to AI Solutions and Cloud DevOps.',
  openGraph: {
    title: 'All Services & Solutions | ERYON AI',
    description: 'Explore our comprehensive list of 12 solution categories and 140+ service offerings.',
    type: 'website',
    url: 'https://www.eryonai.com/services',
    siteName: 'ERYON AI',
    images: [{ url: '/logo-full.jpg', width: 1200, height: 630, alt: 'ERYON AI Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Services & Solutions | ERYON AI',
    description: 'Explore our comprehensive list of 12 solution categories and 140+ service offerings.',
    images: ['/logo-full.jpg'],
  },
  alternates: {
    canonical: 'https://www.eryonai.com/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
