import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogBySlug, getRelatedBlogs } from '@/lib/blog-data';
import BlogDetailClient from './BlogDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const url = `https://www.eryonai.com/blogs/${post.slug}`;

  return {
    title: `${post.title} | ERYON AI Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
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
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogs(post, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ERYON AI',
      logo: { '@type': 'ImageObject', url: 'https://www.eryonai.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.eryonai.com/blogs/${post.slug}` },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    timeRequired: `PT${post.readTime}M`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailClient post={post} related={related} />
    </>
  );
}
