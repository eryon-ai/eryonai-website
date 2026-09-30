import type { Article } from "./insights";

// Topics carried over from the previous eryonai.com blog. Slugs and publish dates are kept so
// search engines follow the redirects; the text is newly written (none of the old copy is reused).
const B = "/img/";

export const migratedArticles: Article[] = [
  {
    slug: "building-scalable-saas-platforms",
    category: "architecture",
    title: "How to build a scalable SaaS platform: the decisions that matter early",
    subtitle: "Tenancy, data, billing and operations — what to get right in version one.",
    summary: "Most SaaS scaling problems are decided in the first release. A practical guide to the architecture choices that let a SaaS product grow without a rewrite.",
    author: "Eryon Engineering",
    published: "2026-06-08",
    updated: "2026-09-23",
    image: B + "gym-crm-dashboard.webp",
    imageAlt: "Subscription SaaS dashboard showing members, revenue and activity",
    takeaways: [
      "Scalability starts with the data model and tenancy, not with servers.",
      "Keep the application tier stateless so it can scale horizontally.",
      "Move slow work to background queues from the first release.",
      "Treat billing, onboarding and observability as core features.",
    ],
    sections: [
      {
        id: "what-scalable-means",
        h: "What “scalable” actually means for SaaS",
        p: [
          "Scalability is often reduced to handling more traffic. For a SaaS business it means more: onboarding more customers without more manual work, adding features without slowing every release, and keeping one large customer from degrading the experience for everyone else.",
          "The expensive part is that many of these properties are decided in the first release, when the team is small and speed matters most. The goal is not to build for millions of users on day one, but to avoid decisions that force a rewrite later.",
        ],
      },
      {
        id: "tenancy-and-data",
        h: "Get tenancy and the data model right",
        p: [
          "Every table that holds customer data needs a clear owner — usually a tenant or organisation identifier — and every query needs to respect it. Enforcing that in the database, for example with PostgreSQL row-level security, protects you from the one query that forgets the filter.",
          "Design the data model around your domain, not around screens. Screens change every month; entities such as accounts, subscriptions, orders and invoices change rarely and carry your reporting.",
        ],
        list: [
          "Put a tenant identifier on every customer-owned record.",
          "Enforce tenant isolation in the data layer as well as the application.",
          "Index for the queries you run most, and review slow queries regularly.",
          "Plan archiving for data that grows without limit, such as logs and events.",
        ],
      },
      {
        id: "stateless-and-async",
        h: "Stateless services and background work",
        p: [
          "Keep web servers stateless: sessions in a shared store, files in object storage, no local state that ties a user to one machine. Then scaling the application tier is a matter of adding instances behind a load balancer.",
          "Anything that doesn't need to finish before the user gets a response — emails, exports, PDF generation, webhooks, reports — belongs in a background queue. Queues smooth traffic spikes and stop slow work from blocking requests.",
        ],
      },
      {
        id: "billing-onboarding",
        h: "Billing, plans and onboarding are architecture",
        p: [
          "Subscription billing touches everything: which features a customer can use, what happens when a payment fails, how upgrades are prorated. Model plans as entitlements — limits and features the application checks — rather than hard-coding plan names.",
          "Self-service onboarding is what lets a SaaS business grow without growing the support team. Measure how long new accounts take to reach their first meaningful result, and design the first-run experience around shortening it.",
        ],
      },
      {
        id: "operate-it",
        h: "Build in the ability to operate it",
        p: ["A product you can't observe is a product you can't scale. From the first release, include the basics that make incidents short and releases safe."],
        list: [
          "Structured logs with tenant and request identifiers.",
          "Error tracking and uptime monitoring with alerts.",
          "Automated backups with a tested restore procedure.",
          "A deployment pipeline with staging and quick rollback.",
          "An internal admin console for support and account management.",
        ],
      },
    ],
    service: "saas-development",
  },
  {
    slug: "modern-cloud-architecture-2026",
    category: "cloud",
    title: "Modern cloud architecture for growing businesses: a practical baseline",
    subtitle: "What a sensible AWS, Azure or Google Cloud setup looks like before you need anything exotic.",
    summary: "You don't need a complex cloud setup to run a reliable business application. A practical baseline architecture — and the signals that tell you when to go further.",
    author: "Eryon Engineering",
    published: "2026-06-05",
    updated: "2026-09-23",
    image: B + "infra-3.webp",
    imageAlt: "Project dashboard of an enterprise platform running on cloud infrastructure",
    takeaways: [
      "Start with managed services; operate less, deliver more.",
      "Separate environments and keep databases off the public internet.",
      "Define infrastructure as code so it can be reviewed and rebuilt.",
      "Watch cost from the first month, not after the first surprise bill.",
    ],
    sections: [
      {
        id: "start-managed",
        h: "Start with managed services",
        p: [
          "For most business applications, the best cloud architecture is the one with the least to operate. Managed databases, managed container platforms and object storage remove whole categories of maintenance work — patching, replication, backups — so a small team can focus on the product.",
          "Choose the provider that fits your team, your customers and your existing contracts. AWS, Azure and Google Cloud all offer the building blocks a typical web platform needs.",
        ],
      },
      {
        id: "baseline",
        h: "A baseline that works for most applications",
        p: ["A dependable starting point for a web application or SaaS product usually includes the following."],
        list: [
          "Separate accounts or projects for staging and production.",
          "A private network with the database unreachable from the internet.",
          "Stateless application containers behind a load balancer.",
          "A managed relational database with automated backups.",
          "Object storage and a CDN for files and static assets.",
          "Centralised logging, metrics and alerting.",
        ],
      },
      {
        id: "infrastructure-as-code",
        h: "Infrastructure as code",
        p: [
          "Clicking resources together in a console works once. Defining them in code — with Terraform, for example — means environments can be reviewed like any other change, recreated after a mistake and kept identical between staging and production.",
        ],
      },
      {
        id: "cost",
        h: "Manage cost from the start",
        p: [
          "Cloud bills grow quietly: idle environments, oversized databases, logs kept forever. Tag resources by environment and purpose, set budget alerts, and review usage monthly. Right-sizing and scheduling non-production environments are usually the quickest savings.",
        ],
      },
      {
        id: "when-to-go-further",
        h: "When to go further",
        p: ["Kubernetes, multi-region deployments and service meshes solve real problems, but they also add operational cost. Adopt them when a specific signal appears, not because they are fashionable."],
        list: [
          "Many independently deployed services that need common orchestration.",
          "Customers or regulation requiring data in specific regions.",
          "Availability targets that one region cannot meet.",
          "Traffic patterns that managed platforms can no longer absorb economically.",
        ],
      },
    ],
    service: "cloud-devops",
  },
  {
    slug: "microservices-vs-monolith",
    category: "architecture",
    title: "Microservices vs monolith: how to choose the right architecture",
    subtitle: "A decision framework based on team size, domain and operational maturity.",
    summary: "Microservices are not an upgrade from a monolith — they are a trade-off. How to decide which architecture fits your product today, and how to move between them safely.",
    author: "Eryon Engineering",
    published: "2026-06-02",
    updated: "2026-09-23",
    image: B + "craverush-admin-dashboard.webp",
    imageAlt: "Admin dashboard of a delivery platform built as independent services",
    takeaways: [
      "A modular monolith is the right default for most new products.",
      "Microservices pay off with multiple teams and clearly separate domains.",
      "Distributed systems bring real costs: consistency, tracing, operations.",
      "Migrate gradually, one capability at a time, never with a big-bang rewrite.",
    ],
    sections: [
      {
        id: "the-choice",
        h: "It's a trade-off, not a maturity level",
        p: [
          "A monolith is one deployable application. Microservices split an application into independently deployable services, each owning a business capability and its data. Neither is inherently better; each makes different things easy and different things hard.",
        ],
      },
      {
        id: "monolith-strengths",
        h: "Where a monolith wins",
        list: [
          "One codebase to understand, test and deploy.",
          "Database transactions across the whole domain.",
          "Simple debugging — one process, one log.",
          "Low operational overhead for a small team.",
        ],
        p: ["A well-structured modular monolith — clear internal modules with defined interfaces — keeps these advantages while preparing for a later split."],
      },
      {
        id: "microservices-strengths",
        h: "Where microservices win",
        list: [
          "Teams deploy independently without coordinating releases.",
          "Busy components scale on their own.",
          "A failure in one service can be contained.",
          "Each service can use the storage that suits it.",
        ],
        p: ["In a delivery platform we built on Spring Boot and Kafka, isolating ordering and payments from menus and dispatch meant checkout kept working during peak load — a benefit worth the added complexity for that business."],
      },
      {
        id: "decision-framework",
        h: "A simple decision framework",
        p: ["Consider microservices when most of these are true; otherwise start with a modular monolith."],
        list: [
          "Several teams need to release independently.",
          "The domain has clearly separate business capabilities.",
          "Parts of the system have very different load profiles.",
          "You already run CI/CD, monitoring and tracing confidently.",
        ],
      },
      {
        id: "migrating",
        h: "Moving from monolith to services",
        p: [
          "When the time comes, extract one capability at a time. Put an interface in front of it, build the new service behind that interface, run old and new in parallel, and switch traffic gradually. Each step should be reversible and proven in production before the next.",
        ],
      },
    ],
    service: "software-modernization",
  },
  {
    slug: "devops-best-practices-2026",
    category: "cloud",
    title: "DevOps best practices for small and mid-sized engineering teams",
    subtitle: "The practices that make releases routine without a dedicated platform team.",
    summary: "DevOps isn't a tool or a job title. A practical set of habits — pipelines, environments, monitoring and recovery — that make releases boring in the best way.",
    author: "Eryon Engineering",
    published: "2026-05-14",
    updated: "2026-09-23",
    image: B + "craverush-fleet-dashboard.webp",
    imageAlt: "Operations dashboard used to monitor live deliveries",
    takeaways: [
      "Automate the path from commit to production, including tests.",
      "Keep staging close to production and deploy the same artifact to both.",
      "Make rollback faster than a fix.",
      "Alert on symptoms users feel, not on every metric.",
    ],
    sections: [
      {
        id: "pipeline",
        h: "One automated path to production",
        p: [
          "Every change should travel the same route: build, test, package, deploy to staging, then promote the same artifact to production. Manual steps are where releases go wrong, so each one you remove makes deployments safer.",
        ],
        list: [
          "Run type checks, linting and tests on every pull request.",
          "Build once; promote the same image or bundle between environments.",
          "Require review before merging to the main branch.",
          "Keep pipeline configuration in the repository.",
        ],
      },
      {
        id: "environments",
        h: "Environments that match",
        p: [
          "Bugs that appear only in production usually come from differences between environments. Containers and infrastructure as code keep staging and production alike; realistic, anonymised data in staging catches the rest.",
        ],
      },
      {
        id: "release-safely",
        h: "Release safely, recover quickly",
        p: [
          "Small, frequent releases are easier to understand and easier to undo. Database migrations should be backward-compatible so the previous version can still run. Feature flags let you ship code without exposing it until it's ready.",
          "Measure how long it takes to recover from a bad release. If rolling back takes longer than fixing forward, invest in rollback.",
        ],
      },
      {
        id: "observability",
        h: "Monitoring that helps at 3 a.m.",
        p: ["Alert on what users experience — errors, slow responses, failed jobs, unavailable pages — rather than on every CPU spike. Every alert should be actionable and routed to someone who can act on it."],
        list: [
          "Uptime checks on key user journeys.",
          "Error tracking with release markers.",
          "Dashboards for latency, error rate and queue depth.",
          "Runbooks linked from each alert.",
        ],
      },
      {
        id: "security-in-pipeline",
        h: "Security as part of the pipeline",
        p: ["Scan dependencies automatically, keep secrets in a managed store rather than in code or pipeline variables, and give deployment credentials only the permissions they need."],
      },
    ],
    service: "cloud-devops",
  },
  {
    slug: "building-production-grade-apis",
    category: "engineering",
    title: "Building production-grade REST APIs: a practical checklist",
    subtitle: "Design, security, versioning and operations for APIs other teams can depend on.",
    summary: "An API is a product for developers. A practical checklist for designing, securing, versioning and operating REST APIs that integrators trust.",
    author: "Eryon Engineering",
    published: "2026-05-10",
    updated: "2026-09-23",
    image: B + "hirestream-admin-dashboard.webp",
    imageAlt: "Recruitment platform dashboard backed by a Spring Boot REST API",
    takeaways: [
      "Design around resources and clear, consistent conventions.",
      "Authenticate every request and authorise every action.",
      "Version deliberately and never break existing consumers silently.",
      "Document with examples and monitor like a product.",
    ],
    sections: [
      {
        id: "design",
        h: "Design for the people who will call it",
        p: [
          "Good APIs are predictable. Use nouns for resources, standard HTTP methods and status codes, consistent naming and a single error format. A developer who understands one endpoint should be able to guess how the next one works.",
        ],
        list: [
          "Consistent resource naming and pluralisation.",
          "Pagination, filtering and sorting on every list endpoint.",
          "A standard error body with a code, message and details.",
          "Idempotency keys for operations that create payments or orders.",
        ],
      },
      {
        id: "security",
        h: "Security on every request",
        p: [
          "Authenticate every call — typically with OAuth 2.0 or signed tokens — and authorise every action against the caller's role and scope. Validate input at the boundary, limit request sizes and rate-limit clients so one integration can't exhaust the service.",
        ],
      },
      {
        id: "versioning",
        h: "Versioning without breaking consumers",
        p: [
          "Additive changes — new fields, new endpoints — shouldn't break anyone. Removing or renaming fields will. Version the API explicitly, announce deprecations early and keep old versions running until consumers have moved.",
        ],
      },
      {
        id: "documentation",
        h: "Documentation and developer experience",
        p: ["An OpenAPI specification generated from code keeps documentation accurate. Add example requests and responses, authentication instructions and a sandbox environment so integrators can test safely."],
      },
      {
        id: "operations",
        h: "Operate it like a product",
        list: [
          "Track latency and error rate per endpoint and per client.",
          "Log request identifiers so issues can be traced end to end.",
          "Use webhooks with retries and signatures for event notifications.",
          "Publish status and changelog information for consumers.",
        ],
        p: ["The APIs that last are the ones whose owners know how they are used — and notice quickly when something goes wrong."],
      },
    ],
    service: "web-applications",
  },
  {
    slug: "cybersecurity-in-2026",
    category: "security",
    title: "Application security checklist for business software",
    subtitle: "The controls that prevent the most common breaches in web and mobile applications.",
    summary: "Most breaches in business software come from ordinary gaps, not exotic attacks. A practical application security checklist for teams building and running web and mobile systems.",
    author: "Eryon Engineering",
    published: "2026-05-05",
    updated: "2026-09-23",
    image: B + "hrms-dashboard-dark.webp",
    imageAlt: "Secure administrative dashboard with role-based navigation",
    takeaways: [
      "Access control failures are the most common and most damaging issue.",
      "Secrets, configuration and dependencies need as much care as code.",
      "Log security events so incidents can be investigated.",
      "Review security before launch and after major changes.",
    ],
    sections: [
      {
        id: "access-control",
        h: "Access control first",
        p: [
          "Broken access control — users reaching data or actions they shouldn't — is the most frequent serious flaw in business applications. Check permissions on the server for every request, scope data by organisation and role, and test the negative cases: what a user must not be able to do.",
        ],
      },
      {
        id: "authentication",
        h: "Authentication and sessions",
        list: [
          "Offer multi-factor authentication, and require it for administrators.",
          "Store passwords with a modern hashing algorithm.",
          "Expire sessions and revoke tokens on logout and password change.",
          "Protect login and reset endpoints with rate limiting.",
        ],
        p: ["Where possible, integrate single sign-on so accounts are managed centrally and removed when people leave."],
      },
      {
        id: "input-and-data",
        h: "Input handling and data protection",
        p: [
          "Validate input at the boundary, use parameterised queries, and encode output to prevent injection and cross-site scripting. Encrypt data in transit and at rest, and collect only what the business actually needs — data you don't hold can't leak.",
        ],
      },
      {
        id: "configuration",
        h: "Configuration, secrets and dependencies",
        list: [
          "Keep secrets in a managed secret store, never in code.",
          "Set secure HTTP headers and disable unused features.",
          "Scan dependencies automatically and patch promptly.",
          "Restrict cloud permissions to the minimum each service needs.",
        ],
        p: ["Many incidents start with a forgotten test endpoint, a public storage bucket or an outdated library rather than a flaw in the main code."],
      },
      {
        id: "monitoring",
        h: "Logging, monitoring and review",
        p: [
          "Record security-relevant events — logins, permission changes, exports, administrative actions — and alert on unusual patterns. Review security before each major launch and after significant architectural changes, using the OWASP Top 10 as a baseline.",
        ],
      },
    ],
    service: "cybersecurity",
  },
  {
    slug: "edge-computing-revolution",
    category: "cloud",
    title: "Edge computing explained: making business web applications faster",
    subtitle: "CDNs, edge caching and edge rendering — what they are and when they help.",
    summary: "Edge computing moves work closer to your users. What CDNs, edge caching and edge rendering mean in practice, and how to use them to make business web applications faster.",
    author: "Eryon Engineering",
    published: "2026-04-28",
    updated: "2026-09-23",
    image: B + "marblemart-web-home.webp",
    imageAlt: "Image-heavy B2B catalogue website served from an edge network",
    takeaways: [
      "The edge is about distance: serve content from near the user.",
      "Static and cacheable pages gain the most from a CDN.",
      "Edge logic suits lightweight decisions, not core business logic.",
      "Measure real user performance before and after.",
    ],
    sections: [
      {
        id: "what-is-edge",
        h: "What “the edge” means",
        p: [
          "Edge computing places content and computation in data centres close to users instead of in one central region. For a business in India serving customers in the Middle East, Europe or North America, distance adds noticeable delay to every request — the edge reduces it.",
        ],
      },
      {
        id: "cdn",
        h: "Start with a CDN and caching",
        p: [
          "A content delivery network stores copies of images, scripts, styles and whole pages at locations worldwide. For catalogues, marketing sites and documentation, caching full pages at the edge makes them load quickly everywhere with no extra servers.",
          "On a B2B catalogue with large product imagery, optimised images and edge caching together made collections fast on mobile networks without changing the design.",
        ],
      },
      {
        id: "edge-rendering",
        h: "Edge rendering and edge functions",
        p: ["Modern frameworks can render pages or run small functions at the edge. These are useful for lightweight, latency-sensitive decisions."],
        list: [
          "Redirects and localisation based on region or language.",
          "Authentication checks before a request reaches the origin.",
          "Personalised headers or banners on otherwise cached pages.",
          "A/B test assignment without a round trip to the server.",
        ],
      },
      {
        id: "limits",
        h: "What should stay at the origin",
        p: [
          "Business logic that reads and writes your main database usually belongs close to that database. Running it at the edge adds round trips back to the origin and makes consistency harder. Keep transactions central, and use the edge to avoid unnecessary trips to them.",
        ],
      },
      {
        id: "measure",
        h: "Measure what users experience",
        p: ["Use real-user metrics such as Core Web Vitals, broken down by country and device, to decide where edge delivery will help — and to confirm that it did."],
      },
    ],
    service: "web-applications",
  },
];
