import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: "standalone", // for the Docker image; Vercel ignores it
  turbopack: { root: process.cwd() },
  experimental: { globalNotFound: true }, // two root layouts: app/(en) and app/[lang]
  images: {
    formats: ["image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    // Keep old URLs from the previous site working.
    return [
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/blogs", destination: "/insights", permanent: true },
      { source: "/blogs/building-scalable-saas-platforms", destination: "/insights/building-scalable-saas-platforms", permanent: true },
      { source: "/blogs/modern-cloud-architecture-2026", destination: "/insights/modern-cloud-architecture-2026", permanent: true },
      { source: "/blogs/microservices-vs-monolith", destination: "/insights/microservices-vs-monolith", permanent: true },
      { source: "/blogs/devops-best-practices-2026", destination: "/insights/devops-best-practices-2026", permanent: true },
      { source: "/blogs/building-production-grade-apis", destination: "/insights/building-production-grade-apis", permanent: true },
      { source: "/blogs/cybersecurity-in-2026", destination: "/insights/cybersecurity-in-2026", permanent: true },
      { source: "/blogs/edge-computing-revolution", destination: "/insights/edge-computing-revolution", permanent: true },
      { source: "/blogs/:slug", destination: "/insights", permanent: true },
      { source: "/services/custom-saas", destination: "/services/saas-development", permanent: true },
      { source: "/services/crm-erp-solutions", destination: "/services/crm-erp-development", permanent: true },
      { source: "/services/ecommerce-solutions", destination: "/services/ecommerce-development", permanent: true },
      { source: "/services/devops-cloud", destination: "/services/cloud-devops", permanent: true },
      { source: "/services/real-estate-software", destination: "/industries/real-estate", permanent: true },
      { source: "/services/gym-management-software", destination: "/industries/fitness", permanent: true },
      { source: "/services/ai-solutions", destination: "/services/business-automation", permanent: true },
      // Translated sites: old section names → new ones; English-only sections → their English page.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/portfolio", destination: "/:lang/work", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/tech-stack", destination: "/:lang/technology", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs", destination: "/:lang/insights", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs/building-scalable-saas-platforms", destination: "/:lang/insights/building-scalable-saas-platforms", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs/modern-cloud-architecture-2026", destination: "/:lang/insights/modern-cloud-architecture-2026", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs/microservices-vs-monolith", destination: "/:lang/insights/microservices-vs-monolith", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs/devops-best-practices-2026", destination: "/:lang/insights/devops-best-practices-2026", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs/building-production-grade-apis", destination: "/:lang/insights/building-production-grade-apis", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs/cybersecurity-in-2026", destination: "/:lang/insights/cybersecurity-in-2026", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs/edge-computing-revolution", destination: "/:lang/insights/edge-computing-revolution", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/blogs/:slug", destination: "/:lang/insights", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/:section(services|industries|work|case-study|careers)/:rest+", destination: "/:section/:rest+", permanent: true },
      { source: "/:lang(ja|de|fr|es|ar)/:page(industries|careers|search|site-map|accessibility|thank-you)", destination: "/:page", permanent: true },
      { source: "/case-study/atelier-clothing", destination: "/work/atelier-commerce", permanent: true },
      { source: "/case-study/gym-dashboard", destination: "/work/fitness-operations", permanent: true },
      { source: "/case-study/velorian-watches", destination: "/work/velorian", permanent: true },
      { source: "/case-study/infra-erp", destination: "/work/construction-erp", permanent: true },
      { source: "/case-study/marblemart-crm", destination: "/work/marblemart-crm", permanent: true },
      { source: "/case-study/hospital-hrms", destination: "/work/hospital-hrms", permanent: true },
      { source: "/case-study/edunexus-erp", destination: "/work/edunexus-erp", permanent: true },
      { source: "/case-study/realist-crm", destination: "/work/realist-crm", permanent: true },
      { source: "/case-study/craverush", destination: "/work/craverush", permanent: true },
      { source: "/case-study/marblemart-web", destination: "/work/marblemart-web", permanent: true },
      { source: "/case-study/hirestream", destination: "/work/hirestream", permanent: true },
      { source: "/case-study/atelier-mobile", destination: "/work/atelier-mobile", permanent: true },
      { source: "/case-study/origin", destination: "/work/origin", permanent: true },
      { source: "/case-study/kyprox", destination: "/work/kyprox", permanent: true },
      { source: "/case-study/auraplanters", destination: "/work/auraplanters", permanent: true },
      { source: "/case-study/:slug", destination: "/work", permanent: true },
      { source: "/tech-stack", destination: "/technology", permanent: true },
    ];
  },
};

export default nextConfig;
