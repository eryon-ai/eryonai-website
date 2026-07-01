import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // Generative AI crawlers — explicitly allowed for GEO (Generative Engine Optimization)
        userAgent: [
          'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
          'Anthropic-ai', 'Claude-Web', 'ClaudeBot',
          'PerplexityBot',
          'Google-Extended', 'GoogleOther',
          'Applebot-Extended',
          'Meta-ExternalAgent', 'Meta-ExternalFetcher',
          'Bytespider',
          'cohere-ai',
          'YouBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.eryonai.com/sitemap.xml',
  };
}
