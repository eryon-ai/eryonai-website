// Technologies Eryon has used. `projects` lists case studies that prove it; items without
// projects come from the team's stated stack on the current site. Don't add anything unverified.
export type Tech = { name: string; role: string; projects?: string[]; home?: boolean };
export type TechGroup = { key: string; title: string; text: string; items: Tech[] };

export const techGroups: TechGroup[] = [
  {
    key: "frontend", title: "Frontend", text: "Server-rendered, accessible interfaces with typed components.",
    items: [
      { name: "React", role: "UI library", projects: ["realist-crm", "craverush", "hirestream", "edunexus-erp"], home: true },
      { name: "Next.js", role: "Web framework", projects: ["marblemart-crm", "hospital-hrms", "construction-erp", "velorian", "atelier-commerce"], home: true },
      { name: "TypeScript", role: "Language", projects: ["marblemart-crm", "atelier-mobile"], home: true },
      { name: "Tailwind CSS", role: "Styling", projects: ["fitness-operations", "marblemart-web"] },
      { name: "Vue.js", role: "UI framework" },
      { name: "Angular", role: "UI framework" },
      { name: "Redux Toolkit", role: "State management", projects: ["auraplanters"] },
      { name: "Material UI", role: "Component library", projects: ["auraplanters"] },
    ],
  },
  {
    key: "creative", title: "Creative & Motion", text: "3D, motion and interaction for brand-led websites that still load fast.",
    items: [
      { name: "Three.js", role: "3D & WebGL", projects: ["origin", "kyprox"] },
      { name: "GSAP", role: "Scroll & motion", projects: ["origin", "kyprox"] },
      { name: "Framer Motion", role: "UI transitions", projects: ["origin", "kyprox"] },
      { name: "Lenis", role: "Smooth scrolling", projects: ["origin"] },
    ],
  },
  {
    key: "backend", title: "Backend", text: "APIs and services chosen for the workload and your team.",
    items: [
      { name: "Java", role: "Language", projects: ["craverush", "hirestream"], home: true },
      { name: "Spring Boot", role: "Service framework", projects: ["hospital-hrms", "craverush", "hirestream", "edunexus-erp", "atelier-commerce"], home: true },
      { name: "Node.js", role: "Runtime", projects: ["velorian"], home: true },
      { name: "Python", role: "Language", projects: ["realist-crm", "construction-erp"], home: true },
      { name: "FastAPI", role: "API framework", projects: ["realist-crm", "construction-erp"] },
      { name: "Express", role: "API framework", projects: ["auraplanters"] },
      { name: "Go", role: "Language" },
      { name: "GraphQL", role: "API layer" },
    ],
  },
  {
    key: "mobile", title: "Mobile", text: "Cross-platform first, native where a feature needs it.",
    items: [
      { name: "React Native", role: "Cross-platform", projects: ["atelier-mobile", "edunexus-erp"] },
      { name: "Expo", role: "Tooling & builds", projects: ["atelier-mobile"] },
      { name: "Flutter", role: "Cross-platform" },
      { name: "Swift", role: "iOS native" },
      { name: "Kotlin", role: "Android native" },
    ],
  },
  {
    key: "databases", title: "Databases", text: "Relational by default; documents and caches where they fit.",
    items: [
      { name: "PostgreSQL", role: "Relational", projects: ["marblemart-crm", "hospital-hrms", "craverush", "realist-crm", "construction-erp"], home: true },
      { name: "MySQL", role: "Relational", projects: ["hirestream"] },
      { name: "MongoDB", role: "Document", projects: ["hospital-hrms", "craverush", "atelier-commerce", "auraplanters"], home: true },
      { name: "Redis", role: "Cache & queues", projects: ["hospital-hrms", "velorian", "construction-erp"], home: true },
      { name: "Supabase", role: "Managed Postgres", projects: ["marblemart-crm", "fitness-operations"] },
      { name: "Valkey", role: "Cache", projects: ["atelier-commerce"] },
    ],
  },
  {
    key: "cloud", title: "Cloud", text: "Provisioned in your accounts, on the provider that suits you.",
    items: [
      { name: "AWS", role: "Cloud provider", home: true },
      { name: "Microsoft Azure", role: "Cloud provider" },
      { name: "Google Cloud", role: "Cloud provider" },
      { name: "Vercel", role: "Front-end hosting", projects: ["marblemart-web"] },
    ],
  },
  {
    key: "devops", title: "DevOps", text: "Repeatable builds, reviewed infrastructure, routine releases.",
    items: [
      { name: "Docker", role: "Containers", projects: ["hospital-hrms", "craverush", "construction-erp", "atelier-commerce"], home: true },
      { name: "Kubernetes", role: "Orchestration" },
      { name: "GitHub Actions", role: "CI/CD" },
      { name: "Terraform", role: "Infrastructure as code" },
      { name: "Jenkins", role: "CI/CD" },
    ],
  },
  {
    key: "infrastructure", title: "Messaging & Infrastructure", text: "The pieces that let services scale and fail independently.",
    items: [
      { name: "Apache Kafka", role: "Event streaming", projects: ["craverush"] },
      { name: "RabbitMQ", role: "Message broker", projects: ["atelier-commerce"] },
      { name: "WebSockets", role: "Real-time", projects: ["atelier-commerce"] },
      { name: "MinIO", role: "Object storage", projects: ["construction-erp"] },
      { name: "Zipkin", role: "Distributed tracing", projects: ["craverush"] },
    ],
  },
  {
    key: "security", title: "Security", text: "Identity, access and data protection designed into the system.",
    items: [
      { name: "Spring Security", role: "AuthN / AuthZ", projects: ["hirestream"] },
      { name: "JWT & OAuth 2.0", role: "Tokens & identity", projects: ["hospital-hrms", "hirestream"] },
      { name: "Row-level security", role: "Postgres policies", projects: ["marblemart-crm"] },
      { name: "OWASP guidelines", role: "Review baseline" },
    ],
  },
  {
    key: "analytics", title: "Data & Integrations", text: "Payments, messaging, maps and reporting connected to your systems.",
    items: [
      { name: "Stripe", role: "Payments", projects: ["fitness-operations", "craverush"] },
      { name: "Razorpay", role: "Payments (India)", projects: ["auraplanters"] },
      { name: "Shopify", role: "Commerce platform" },
      { name: "Twilio", role: "SMS & messaging", projects: ["realist-crm", "edunexus-erp"] },
      { name: "Mapbox", role: "Maps & geospatial", projects: ["realist-crm"] },
      { name: "Google Sheets API", role: "Ledgers & exports", projects: ["construction-erp"] },
      { name: "SQL reporting", role: "Dashboards & reports", projects: ["marblemart-crm", "fitness-operations"] },
    ],
  },
];
