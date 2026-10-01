// Case studies. Descriptions are drawn from Eryon's existing project records.
// No performance numbers: add a metric only when the client has confirmed it.
const B = "/img/"; // self-hosted WebP copies of project screenshots

export type Platform = "Web" | "Mobile" | "Web + Mobile";
export type BusinessType = "B2B" | "B2C" | "Internal operations";

export type Project = {
  slug: string;
  title: string;
  kind: string; // what it is, in a few words
  industry: string; // industry slug
  industryLabel: string;
  services: string[]; // service slugs
  platform: Platform;
  businessType: BusinessType;
  outcome: string; // one line, qualitative
  challenge: string; // one sentence
  solution: string; // one sentence
  overview: string;
  challengeLong: string;
  approach: string;
  architecture: string[];
  product: string;
  features: string[];
  ux: string[];
  tech: string[];
  deployment: string;
  outcomeLong: string;
  images: string[];
  imageAlts?: string[]; // when images are photos rather than product screens
  mobileShots?: boolean;
  heroPosition?: string; // object-position utility override, when the default center crop cuts off left-anchored hero text
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "marblemart-crm",
    title: "MarbleMart CRM",
    kind: "Sales and inventory CRM for a stone distributor",
    industry: "manufacturing",
    industryLabel: "Manufacturing & Distribution",
    services: ["crm-erp-development", "web-applications", "business-automation"],
    platform: "Web",
    businessType: "B2B",
    outcome: "One live view of stock, leads and quotations shared by sales, logistics and management.",
    challenge: "High-value marble inventory across warehouses was tracked in spreadsheets, so sales rarely knew what was actually available.",
    solution: "A role-based CRM where logistics updates stock and the sales team sees it immediately, with quotations and invoices generated from the same records.",
    overview:
      "MarbleMart sells and distributes natural stone to builders, architects and retailers. Each slab is unique, expensive and physically stored in one of several locations. The business needed a single operating system for leads, stock, quotations and field sales instead of a chain of spreadsheets and phone calls.",
    challengeLong:
      "Stock lived in spreadsheets updated at different times by different people. Sales staff quoted slabs that had already been reserved, logistics had no structured view of what was promised to whom, and management could only see the pipeline by asking. Every mistake was costly because every slab is one of a kind.",
    approach:
      "We started with the reservation problem, because it caused the most expensive errors. We mapped the life of a single slab from arrival to delivery, identified who changes its state at each step, and designed the CRM around those state changes rather than around generic contact records.",
    architecture: [
      "Next.js application with server-rendered dashboards for each role",
      "PostgreSQL (via Supabase) as the single source of truth for stock, leads and quotations",
      "Real-time database subscriptions so inventory changes appear on every open screen",
      "Row-level security and role-based access for sales, logistics and administrators",
      "Server-side PDF generation for quotations and invoices",
    ],
    product:
      "Sales staff get a pipeline of leads with assigned owners and follow-ups, an inventory browser with live availability, and a quotation builder that reserves slabs as it is issued. Logistics see what has been sold and what needs to move. Management gets dashboards across the whole operation.",
    features: [
      "Lead capture, assignment and follow-up tracking",
      "Slab-level inventory with location and reservation status",
      "Quotation builder that reserves stock on issue",
      "Automated PDF quotations and invoices",
      "Role-based dashboards for sales, logistics and administration",
      "Document storage against customers and orders",
    ],
    ux: [
      "Availability is shown as a status on every product row, so no one has to open a record to know if it can be sold.",
      "Quotation creation happens in a single screen with stock search built in, because that is where most errors used to happen.",
      "Dense tables for office staff; simplified cards on tablet for warehouse use.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    deployment: "Cloud-hosted web application with managed PostgreSQL, deployed through a Git-based pipeline with separate staging and production environments.",
    outcomeLong:
      "Sales, logistics and management now work from the same records. Reservations are made in the system rather than by phone, quotations are produced from live stock, and the leadership team can see pipeline and inventory without asking for a report.",
    images: [B + "marblemart-home.webp", B + "marblemart-1.webp", B + "marblemart-2.webp", B + "marblemart-3.webp", B + "marblemart-4.webp"],
    heroPosition: "object-left-top", // hero headline sits at the left edge — center-crop was clipping it
    live: "https://custom-crm-next-supabase.vercel.app",
  },
  {
    slug: "hospital-hrms",
    title: "Hospital HRMS",
    kind: "Workforce management for hospital staff",
    industry: "healthcare",
    industryLabel: "Healthcare",
    services: ["web-applications", "crm-erp-development", "cybersecurity"],
    platform: "Web",
    businessType: "Internal operations",
    outcome: "Shifts, leave, attendance and staff records in one secure system instead of several disconnected tools.",
    challenge: "Hospital HR ran across fragmented systems, causing shift conflicts and slow communication with clinical staff.",
    solution: "A centralized HRMS with role-based access, rota planning, attendance, leave and document management built for clinical shift patterns.",
    overview:
      "Hospitals schedule people around the clock, across departments with different skills, credentials and regulations. This HRMS brings employee records, shift scheduling, attendance, leave, payroll support and documents into a single platform for administrators, department heads and staff.",
    challengeLong:
      "Rotas were planned in one place, leave approved in another and attendance recorded in a third. Conflicts surfaced only when a shift was already short. Credential and document checks were manual, and sensitive staff data sat in files with little access control.",
    approach:
      "We modelled the hospital as departments, roles and shift templates first, then built scheduling on top of that model so conflicts could be detected before a rota was published. Access control was designed at the start rather than added later, because different roles see very different data.",
    architecture: [
      "Next.js front end with separate dashboards per role",
      "Spring Boot services for scheduling, attendance and HR records",
      "PostgreSQL for structured HR data; MongoDB for documents and audit trails",
      "Redis for session and scheduling caches",
      "JWT and OAuth-based authentication with role-based access control",
      "Containerised with Docker for consistent environments",
    ],
    product:
      "Administrators manage departments, staff and shift templates. Department heads build and publish rotas, approve leave and track attendance. Staff see their schedule, request leave and keep their documents current.",
    features: [
      "Department and role management",
      "Shift templates and rota planning with conflict checks",
      "Attendance tracking and leave workflows",
      "Staff document and credential records",
      "Payroll support exports",
      "Light and dark dashboard themes for day and night shifts",
    ],
    ux: [
      "Rotas are shown as a week grid by department, the format hospital coordinators already use on paper.",
      "Conflicts are flagged inline on the grid before publishing instead of in a separate report.",
      "A dark theme was added specifically for night-shift coordinators.",
    ],
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "Docker", "JWT / OAuth"],
    deployment: "Containerised services deployed to cloud infrastructure with environment separation and role-restricted administrative access.",
    outcomeLong:
      "Scheduling, leave and attendance now share the same data, so conflicts are visible before they reach a ward. Sensitive records are protected by role, and HR staff spend less time reconciling information between tools.",
    images: [B + "hrms-home.webp", B + "hrms-dashboard-light.webp", B + "hrms-appointments.webp", B + "hrms-patients.webp", B + "hrms-dashboard-dark.webp"],
    live: "https://medical-hospital-crm-website.vercel.app",
  },
  {
    slug: "edunexus-erp",
    title: "EduNexus",
    kind: "School ERP with web and mobile apps",
    industry: "education",
    industryLabel: "Education",
    services: ["crm-erp-development", "mobile-applications", "web-applications"],
    platform: "Web + Mobile",
    businessType: "B2B",
    outcome: "Admissions, academics, fees, transport and parent communication in one platform with dedicated mobile apps.",
    challenge: "Schools were running admissions, attendance, fees and communication on separate systems that did not share data.",
    solution: "A multi-campus school ERP with role-based dashboards and mobile apps for parents, teachers and administrators.",
    overview:
      "EduNexus is a school management platform covering the full student lifecycle: admissions, attendance, examinations and grading, fees, payroll, transport, timetables, library and parent-teacher communication. It supports multiple campuses and gives every role its own view of the institution.",
    challengeLong:
      "Institutions were entering the same student data into several systems. Reports disagreed with each other, parents received information late, and administrators had no single view of academic performance, fee collection or operations across campuses.",
    approach:
      "We designed a shared data model around the student and the campus first, so every module — attendance, fees, grades, transport — reads and writes the same records. Mobile apps were planned alongside the web platform, not after it, because parents and teachers would use phones far more than desktops.",
    architecture: [
      "Modular web platform with a shared student and campus data model",
      "Dedicated mobile applications for parents, teachers and administrators",
      "Role-based dashboards for administrators, teachers, students, parents, accountants, librarians and transport coordinators",
      "Online fee payments with automated receipts",
      "Notifications through SMS, email and push",
      "Multi-campus support with campus-level data separation",
      "Java Spring Boot back end with PostgreSQL",
    ],
    product:
      "Administrators run admissions, timetables, fees and staff. Teachers take attendance, set assignments and enter grades from their phones. Parents follow attendance, homework, exam schedules, fees and transport updates, and message teachers directly.",
    features: [
      "Admissions and student lifecycle records",
      "Attendance, examinations and grading",
      "Fee collection with online payments",
      "Transport routes and timetable scheduling",
      "Library and document management",
      "Parent–teacher messaging and announcements",
    ],
    ux: [
      "Every role lands on a dashboard showing only what that role acts on today.",
      "Teacher workflows — attendance and grading — were designed for one-handed phone use in a classroom.",
      "Parents see one timeline per child instead of separate modules.",
    ],
    tech: ["React", "React Native", "Java", "Spring Boot", "PostgreSQL", "Twilio", "Stripe"],
    live: "https://edu-nexus-school-erp.vercel.app/login",
    deployment: "Cloud-hosted platform with separate web and mobile release tracks, designed for multiple campuses on one installation.",
    outcomeLong:
      "Student data is entered once and used everywhere. Parents receive attendance, fee and transport updates on their phones, teachers handle routine work from the classroom, and administrators can see each campus from a single dashboard.",
    images: [B + "edunexus-home.webp", B + "edunexus-1.webp", B + "edunexus-3.webp", B + "edunexus-2.webp", B + "edunexus-4.webp", B + "edunexus-5.webp", B + "edunexus-6.webp"],
    heroPosition: "object-left-top", // badge text sits at the left edge — center-crop was clipping it
  },
  {
    slug: "realist-crm",
    title: "Realist CRM",
    kind: "Property and client CRM for real estate agencies",
    industry: "real-estate",
    industryLabel: "Real Estate",
    services: ["crm-erp-development", "web-applications", "business-automation"],
    platform: "Web",
    businessType: "B2B",
    outcome: "Listings, clients and follow-ups managed in one CRM with map-based property search and automated messages.",
    challenge: "Agents were managing exclusive listings and demanding clients across spreadsheets, messages and memory.",
    solution: "A real estate CRM with geospatial property search, client pipelines and automated follow-up messaging.",
    overview:
      "Realist is a CRM for agencies that sell and lease premium property. It connects listings, clients, viewings and follow-ups so agents can match the right property to the right buyer quickly and never lose track of a conversation.",
    challengeLong:
      "Listings were kept in spreadsheets, client preferences in agents' heads and follow-ups in personal phones. When an agent was unavailable, nobody else could pick up the client. Searching for a property by area meant scrolling rows of addresses.",
    approach:
      "We designed around the two questions agents ask most: which properties match this client, and who needs a call today. The data model links clients to preferences and listings to locations, so both questions have an answer on one screen.",
    architecture: [
      "React front end with map-first property search",
      "Python FastAPI back end",
      "PostgreSQL for listings, clients and activity history",
      "Mapbox for geospatial search and property mapping",
      "Twilio for automated SMS follow-ups",
    ],
    product:
      "Agents search listings on a map, filter by area and criteria, and attach properties to clients. Each client has a pipeline stage, a history of viewings and messages, and scheduled follow-ups that the system can send automatically.",
    features: [
      "Map-based property search with area filters",
      "Listing management with media",
      "Client pipelines and preference matching",
      "Viewing schedules and activity history",
      "Automated SMS follow-ups",
      "Agency-level reporting",
    ],
    ux: [
      "The map is the default view because agents think in neighbourhoods, not in rows.",
      "A 'today' list shows every follow-up due, across all clients, in one place.",
      "Visual design matched the premium tone of the listings agents present to clients.",
    ],
    tech: ["React", "Python", "FastAPI", "PostgreSQL", "Mapbox", "Twilio"],
    deployment: "Separately deployed front end and API with managed PostgreSQL and environment-based configuration for messaging providers.",
    outcomeLong:
      "Client history now belongs to the agency rather than to individual agents' phones. Matching properties to buyers is faster, and routine follow-ups go out on time without manual reminders.",
    images: [B + "realist-home.webp", B + "realist-1.webp", B + "realist-2.webp", B + "realist-3.webp", B + "realist-4.webp"],
    live: "https://real-estate-crm-xi-beryl.vercel.app/",
  },
  {
    slug: "craverush",
    title: "CraveRush",
    kind: "Event-driven food delivery platform",
    industry: "logistics",
    industryLabel: "Logistics & Delivery",
    services: ["custom-software-development", "cloud-devops", "web-applications"],
    platform: "Web",
    businessType: "B2C",
    outcome: "A delivery platform where a failure in one service does not stop customers from ordering and paying.",
    challenge: "A monolithic delivery system would let one overloaded component take down checkout during peak demand.",
    solution: "Spring Boot microservices communicating through Apache Kafka, with separate data stores for transactions and menus.",
    overview:
      "CraveRush is a food delivery platform covering customer ordering, restaurant management, fleet dispatch and administration. It was designed so that ordering and payments keep working even when other parts of the system are under strain.",
    challengeLong:
      "Order volume in food delivery arrives in sharp peaks around meal times. In a single application, a slow menu search or recommendation query can exhaust resources shared by checkout. The platform needed clear fault boundaries and full visibility into requests moving across services.",
    approach:
      "We separated the system along business boundaries — orders, payments, menus, dispatch — and made services communicate through events rather than direct calls where possible. Each service owns its data and can fail or scale independently.",
    architecture: [
      "Java Spring Boot microservices for orders, payments, menus and dispatch",
      "Apache Kafka for asynchronous events between services",
      "PostgreSQL for orders and payments (ACID transactions)",
      "MongoDB for menu and catalogue documents",
      "React single-page app with React Query for server state",
      "Distributed tracing with Zipkin; Docker-based environment",
      "Stripe for payments",
    ],
    product:
      "Customers browse restaurants, order and pay. Restaurants manage menus and incoming orders. Dispatchers track the fleet on a live dashboard, and administrators oversee the whole platform.",
    features: [
      "Customer ordering and checkout",
      "Restaurant menu and order management",
      "Fleet dashboard for dispatch",
      "Administrative dashboard across restaurants and orders",
      "Event-driven order state updates",
      "Distributed tracing across services",
    ],
    ux: [
      "Order status is driven by events, so customers see changes as they happen rather than on refresh.",
      "The fleet dashboard prioritises exceptions — late or unassigned orders — over a full list.",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "React", "PostgreSQL", "MongoDB", "Docker", "Stripe"],
    deployment: "Containerised services with a Docker-based stack, per-service configuration and tracing enabled across environments.",
    outcomeLong:
      "Checkout and payments are isolated from the rest of the platform, each service can be scaled on its own, and engineers can trace any order across every service it touched.",
    images: [B + "craverush-1.webp", B + "craverush-2.webp", B + "craverush-3.webp", B + "craverush-4.webp", B + "craverush-admin-dashboard.webp", B + "craverush-fleet-dashboard.webp"],
  },
  {
    slug: "construction-erp",
    title: "Construction ERP",
    kind: "Project, workforce and billing platform for an infrastructure firm",
    industry: "b2b",
    industryLabel: "Construction & Infrastructure",
    services: ["crm-erp-development", "business-automation", "web-applications"],
    platform: "Web",
    businessType: "Internal operations",
    outcome: "Attendance, payroll, materials, documents and client billing across concurrent sites in one role-based system.",
    challenge: "Dozens of concurrent construction projects were run from disconnected spreadsheets for attendance, payroll and billing.",
    solution: "A role-based ERP for site teams, contractors and clients, with automated wage calculation and client ledgers.",
    overview:
      "An ERP for a firm running many construction projects at once. It connects site attendance, daily and monthly wages, materials, drawings and documents, and client billing, with a separate portal view for each type of participant.",
    challengeLong:
      "Each project kept its own spreadsheets for attendance, wages and bills. Leadership had no consolidated view of project financials or workforce cost, and preparing a client bill meant collecting figures from several people.",
    approach:
      "We identified the seven kinds of people involved in a project — administrators, site engineers, supervisors, contractors, consultants, workers and clients — and designed what each needs to see and do. Attendance and payroll were built first, because every other figure depends on them.",
    architecture: [
      "Next.js (App Router) front end with role-based portals",
      "Python FastAPI back end",
      "PostgreSQL for projects, attendance, payroll and billing",
      "MinIO object storage with presigned URLs for drawings and documents",
      "Redis for caching; Docker for deployment",
      "Google Sheets API for automated client ledgers",
    ],
    product:
      "Site teams record attendance daily. The payroll engine calculates daily and monthly wages. Documents and drawings are stored per project with controlled access, and client ledgers are generated automatically for billing.",
    features: [
      "Role-based portals for seven participant types",
      "Daily attendance and wage calculation",
      "Project documents and drawing storage",
      "Automated client ledger generation",
      "Materials and stock tracking",
      "Project-level financial overview",
    ],
    ux: [
      "Attendance entry is designed for supervisors on a phone at the site gate.",
      "Every participant sees only their projects and their own actions.",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "MinIO", "Redis", "Docker", "Google Sheets API"],
    deployment: "Containerised deployment with object storage for documents and scheduled jobs for payroll and ledger generation.",
    outcomeLong:
      "Project financials, workforce costs and client billing now come from the same records. Supervisors capture attendance once and payroll and billing follow from it.",
    images: [B + "infra-0.webp", B + "infra-1.webp", B + "infra-2.webp", B + "infra-3.webp", B + "infra-4.webp"],
  },
  {
    slug: "atelier-commerce",
    title: "Atelier",
    kind: "Fashion e-commerce platform with admin portal",
    industry: "retail",
    industryLabel: "Retail & E-commerce",
    services: ["ecommerce-development", "ui-ux-design", "web-applications"],
    platform: "Web",
    businessType: "B2C",
    outcome: "An editorial storefront and a full back office for catalogue, orders, customers and campaigns.",
    challenge: "The brand needed a storefront that matched its premium positioning without giving up search, filtering or operational control.",
    solution: "An editorial-style storefront with advanced filtering and wishlists, paired with an administration portal for the whole retail operation.",
    overview:
      "Atelier is an e-commerce platform for a fashion label. The customer side presents collections the way a lookbook would; the operational side gives the team control of catalogue, inventory, orders, customers, promotions and reporting.",
    challengeLong:
      "Template storefronts made the brand look like every other store and slowed down with large image sets. The team also needed back-office tools that the templates only offered through paid add-ons.",
    approach:
      "Design and engineering worked together from the start: editorial layouts were designed with image loading budgets, and the admin portal was scoped from the team's daily operational tasks.",
    architecture: [
      "Next.js storefront with responsive, image-optimised layouts",
      "Spring Boot services with PostgreSQL and MongoDB",
      "RabbitMQ for order events; Valkey for caching",
      "Persistent cart and wishlist state",
      "Administration portal for catalogue, inventory, orders and customers",
      "Promotions and campaign management",
      "Sales and revenue reporting",
    ],
    product:
      "Shoppers browse editorial collections, filter and search products, save wishlists and check out. The team manages products, stock, orders, customers and campaigns from an admin portal with sales analytics.",
    features: [
      "Editorial collection pages",
      "Advanced filtering and real-time search",
      "Wishlists and persistent carts",
      "Catalogue and inventory management",
      "Order and customer management",
      "Promotions and sales reporting",
    ],
    ux: [
      "Large imagery with restrained typography keeps attention on the product.",
      "Filtering stays visible on desktop and collapses into a sheet on mobile.",
    ],
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "MongoDB", "Valkey", "RabbitMQ", "Docker", "WebSockets"],
    deployment: "Containerised back-end services with a message broker for order events, deployed separately from the storefront with its own admin access.",
    live: "https://atelier-clothing-store-one.vercel.app",
    outcomeLong:
      "The brand has a storefront that reflects its positioning and a back office its team runs daily without add-ons or manual workarounds.",
    images: [B + "atelier-clothing-showcase.webp", B + "atelier-home.webp", B + "atelier-1.webp", B + "atelier-2.webp", B + "atelier-3.webp", B + "atelier-4.webp", B + "atelier-5.webp"],
  },
  {
    slug: "atelier-mobile",
    title: "Atelier Mobile",
    kind: "React Native shopping app with in-app admin",
    industry: "retail",
    industryLabel: "Retail & E-commerce",
    services: ["mobile-applications", "ecommerce-development", "ui-ux-design"],
    platform: "Mobile",
    businessType: "B2C",
    outcome: "A complete shopping flow and store administration in one cross-platform app.",
    challenge: "The brand needed a native-feeling app covering the full retail loop that could be demonstrated on any device instantly.",
    solution: "An Expo and React Native app with browsing, wishlist, checkout and a built-in admin panel for orders, products and analytics.",
    overview:
      "Atelier Mobile is the cross-platform companion to the Atelier storefront. It covers browsing, search, product detail, cart, checkout, order confirmation and community features, plus an administration area for the store team.",
    challengeLong:
      "The app had to feel native on iOS and Android, stay fast on mid-range phones and be easy to demonstrate to stakeholders without standing up infrastructure first.",
    approach:
      "We used Expo for a single cross-platform codebase, kept state local and persisted so demos work offline, and put performance work — memoised lists, code-splitting across screens — into the first release rather than a later clean-up.",
    architecture: [
      "React Native with Expo and TypeScript",
      "React Navigation with bottom tabs and native stacks",
      "Zustand for cart, wishlist, auth, search and admin state",
      "Persisted local storage for offline-capable demos",
      "Lazy-loaded screens and error boundaries for crash isolation",
    ],
    product:
      "Customers browse new arrivals, search, view product detail, manage their cart and complete checkout. Store staff use the admin area for revenue overview, products, customers and settings.",
    features: [
      "Product browsing, search and detail",
      "Cart and multi-step checkout",
      "Wishlist and account",
      "Admin overview and analytics",
      "Product and customer management",
      "Offline-capable demo mode",
    ],
    ux: [
      "Checkout is split into short steps with progress shown at the top.",
      "Admin tools sit inside the same app so store staff don't need a second product.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "React Navigation", "Zustand"],
    deployment: "Distributed through Expo for review builds, with a path to App Store and Play Store releases.",
    outcomeLong:
      "The brand has one codebase serving iOS and Android shoppers and store staff, fast enough on everyday phones and ready for store release.",
    images: [B + "atelier-mobile-home.webp", B + "atelier-mobile-products.webp", B + "atelier-mobile-admin-overview.webp", B + "atelier-mobile-checkout-1.webp", B + "atelier-mobile-product-detail.webp", B + "atelier-mobile-cart.webp", B + "atelier-mobile-admin-analytics.webp"],
    mobileShots: true,
  },
  {
    slug: "fitness-operations",
    title: "Gym Operations Dashboard",
    kind: "Membership, billing and check-in platform",
    industry: "fitness",
    industryLabel: "Fitness & Wellness",
    services: ["web-applications", "saas-development", "business-automation"],
    platform: "Web",
    businessType: "B2B",
    outcome: "Memberships, recurring billing and check-ins in one cloud dashboard usable from a tablet on the gym floor.",
    challenge: "Fitness centres were reconciling payments and attendance by hand in desktop-bound software.",
    solution: "A cloud admin panel with recurring billing through Stripe and real-time check-in sync.",
    overview:
      "An administration platform for fitness centres that brings member records, subscription billing, check-ins and facility analytics into one place.",
    challengeLong:
      "Payment data and attendance lived in separate tools, so staff reconciled them manually. Expired memberships were spotted late, and owners had no clear view of how the facility was used.",
    approach:
      "We designed around the front desk: the screens staff use dozens of times a day — check-in, membership status, payment — were built first and optimised for tablets.",
    architecture: [
      "Next.js application with server-side rendering",
      "Supabase (PostgreSQL) with real-time subscriptions for check-ins",
      "Stripe for recurring subscription billing",
      "Role-based access for owners and staff",
    ],
    product:
      "Staff check members in, see membership status instantly and manage renewals. Owners see membership and usage analytics and a list of expired or expiring members to follow up.",
    features: [
      "Member records and membership plans",
      "Recurring billing with Stripe",
      "Real-time check-in",
      "Expired membership tracking",
      "Facility usage analytics",
    ],
    ux: [
      "Large touch targets and a simplified layout for tablet use at the front desk.",
      "Expired and expiring memberships have their own list, so follow-up is a task, not a search.",
    ],
    tech: ["Next.js", "React", "Supabase", "PostgreSQL", "Stripe", "Tailwind CSS"],
    deployment: "Cloud deployment with managed database and Stripe webhooks for billing events.",
    outcomeLong:
      "Billing and attendance share one record per member, so reconciliation is no longer a manual task and renewals are followed up on time.",
    images: [B + "gym-home.webp", B + "gym-crm-dashboard.webp", B + "gym-membership.webp", B + "gym-crm-analytics.webp", B + "gym-crm-expired.webp"],
    live: "https://gym-website-admin-panel.vercel.app",
  },
  {
    slug: "velorian",
    title: "Velorian",
    kind: "Headless e-commerce for a luxury watch brand",
    industry: "retail",
    industryLabel: "Retail & E-commerce",
    services: ["ecommerce-development", "web-applications", "ui-ux-design"],
    platform: "Web",
    businessType: "B2C",
    outcome: "A fast, server-rendered storefront that presents detailed product imagery without slowing the page.",
    challenge: "Luxury products need detailed imagery, but heavy pages lose buyers before the product is seen.",
    solution: "A server-rendered headless storefront with optimised media and a content-managed catalogue.",
    overview:
      "Velorian is a headless e-commerce storefront for high-value watches. It separates the customer experience from commerce operations so the brand can control presentation completely while keeping checkout secure.",
    challengeLong:
      "Standard templates did not do justice to the product, and pages full of high-resolution images loaded slowly. The storefront had to feel premium and load quickly on mobile networks.",
    approach:
      "Server-side rendering and image optimisation were treated as design constraints from the first layout. Motion was kept subtle and used only to guide attention through a product story.",
    architecture: [
      "Next.js with server-side rendering for performance and SEO",
      "Headless commerce architecture",
      "Node.js services with PostgreSQL and Redis",
      "Optimised responsive images",
    ],
    product:
      "Shoppers move through collections, detailed product pages and a secure checkout. The marketing team curates collections without developer involvement.",
    features: [
      "Collection and product storytelling pages",
      "Responsive, optimised product imagery",
      "Secure checkout",
      "Content-managed collections",
      "Search-friendly server rendering",
    ],
    ux: [
      "Product pages lead with craftsmanship detail before specifications.",
      "Motion is limited to transitions that help the eye move through the page.",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    deployment: "Deployed on edge-cached infrastructure with server rendering for product and collection pages.",
    outcomeLong:
      "The brand presents its products at the level of detail they deserve, on pages that remain quick to load and easy for search engines to index.",
    images: [B + "velorian-home.webp", B + "velorian-1.webp", B + "velorian-2.webp", B + "velorian-3.webp", B + "velorian-4.webp"],
    live: "https://velorian-luxury-store.vercel.app/",
  },
  {
    slug: "marblemart-web",
    title: "MarbleMart Web",
    kind: "Corporate B2B catalogue website",
    industry: "manufacturing",
    industryLabel: "Manufacturing & Distribution",
    services: ["web-applications", "ui-ux-design"],
    platform: "Web",
    businessType: "B2B",
    outcome: "A catalogue that shows heavy stone imagery quickly and brings in enquiries from organic search.",
    challenge: "Large marble images made the previous site slow, and corporate buyers left before collections loaded.",
    solution: "A Next.js catalogue with image optimisation, edge caching and search-focused page structure.",
    overview:
      "The public website for MarbleMart: a corporate catalogue of stone collections for architects, builders and trade buyers, connected to the company's enquiry process.",
    challengeLong:
      "Marble is sold on texture and colour, so the site depends on large, high-quality images. The old site served them unoptimised and loaded slowly, especially on mobile.",
    approach:
      "We used a minimal layout that lets textures carry the page, and treated image delivery — sizes, formats, caching — as the core engineering problem.",
    architecture: [
      "Next.js with static generation for catalogue pages",
      "Automatic image optimisation and responsive sizes",
      "Edge caching",
      "Structured metadata for search",
    ],
    product: "Buyers browse collections by stone type and finish, view large texture images and send enquiries directly to the sales team.",
    features: ["Collection catalogue", "Large texture imagery", "Enquiry forms", "Search-optimised page structure"],
    ux: ["A restrained interface so the stone is always the focus.", "Scroll-triggered reveals used sparingly to pace long collection pages."],
    tech: ["Next.js", "Tailwind CSS", "Vercel Edge"],
    deployment: "Statically generated and served from an edge network.",
    outcomeLong: "Collections load quickly on any device and the site now works as a lead source for the sales team rather than just a brochure.",
    images: [B + "marblemart-web-home.webp", B + "marblemart-web-1.webp", B + "marblemart-web-2.webp", B + "marblemart-web-3.webp", B + "marblemart-web-4.webp"],
    live: "https://marble-mart-website.vercel.app",
  },
  {
    slug: "hirestream",
    title: "HireStream",
    kind: "Recruitment portal for employers and candidates",
    industry: "professional-services",
    industryLabel: "Professional Services",
    services: ["web-applications", "custom-software-development", "cybersecurity"],
    platform: "Web",
    businessType: "B2B",
    outcome: "Job posting, applications and candidate tracking moved out of email threads into one secure portal.",
    challenge: "Hiring ran on scattered email threads and spreadsheets, so applications were lost and pipelines mismanaged.",
    solution: "A recruitment portal with a Spring Boot REST API, JWT-secured roles for recruiters and candidates, and status tracking.",
    overview:
      "HireStream is a recruitment portal where recruiters post jobs and manage applicants, and candidates apply and follow their application status.",
    challengeLong:
      "Recruiters tracked applicants across inboxes and spreadsheets. CVs went missing, candidates were contacted twice or not at all, and nobody had a reliable view of where each role stood.",
    approach:
      "We designed a clear API first — jobs, applications and status transitions — and secured it by role before building the two front-end experiences on top.",
    architecture: [
      "Java Spring Boot REST API with Spring Data JPA",
      "MySQL database",
      "Spring Security with JWT-based authentication",
      "React single-page app",
      "PDF generation for application records",
    ],
    product:
      "Recruiters post and manage jobs and move applicants through stages. Candidates build a profile, apply and track status. Administrators oversee the platform.",
    features: ["Job posting and management", "Candidate profiles and applications", "Application status tracking", "Role-based dashboards", "PDF exports"],
    ux: ["Candidates always see where their application stands.", "Recruiters get a stage-based view of every applicant for a role."],
    tech: ["Java", "Spring Boot", "MySQL", "Spring Security", "JWT", "React"],
    deployment: "API and front end deployed separately with environment-based secrets.",
    outcomeLong: "Every application lives in one place with a clear status, and recruiters no longer rely on inbox searches to manage hiring.",
    images: [B + "hirestream-hero.webp", B + "hirestream-login.webp", B + "hirestream-admin-dashboard.webp", B + "hirestream-candidate-dashboard.webp", B + "hirestream-admin-overview.webp"],
  },
  {
    slug: "origin",
    title: "Origin",
    kind: "Interactive website for a creative studio",
    industry: "media",
    industryLabel: "Creative & Media",
    services: ["ui-ux-design", "web-applications"],
    platform: "Web",
    businessType: "B2B",
    outcome: "A studio website where 3D and motion carry the brand, while staying smooth on everyday devices.",
    challenge: "A creative studio needed a website that felt like its own work, not a template, without becoming slow or hard to use.",
    solution: "A React single-page site with a Three.js 3D scene, scroll-linked typography and controlled smooth scrolling.",
    overview:
      "Origin is the website of a design studio. Its purpose is to show — not describe — how the studio thinks: a moving 3D surface on arrival, a manifesto revealed line by line as visitors scroll, and project imagery arranged in a composition rather than a grid.",
    challengeLong:
      "Studios are judged on their own website before anyone sees a portfolio piece. Template layouts looked like every other agency, but ambitious motion and 3D often make sites heavy, jumpy on scroll and difficult to read on phones. The site had to be expressive and still dependable.",
    approach:
      "We treated motion as part of the information design. Each animation had a job — introduce the studio, pace the manifesto, move between sections — and anything without a job was removed. Performance was checked on mid-range laptops and phones throughout, not at the end.",
    architecture: [
      "React single-page application built with Vite",
      "Three.js scene for the interactive 3D surface on the landing screen",
      "GSAP with scroll triggers for text reveals and section transitions",
      "Split-Type for line-by-line typography animation",
      "Lenis for consistent smooth scrolling across browsers",
      "Framer Motion for interface-level transitions",
    ],
    product:
      "Visitors land on a slow-moving 3D surface with the studio's statement, scroll into a manifesto that reveals itself line by line, then move through selected work and a studio map section before reaching contact.",
    features: [
      "Interactive 3D landing scene",
      "Scroll-linked manifesto typography",
      "Editorial project image compositions",
      "Smooth, consistent scrolling",
      "Responsive layouts for phone, tablet and desktop",
      "Language switcher in the header",
    ],
    ux: [
      "Motion always follows scroll position, so visitors control the pace instead of waiting for animations.",
      "Large type and high contrast keep the manifesto readable over dark, textured backgrounds.",
      "Heavy effects are simplified on small screens so the story still reads well on a phone.",
    ],
    tech: ["React", "Three.js", "GSAP", "Split-Type", "Lenis", "Framer Motion", "Vite"],
    deployment: "Built as a static single-page application and served from a CDN, with assets optimised for fast first load.",
    outcomeLong:
      "The studio has a website that works as a portfolio piece in itself. It stays readable and responsive on the devices clients actually use, and new projects can be added without redesigning the page.",
    images: [B + "origin-1.webp", B + "origin-2.webp", B + "origin-3.webp", B + "origin-4.webp"],
  },
  {
    slug: "kyprox",
    title: "Kyprox",
    kind: "Website platform for musicians and performers",
    industry: "media",
    industryLabel: "Creative & Media",
    services: ["ui-ux-design", "web-applications"],
    platform: "Web",
    businessType: "B2C",
    outcome: "Artist websites with 3D and particle visuals that still load fast on mobile and turn visits into enquiries.",
    challenge: "Musicians relied on website builders that looked generic and struggled with heavy visuals, media and enquiries.",
    solution: "A Next.js platform with Three.js and particle visuals, motion-led page transitions and a built-in enquiry flow.",
    overview:
      "Kyprox builds websites for musicians, artists and performers. The platform presents an artist's identity through interactive visuals — a particle logo, a 3D microphone, tactile slider controls — and gives fans and bookers a clear way to get in touch.",
    challengeLong:
      "Independent artists need a web presence that feels like their music, but most builders produce the same layouts and slow down under large images, video and animation. Bookings and collaboration requests also got lost in social media messages.",
    approach:
      "We designed a visual system that can be themed per artist, then kept the heavy work — 3D models and particles — isolated from content so pages render quickly and stay usable while visuals load. Every page ends in a clear route to enquire.",
    architecture: [
      "Next.js with server-rendered pages for speed and search visibility",
      "Three.js for 3D objects such as the studio microphone",
      "tsParticles for the animated particle logo",
      "GSAP and Framer Motion for scroll and page transitions",
      "Tailwind CSS design system themed per artist",
      "Form handling for booking and collaboration enquiries",
    ],
    product:
      "Visitors are greeted by a particle version of the artist's logo, explore services and packages presented around a 3D microphone, and use slider-style cards inspired by studio equipment before sending an enquiry.",
    features: [
      "Particle logo intro",
      "3D studio objects",
      "Service and package presentation",
      "Studio-inspired interactive cards",
      "Booking and collaboration enquiry form",
      "Mobile-first responsive layouts",
    ],
    ux: [
      "Visual themes borrow from studio hardware — faders and microphones — so the site feels native to music.",
      "Content stays readable and clickable while 3D elements load in the background.",
      "A persistent menu and short enquiry form keep the path to booking one tap away.",
    ],
    tech: ["Next.js", "Three.js", "GSAP", "Framer Motion", "tsParticles", "Tailwind CSS"],
    deployment: "Deployed on an edge network with server rendering for pages and optimised delivery for media assets.",
    outcomeLong:
      "Artists get a site that looks like their work rather than a template, loads quickly on phones and gives fans and bookers a direct way to reach them.",
    images: [B + "kyprox-1.webp", B + "kyprox-2.webp", B + "kyprox-3.webp", B + "kyprox-4.webp"],
  },
  {
    slug: "auraplanters",
    title: "Aura Planters",
    kind: "MERN e-commerce store for a plant boutique",
    industry: "retail",
    industryLabel: "Retail & E-commerce",
    services: ["ecommerce-development", "web-applications"],
    platform: "Web",
    businessType: "B2C",
    outcome: "An online plant store with product variants, INR checkout and an admin panel for orders, products and customers.",
    challenge: "A plant boutique needed an online store that could handle pot sizes, plant types and local delivery rules that store builders couldn't express.",
    solution: "A MERN-stack store with variant-aware products, Razorpay checkout and a full admin dashboard.",
    overview:
      "Aura Planters sells indoor plants and planters online. The store combines product browsing and checkout for customers with an administration panel the team uses to run catalogue, stock, orders and customers.",
    challengeLong:
      "Plants are sold in combinations — species, pot size, pot style — and stock moves quickly. Off-the-shelf store builders handled variants and delivery rules awkwardly, and the team wanted full control over how products were presented and fulfilled.",
    approach:
      "We modelled products and their variants first, so every combination has its own price and stock, then built checkout and delivery logic on top. The admin panel was designed around the team's daily tasks: adding stock, processing orders and answering customers.",
    architecture: [
      "React single-page storefront built with Vite",
      "Node.js and Express REST API",
      "MongoDB with Mongoose for products, variants, orders and users",
      "Redux Toolkit for cart, session and catalogue state",
      "JWT-based authentication for customers and administrators",
      "Razorpay for INR payments; Cloudinary for product image delivery",
    ],
    product:
      "Customers browse plants and planters, choose sizes and styles, add to cart and pay with Razorpay. Administrators manage products and variants, track stock, process orders and manage customer accounts from one dashboard.",
    features: [
      "Variant-aware product catalogue",
      "Cart and Razorpay checkout in INR",
      "Customer accounts and order history",
      "Admin dashboard for orders, products and users",
      "Stock tracking per variant",
      "Optimised product images",
    ],
    ux: [
      "Variant choices update price and availability instantly, so customers never reach checkout with an unavailable combination.",
      "A clean, light storefront keeps attention on the plants.",
      "Admin screens mirror the order of daily store tasks.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Razorpay", "Cloudinary", "Tailwind CSS", "Material UI"],
    deployment: "Separately deployed storefront and API, with managed MongoDB and environment-based payment configuration.",
    outcomeLong:
      "The boutique sells online with its own product structure and delivery rules, takes payments in INR and runs the whole store — catalogue to customers — from a single admin panel.",
    images: [B + "aura-1.webp", B + "aura-4.webp", B + "aura-2.webp", B + "aura-3.webp"],
    imageAlts: [
      "Succulent in a mint-green planter",
      "Succulents in terracotta planters",
      "Customer paying at a plant shop counter",
      "Laptop showing a sales dashboard",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectsBy = (slugs: string[]) => slugs.map(getProject).filter((p): p is Project => !!p);
