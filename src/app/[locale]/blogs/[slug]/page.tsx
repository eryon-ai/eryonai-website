import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogBySlug, getRelatedBlogs } from '@/lib/blog-data';
import { getLocalizedPost, getLocalizedPosts } from '@/lib/blog-translations';
import BlogDetailClient from './BlogDetailClient';
import { buildAlternates } from '@/lib/layout-translations';
import type { Locale } from '@/lib/dictionary';

interface Props {
  params: Promise<{ slug: string; locale: Locale }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const rawPost = getBlogBySlug(slug);
  if (!rawPost) return { title: 'Post Not Found' };
  const post = getLocalizedPost(rawPost, locale);

  return {
    title: `${post.title} | ERYON AI Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: buildAlternates(`/blogs/${post.slug}`, locale).canonical,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
    alternates: buildAlternates(`/blogs/${post.slug}`, locale),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const rawPost = getBlogBySlug(slug);
  if (!rawPost) notFound();
  const post = getLocalizedPost(rawPost, locale);

  const related = getLocalizedPosts(getRelatedBlogs(rawPost, 3), locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: new Date().toISOString(),
    inLanguage: locale,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ERYON AI',
      logo: { '@type': 'ImageObject', url: 'https://www.eryonai.com/og-image.jpg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.eryonai.com/blogs/${post.slug}` },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    timeRequired: `PT${post.readTime}M`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.eryonai.com' },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://www.eryonai.com/blogs' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.eryonai.com/blogs/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbJsonLd]) }}
      />
      <BlogDetailClient post={post} related={related} />
    </>
  );
}
