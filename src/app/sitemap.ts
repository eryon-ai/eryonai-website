import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/service-page-data';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eryonai.com';

  const staticRoutes = [
    '',
    '/services',
    '/about',
    '/portfolio',
    '/process',
    '/tech-stack',
    '/contact',
    '/blogs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceSlugs = getAllServiceSlugs();
  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseStudySlugs = [
    'gym-dashboard', 'hospital-hrms', 'velorian-watches',
    'marblemart-crm', 'marblemart-web', 'edunexus-erp',
    'atelier-clothing', 'realist-crm',
    'craverush', 'origin', 'hirestream', 'kyprox', 'auraplanters', 'echosync',
  ];
  const caseStudyRoutes = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-study/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseStudyRoutes];
}
