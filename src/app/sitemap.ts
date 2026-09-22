import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/service-page-data';
import { blogPosts } from '@/lib/blog-data';
import { CASE_STUDY_SLUGS } from '@/lib/case-study-slugs';
import { getLocalizedPath, SupportedLocale } from '@/lib/layout-translations';

const LOCALES: SupportedLocale[] = ['en', 'ja', 'de', 'fr', 'es', 'ar'];
const BASE_URL = 'https://www.eryonai.com';

// lastModified is only set where a real date exists (blog posts). Google ignores
// priority/changefreq, and a fake "modified today" date teaches it to ignore lastmod.
const everyLocale = (path: string, lastModified?: Date): MetadataRoute.Sitemap =>
  LOCALES.map((locale) => ({
    url: `${BASE_URL}${getLocalizedPath(path, locale)}`,
    ...(lastModified ? { lastModified } : {}),
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['/', '/services', '/about', '/portfolio', '/process', '/tech-stack', '/contact', '/blogs'];

  return [
    ...staticPaths.flatMap((path) => everyLocale(path)),
    ...getAllServiceSlugs().flatMap((slug) => everyLocale(`/services/${slug}`)),
    ...blogPosts.flatMap((post) => everyLocale(`/blogs/${post.slug}`, new Date(post.date))),
    ...CASE_STUDY_SLUGS.flatMap((slug) => everyLocale(`/case-study/${slug}`)),
  ];
}
