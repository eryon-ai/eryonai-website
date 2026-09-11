import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/service-page-data';
import { blogPosts } from '@/lib/blog-data';
import { getLocalizedPath, SupportedLocale } from '@/lib/layout-translations';

const LOCALES: SupportedLocale[] = ['en', 'ja', 'de', 'fr', 'es', 'ar'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eryonai.com';

  // Every localized variant of each translated static route.
  const localizedPaths = [
    '/',
    '/services',
    '/about',
    '/portfolio',
    '/process',
    '/tech-stack',
    '/contact',
    '/blogs',
  ];
  const staticRoutes = localizedPaths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${baseUrl}${getLocalizedPath(path, locale)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '/' ? 1 : 0.8,
    }))
  );

  const serviceSlugs = getAllServiceSlugs();
  const serviceRoutes = serviceSlugs.flatMap((slug) =>
    LOCALES.map((locale) => ({
      url: `${baseUrl}${getLocalizedPath(`/services/${slug}`, locale)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  );

  const blogRoutes = blogPosts.flatMap((post) =>
    LOCALES.map((locale) => ({
      url: `${baseUrl}${getLocalizedPath(`/blogs/${post.slug}`, locale)}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  const caseStudySlugs = [
    'gym-dashboard', 'hospital-hrms', 'velorian-watches',
    'marblemart-crm', 'marblemart-web', 'edunexus-erp',
    'atelier-clothing', 'realist-crm', 'infra-erp',
    'craverush', 'origin', 'hirestream', 'kyprox', 'auraplanters', 'echosync',
  ];
  const caseStudyRoutes = caseStudySlugs.flatMap((slug) =>
    LOCALES.map((locale) => ({
      url: `${baseUrl}${getLocalizedPath(`/case-study/${slug}`, locale)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseStudyRoutes];
}
