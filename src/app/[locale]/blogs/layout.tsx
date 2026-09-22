import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { getDictionary, Locale } from '@/lib/dictionary';
import { buildAlternates } from '@/lib/layout-translations';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const meta = dict.pageMeta.blog;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: buildAlternates('/blogs', locale).canonical,
      images: [{ url: blogPosts[0].coverImage, width: 1200, height: 630, alt: 'ERYON AI Blog' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [blogPosts[0].coverImage],
    },
    alternates: buildAlternates('/blogs', locale),
  };
}

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
