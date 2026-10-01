import { serviceExtras, type ServiceExtra } from "./service-extras";

type Item = { title: string; text: string };
type Faq = { q: string; a: string };

type ServiceBase = {
  slug: string;
  n: string;
  title: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  value: string; // one-line value proposition
  intro: string;
  summary: string; // hub paragraph
  capabilities: Item[];
  useCases: Item[];
  deliver: Item[];
  tech: string[];
  scale: Item[];
  deliverables: string[];
  industries: string[];
  work: string[];
  faqs: Faq[];
  related: string[];
  preview: string; // screenshot used on cards
};

const B = "/img/"; // self-hosted WebP copies of project screenshots

export type Service = ServiceBase & Pick<ServiceExtra, "offerings" | "segments">;

const base: ServiceBase[] = [
  {
    slug: "custom-software-development",
    n: "01",
    title: "Custom Software Development",
    nav: "Custom Software",
    metaTitle: "Custom Software Development Company in India",
    metaDescription:
      "Custom software built around how your business operates — internal systems, portals and platforms engineered in New Delhi for teams in India and abroad.",
    h1: "Custom software built around how your business actually runs.",
    value: "Systems shaped to your operations, not the other way round.",
    intro:
      "Off-the-shelf tools cover the average business. Most businesses are not average in the places that matter: pricing rules, approval chains, the way stock moves, the way customers are served. We build software for those places — systems your team uses every day that encode how you work and remove the manual steps between tools.",
    summary:
      "Internal systems, customer portals and operational platforms designed from your workflows. We own the full lifecycle: discovery, architecture, build, release and support.",
    capabilities: [
      { title: "Workflow-first discovery", text: "We map the process as it runs today, with the people who run it, before choosing screens or technology." },
      { title: "Domain modelling", text: "A data model that reflects your business entities and their states, so reports and integrations stay consistent." },
      { title: "Full-stack engineering", text: "Web front ends, APIs, background jobs and databases built and owned by one team." },
      { title: "Integration", text: "Connections to accounting, payment, messaging and existing internal systems through APIs or scheduled sync." },
      { title: "Role-based access", text: "Permissions designed with the process, so each role sees and changes only what it should." },
      { title: "Long-term support", text: "Monitoring, fixes and an improvement backlog after launch, under a clear support agreement." },
    ],
    useCases: [
      { title: "Replacing a spreadsheet chain", text: "When critical data lives in files passed between people, a single system removes re-entry and version conflicts." },
      { title: "Process that no product fits", text: "Pricing, compliance or fulfilment rules specific enough that configuring a generic tool costs more than building." },
      { title: "Connecting disconnected tools", text: "A system of record that sits between existing products and keeps them consistent." },
      { title: "Productising a service", text: "Turning a manual service into a portal customers can use themselves." },
    ],
    deliver: [
      { title: "Discovery, then sprints", text: "A short discovery phase produces scope, architecture and estimate. Build runs in sprints with a working demo every week." },
      { title: "One accountable team", text: "A lead engineer owns architecture and delivery from the first workshop to production." },
      { title: "Your code, your infrastructure", text: "Source code and cloud accounts belong to you from day one." },
      { title: "Documented handover", text: "Architecture notes, runbooks and environment documentation are part of the deliverable." },
    ],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "Java", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    scale: [
      { title: "Designed for growth in data, not just users", text: "Indexes, archiving and reporting paths planned for years of records." },
      { title: "Security in the data model", text: "Access rules enforced at the API and database, not only in the interface." },
      { title: "Observable from day one", text: "Structured logs, error tracking and health checks ship with the first release." },
      { title: "Replaceable parts", text: "Clear module boundaries so a component can be rewritten without rewriting the system." },
    ],
    deliverables: ["Process maps and written scope", "Architecture and data model", "Production application and source code", "Automated test suite for critical paths", "Deployment pipeline and runbooks"],
    industries: ["manufacturing", "b2b", "logistics", "professional-services"],
    work: ["marblemart-crm", "construction-erp", "craverush"],
    faqs: [
      { q: "How much does custom software cost?", a: "It depends on the number of roles, workflows and integrations. We start with a short discovery, then give a written estimate for the build based on the agreed scope, so you know the cost before development starts." },
      { q: "How long does a first release take?", a: "A focused first release of an internal system typically takes a few months. We plan releases so your team is using part of the system early rather than waiting for everything." },
      { q: "Who owns the source code?", a: "You do. Code lives in your repository and infrastructure is set up in your cloud accounts." },
      { q: "Can you work with our existing systems?", a: "Yes. Most projects integrate with accounting, payment, messaging or legacy systems. We review what APIs or data access exist during discovery." },
    ],
    related: ["web-applications", "crm-erp-development", "business-automation"],
    preview: B + "infra-1.webp",
  },
  {
    slug: "web-applications",
    n: "02",
    title: "Enterprise Web Applications",
    nav: "Web Applications",
    metaTitle: "Web Application Development Company",
    metaDescription:
      "Enterprise web application development: dashboards, portals and business platforms built with React, Next.js and reliable back ends by Eryon.",
    h1: "Web applications your teams can depend on every day.",
    value: "Dashboards, portals and platforms that stay fast as usage grows.",
    intro:
      "Most business software now lives in the browser. We build web applications that people use for hours a day — admin systems, customer portals, dashboards and multi-role platforms — with the performance, access control and reliability that daily operational use demands.",
    summary:
      "Multi-role platforms, dashboards and portals built with React and Next.js on reliable APIs. Designed for heavy daily use, not for a demo.",
    capabilities: [
      { title: "Multi-role platforms", text: "Separate experiences for administrators, staff, partners and customers on one codebase." },
      { title: "Data-heavy interfaces", text: "Tables, filters, bulk actions and exports that stay responsive with large datasets." },
      { title: "API design", text: "REST APIs with clear contracts, versioning and documentation for internal and external consumers." },
      { title: "Real-time updates", text: "Live status, notifications and shared views using subscriptions or WebSockets where they add value." },
      { title: "Performance engineering", text: "Server rendering, caching and query optimisation for fast first loads and fast interactions." },
      { title: "Accessibility", text: "Keyboard support, semantic markup and contrast standards built in, not retrofitted." },
    ],
    useCases: [
      { title: "Operations dashboard", text: "A single screen where a team sees and acts on the day's work." },
      { title: "Self-service portal", text: "Customers or partners place orders, track status and download documents without calling you." },
      { title: "Multi-branch platform", text: "One system serving several locations with local data and a head-office view." },
      { title: "Public catalogue with lead capture", text: "A fast, search-friendly website connected to your sales process." },
    ],
    deliver: [
      { title: "Design and engineering together", text: "Interfaces are designed with real data volumes and edge cases in mind." },
      { title: "Sprint demos on staging", text: "You review working software on a staging environment every week." },
      { title: "Automated checks", text: "Type checks, tests and linting run on every change before merge." },
      { title: "Performance budget", text: "Page weight and response times are tracked against agreed targets." },
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Spring Boot", "FastAPI", "PostgreSQL", "Redis", "WebSockets"],
    scale: [
      { title: "Stateless application tier", text: "Application servers can be added behind a load balancer without code changes." },
      { title: "Caching strategy", text: "Static generation, CDN caching and Redis used where data freshness allows." },
      { title: "Role-based access control", text: "Permissions checked on every API request, with audit trails for sensitive actions." },
      { title: "Secure defaults", text: "Input validation, CSRF and XSS protection, secure headers and secrets kept out of code." },
    ],
    deliverables: ["UX flows and interface designs", "Web application and API", "API documentation", "CI/CD pipeline", "Monitoring and error tracking setup"],
    industries: ["healthcare", "education", "real-estate", "fitness"],
    work: ["hospital-hrms", "fitness-operations", "realist-crm"],
    faqs: [
      { q: "Which framework do you use for web applications?", a: "Most front ends are React with Next.js and TypeScript. Back ends are Node.js, Java Spring Boot or Python FastAPI depending on your team and the problem." },
      { q: "Can the application work on tablets and phones?", a: "Yes. We design responsive layouts and, where staff work on the move, dedicated tablet or mobile views." },
      { q: "Do you build the API as well?", a: "Yes. We build the full stack: front end, API, database and background jobs." },
      { q: "Can we extend the application ourselves later?", a: "Yes. We use mainstream frameworks, write documentation and can hand over to your in-house team." },
    ],
    related: ["custom-software-development", "saas-development", "ui-ux-design"],
    preview: B + "hrms-dashboard-light.webp",
  },
  {
    slug: "mobile-applications",
    n: "03",
    title: "Mobile Applications",
    nav: "Mobile Applications",
    metaTitle: "Mobile App Development Company for iOS & Android",
    metaDescription:
      "Mobile app development for iOS and Android with React Native and Flutter. Customer apps, field and staff apps, and companion apps connected to your business systems.",
    h1: "Mobile apps connected to the systems behind them.",
    value: "iOS and Android apps for customers, staff and field teams.",
    intro:
      "A mobile app is rarely a standalone product. It is a window into your orders, schedules, inventory or accounts. We build cross-platform apps with React Native and Flutter, and the APIs and admin tools they depend on, so the app and the business behind it stay in step.",
    summary:
      "Cross-platform customer, staff and field apps built with React Native or Flutter, together with the APIs and admin systems they rely on.",
    capabilities: [
      { title: "Cross-platform development", text: "One codebase for iOS and Android with React Native or Flutter." },
      { title: "Offline-capable apps", text: "Local storage and sync for staff working with poor connectivity." },
      { title: "Push notifications", text: "Transactional and operational notifications tied to real events in your system." },
      { title: "Payments", text: "In-app checkout with established payment gateways." },
      { title: "Device features", text: "Camera, location, file upload and biometrics where the workflow needs them." },
      { title: "Store release", text: "App Store and Play Store preparation, review submissions and release management." },
    ],
    useCases: [
      { title: "Customer app for an existing platform", text: "Give customers a faster route to ordering, booking or tracking." },
      { title: "Staff app for field work", text: "Attendance, inspections or deliveries recorded where the work happens." },
      { title: "Parent and member communication", text: "Updates, payments and messaging in one app instead of scattered channels." },
      { title: "Replacing paper forms", text: "Structured data capture with photos and signatures." },
    ],
    deliver: [
      { title: "Web and mobile planned together", text: "Shared API contracts so web and mobile evolve without breaking each other." },
      { title: "Device testing", text: "Testing across screen sizes and OS versions before every release." },
      { title: "Review builds", text: "Installable test builds at each sprint so stakeholders use the app, not screenshots." },
      { title: "Release management", text: "Staged rollouts and versioning through the stores." },
    ],
    tech: ["React Native", "Expo", "Flutter", "TypeScript", "Swift", "Kotlin", "Node.js", "Spring Boot", "PostgreSQL"],
    scale: [
      { title: "API versioning", text: "Older app versions keep working while new versions roll out." },
      { title: "Secure storage", text: "Tokens and sensitive data kept in platform secure storage." },
      { title: "Crash isolation", text: "Error boundaries and crash reporting to find and fix issues quickly." },
      { title: "Performance on everyday phones", text: "Lists, images and navigation tuned for mid-range devices, not only flagships." },
    ],
    deliverables: ["App designs and prototypes", "iOS and Android application", "Supporting API and admin panel", "Store listings and release builds", "Crash reporting and analytics setup"],
    industries: ["education", "retail", "logistics", "fitness"],
    work: ["atelier-mobile", "edunexus-erp"],
    faqs: [
      { q: "Native or cross-platform?", a: "For most business apps we recommend React Native or Flutter: one codebase, faster delivery and near-native performance. We use Swift or Kotlin where a feature requires native modules." },
      { q: "Do you publish the app to the stores?", a: "Yes. We prepare listings and builds, and publish under your developer accounts so you retain ownership." },
      { q: "Can the app work offline?", a: "Yes, for workflows that need it. We design local storage and conflict handling as part of the architecture." },
      { q: "Do you also build the back end?", a: "Yes. Most mobile projects include the API and an administration panel." },
    ],
    related: ["web-applications", "ui-ux-design", "ecommerce-development"],
    preview: B + "atelier-mobile-products.webp",
  },
  {
    slug: "saas-development",
    n: "04",
    title: "SaaS Product Development",
    nav: "SaaS Development",
    metaTitle: "SaaS Development Company — Multi-tenant Product Engineering",
    metaDescription:
      "SaaS product development from first release to scale: multi-tenant architecture, subscription billing, user management and cloud infrastructure, engineered by Eryon.",
    h1: "SaaS products engineered for the customers you'll have next year.",
    value: "Multi-tenant products with billing, onboarding and room to grow.",
    intro:
      "A SaaS product carries decisions that are expensive to change later: how tenants are isolated, how plans and billing work, how customers onboard, how data is backed up and exported. We help founders and product teams make those decisions deliberately, then build a first release that can grow without a rewrite.",
    summary:
      "Multi-tenant architecture, subscription billing, onboarding and admin tooling — from first release to a product that serves many customers reliably.",
    capabilities: [
      { title: "Tenancy architecture", text: "Shared, schema-per-tenant or database-per-tenant models chosen for your compliance and scale needs." },
      { title: "Subscription billing", text: "Plans, trials, upgrades, invoices and webhooks with established billing providers." },
      { title: "Identity and teams", text: "Sign-up, SSO options, team invitations and role management per tenant." },
      { title: "Product analytics", text: "Event tracking to understand activation and feature usage." },
      { title: "Internal admin", text: "Support and operations tools for your own team to manage tenants." },
      { title: "Public API", text: "Documented APIs and webhooks for customers who integrate with you." },
    ],
    useCases: [
      { title: "First release of a new product", text: "A focused version that paying customers can use, built on foundations that scale." },
      { title: "Turning a single-client system into SaaS", text: "Adding tenancy, billing and onboarding to software built for one organisation." },
      { title: "Scaling an early product", text: "Refactoring the parts that slow down as customers grow." },
      { title: "Adding self-serve", text: "Sign-up, payment and onboarding without a sales call." },
    ],
    deliver: [
      { title: "Scope to the first paying customer", text: "We cut the first release to what a customer will pay for, and plan the rest." },
      { title: "Architecture review", text: "Tenancy, billing and data decisions written down with their trade-offs." },
      { title: "Continuous delivery", text: "Frequent, low-risk releases through automated pipelines." },
      { title: "Product partnership", text: "Ongoing work as a product engineering team after launch, if you want it." },
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL", "Supabase", "Redis", "Stripe", "Razorpay", "Docker", "AWS", "Vercel"],
    scale: [
      { title: "Tenant isolation", text: "Tenant context enforced at the data layer with row-level security or separate schemas." },
      { title: "Noisy-neighbour protection", text: "Rate limits and background queues so one tenant cannot slow down others." },
      { title: "Backups and exports", text: "Automated backups and customer data export as a first-class feature." },
      { title: "Auditability", text: "Audit logs for administrative and security-relevant actions." },
    ],
    deliverables: ["Product scope and release plan", "Multi-tenant application and API", "Billing and subscription integration", "Internal admin console", "Infrastructure as code and CI/CD"],
    industries: ["fitness", "education", "b2b", "professional-services"],
    work: ["fitness-operations", "edunexus-erp"],
    faqs: [
      { q: "Which tenancy model should we choose?", a: "Most B2B products start with a shared database and row-level isolation. Regulated customers or very large tenants may need separate schemas or databases. We recommend a model during architecture and document why." },
      { q: "Which payment providers do you integrate?", a: "Stripe for international billing and Razorpay for India are the most common. We choose based on your markets and currencies." },
      { q: "Can you help define the product, not just build it?", a: "Yes. Discovery includes user interviews, scope definition and a release plan." },
      { q: "Do you stay on after launch?", a: "Many clients keep us as their product engineering team. Others take over in-house with our handover documentation." },
    ],
    related: ["cloud-devops", "web-applications", "ui-ux-design"],
    preview: B + "gym-crm-dashboard.webp",
  },
  {
    slug: "crm-erp-development",
    n: "05",
    title: "CRM & ERP Development",
    nav: "CRM & ERP",
    metaTitle: "Custom CRM & ERP Development Company",
    metaDescription:
      "Custom CRM and ERP development for sales, operations, inventory, HR and finance. Role-based systems built around your processes by Eryon, New Delhi.",
    h1: "CRM and ERP systems that match how your business sells and operates.",
    value: "One system of record for sales, operations, people and money.",
    intro:
      "Packaged CRMs and ERPs are powerful and generic. Businesses often end up paying for modules they don't use while running the workflows they do need in spreadsheets on the side. A custom CRM or ERP puts your actual pipeline, inventory rules, approvals and reporting into one system, with a data model built around your business.",
    summary:
      "Custom CRM, ERP, HRMS and school or hospital management systems — pipelines, inventory, attendance, payroll support and reporting in one role-based platform.",
    capabilities: [
      { title: "Sales pipelines", text: "Lead capture, assignment, stages, follow-ups and quotations." },
      { title: "Inventory and orders", text: "Stock, reservations, purchase and sales orders across locations." },
      { title: "People operations", text: "Attendance, shifts, leave and payroll support." },
      { title: "Finance workflows", text: "Invoices, ledgers, payments and exports to your accounting system." },
      { title: "Documents", text: "Contracts, drawings and records stored against the right entity with access control." },
      { title: "Reporting", text: "Role-specific dashboards and scheduled reports from one source of truth." },
    ],
    useCases: [
      { title: "Outgrown spreadsheets", text: "Data spread across files and people, with no reliable view of the business." },
      { title: "Outgrown a generic CRM", text: "Customisations and workarounds cost more than a system designed for you." },
      { title: "Multi-location operations", text: "Several branches or sites that need local control and a central view." },
      { title: "Industry-specific rules", text: "Credentials, compliance, unique inventory or complex pricing." },
    ],
    deliver: [
      { title: "Module-by-module rollout", text: "The module that removes the most pain goes live first; others follow." },
      { title: "Data migration", text: "Cleaning and importing existing spreadsheet and legacy data." },
      { title: "User training", text: "Role-based training sessions and short guides for each team." },
      { title: "Parallel running", text: "Old and new processes run side by side until the team is confident." },
    ],
    tech: ["Next.js", "React", "Spring Boot", "FastAPI", "PostgreSQL", "Supabase", "MongoDB", "Redis", "Twilio", "Docker"],
    scale: [
      { title: "Granular permissions", text: "Access by role, location and record ownership." },
      { title: "Audit trails", text: "Who changed what and when, for every sensitive record." },
      { title: "Reporting without slowing operations", text: "Reports run on read replicas or pre-aggregated tables as volume grows." },
      { title: "Integration-ready", text: "APIs and webhooks for accounting, messaging and e-commerce systems." },
    ],
    deliverables: ["Process and module map", "CRM/ERP application with role-based dashboards", "Data migration scripts", "Training material", "Admin and support documentation"],
    industries: ["manufacturing", "education", "healthcare", "real-estate"],
    work: ["marblemart-crm", "edunexus-erp", "hospital-hrms", "realist-crm", "construction-erp"],
    faqs: [
      { q: "Why build a custom CRM instead of using an existing one?", a: "When your process is specific — unique inventory, complex approvals, industry rules — and the cost of licences plus customisation exceeds a system built around you. For standard sales pipelines, an existing CRM is often the right answer, and we'll say so." },
      { q: "Can you migrate our existing data?", a: "Yes. We clean, map and import data from spreadsheets and existing systems, and validate it with your team before go-live." },
      { q: "Can the ERP connect to our accounting software?", a: "Yes, through the accounting system's API or scheduled exports, depending on what it supports." },
      { q: "Do you build mobile access for field staff?", a: "Yes. Responsive views or a companion mobile app for attendance, sales visits or site work." },
    ],
    related: ["custom-software-development", "business-automation", "data-analytics"],
    preview: B + "marblemart-2.webp",
  },
  {
    slug: "ecommerce-development",
    n: "06",
    title: "E-commerce Development",
    nav: "E-commerce",
    metaTitle: "E-commerce Development Company — Custom & Headless Stores",
    metaDescription:
      "Custom and headless e-commerce: fast storefronts, catalogue and inventory management, payments and order operations for B2C and B2B brands.",
    h1: "E-commerce built for the brand in front and the operation behind.",
    value: "Fast storefronts with the order operations to support them.",
    intro:
      "An online store is two products: the storefront customers see and the operation the team runs behind it. We build both — storefronts that load fast and present products properly, and catalogue, inventory, order and promotion tools that fit how your team actually fulfils orders.",
    summary:
      "Custom and headless storefronts, B2B ordering portals, payments and the admin tools behind them: catalogue, inventory, orders, promotions and reporting.",
    capabilities: [
      { title: "Storefront engineering", text: "Server-rendered, image-optimised product and collection pages." },
      { title: "Headless commerce", text: "A custom front end on top of a commerce engine or your own back end." },
      { title: "Catalogue and variants", text: "Products, variants, collections and rich media management." },
      { title: "Payments", text: "Stripe, Razorpay and other gateways with secure checkout flows." },
      { title: "Order operations", text: "Order management, fulfilment states, returns and customer service tools." },
      { title: "Promotions", text: "Coupons, campaigns and pricing rules your team controls." },
    ],
    useCases: [
      { title: "Moving off a template", text: "When a template limits your brand or slows your pages." },
      { title: "B2B ordering", text: "Customer-specific pricing, bulk orders and account-based purchasing." },
      { title: "Custom fulfilment logic", text: "Delivery zones, product configurations or inventory rules a platform can't express." },
      { title: "Commerce plus app", text: "A storefront and mobile app sharing one back end." },
    ],
    deliver: [
      { title: "Performance budget", text: "Page weight and load targets defined before design." },
      { title: "Checkout testing", text: "Payment, tax and edge cases tested end to end before launch." },
      { title: "SEO migration", text: "Redirects and metadata preserved when replacing an existing store." },
      { title: "Launch support", text: "Monitoring and fast fixes through launch and the first campaigns." },
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "Stripe", "Razorpay", "React Native"],
    scale: [
      { title: "Traffic spikes", text: "CDN caching and static generation for catalogue pages during campaigns." },
      { title: "Payment security", text: "Hosted payment fields and tokenisation; card data never touches your servers." },
      { title: "Inventory integrity", text: "Stock reserved transactionally at checkout to prevent overselling." },
      { title: "Event-driven orders", text: "Queues for order events so fulfilment and notifications don't block checkout." },
    ],
    deliverables: ["Storefront design system", "Storefront and checkout", "Admin portal", "Payment and shipping integrations", "Analytics and SEO setup"],
    industries: ["retail", "manufacturing", "hospitality"],
    work: ["atelier-commerce", "velorian", "auraplanters", "atelier-mobile"],
    faqs: [
      { q: "Should we use Shopify or build custom?", a: "If your catalogue and fulfilment are standard, a hosted platform is usually right. Custom or headless makes sense when brand presentation, B2B pricing or operational rules outgrow what the platform allows." },
      { q: "Which payment gateways do you integrate?", a: "Stripe and Razorpay most often, and others on request depending on your markets." },
      { q: "Can you migrate our existing store without losing SEO?", a: "Yes. We map URLs, set redirects and preserve metadata as part of the migration plan." },
      { q: "Do you build the admin side too?", a: "Yes. Catalogue, inventory, orders, customers, promotions and reporting." },
    ],
    related: ["mobile-applications", "ui-ux-design", "web-applications"],
    preview: B + "atelier-home.webp",
  },
  {
    slug: "business-automation",
    n: "07",
    title: "Business Process Automation",
    nav: "Business Automation",
    metaTitle: "Business Process Automation Software Development",
    metaDescription:
      "Business process automation: approvals, document generation, notifications, scheduled jobs and system integrations that remove manual work. Engineered by Eryon.",
    h1: "Take the repetitive work out of your operations.",
    value: "Approvals, documents, notifications and data sync that run themselves.",
    intro:
      "Every business has work that is done by hand only because systems don't talk to each other: re-typing orders, chasing approvals, building the same report every Monday, sending the same reminder. We identify those steps, automate the ones that are stable and rule-based, and leave people to handle the exceptions.",
    summary:
      "Rule-based workflows, document generation, scheduled jobs, notifications and integrations that remove re-entry and chasing.",
    capabilities: [
      { title: "Workflow engines", text: "Multi-step approvals with rules, escalations and audit history." },
      { title: "Document generation", text: "Quotations, invoices, certificates and reports produced from system data." },
      { title: "Notifications", text: "Email, SMS and push messages triggered by real events." },
      { title: "Scheduled jobs", text: "Nightly reconciliations, reminders and report generation." },
      { title: "System integration", text: "Data moving between CRM, accounting, e-commerce and spreadsheets automatically." },
      { title: "Exception handling", text: "Clear queues for the cases automation should not decide." },
    ],
    useCases: [
      { title: "Re-entering data between tools", text: "Orders typed from email into a system, then again into accounting." },
      { title: "Chasing approvals", text: "Requests stuck in inboxes with no visibility." },
      { title: "Manual monthly calculations", text: "Payroll, commissions or billing assembled in spreadsheets." },
      { title: "Missed follow-ups", text: "Renewals and reminders that depend on someone remembering." },
    ],
    deliver: [
      { title: "Process audit", text: "We time and map the manual steps and pick the ones worth automating." },
      { title: "Small, safe releases", text: "One workflow at a time, with the manual path available as fallback." },
      { title: "Logging", text: "Every automated action is recorded and reviewable." },
      { title: "Owner training", text: "Your team can adjust rules and templates without a developer." },
    ],
    tech: ["Node.js", "Python", "FastAPI", "Spring Boot", "PostgreSQL", "Redis", "Twilio", "Google Sheets API", "Docker"],
    scale: [
      { title: "Idempotent jobs", text: "Retries never create duplicate invoices or messages." },
      { title: "Queues", text: "Background processing so spikes don't slow the application." },
      { title: "Alerting", text: "Failed jobs raise alerts instead of failing silently." },
      { title: "Least-privilege integrations", text: "Each integration has only the access it needs." },
    ],
    deliverables: ["Process audit and automation plan", "Automated workflows and jobs", "Integration connectors", "Monitoring and alerting", "Runbooks for exceptions"],
    industries: ["manufacturing", "real-estate", "professional-services", "b2b"],
    work: ["construction-erp", "marblemart-crm", "realist-crm"],
    faqs: [
      { q: "What should we automate first?", a: "The step that is frequent, rule-based and error-prone. We measure time spent during the process audit and start where the return is clearest." },
      { q: "Will automation replace our existing tools?", a: "Usually not. Most automation connects the tools you already use and removes the manual steps between them." },
      { q: "What happens when an automated step fails?", a: "It is logged, retried safely where possible and raised as an alert or exception task for a person." },
      { q: "Can non-developers change the rules?", a: "Where it makes sense, we expose templates and rule settings in an admin screen." },
    ],
    related: ["crm-erp-development", "custom-software-development", "data-analytics"],
    preview: B + "infra-2.webp",
  },
  {
    slug: "cloud-devops",
    n: "08",
    title: "Cloud & DevOps",
    nav: "Cloud & DevOps",
    metaTitle: "Cloud Consulting and DevOps Services",
    metaDescription:
      "Cloud architecture and DevOps on AWS, Azure and Google Cloud: CI/CD pipelines, Docker and Kubernetes, infrastructure as code, monitoring and cost control.",
    h1: "Infrastructure that ships safely and stays up.",
    value: "Reliable environments, repeatable deployments, visible systems.",
    intro:
      "Good infrastructure is mostly invisible: deployments are routine, environments match, problems are noticed before customers notice them, and the cloud bill makes sense. We set up and run cloud environments, pipelines and monitoring for the systems we build and for existing applications that need a steadier foundation.",
    summary:
      "Cloud architecture on AWS, Azure and Google Cloud, CI/CD, containers, infrastructure as code, monitoring and cost reviews.",
    capabilities: [
      { title: "Cloud architecture", text: "Network, compute, storage and database design on AWS, Azure or Google Cloud." },
      { title: "CI/CD pipelines", text: "Automated build, test and deployment with GitHub Actions." },
      { title: "Containers", text: "Docker images and orchestration with Kubernetes where the scale justifies it." },
      { title: "Infrastructure as code", text: "Terraform-managed environments that can be reviewed and recreated." },
      { title: "Observability", text: "Logs, metrics, uptime checks and alerts wired to the right people." },
      { title: "Cost review", text: "Right-sizing and removing idle resources." },
    ],
    useCases: [
      { title: "Manual deployments", text: "Releases done by hand from a developer's machine." },
      { title: "No staging environment", text: "Changes tested in production because nothing else matches it." },
      { title: "Unexplained outages", text: "Downtime noticed by customers first." },
      { title: "Growing cloud bills", text: "Costs rising faster than usage." },
    ],
    deliver: [
      { title: "Infrastructure audit", text: "Current setup, risks and quick wins documented." },
      { title: "Incremental migration", text: "Moving workloads without big-bang cutovers." },
      { title: "Runbooks", text: "Written procedures for deploys, rollbacks and incidents." },
      { title: "Managed support", text: "Ongoing operations under an agreed support scope." },
    ],
    tech: ["AWS", "Azure", "Google Cloud", "Vercel", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "PostgreSQL", "Redis"],
    scale: [
      { title: "Horizontal scaling", text: "Stateless services scaled on load; databases scaled with replicas." },
      { title: "Secrets management", text: "Credentials in managed secret stores, never in repositories." },
      { title: "Backups tested", text: "Restore procedures rehearsed, not assumed." },
      { title: "Network isolation", text: "Databases and internal services kept off the public internet." },
    ],
    deliverables: ["Infrastructure audit report", "Terraform configuration", "CI/CD pipelines", "Monitoring dashboards and alerts", "Deployment and incident runbooks"],
    industries: ["logistics", "retail", "finance", "b2b"],
    work: ["craverush", "hospital-hrms"],
    faqs: [
      { q: "Which cloud providers do you work with?", a: "AWS, Microsoft Azure and Google Cloud, plus Vercel for front-end hosting. We recommend a provider based on your team, compliance needs and existing contracts." },
      { q: "Do we need Kubernetes?", a: "Often not. Many systems run well on managed containers or platform services. We recommend Kubernetes when the number of services and scale justify the operational cost." },
      { q: "Can you take over an existing setup?", a: "Yes. We start with an audit, document what exists and stabilise it before changing anything major." },
      { q: "Will the infrastructure be in our account?", a: "Yes. Everything is provisioned in your cloud accounts and managed as code in your repository." },
    ],
    related: ["software-modernization", "cybersecurity", "saas-development"],
    preview: B + "craverush-fleet-dashboard.webp",
  },
  {
    slug: "data-analytics",
    n: "09",
    title: "Data & Analytics",
    nav: "Data & Analytics",
    metaTitle: "Data & Analytics Services — Reporting and Pipelines",
    metaDescription:
      "Data and analytics services: operational dashboards, reporting, data pipelines and warehousing so leadership can see the business from one reliable source.",
    h1: "Reporting you can trust, from data you already have.",
    value: "One reliable source for the numbers your team decides on.",
    intro:
      "Most reporting problems are data problems: the same number calculated three ways, reports assembled by hand, dashboards nobody trusts. We build the pipelines, models and dashboards that turn operational data into consistent reporting — and fix the source systems when that's where the problem really is.",
    summary:
      "Operational dashboards, reporting, data pipelines and warehousing that give leadership one consistent set of numbers.",
    capabilities: [
      { title: "Operational dashboards", text: "Role-specific dashboards embedded in the systems people already use." },
      { title: "Reporting models", text: "Agreed definitions for key figures, implemented once." },
      { title: "Data pipelines", text: "Scheduled extraction and transformation from operational systems." },
      { title: "Warehousing", text: "A reporting database separate from production workloads." },
      { title: "Exports and scheduled reports", text: "CSV, PDF and email reports on a schedule." },
      { title: "Data quality", text: "Validation and reconciliation checks that flag inconsistencies." },
    ],
    useCases: [
      { title: "Monday-morning spreadsheets", text: "Reports rebuilt by hand every week." },
      { title: "Numbers that don't agree", text: "Different teams reporting different figures." },
      { title: "Reporting slowing production", text: "Heavy queries running against the live database." },
      { title: "No view across branches", text: "Each location reports separately." },
    ],
    deliver: [
      { title: "Metric definitions first", text: "Each key figure defined and agreed before a chart is built." },
      { title: "Source fixes", text: "Data problems fixed at the source where possible." },
      { title: "Reconciliation", text: "New reports checked against known figures before rollout." },
      { title: "Documentation", text: "A data dictionary your team can maintain." },
    ],
    tech: ["PostgreSQL", "Python", "SQL", "MongoDB", "Redis", "Node.js", "React", "Google Sheets API", "Docker"],
    scale: [
      { title: "Separated workloads", text: "Reporting runs on replicas or a warehouse, not on production." },
      { title: "Incremental loads", text: "Pipelines process changes rather than full reloads." },
      { title: "Access control", text: "Sensitive figures restricted by role." },
      { title: "Lineage", text: "Every figure traceable to its source." },
    ],
    deliverables: ["Metric definitions and data dictionary", "Pipelines and reporting database", "Dashboards and scheduled reports", "Data quality checks", "Handover documentation"],
    industries: ["retail", "education", "finance", "manufacturing"],
    work: ["marblemart-crm", "fitness-operations", "edunexus-erp"],
    faqs: [
      { q: "Do we need a data warehouse?", a: "Not always. Many businesses start with a read replica and well-designed reports. A warehouse makes sense when data comes from several systems or volumes grow." },
      { q: "Can you work with data in spreadsheets?", a: "Yes. We often begin by importing spreadsheet data and then move collection into proper systems." },
      { q: "Which dashboard tools do you use?", a: "We build dashboards into your applications with React, or connect established BI tools, depending on who uses them." },
      { q: "How do you keep numbers consistent?", a: "By defining each metric once in the data model and building every report on that definition." },
    ],
    related: ["crm-erp-development", "business-automation", "cloud-devops"],
    preview: B + "gym-crm-analytics.webp",
  },
  {
    slug: "ui-ux-design",
    n: "10",
    title: "UI/UX Design",
    nav: "UI/UX Design",
    metaTitle: "UI UX Design Services for Web and Mobile Products",
    metaDescription:
      "UI/UX design for business software and digital products: research, workflows, prototypes, design systems and accessible interfaces.",
    h1: "Interfaces designed for the work people actually do.",
    value: "Research, flows, prototypes and design systems built with engineering.",
    intro:
      "Business software fails when it's hard to use: people go back to spreadsheets and the system becomes a record nobody trusts. We design interfaces around real tasks — observed, not assumed — and work alongside engineers so every design can be built as drawn and performs well.",
    summary:
      "User research, workflow design, prototypes, visual design and design systems for web and mobile products — designed alongside the engineers who build them.",
    capabilities: [
      { title: "User research", text: "Interviews and observation with the people who will use the system." },
      { title: "Workflow design", text: "Task flows that remove steps rather than decorate them." },
      { title: "Prototyping", text: "Clickable prototypes tested before development." },
      { title: "Visual design", text: "Clear, restrained interfaces that fit your brand." },
      { title: "Design systems", text: "Reusable components and tokens shared between design and code." },
      { title: "Accessibility", text: "Contrast, keyboard use and screen-reader support from the start." },
    ],
    useCases: [
      { title: "Low adoption", text: "A system people avoid using." },
      { title: "New product", text: "Validating flows with users before engineering investment." },
      { title: "Inconsistent interfaces", text: "Products that grew screen by screen without a system." },
      { title: "Complex data", text: "Dense information that needs clear hierarchy." },
    ],
    deliver: [
      { title: "Research before pixels", text: "Designs start from observed tasks." },
      { title: "Test with users", text: "Prototypes reviewed with real users." },
      { title: "Engineering review", text: "Every design reviewed for feasibility and performance." },
      { title: "Components in code", text: "The design system ships as real components, not only a file." },
    ],
    tech: ["Figma", "React", "Tailwind CSS", "React Native"],
    scale: [
      { title: "Design tokens", text: "Colour, type and spacing managed centrally." },
      { title: "Accessible by default", text: "Components meet contrast and keyboard standards." },
      { title: "Responsive rules", text: "Layouts defined for phone, tablet and desktop." },
      { title: "Documented patterns", text: "Usage guidance so new screens stay consistent." },
    ],
    deliverables: ["Research findings", "User flows and wireframes", "High-fidelity designs and prototypes", "Design system", "Developer handoff specifications"],
    industries: ["retail", "healthcare", "education", "hospitality"],
    work: ["origin", "kyprox", "atelier-commerce", "velorian", "realist-crm"],
    faqs: [
      { q: "Do you only design, or also build?", a: "Both. Design can be a standalone engagement, but most clients benefit from the same team designing and building." },
      { q: "What do we receive at the end of design?", a: "Flows, high-fidelity designs, a clickable prototype and a design system — and components in code if we also build." },
      { q: "Can you redesign an existing product?", a: "Yes. We start with an audit of current usage and problems, then redesign in stages." },
      { q: "Do you follow accessibility standards?", a: "Yes. We design to WCAG 2.2 AA contrast and interaction guidelines." },
    ],
    related: ["web-applications", "mobile-applications", "ecommerce-development"],
    preview: B + "velorian-home.webp",
  },
  {
    slug: "cybersecurity",
    n: "11",
    title: "Application Security",
    nav: "Cybersecurity",
    metaTitle: "Application Security & Secure Software Development",
    metaDescription:
      "Application security for business software: secure architecture, access control, code review, dependency checks and hardening of web and mobile systems.",
    h1: "Security designed into the software, not added at the end.",
    value: "Secure architecture, access control and hardening for business systems.",
    intro:
      "Most breaches in business software come from ordinary gaps: weak access control, exposed configuration, outdated dependencies, unvalidated input. We design systems to avoid them from the first architecture decision, and review and harden existing applications that handle customer, financial or personal data.",
    summary:
      "Secure architecture, authentication and access control, code and configuration review, dependency management and hardening of web and mobile applications.",
    capabilities: [
      { title: "Secure architecture", text: "Threats considered during design: data flows, trust boundaries and failure modes." },
      { title: "Identity and access", text: "Authentication, session management and role-based access control." },
      { title: "Code review", text: "Review for common vulnerability classes (OWASP Top 10)." },
      { title: "Dependency management", text: "Automated scanning and updates for third-party packages." },
      { title: "Configuration hardening", text: "Headers, secrets, network exposure and cloud permissions." },
      { title: "Data protection", text: "Encryption in transit and at rest, and data minimisation." },
    ],
    useCases: [
      { title: "Before a major launch", text: "A review of a new system before real users and data arrive." },
      { title: "Handling sensitive data", text: "Health, financial or personal data that needs stronger controls." },
      { title: "Inherited codebase", text: "An application built by others that nobody has reviewed." },
      { title: "Customer security questionnaires", text: "Enterprise buyers asking how your system is protected." },
    ],
    deliver: [
      { title: "Scoped review", text: "Agreed scope, method and reporting format before starting." },
      { title: "Prioritised findings", text: "Issues ranked by risk with clear remediation steps." },
      { title: "Fixes, not just reports", text: "We can implement the remediation as well." },
      { title: "Re-verification", text: "Fixed issues checked again before closing." },
    ],
    tech: ["Spring Security", "JWT / OAuth 2.0", "OWASP guidelines", "Dependency scanning", "TLS", "Cloud IAM", "Docker"],
    scale: [
      { title: "Least privilege", text: "Users, services and integrations get only the access they need." },
      { title: "Defence in depth", text: "Controls at the interface, API, database and network." },
      { title: "Auditability", text: "Security-relevant actions logged and retained." },
      { title: "Secure delivery pipeline", text: "Checks run automatically on every change." },
    ],
    deliverables: ["Security review report", "Remediation plan", "Access control model", "Hardened configuration", "Security guidelines for your team"],
    industries: ["healthcare", "finance", "education", "b2b"],
    work: ["hospital-hrms", "hirestream"],
    faqs: [
      { q: "Do you provide compliance certification?", a: "No. We are not a certification body. We design and build software to support your compliance programme and can work alongside your auditors." },
      { q: "Can you review software someone else built?", a: "Yes. We review code, configuration and infrastructure, then report findings with prioritised fixes." },
      { q: "What standards do you follow?", a: "We use the OWASP Top 10 and OWASP ASVS as reference points for application security reviews." },
      { q: "Can you fix the issues you find?", a: "Yes. Remediation can be part of the engagement." },
    ],
    related: ["cloud-devops", "software-modernization", "web-applications"],
    preview: B + "hrms-dashboard-dark.webp",
  },
  {
    slug: "software-modernization",
    n: "12",
    title: "Modernization & Integration",
    nav: "Modernization & Integration",
    metaTitle: "Software Modernization & System Integration Services",
    metaDescription:
      "Software modernization and system integration: re-architecting legacy applications, migrating to the cloud and connecting systems without stopping the business.",
    h1: "Modernize critical systems without stopping the business.",
    value: "Legacy systems re-engineered in stages, with the business running throughout.",
    intro:
      "Legacy systems usually still work — that is why they are hard to replace. They also slow down every change, depend on a few people who understand them, and resist integration. We modernize in stages: wrap, replace one part at a time, migrate data carefully, and keep the business running at every step.",
    summary:
      "Re-architecting legacy applications, moving to the cloud, and integrating systems through APIs — replaced piece by piece rather than in one risky cutover.",
    capabilities: [
      { title: "System assessment", text: "Code, data and dependency review to find what to keep, wrap or replace." },
      { title: "Incremental replacement", text: "New components replace old ones behind a stable interface, one area at a time." },
      { title: "API layers", text: "APIs in front of legacy systems so new products can integrate safely." },
      { title: "Data migration", text: "Mapping, cleaning and verifying data moved between systems." },
      { title: "Cloud migration", text: "Moving workloads to managed cloud services." },
      { title: "System integration", text: "Connecting CRM, ERP, accounting, commerce and messaging systems." },
    ],
    useCases: [
      { title: "Unmaintainable legacy code", text: "Few people can change it and every change is risky." },
      { title: "Desktop or on-premise software", text: "Tools that should be accessible from anywhere." },
      { title: "Integration blockers", text: "Systems that can't share data with newer tools." },
      { title: "Scaling limits", text: "A monolith that can't handle today's load." },
    ],
    deliver: [
      { title: "Assessment first", text: "A written modernization plan with sequencing and risks." },
      { title: "No big-bang cutovers", text: "Each stage is released and proven before the next." },
      { title: "Parallel verification", text: "Old and new outputs compared before switching over." },
      { title: "Rollback plans", text: "Every migration step has a documented way back." },
    ],
    tech: ["Java", "Spring Boot", "Node.js", "Python", "PostgreSQL", "MySQL", "MongoDB", "Apache Kafka", "RabbitMQ", "Docker", "Kubernetes", "AWS", "Azure"],
    scale: [
      { title: "Event-driven integration", text: "Queues and events decouple systems so one failure doesn't cascade." },
      { title: "Contract testing", text: "Interfaces between old and new are tested automatically." },
      { title: "Data integrity checks", text: "Counts and checksums verify every migration." },
      { title: "Security uplift", text: "Modern authentication and access control introduced along the way." },
    ],
    deliverables: ["System assessment and modernization plan", "API and integration layer", "Replacement components", "Data migration and verification reports", "Updated architecture documentation"],
    industries: ["manufacturing", "finance", "logistics", "b2b"],
    work: ["craverush", "construction-erp"],
    faqs: [
      { q: "Should we rewrite from scratch?", a: "Rarely. Full rewrites carry high risk and take longer than expected. We usually recommend replacing the system in stages while it keeps running." },
      { q: "How do you avoid downtime during migration?", a: "By running old and new components in parallel, comparing outputs and switching traffic gradually, with a rollback plan for each step." },
      { q: "Can you work with old technology?", a: "Yes. Assessment includes understanding the existing stack well enough to integrate with it safely." },
      { q: "Do you integrate third-party products?", a: "Yes — CRM, ERP, accounting, payments, messaging and e-commerce platforms through their APIs." },
    ],
    related: ["cloud-devops", "custom-software-development", "cybersecurity"],
    preview: B + "craverush-admin-dashboard.webp",
  },
];

// Merge the deeper content (offerings, segments, extra FAQs) into each service.
export const services: Service[] = base.map((s) => {
  const x = serviceExtras[s.slug];
  return { ...s, offerings: x.offerings, segments: x.segments, faqs: [...s.faqs, ...x.faqs] };
});

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const servicesBy = (slugs: string[]) => slugs.map(getService).filter((s): s is Service => !!s);
