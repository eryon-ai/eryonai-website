// Company facts. Stats and credentials below were confirmed by Eryon (2026-09-23). Add nothing unconfirmed.
export const site = {
  name: "Eryon",
  legalName: "ERYON AI Software Solutions",
  founded: 2019,
  postal: "New Delhi, Delhi 110001",
  udyamNumber: "", // TODO: add MSME Udyam registration number to display it
  url: "https://www.eryonai.com",
  tagline: "Custom Software. Digital Products. Built to Scale.",
  statement: "Software built for the way your business works.",
  description:
    "Eryon is a software engineering and digital product company in New Delhi, India. We design and build custom software, enterprise web applications, mobile apps, SaaS platforms, CRM and ERP systems.",
  email: "connect@eryonai.com",
  phone: "+91 78278 86571",
  phoneHref: "tel:+917827886571",
  city: "New Delhi",
  country: "India",
  responseTime: "within 24 hours",
  countries: ["India", "USA", "UK", "UAE", "Australia", "Canada"],
  googleAdsId: "AW-18087795180",
  googleAdsConversion: "AW-18087795180/WReRCJ-PuZscEOyz97BD",
  social: {
    linkedin: "https://www.linkedin.com/company/113904195",
    github: "https://github.com/eryon-ai",
    instagram: "https://www.instagram.com/eryonaisoftwaresolutions",
  },
} as const;

export const stats = [
  { value: 150, suffix: "+", label: "Projects delivered" },
  { value: 80, suffix: "+", label: "Clients across 6 countries" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 50, suffix: "+", label: "Engineers and designers" },
  { value: new Date().getFullYear() - 2019, suffix: "+", label: "Years in business, since 2019" },
] as const;

export const credentials = [
  { title: "MSME Registered", text: "Registered with the Government of India." },
  { title: "SOC 2 Type II", text: "Controls assessed against the Trust Services Criteria." },
  { title: "AWS Partner", text: "Member of the AWS Partner Network." },
  { title: "GDPR Ready", text: "Data handling designed for EU and UK privacy law." },
  { title: "Agile Certified", text: "Delivery practices certified in agile methods." },
] as const;

export const primaryNav = [
  { label: "What We Do", href: "/services", menu: "services" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Our Work", href: "/work" },
  { label: "How We Work", href: "/process" },
  { label: "Insights", href: "/insights", menu: "insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
] as const;

export const insightCategories = [
  { slug: "engineering", label: "Engineering" },
  { slug: "product", label: "Product" },
  { slug: "architecture", label: "Architecture" },
  { slug: "cloud", label: "Cloud & Infrastructure" },
  { slug: "security", label: "Security" },
  { slug: "business-technology", label: "Business Technology" },
  { slug: "industry", label: "Industry" },
  { slug: "guides", label: "Guides" },
  { slug: "company", label: "Company News" },
] as const;

export type InsightCategory = (typeof insightCategories)[number]["slug"];

// Shared delivery process — used on home, service pages and /process.
export const processSteps = [
  { n: "01", title: "Discover", text: "Workshops with the people who run the process today. We map how work actually moves, where it stalls and what the system must never get wrong." },
  { n: "02", title: "Define", text: "A written scope: users and roles, core workflows, integrations, non-functional requirements and a release plan you can hold us to." },
  { n: "03", title: "Architect", text: "Data model, service boundaries, hosting, security model and the trade-offs behind each choice — reviewed with your team before code starts." },
  { n: "04", title: "Build", text: "Short sprints with a working demo every week. Code review on every change, automated tests on the paths that carry money or data." },
  { n: "05", title: "Validate", text: "Functional QA, role-by-role acceptance, performance checks and a security pass before anything reaches production users." },
  { n: "06", title: "Scale", text: "Staged rollout, monitoring and a support window. Then the backlog of improvements that only real usage reveals." },
] as const;
