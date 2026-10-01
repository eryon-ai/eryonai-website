// Deeper service content: offerings, segments (problem → solution) and extra FAQs.
// Original copy written for search intent. Do not paste text from the old site (duplicate content).
type Item = { title: string; text: string };
type Segment = { title: string; problem: string; solution: string };
type Faq = { q: string; a: string };
export type ServiceExtra = { offerings: Item[]; segments: Segment[]; faqs: Faq[] };

export const serviceExtras: Record<string, ServiceExtra> = {
  "custom-software-development": {
    offerings: [
      { title: "Operations platforms", text: "One system for the work that runs across teams — orders, jobs, approvals and handovers." },
      { title: "Customer and partner portals", text: "Self-service access to orders, documents, tickets and account data." },
      { title: "Quotation and pricing engines", text: "Rule-based pricing, discounts and quote documents generated from live data." },
      { title: "Scheduling and resource planning", text: "Shifts, rooms, vehicles or crews planned with conflicts caught before they happen." },
      { title: "Approval and document workflows", text: "Multi-step approvals with audit history, reminders and escalation." },
      { title: "Field and site applications", text: "Mobile-friendly tools for attendance, inspections and job updates at the site." },
      { title: "Back-office administration", text: "Admin consoles for data, users, settings and reports behind your products." },
      { title: "Legacy replacement modules", text: "New components that take over from ageing desktop or spreadsheet tools one area at a time." },
    ],
    segments: [
      { title: "Manufacturers and distributors", problem: "Stock, orders and quotations live in separate spreadsheets.", solution: "A single system of record where sales, stores and dispatch share live data." },
      { title: "Construction and infrastructure", problem: "Site attendance, wages and client billing are reconciled by hand every month.", solution: "Role-based project software with attendance, payroll support and automated ledgers." },
      { title: "Service businesses", problem: "Jobs, technicians and customer updates are coordinated over phone calls.", solution: "Job management with scheduling, status tracking and customer notifications." },
      { title: "Multi-branch organisations", problem: "Each branch runs its own tools and head office sees nothing in real time.", solution: "One platform with branch-level control and a consolidated management view." },
      { title: "Growing startups", problem: "Early tools and no-code workarounds break as volume grows.", solution: "A properly engineered core system that replaces the workarounds without disrupting customers." },
      { title: "Enterprises with unique processes", problem: "Packaged software needs so much customisation that upgrades become risky.", solution: "Purpose-built modules for the differentiating process, integrated with the packaged tools you keep." },
    ],
    faqs: [
      { q: "What is custom software development?", a: "Custom software development means designing and building software for one organisation's specific workflows, data and users, instead of adapting an off-the-shelf product. You own the code and decide how it evolves." },
      { q: "Why choose a custom software development company in India?", a: "Indian engineering teams combine strong full-stack skills with cost efficiency and overlapping working hours for clients in Asia, the Middle East, Europe and, with planning, North America. Eryon is based in New Delhi and works with clients in India and abroad." },
      { q: "Can custom software integrate with Tally, Zoho or QuickBooks?", a: "Yes, through the product's API or scheduled data exchange. We confirm what each system supports during discovery and design the integration around it." },
      { q: "What happens after the software goes live?", a: "We provide a support period for fixes and monitoring, then an optional ongoing agreement for improvements, updates and infrastructure care." },
    ],
  },

  "web-applications": {
    offerings: [
      { title: "Admin dashboards", text: "Operational control panels with role-based views, filters, bulk actions and exports." },
      { title: "Customer portals", text: "Accounts, orders, invoices and support in one secure self-service web app." },
      { title: "Vendor and supplier portals", text: "Onboarding, purchase orders, invoices and communication with suppliers." },
      { title: "Booking and reservation platforms", text: "Availability, calendars, reminders and online payments." },
      { title: "Marketplace platforms", text: "Multi-seller listings, commissions, payouts and dispute handling." },
      { title: "Reporting and analytics consoles", text: "Live business metrics built on your own data." },
      { title: "Internal business applications", text: "Web tools that replace spreadsheets and disconnected apps." },
      { title: "Corporate and catalogue websites", text: "Fast, search-friendly sites connected to your enquiry and sales process." },
    ],
    segments: [
      { title: "Real estate", problem: "Listings, leads and site visits are tracked in different tools.", solution: "A web CRM and listing portal with live inventory status and lead assignment." },
      { title: "Healthcare", problem: "Staff, appointments and records sit in systems that don't talk to each other.", solution: "Role-based web applications for scheduling, staff management and patient-facing portals." },
      { title: "Education", problem: "Admissions, attendance and fees are handled in separate software.", solution: "A school management web app with parent, teacher and admin dashboards." },
      { title: "Manufacturing", problem: "Production, inventory and sales have no shared view.", solution: "Web portals linking stock, orders and dispatch in real time." },
      { title: "Logistics", problem: "Shipment status is chased by phone and email.", solution: "Tracking dashboards and customer portals fed by live operational data." },
      { title: "Professional services", problem: "Client work and documents are managed through inboxes.", solution: "Client portals with status tracking, document exchange and approvals." },
    ],
    faqs: [
      { q: "How much does web application development cost in India?", a: "Cost depends on the number of user roles, workflows, integrations and the level of polish required. After a short discovery we provide a written estimate for a clearly scoped first release, so the budget is agreed before development starts." },
      { q: "Web application or website — what's the difference?", a: "A website mainly presents information. A web application lets users log in, work with data and complete tasks — placing orders, approving requests, managing records. Many projects include both." },
      { q: "Do you build progressive web apps (PWAs)?", a: "Yes. A PWA can be installed on phones, work with limited connectivity and send notifications, which suits field staff who don't need a full native app." },
      { q: "Will our web application be SEO-friendly?", a: "Public pages are server-rendered with clean URLs, metadata and structured data so search engines can index them. Logged-in areas are kept out of search results." },
    ],
  },

  "mobile-applications": {
    offerings: [
      { title: "Android app development", text: "Apps built and tested for the wide range of Android devices your users carry." },
      { title: "iOS app development", text: "iPhone and iPad apps that follow Apple's design and review guidelines." },
      { title: "Cross-platform apps", text: "One React Native or Flutter codebase for both stores." },
      { title: "Customer and shopping apps", text: "Browsing, ordering, payments, tracking and loyalty in the customer's pocket." },
      { title: "Staff and field apps", text: "Attendance, inspections, deliveries and job updates recorded on site." },
      { title: "Member and parent apps", text: "Bookings, updates, payments and messaging for members, students or parents." },
      { title: "Companion apps for web platforms", text: "Mobile access to an existing system through a shared API." },
      { title: "App modernisation", text: "Rebuilding or stabilising apps that crash, lag or can no longer be updated." },
    ],
    segments: [
      { title: "Retail and e-commerce", problem: "Mobile shoppers drop off on slow, generic store apps.", solution: "Fast shopping apps with search, wishlists and a short checkout." },
      { title: "Education", problem: "Parents hear about attendance and fees late.", solution: "Parent and teacher apps with real-time attendance, homework and fee updates." },
      { title: "Fitness and wellness", problem: "Members book classes through calls and chat groups.", solution: "Member apps for class booking, payments and progress tracking." },
      { title: "Logistics and delivery", problem: "Drivers update status by phone and paperwork is lost.", solution: "Driver apps with job lists, proof of delivery and offline support." },
      { title: "Construction and field services", problem: "Site data is written on paper and typed in later.", solution: "Field apps for attendance, photos, checklists and signatures." },
      { title: "Healthcare", problem: "Staff need schedules and updates away from a desk.", solution: "Secure staff apps for rotas, leave requests and notifications." },
    ],
    faqs: [
      { q: "How much does it cost to build a mobile app in India?", a: "It depends on screens, user roles, integrations and whether a back end and admin panel are needed. We scope a first release together and provide a written estimate before development begins." },
      { q: "React Native or Flutter — which should we choose?", a: "Both deliver near-native performance from one codebase. React Native suits teams already using React on the web; Flutter suits highly custom interfaces. We recommend one based on your team and product." },
      { q: "Can you publish our app on the Play Store and App Store?", a: "Yes. We prepare store listings, screenshots and review submissions, and publish under your own developer accounts so you keep ownership." },
      { q: "Do you maintain apps after launch?", a: "Yes. Operating system updates, store policy changes and user feedback all require ongoing releases; we offer maintenance agreements for this." },
    ],
  },

  "saas-development": {
    offerings: [
      { title: "SaaS MVP development", text: "A focused first release with real tenancy, sign-up and billing — built to grow, not to throw away." },
      { title: "Multi-tenant B2B platforms", text: "Organisations, teams, roles and permissions for business customers." },
      { title: "Subscription and billing", text: "Plans, trials, upgrades, invoices and payment gateway integration." },
      { title: "White-label platforms", text: "One product delivered under each customer's own brand and domain." },
      { title: "Customer onboarding flows", text: "Guided setup that gets new accounts to their first result quickly." },
      { title: "Admin and support consoles", text: "Internal tools to manage tenants, plans, usage and support cases." },
      { title: "Public APIs and webhooks", text: "Documented interfaces for customers who integrate with your product." },
      { title: "SaaS re-architecture", text: "Refactoring a single-client system into a scalable multi-tenant product." },
    ],
    segments: [
      { title: "HR and recruitment", problem: "Hiring and staff data are managed in spreadsheets across clients.", solution: "Multi-tenant HR and recruitment SaaS with role-based access per organisation." },
      { title: "Education", problem: "Schools want modern software without running servers.", solution: "Hosted school management SaaS with campus-level data separation." },
      { title: "Fitness", problem: "Gyms need memberships and billing without IT staff.", solution: "Subscription-based gym management SaaS with recurring payments." },
      { title: "Real estate", problem: "Agencies pay for tools that don't fit how they sell property.", solution: "Vertical CRM SaaS built around listings, leads and site visits." },
      { title: "Construction", problem: "Contractors juggle attendance and billing across many sites.", solution: "Project and workforce SaaS with per-company data isolation." },
      { title: "Professional services", problem: "Firms share documents and status by email.", solution: "Client portal SaaS with workspaces per client and secure file exchange." },
    ],
    faqs: [
      { q: "How long does SaaS MVP development take?", a: "A focused SaaS MVP usually takes a few months, depending on the core workflow, integrations and billing model. We cut scope to what a paying customer needs and plan the rest in later releases." },
      { q: "How do you price SaaS development?", a: "We estimate the first release from a written scope after discovery. Many SaaS clients then continue with a dedicated engineering team on a monthly basis." },
      { q: "Can you integrate Razorpay and Stripe for subscriptions?", a: "Yes. Razorpay suits Indian customers and INR billing; Stripe suits international billing. Some products use both, routed by customer location." },
      { q: "How do you control features by plan?", a: "With a central entitlements layer: each plan defines limits and features, and the application checks entitlements rather than plan names, so pricing can change without code changes." },
    ],
  },

  "crm-erp-development": {
    offerings: [
      { title: "Custom CRM development", text: "Pipelines, lead assignment, follow-ups and quotations shaped to your sales process." },
      { title: "ERP development", text: "Connected modules for inventory, purchasing, production, finance and HR." },
      { title: "Lead management systems", text: "Capture leads from every channel and route them automatically." },
      { title: "Inventory and warehouse management", text: "Stock by location, reservations, transfers and reorder alerts." },
      { title: "HRMS and payroll support", text: "Employees, attendance, shifts, leave and payroll exports." },
      { title: "School and hospital management", text: "Sector-specific ERP for education and healthcare operations." },
      { title: "Field sales management", text: "Visits, orders and targets for sales teams on the move." },
      { title: "CRM and ERP integration", text: "Connecting new modules to accounting, e-commerce and messaging tools." },
    ],
    segments: [
      { title: "Manufacturing", problem: "Production planning is disconnected from sales and stock.", solution: "ERP modules linking orders, inventory and production schedules." },
      { title: "Distribution and wholesale", problem: "Dealers call to check stock and order status.", solution: "CRM with dealer portal, live availability and order tracking." },
      { title: "Construction", problem: "Workforce cost and client billing are reconciled by hand.", solution: "Construction ERP with attendance, wages, materials and client ledgers." },
      { title: "Real estate", problem: "Leads and bookings are spread across agents' phones.", solution: "Real estate CRM with inventory, bookings and payment milestones." },
      { title: "Healthcare", problem: "Hospital HR runs on disconnected tools.", solution: "Hospital HRMS with rota planning, leave and credential tracking." },
      { title: "Education", problem: "Student data is entered into several systems.", solution: "School ERP with one student record shared by every module." },
    ],
    faqs: [
      { q: "What is the cost of custom CRM development in India?", a: "It depends on the modules, user roles, integrations and data migration involved. A focused CRM costs far less than a multi-department ERP. We give a written estimate after discovery so you can compare it with licence costs." },
      { q: "Custom CRM vs Zoho, Salesforce or HubSpot — which is better?", a: "For standard pipelines, a packaged CRM is usually faster and cheaper. A custom CRM pays off when your inventory, pricing or approval rules don't fit their model and teams keep working in spreadsheets alongside it." },
      { q: "Can the CRM send WhatsApp, SMS and email messages?", a: "Yes, through approved messaging providers, with consent and opt-out handling built into the workflow." },
      { q: "Can our team use the ERP on mobile?", a: "Yes. We design responsive screens for common tasks and, where needed, a companion mobile app for field staff." },
    ],
  },

  "ecommerce-development": {
    offerings: [
      { title: "D2C brand stores", text: "Brand-led storefronts built for speed, search and conversion." },
      { title: "Headless commerce", text: "A custom front end on top of your commerce engine or back end." },
      { title: "B2B ordering portals", text: "Customer-specific pricing, bulk ordering, credit terms and approvals." },
      { title: "Multi-vendor marketplaces", text: "Seller onboarding, listings, commissions and payouts." },
      { title: "Subscription commerce", text: "Recurring orders, boxes and memberships with automated billing." },
      { title: "Order and returns management", text: "Fulfilment states, shipping integration, returns and refunds." },
      { title: "Store administration", text: "Catalogue, inventory, customers, promotions and reports for your team." },
      { title: "Mobile commerce apps", text: "Shopping apps sharing one back end with your web store." },
    ],
    segments: [
      { title: "Fashion and apparel", problem: "Size, colour and returns make generic stores hard to run.", solution: "Variant-rich catalogues, size guidance and a clear returns flow." },
      { title: "Luxury and premium goods", problem: "Templates make high-value products look ordinary.", solution: "Editorial storefronts with detailed imagery that still load fast." },
      { title: "Industrial and B2B", problem: "Buyers need account pricing and purchase orders.", solution: "B2B commerce portals with tiered pricing and PO approval." },
      { title: "Food and grocery", problem: "Delivery slots and stock change by the hour.", solution: "Slot-based ordering with live stock and delivery zones." },
      { title: "Home and furniture", problem: "Large items need configuration and delivery scheduling.", solution: "Product configurators with delivery booking at checkout." },
      { title: "Health and wellness", problem: "Repeat customers reorder the same products manually.", solution: "Subscriptions and one-click reorder with automated reminders." },
    ],
    faqs: [
      { q: "How much does e-commerce website development cost in India?", a: "Cost depends on catalogue complexity, integrations (payment, shipping, ERP), design depth and whether you need an app. We scope and estimate after a short discovery." },
      { q: "Shopify or custom e-commerce development?", a: "Shopify is often right for standard catalogues. Custom or headless development makes sense for B2B pricing, marketplaces, complex fulfilment or when brand presentation needs full control." },
      { q: "Which payment gateways do you integrate in India?", a: "Razorpay, Cashfree, PayU and Stripe are common choices, along with UPI, cards, net banking and cash on delivery options." },
      { q: "Can you integrate shipping partners like Shiprocket or Delhivery?", a: "Yes, through their APIs for rate calculation, label generation and tracking updates." },
    ],
  },

  "business-automation": {
    offerings: [
      { title: "Workflow automation", text: "Multi-step processes with rules, approvals and escalations." },
      { title: "Document generation", text: "Quotations, invoices, certificates and reports created from system data." },
      { title: "Notification automation", text: "Email, SMS and push messages triggered by real events." },
      { title: "Report automation", text: "Scheduled reports delivered to the right people without manual effort." },
      { title: "Data synchronisation", text: "Records kept consistent across CRM, accounting and e-commerce tools." },
      { title: "Customer onboarding automation", text: "Forms, documents, verification steps and welcome sequences." },
      { title: "Payroll and billing calculations", text: "Wages, commissions and invoices calculated from source data." },
      { title: "Approval routing", text: "Requests routed by amount, department or role, with reminders." },
    ],
    segments: [
      { title: "Finance and accounts", problem: "Invoices and payment follow-ups are prepared by hand.", solution: "Automated invoicing, reminders and reconciliation reports." },
      { title: "HR and administration", problem: "Onboarding and leave approvals move through email.", solution: "Automated onboarding checklists and leave approval workflows." },
      { title: "Sales operations", problem: "Quotations take hours to prepare from price lists.", solution: "Quote generation from live stock and pricing rules." },
      { title: "Construction and projects", problem: "Monthly wages and client bills are assembled in spreadsheets.", solution: "Attendance-driven wage calculation and automatic client ledgers." },
      { title: "Real estate", problem: "Follow-ups with leads depend on memory.", solution: "Automated follow-up sequences tied to lead stage." },
      { title: "Retail and e-commerce", problem: "Order updates are sent manually to customers.", solution: "Event-driven order notifications and stock alerts." },
    ],
    faqs: [
      { q: "What is business process automation?", a: "Business process automation uses software to carry out repeatable, rule-based steps — moving data, generating documents, sending notifications, routing approvals — so people handle exceptions instead of routine work." },
      { q: "Is automation only for large companies?", a: "No. Small and mid-sized businesses often see the clearest benefit, because a few automated workflows can remove hours of repetitive work each week." },
      { q: "Can you automate Excel and Google Sheets processes?", a: "Yes. We either connect directly to your sheets or move the process into a proper system while keeping sheet exports where people still need them." },
      { q: "Do we need to replace our current software?", a: "Usually not. Most automation connects the tools you already use through their APIs." },
    ],
  },

  "cloud-devops": {
    offerings: [
      { title: "AWS architecture and setup", text: "Networks, compute, databases and storage designed for your workload." },
      { title: "Azure and Google Cloud", text: "Environments on the provider that matches your team and contracts." },
      { title: "Cloud migration", text: "Moving applications from on-premise or shared hosting in planned stages." },
      { title: "CI/CD pipelines", text: "Automated build, test and deployment on every change." },
      { title: "Docker containerisation", text: "Consistent, reproducible environments from laptop to production." },
      { title: "Kubernetes deployment", text: "Orchestration for multi-service platforms that need it." },
      { title: "Monitoring and alerting", text: "Logs, metrics, uptime checks and on-call alerts." },
      { title: "Cloud cost optimisation", text: "Right-sizing, scheduling and removing idle resources." },
    ],
    segments: [
      { title: "SaaS companies", problem: "Releases are risky and done by hand.", solution: "Automated pipelines with staging environments and fast rollback." },
      { title: "E-commerce", problem: "Traffic spikes during sales slow the store down.", solution: "Auto-scaling infrastructure with CDN caching for catalogue pages." },
      { title: "Financial services", problem: "Security reviews demand audit trails and strict access.", solution: "Locked-down networks, centralised logging and least-privilege access." },
      { title: "Healthcare", problem: "Sensitive data must stay protected and backed up.", solution: "Encrypted storage, tested backups and restricted administrative access." },
      { title: "Logistics platforms", problem: "Many services make failures hard to trace.", solution: "Container platforms with tracing and centralised monitoring." },
      { title: "Growing businesses on shared hosting", problem: "The application has outgrown its server.", solution: "Staged migration to managed cloud services with no big-bang cutover." },
    ],
    faqs: [
      { q: "What do DevOps services include?", a: "Typically CI/CD pipelines, infrastructure as code, containerisation, monitoring, backup and recovery, security hardening and ongoing operational support." },
      { q: "Can you reduce our AWS bill?", a: "Often, yes. We review usage, right-size resources, use reserved or savings plans where appropriate and remove idle infrastructure. Savings depend on the current setup." },
      { q: "Do you offer managed cloud services?", a: "Yes. After setup we can operate the infrastructure under an agreed support scope with monitoring and incident response." },
      { q: "Which regions do you deploy to for Indian clients?", a: "Usually the Mumbai or Hyderabad regions for low latency and data residency, with other regions for international users." },
    ],
  },

  "data-analytics": {
    offerings: [
      { title: "BI dashboards", text: "Business intelligence dashboards built on agreed metric definitions." },
      { title: "Executive reporting", text: "A single view of sales, operations and finance for leadership." },
      { title: "Real-time operational dashboards", text: "Live status for teams who act on data during the day." },
      { title: "Data pipelines (ETL)", text: "Scheduled extraction and transformation from your systems." },
      { title: "Data warehousing", text: "A reporting database separate from production workloads." },
      { title: "Report automation", text: "PDF, Excel and email reports delivered on schedule." },
      { title: "Embedded analytics", text: "Charts and reports inside your own product or portal." },
      { title: "Data quality checks", text: "Validation that flags missing or inconsistent records." },
    ],
    segments: [
      { title: "Retail and e-commerce", problem: "Sales, stock and marketing data don't line up.", solution: "Unified sales and inventory dashboards by product, channel and region." },
      { title: "Manufacturing", problem: "Production and dispatch figures come from different sheets.", solution: "Operational dashboards connected to stock, orders and dispatch." },
      { title: "Education", problem: "Academic and fee data sit in separate modules.", solution: "Campus dashboards combining attendance, results and fee collection." },
      { title: "SaaS companies", problem: "Nobody agrees on active users or churn.", solution: "Product and revenue metrics defined once and reported consistently." },
      { title: "Financial services", problem: "Management packs are assembled manually each month.", solution: "Automated monthly reporting with reconciliation checks." },
      { title: "Multi-branch businesses", problem: "Each branch reports in its own format.", solution: "Standardised branch reporting with head-office roll-ups." },
    ],
    faqs: [
      { q: "What are data analytics services?", a: "They cover collecting data from your systems, cleaning and modelling it, and presenting it as dashboards and reports people can act on." },
      { q: "Power BI, Metabase or custom dashboards?", a: "BI tools suit internal analysts exploring data. Custom dashboards suit fixed operational views inside your own applications or for customers. We recommend based on who will use them." },
      { q: "Can you combine data from Excel, Tally and our CRM?", a: "Yes. Pipelines can pull from spreadsheets, accounting exports and application databases into one reporting model." },
      { q: "How fresh will the data be?", a: "From near real time to daily refreshes, depending on the source systems and what decisions the data supports." },
    ],
  },

  "ui-ux-design": {
    offerings: [
      { title: "UX research", text: "Interviews and observation with the people who will use the product." },
      { title: "Product design", text: "End-to-end flows and interfaces for new products and features." },
      { title: "Dashboard and SaaS design", text: "Clear hierarchy for dense, data-heavy business interfaces." },
      { title: "Mobile app design", text: "Interfaces that follow iOS and Android conventions." },
      { title: "Design systems", text: "Reusable components, tokens and documentation." },
      { title: "Prototyping and usability testing", text: "Clickable prototypes validated with real users." },
      { title: "UX audits", text: "A review of an existing product with prioritised improvements." },
      { title: "Website design", text: "Marketing and corporate websites designed for clarity and conversion." },
    ],
    segments: [
      { title: "SaaS products", problem: "New users struggle to reach their first result.", solution: "Onboarding and core flows redesigned around the first task." },
      { title: "Enterprise software", problem: "Staff avoid internal tools that are slow to use.", solution: "Task-focused interfaces with keyboard support and dense, readable tables." },
      { title: "Healthcare", problem: "Busy staff make mistakes on cluttered screens.", solution: "Calm, high-contrast interfaces with clear status and confirmation." },
      { title: "E-commerce", problem: "Shoppers abandon long or confusing checkouts.", solution: "Simplified product discovery and a short, predictable checkout." },
      { title: "Education", problem: "Parents and teachers use the same system very differently.", solution: "Role-specific experiences built on one design system." },
      { title: "Logistics and operations", problem: "Dispatchers scan long lists to find problems.", solution: "Exception-first dashboards that surface what needs action." },
    ],
    faqs: [
      { q: "What is the difference between UI and UX design?", a: "UX design shapes how a product works — flows, structure and ease of completing tasks. UI design shapes how it looks — layout, typography, colour and components. Good products need both." },
      { q: "Do you redesign existing websites and apps?", a: "Yes. We start with a UX audit of current usage and problems, then redesign in stages so users aren't disrupted." },
      { q: "Do you design in Figma?", a: "Yes. You receive organised Figma files, components and a developer handoff." },
      { q: "Can you design to our brand guidelines?", a: "Yes. We extend existing brand guidelines into a product design system where needed." },
    ],
  },

  cybersecurity: {
    offerings: [
      { title: "Secure architecture review", text: "Threats, trust boundaries and data flows assessed before build." },
      { title: "Application security review", text: "Code and configuration reviewed against the OWASP Top 10." },
      { title: "Authentication and SSO", text: "Secure login, MFA and single sign-on integration." },
      { title: "Role-based access control", text: "Permission models designed with scopes and audit trails." },
      { title: "Dependency and vulnerability management", text: "Automated scanning and update routines." },
      { title: "Cloud security hardening", text: "IAM, network exposure, secrets and logging reviewed and fixed." },
      { title: "Data protection", text: "Encryption, retention and data minimisation built into the system." },
      { title: "Remediation", text: "Fixing the issues found, not just reporting them." },
    ],
    segments: [
      { title: "Healthcare", problem: "Staff and patient data needs strict access control.", solution: "Role-based access with audit logging and encrypted storage." },
      { title: "Financial services", problem: "Customers and auditors ask for evidence of controls.", solution: "Documented controls, access reviews and secure delivery pipelines." },
      { title: "SaaS companies", problem: "Enterprise buyers send long security questionnaires.", solution: "Hardened architecture and clear answers backed by real controls." },
      { title: "E-commerce", problem: "Admin panels and payment flows are attractive targets.", solution: "Hardened admin access, rate limiting and tokenised payments." },
      { title: "Education", problem: "Systems hold minors' personal data.", solution: "Data minimisation, consent handling and restricted access." },
      { title: "Inherited codebases", problem: "Nobody knows how secure the existing system is.", solution: "A prioritised security review followed by remediation." },
    ],
    faqs: [
      { q: "What does an application security review include?", a: "Review of authentication, access control, input handling, configuration, dependencies and data protection, with findings ranked by risk and clear fixes." },
      { q: "Do you help with SOC 2 and GDPR readiness?", a: "Yes. We implement the technical controls these frameworks expect — access control, logging, encryption, change management — and work alongside your auditors or advisers." },
      { q: "How often should we review application security?", a: "At least before major releases and after significant architectural changes, with automated dependency scanning running continuously." },
      { q: "Do you provide penetration testing?", a: "Our focus is secure design, review and remediation of the applications we build or maintain. For formal penetration tests we can prepare the system and fix the findings." },
    ],
  },

  "software-modernization": {
    offerings: [
      { title: "Legacy system assessment", text: "Code, data and dependencies reviewed to decide what to keep, wrap or replace." },
      { title: "Application re-engineering", text: "Rebuilding critical modules on a maintainable stack." },
      { title: "Monolith to modular services", text: "Separating capabilities along business boundaries, step by step." },
      { title: "Desktop to web migration", text: "Moving desktop or on-premise tools to secure web applications." },
      { title: "API enablement", text: "Adding APIs in front of legacy systems so new tools can integrate." },
      { title: "Data migration", text: "Cleaning, mapping and verifying data moved between systems." },
      { title: "Third-party integration", text: "Connecting CRM, ERP, accounting, payment and messaging platforms." },
      { title: "Cloud re-platforming", text: "Moving workloads to managed cloud services." },
    ],
    segments: [
      { title: "Manufacturing", problem: "Core operations run on an ageing desktop ERP.", solution: "Web-based modules replacing the old system one area at a time." },
      { title: "Financial services", problem: "Old systems block new digital products.", solution: "API layers that expose legacy data safely to new applications." },
      { title: "Logistics", problem: "A monolith slows down at peak volume.", solution: "Event-driven services that isolate and scale the busiest parts." },
      { title: "Education and healthcare", problem: "Several disconnected tools hold the same records.", solution: "Consolidation into one platform with verified data migration." },
      { title: "Retail", problem: "E-commerce, POS and inventory don't sync.", solution: "Integration middleware keeping stock and orders consistent." },
      { title: "Growing startups", problem: "The first version can't support the next stage of growth.", solution: "Targeted refactoring of the parts that limit scale, without a full rewrite." },
    ],
    faqs: [
      { q: "What is software modernization?", a: "Software modernization means updating ageing applications — their architecture, technology, hosting or integrations — so they are easier to change, secure and scale, while preserving the business logic they contain." },
      { q: "How do you migrate data without losing records?", a: "We map every field, clean and transform data in repeatable scripts, and verify counts and checksums before and after migration, with sign-off from your team." },
      { q: "Can you integrate our system with third-party APIs?", a: "Yes — payment gateways, messaging providers, accounting software, logistics partners and other platforms through their official APIs." },
      { q: "How long does modernization take?", a: "It depends on system size. Because we modernize in stages, the first improvements reach users early rather than at the end of a long project." },
    ],
  },
};
