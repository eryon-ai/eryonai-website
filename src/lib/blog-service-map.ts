// Maps each blog post to the one service page it's most relevant to, so
// article pages can carry a real contextual link into the service funnel
// instead of leaving posts as topical dead ends. Slugs/labels match the
// `categories` array in `[locale]/services/ServicesClient.tsx` exactly.
export const blogServiceMap: Record<string, { slug: string; label: string }> = {
  'future-of-artificial-intelligence-2026': { slug: 'ai-solutions', label: 'AI & Automation Solutions' },
  'rise-of-agentic-ai-systems': { slug: 'ai-solutions', label: 'AI & Automation Solutions' },
  'building-scalable-saas-platforms': { slug: 'custom-saas', label: 'Custom SaaS Applications' },
  'modern-cloud-architecture-2026': { slug: 'devops-cloud', label: 'DevOps & Cloud Engineering' },
  'microservices-vs-monolith': { slug: 'custom-saas', label: 'Custom SaaS Applications' },
  'future-of-software-development': { slug: 'web-applications', label: 'Web Applications' },
  'ai-powered-startups-2026': { slug: 'ai-solutions', label: 'AI & Automation Solutions' },
  'generative-ai-in-business': { slug: 'ai-solutions', label: 'AI & Automation Solutions' },
  'devops-best-practices-2026': { slug: 'devops-cloud', label: 'DevOps & Cloud Engineering' },
  'building-production-grade-apis': { slug: 'web-applications', label: 'Web Applications' },
  'cybersecurity-in-2026': { slug: 'devops-cloud', label: 'DevOps & Cloud Engineering' },
  'edge-computing-revolution': { slug: 'devops-cloud', label: 'DevOps & Cloud Engineering' },
  'multi-agent-ai-systems': { slug: 'ai-solutions', label: 'AI & Automation Solutions' },
  'future-of-fintech-ai': { slug: 'ai-solutions', label: 'AI & Automation Solutions' },
  'intelligent-automation-rpa-ai': { slug: 'business-automation', label: 'Business Automation' },
};

export function getRelatedService(slug: string) {
  return blogServiceMap[slug];
}
