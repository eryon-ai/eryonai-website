import type { InsightCategory } from "./site";
import { migratedArticles } from "./insights-migrated";

const B = "/img/"; // self-hosted WebP copies of project screenshots

type Section = { id: string; h: string; p: string[]; list?: string[] };

export type Article = {
  slug: string;
  category: InsightCategory;
  title: string;
  subtitle: string;
  summary: string;
  author: string;
  published: string; // ISO date
  updated: string;
  image: string;
  imageAlt: string;
  takeaways: string[];
  sections: Section[];
  service: string; // related service slug
};

const ownArticles: Article[] = [
  {
    slug: "modernize-legacy-system-without-downtime",
    category: "engineering",
    title: "Modernizing a legacy system without stopping the business",
    subtitle: "Why staged replacement beats the big rewrite, and how to sequence it.",
    summary: "Full rewrites promise a clean slate and usually deliver a long, risky project. Replacing a legacy system in stages keeps the business running and proves each step.",
    author: "Eryon Engineering",
    published: "2026-09-08",
    updated: "2026-09-15",
    image: B + "craverush-admin-dashboard.webp",
    imageAlt: "Operations dashboard of a platform built as independent services",
    takeaways: [
      "Full rewrites fail more often from scope and timing than from technology.",
      "Put a stable interface in front of the old system before replacing anything behind it.",
      "Replace one business capability at a time, and prove it in production before the next.",
      "Run old and new side by side and compare outputs before switching traffic.",
    ],
    sections: [
      {
        id: "why-rewrites-stall",
        h: "Why full rewrites stall",
        p: [
          "A legacy system is usually old for a good reason: it works, and the business depends on it. Years of rules, exceptions and fixes are encoded in it, many of them undocumented. A rewrite has to rediscover all of them while the old system keeps changing underneath.",
          "The result is a familiar pattern. The new system takes longer than planned, the old one needs urgent changes in the meantime, and the cutover date moves. Meanwhile the business pays for two systems and gets the benefit of neither.",
        ],
      },
      {
        id: "stable-interface",
        h: "Start with a stable interface",
        p: [
          "The first step is not writing new code for the core. It is putting an interface — usually an API layer — in front of the existing system, so that other applications talk to that interface instead of to the legacy database or screens directly.",
          "Once consumers depend on the interface rather than the implementation, you can change what sits behind it one piece at a time. This is often called the strangler pattern: the new system gradually grows around the old one until the old one can be switched off.",
        ],
      },
      {
        id: "sequence-by-capability",
        h: "Sequence by business capability",
        p: [
          "Choose the first capability to replace on two criteria: how much pain it causes today and how isolated it is. A good first candidate has clear inputs and outputs and few dependencies — for example, quotation generation, notifications or reporting.",
          "Avoid starting with the most central, most connected part of the system. Early stages should build confidence and shared understanding, not bet the project.",
        ],
        list: [
          "Map capabilities and the data each one owns.",
          "Score each by business pain and coupling.",
          "Start where pain is high and coupling is low.",
          "Leave the core transaction engine until the team knows the domain well.",
        ],
      },
      {
        id: "parallel-running",
        h: "Prove each step with parallel running",
        p: [
          "Before switching a capability over, run the old and new implementations side by side on the same inputs and compare the results. Differences reveal undocumented rules faster than any requirements workshop.",
          "Switch traffic gradually — by branch, customer group or percentage — and keep a documented rollback path. A migration step that can't be reversed is a step that needs more preparation.",
        ],
      },
      {
        id: "data-migration",
        h: "Treat data migration as its own project",
        p: [
          "Data outlives code. Legacy data often contains duplicates, inconsistent formats and fields used for purposes they were never designed for. Plan cleaning, mapping and verification explicitly, with counts and checksums that prove nothing was lost.",
          "When the last capability moves, decommissioning the old system should be a formality: every consumer already uses the new interface, every dataset has been verified, and the business has been running on the new system for weeks.",
        ],
      },
    ],
    service: "software-modernization",
  },
  {
    slug: "custom-crm-vs-off-the-shelf",
    category: "business-technology",
    title: "Custom CRM or off-the-shelf? A practical way to decide",
    subtitle: "The question is not which is better, but where your process differs from the average.",
    summary: "Packaged CRMs are excellent for standard sales pipelines. A custom CRM earns its cost only where your process is genuinely different. Here is how to tell which situation you are in.",
    author: "Eryon Engineering",
    published: "2026-08-26",
    updated: "2026-08-26",
    image: B + "marblemart-2.webp",
    imageAlt: "CRM dashboard showing leads, inventory status and quotations",
    takeaways: [
      "If your sales process looks like everyone else's, buy — don't build.",
      "Custom makes sense when inventory, pricing or approvals are specific to your business.",
      "Count the total cost of licences plus customisation plus workarounds, not the licence alone.",
      "A hybrid — packaged CRM plus a custom operational system — is often the right answer.",
    ],
    sections: [
      {
        id: "start-with-process",
        h: "Start with the process, not the product",
        p: [
          "Most CRM decisions start with a product comparison. A better start is a map of your actual process: how a lead arrives, who owns it, what information changes hands, what gets approved and by whom, and what the customer receives at each stage.",
          "Once the process is on paper, compare it with the standard model most CRMs use: contacts, companies, deals and stages. The size of the gap is what should drive the decision.",
        ],
      },
      {
        id: "when-to-buy",
        h: "When a packaged CRM is the right answer",
        p: ["If your process fits the contact-deal-stage model, a packaged CRM gives you mature features, integrations and mobile apps immediately. Building the same thing custom is rarely a good use of money."],
        list: [
          "Your pipeline is linear and similar to other companies in your sector.",
          "Products are standard, with list pricing or simple discounts.",
          "Most value comes from contact management, email and reporting.",
          "Your team is small and needs to start this month.",
        ],
      },
      {
        id: "when-to-build",
        h: "When custom earns its cost",
        p: [
          "Custom becomes worthwhile when the valuable part of your process sits outside the standard model — and teams are running it in spreadsheets next to the CRM.",
          "In our work with a stone distributor, for example, each slab is unique and physically located in a specific warehouse. Reserving the right slab at the moment of quotation was the most important thing the system had to do. No standard deal object could express it without heavy customisation.",
        ],
        list: [
          "Inventory is unique, reserved or location-specific.",
          "Pricing depends on rules, configurations or customer-specific agreements.",
          "Approvals involve several roles with conditional logic.",
          "Sales, operations and finance must share the same live records.",
        ],
      },
      {
        id: "total-cost",
        h: "Compare total cost, honestly",
        p: [
          "Licence cost is the visible number. The full cost of a packaged CRM includes per-seat pricing as the team grows, paid add-ons, customisation work, integration work and — often largest — the time staff spend on workarounds.",
          "A custom system has a higher initial cost and lower marginal cost per user. It also needs ongoing maintenance. Put both on the same multi-year view before deciding.",
        ],
      },
      {
        id: "hybrid",
        h: "The hybrid option",
        p: [
          "Many businesses end up with a packaged CRM for contact management and email, and a custom operational system for the parts that are specific to them, connected through APIs. This keeps the mature features of the product while giving the unique process a proper home.",
        ],
      },
    ],
    service: "crm-erp-development",
  },
  {
    slug: "multi-tenant-saas-architecture",
    category: "architecture",
    title: "Choosing a tenancy model for a B2B SaaS product",
    subtitle: "Shared tables, separate schemas or separate databases — and how to change your mind later.",
    summary: "Tenancy is one of the most expensive decisions to reverse in a SaaS product. A practical comparison of the three common models and the signals that should drive the choice.",
    author: "Eryon Engineering",
    published: "2026-08-12",
    updated: "2026-09-02",
    image: B + "gym-crm-dashboard.webp",
    imageAlt: "SaaS admin dashboard showing membership plans and billing",
    takeaways: [
      "Most B2B products should start with a shared database and row-level isolation.",
      "Move specific tenants to dedicated schemas or databases when compliance or size requires it.",
      "Enforce tenant context in the data layer, not only in application code.",
      "Design exports and backups per tenant from the start.",
    ],
    sections: [
      {
        id: "three-models",
        h: "The three common models",
        p: ["Multi-tenant systems usually use one of three approaches, each trading isolation against operational cost."],
        list: [
          "Shared database, shared tables: every row carries a tenant identifier. Cheapest to run, simplest to deploy, weakest isolation by default.",
          "Shared database, schema per tenant: tables are duplicated per tenant inside one database. Better isolation, more complex migrations.",
          "Database per tenant: strongest isolation and easiest per-tenant backup, highest operational cost.",
        ],
      },
      {
        id: "default-choice",
        h: "A sensible default",
        p: [
          "For most early B2B products, shared tables with a tenant identifier on every row is the right starting point. It keeps infrastructure simple and makes cross-tenant operations — billing, analytics, support — straightforward.",
          "The risk is data leakage through a missing filter. Mitigate it in the database, not only in code: PostgreSQL row-level security policies, for example, can enforce that every query is scoped to the current tenant even if a developer forgets.",
        ],
      },
      {
        id: "signals",
        h: "Signals that you need more isolation",
        p: ["Stronger isolation becomes worthwhile when specific conditions appear. It rarely needs to apply to every tenant."],
        list: [
          "An enterprise customer contractually requires dedicated storage.",
          "Regulation requires data residency in a specific region.",
          "A single tenant's volume affects performance for others.",
          "Customers need independent backup and restore.",
        ],
      },
      {
        id: "hybrid-tenancy",
        h: "Plan for a hybrid",
        p: [
          "The most practical long-term design supports more than one model: most tenants share infrastructure, while a few large or regulated tenants get dedicated databases. That is only possible if tenant resolution happens in one place — typically a routing layer that maps each request to the right connection.",
          "Build that routing layer early, even if it always returns the same database at first. It is a small cost now and a large saving later.",
        ],
      },
      {
        id: "operational-details",
        h: "Operational details that matter",
        p: ["Tenancy affects more than the schema. Rate limits, background jobs, file storage paths, caches and logs all need tenant context. So do customer-facing features like data export and account deletion, which enterprise buyers will ask about during procurement."],
      },
    ],
    service: "saas-development",
  },
  {
    slug: "role-based-access-control-that-scales",
    category: "security",
    title: "Role-based access control that survives growth",
    subtitle: "Designing permissions for the organisation you will be, not only the one you are.",
    summary: "Access control often starts as an 'admin' flag and becomes a tangle of special cases. A structure for roles, permissions and scopes that stays understandable as the business grows.",
    author: "Eryon Engineering",
    published: "2026-07-29",
    updated: "2026-07-29",
    image: B + "hrms-dashboard-dark.webp",
    imageAlt: "Administrative dashboard for a hospital HR system with role-based navigation",
    takeaways: [
      "Separate roles (who someone is) from permissions (what an action requires).",
      "Add scopes — location, department, ownership — as a second dimension.",
      "Enforce access on the server for every request; the interface only hides what is not allowed.",
      "Log every change to roles and every sensitive access.",
    ],
    sections: [
      {
        id: "how-it-breaks",
        h: "How access control usually breaks",
        p: [
          "Most systems start with two kinds of users: administrators and everyone else. As the business grows, exceptions appear — a manager who can approve but not delete, a branch that should only see its own records, an auditor who can read everything and change nothing. Each exception becomes an if-statement, and soon nobody can say with confidence who can do what.",
        ],
      },
      {
        id: "roles-and-permissions",
        h: "Roles and permissions are different things",
        p: [
          "Define permissions as the actions your system supports — create invoice, approve leave, export report. Define roles as named bundles of permissions that match real job functions. Code checks permissions, never role names.",
          "This one rule makes change cheap. When a new job function appears, you create a role from existing permissions instead of editing code in dozens of places.",
        ],
      },
      {
        id: "scopes",
        h: "Add scope as a second dimension",
        p: ["Permissions answer 'can this person approve leave?'. Scopes answer 'for whom?'. In a hospital system, a department head may approve leave only for their department; in a multi-campus school, a principal sees only their campus."],
        list: [
          "Organisational scope: company, region, branch, department.",
          "Ownership scope: records the user created or is assigned to.",
          "Relationship scope: a parent sees only their own children's records.",
        ],
      },
      {
        id: "enforce-on-server",
        h: "Enforce on the server, every time",
        p: [
          "Hiding a button is a usability feature, not a security control. Every API request must check permission and scope on the server, ideally in a shared layer so individual endpoints cannot forget. Where the database supports it, row-level policies add a further safety net.",
        ],
      },
      {
        id: "audit",
        h: "Make access auditable",
        p: [
          "Record every change to roles and assignments, and every access to sensitive records. When a customer, auditor or regulator asks who could see what and when, the answer should come from a query, not from memory.",
        ],
      },
    ],
    service: "cybersecurity",
  },
  {
    slug: "what-good-discovery-produces",
    category: "guides",
    title: "What a good discovery phase should give you",
    subtitle: "The documents you should expect before any software development starts.",
    summary: "Discovery is where a software project's cost and risk are mostly decided. A checklist of what a useful discovery phase produces, and the warning signs of one that won't help.",
    author: "Eryon Engineering",
    published: "2026-07-15",
    updated: "2026-08-20",
    image: B + "edunexus-1.webp",
    imageAlt: "School ERP dashboard showing admissions and attendance modules",
    takeaways: [
      "Discovery should produce decisions, not just documentation.",
      "Expect a process map, a scoped first release, an architecture outline and an estimate with assumptions.",
      "Involve the people who do the work, not only the people who manage it.",
      "A good discovery sometimes recommends building less — or not building at all.",
    ],
    sections: [
      {
        id: "purpose",
        h: "What discovery is for",
        p: [
          "Discovery exists to replace assumptions with decisions before they become expensive. It answers what the first release must do, for whom, with which integrations, under which constraints — and what it will reasonably cost.",
        ],
      },
      {
        id: "deliverables",
        h: "What you should receive",
        p: ["A useful discovery ends with a small set of documents your team can read, challenge and approve."],
        list: [
          "A process map of how work happens today and how it will happen in the new system.",
          "User roles and what each needs to see and do.",
          "A scoped first release, with what is deliberately left for later.",
          "Integration inventory: every system the new one must talk to, and how.",
          "Architecture outline: data model, components, hosting and security approach.",
          "Estimate and plan, with the assumptions behind them written down.",
        ],
      },
      {
        id: "who-to-involve",
        h: "Who needs to be in the room",
        p: [
          "Managers describe how a process should work. The people doing the work describe how it actually works — including the workarounds that the new system must either support or remove. Both views are needed, and the second is usually where the important requirements hide.",
        ],
      },
      {
        id: "warning-signs",
        h: "Warning signs",
        list: [
          "A requirements document that lists screens but not workflows.",
          "No written assumptions behind the estimate.",
          "No discussion of data migration or integrations.",
          "Every requested feature included in the first release.",
        ],
        p: ["Any of these suggests the difficult decisions have been postponed into development, where they cost more."],
      },
      {
        id: "building-less",
        h: "Sometimes the answer is to build less",
        p: [
          "An honest discovery will occasionally recommend a packaged product, a smaller first release, or a process change instead of software. That is a good outcome: the cheapest code is the code that never needs to be written.",
        ],
      },
    ],
    service: "custom-software-development",
  },
  {
    slug: "event-driven-order-systems",
    category: "cloud",
    title: "Event-driven order systems: keeping checkout alive under load",
    subtitle: "Lessons from building a food delivery platform on Kafka and Spring Boot.",
    summary: "When ordering, payments, menus and dispatch share one application, a slow component can take down checkout. How event-driven design isolates failures — and what it costs.",
    author: "Eryon Engineering",
    published: "2026-06-30",
    updated: "2026-07-10",
    image: B + "craverush-fleet-dashboard.webp",
    imageAlt: "Fleet dispatch dashboard showing active deliveries and order statuses",
    takeaways: [
      "Isolate the path that takes money from everything else.",
      "Use events for work that doesn't need to finish before the customer gets a response.",
      "Each service should own its data; share through events, not shared tables.",
      "Distributed tracing is not optional once requests cross services.",
    ],
    sections: [
      {
        id: "the-problem",
        h: "The problem with peaks",
        p: [
          "Food delivery demand arrives in sharp peaks around meal times. In a single application, menu browsing, recommendations, dispatch and checkout compete for the same threads, connections and memory. A slow query in one area can exhaust resources that checkout needs.",
        ],
      },
      {
        id: "protect-checkout",
        h: "Protect the path that takes money",
        p: [
          "The first design principle was simple: the order and payment path must keep working even if everything else is degraded. That meant separating ordering and payments into their own services with their own data stores, and making every other interaction with them asynchronous.",
        ],
      },
      {
        id: "events",
        h: "Use events for everything that can wait",
        p: ["When an order is placed, the customer needs a confirmation immediately. Notifying the restaurant, assigning a rider and updating analytics can happen a moment later. Publishing an 'order placed' event to Kafka lets each of those consumers work at its own pace — and fail without affecting the order itself."],
        list: [
          "Order service: accepts the order and publishes an event.",
          "Restaurant service: consumes the event and updates the kitchen view.",
          "Dispatch service: consumes the event and assigns a rider.",
          "Notification service: informs the customer as status events arrive.",
        ],
      },
      {
        id: "data-ownership",
        h: "Let each service own its data",
        p: [
          "Orders and payments need transactions, so they live in PostgreSQL. Menus are documents that change shape by restaurant, so they live in MongoDB. Services never read each other's tables; they keep the data they need up to date by consuming events.",
        ],
      },
      {
        id: "costs",
        h: "What it costs",
        p: [
          "Event-driven systems are harder to reason about than a single application. Data is eventually consistent, failures can happen between services, and debugging requires following a request across several processes. Distributed tracing — Zipkin, in this case — and idempotent consumers are the minimum investment that makes the architecture manageable.",
          "For a small internal tool, this would be over-engineering. For a platform whose revenue depends on checkout staying up at peak, it is the right trade-off.",
        ],
      },
    ],
    service: "cloud-devops",
  },
];

// Newest first: articles[0] is the featured / "new guide" article.
export const articles: Article[] = [...ownArticles, ...migratedArticles].sort((a, b) => b.published.localeCompare(a.published));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export function readingTime(a: Article) {
  const words = a.sections.flatMap((s) => [...s.p, ...(s.list ?? [])]).join(" ").split(/\s+/).length + a.summary.split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
