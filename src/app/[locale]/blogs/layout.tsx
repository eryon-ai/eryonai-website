import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { getDictionary, Locale } from '@/lib/dictionary';
import { buildAlternates, getLocalizedPath } from '@/lib/layout-translations';
import { getLocalizedPosts } from '@/lib/blog-translations';

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

export default async function BlogsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const localizedPosts = getLocalizedPosts(blogPosts, locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ERYON AI Blog',
    url: buildAlternates('/blogs', locale).canonical,
    blogPost: localizedPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://www.eryonai.com${getLocalizedPath(`/blogs/${post.slug}`, locale)}`,
      datePublished: post.date,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
