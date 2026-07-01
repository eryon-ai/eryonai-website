import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog | Insights, Technology & Innovation — ERYON AI',
    description:
      'Latest articles on AI, Software Engineering, Product Development, Startups, Automation, Cloud Infrastructure and Emerging Technologies.',
    openGraph: {
      title: 'Insights, Technology & Innovation — ERYON AI Blog',
      description: 'Latest articles on AI, Software Engineering, and Emerging Technologies.',
      type: 'website',
      url: 'https://eryonai.com/blogs',
      images: [{ url: blogPosts[0].coverImage, width: 1200, height: 630, alt: 'ERYON AI Blog' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Insights, Technology & Innovation — ERYON AI Blog',
      description: 'Latest articles on AI, Software Engineering, and Emerging Technologies.',
      images: [blogPosts[0].coverImage],
    },
    alternates: { canonical: 'https://eryonai.com/blogs' },
  };
}

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
