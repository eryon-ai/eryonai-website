// Deeper industry content: sub-sector segments, "build first" guidance and FAQs.
// Original copy written for search intent — capability statements, not project claims.
type Segment = { title: string; problem: string; solution: string };
type Faq = { q: string; a: string };
export type IndustryExtra = { buildFirst: string; segments: Segment[]; faqs: Faq[] };

export const industryExtras: Record<string, IndustryExtra> = {
  "real-estate": {
    buildFirst: "Most agencies and developers should start with a lead-and-inventory CRM: every enquiry captured from portals, ads and the website, assigned by rule, and linked to units with live availability. Listing portals, broker portals and customer apps then build on the same data.",
    segments: [
      { title: "Residential brokerages", problem: "Agents keep leads and site visits in personal phones, so managers can't see the pipeline.", solution: "A brokerage CRM with lead routing, visit scheduling and manager dashboards." },
      { title: "Real estate developers", problem: "Unit inventory, bookings and payment milestones live in spreadsheets.", solution: "Developer sales software with unit inventory, booking forms and demand-letter tracking." },
      { title: "Commercial real estate", problem: "Leases, tenants and renewals are tracked across documents and email.", solution: "Lease and tenant management with renewal alerts and billing." },
      { title: "Property management", problem: "Rent collection and maintenance requests are handled manually.", solution: "Property management software with tenant portals, rent reminders and maintenance tickets." },
      { title: "Channel partners and brokers", problem: "Partners call the sales team to check what is available.", solution: "Channel partner portals with live inventory and lead registration." },
      { title: "PropTech startups", problem: "Founders need a platform without building a large in-house team.", solution: "Product engineering from first release to a scalable real estate platform." },
    ],
    faqs: [
      { q: "What is real estate CRM software?", a: "A real estate CRM manages enquiries, buyers, site visits, bookings and follow-ups in one place, linked to your property inventory, so no lead depends on one agent's memory." },
      { q: "Can you build a property listing portal with map search?", a: "Yes. Listing portals can include map-based search, filters, media galleries, enquiry forms and SEO-friendly property pages." },
      { q: "Can leads from 99acres, MagicBricks and Housing.com come into the CRM automatically?", a: "Where the portal provides an API, email feed or export, leads can be captured automatically and assigned to agents by rule." },
      { q: "Do you build apps for channel partners and buyers?", a: "Yes — partner portals for inventory and lead registration, and buyer apps or portals for bookings, payments and documents." },
      { q: "Can the system handle multiple projects and cities?", a: "Yes. Projects, towers, units and cities are part of the data model, with access controlled by team and location." },
    ],
  },
  healthcare: {
    buildFirst: "Hospitals usually get the fastest return from staff scheduling: departments, shift templates, leave and attendance in one system with conflict checks. Credential tracking, appointment management and patient-facing portals follow on the same foundation.",
    segments: [
      { title: "Multi-specialty hospitals", problem: "Rotas across departments conflict with approved leave.", solution: "Hospital HRMS with department rotas, leave approvals and conflict detection." },
      { title: "Clinics and diagnostic centres", problem: "Appointments are booked by phone and diaries.", solution: "Online appointment booking with reminders and front-desk dashboards." },
      { title: "Nursing and care homes", problem: "Staff duties and resident notes are on paper.", solution: "Care management tools for duty rosters, tasks and handover notes." },
      { title: "Healthcare staffing agencies", problem: "Credentials and placements are tracked in spreadsheets.", solution: "Staffing platforms with credential expiry alerts and shift assignment." },
      { title: "Health-tech startups", problem: "A new product needs strong access control from day one.", solution: "Secure product engineering with role-based access and audit logging." },
    ],
    faqs: [
      { q: "What is a hospital HRMS?", a: "A hospital HRMS manages staff records, departments, shift rotas, attendance, leave, credentials and payroll support for healthcare organisations." },
      { q: "How do you protect patient and staff data?", a: "With role-based access, audit logs, encryption in transit and at rest, and data minimisation — designed in from the first release." },
      { q: "Can you build an online appointment booking system for clinics?", a: "Yes, with doctor schedules, slot booking, SMS or WhatsApp reminders and a front-desk view." },
      { q: "Do you follow HIPAA or DPDP requirements?", a: "We design software to support your obligations under India's DPDP Act 2023 and, for US clients, HIPAA. Formal compliance remains with your organisation and its advisers." },
      { q: "Can the system work across multiple hospital branches?", a: "Yes. Branches and departments are part of the data model, with a consolidated view for management." },
    ],
  },
  education: {
    buildFirst: "Start with one shared student record and the modules used every day — attendance and fees — plus a parent app. Examinations, timetables, transport and library build on the same record without re-entering data.",
    segments: [
      { title: "K-12 schools", problem: "Attendance, homework and fee updates reach parents late.", solution: "School ERP with parent and teacher apps and automatic notifications." },
      { title: "School groups and chains", problem: "Each campus uses different software.", solution: "Multi-campus ERP with campus-level control and group dashboards." },
      { title: "Colleges and institutes", problem: "Admissions, exams and results are handled separately.", solution: "Institute management covering admissions, courses, exams and results." },
      { title: "Coaching centres", problem: "Batches, fees and test scores live in spreadsheets.", solution: "Coaching management software with batch scheduling, fees and performance tracking." },
      { title: "EdTech startups", problem: "Learning products need to scale beyond a pilot.", solution: "Multi-tenant education SaaS with secure student data handling." },
    ],
    faqs: [
      { q: "What is school ERP software?", a: "School ERP software manages admissions, student records, attendance, exams, fees, timetables, transport and communication in one connected system." },
      { q: "Do you build parent and teacher mobile apps?", a: "Yes. Parents see attendance, homework, results and fees; teachers take attendance and enter marks from their phones." },
      { q: "Can parents pay school fees online?", a: "Yes, through Indian payment gateways supporting UPI, cards and net banking, with automatic receipts and reminders." },
      { q: "Can one system run several campuses?", a: "Yes. Data is separated by campus, with group-level reporting for management." },
      { q: "How do you protect students' personal data?", a: "With restricted role-based access, consent handling and minimal data collection, aligned with India's DPDP Act 2023." },
    ],
  },
  retail: {
    buildFirst: "For most brands the first priority is a fast storefront on a back office that matches how orders are really fulfilled: catalogue, stock, orders and returns. A mobile app, loyalty and B2B ordering can follow on the same commerce back end.",
    segments: [
      { title: "D2C brands", problem: "Template stores look generic and slow down with rich imagery.", solution: "Custom or headless storefronts built for speed and brand presentation." },
      { title: "Fashion and lifestyle", problem: "Sizes, variants and returns overwhelm basic store tools.", solution: "Variant-rich catalogues, size guidance and structured returns." },
      { title: "Luxury and premium", problem: "High-value products need detail without heavy pages.", solution: "Editorial storefronts with optimised imagery and secure checkout." },
      { title: "Omnichannel retailers", problem: "Online and store stock drift apart.", solution: "Inventory sync across web, app and point of sale." },
      { title: "Wholesale and B2B sellers", problem: "Trade customers order by phone and email.", solution: "B2B ordering portals with account pricing and bulk orders." },
    ],
    faqs: [
      { q: "Do you build custom e-commerce websites in India?", a: "Yes — D2C stores, headless storefronts, B2B portals and marketplaces with Indian payment gateways and shipping integrations." },
      { q: "Can you build a shopping app as well as a website?", a: "Yes. Web store and mobile app share one back end, so catalogue, stock and orders stay consistent." },
      { q: "How do you keep a store fast with lots of images?", a: "Server rendering, responsive image sizes, modern formats and CDN caching are planned from the first design." },
      { q: "Can you migrate our store from Shopify or WooCommerce?", a: "Yes, including products, customers, orders and URL redirects to protect search rankings." },
      { q: "Do you build the admin panel too?", a: "Yes — catalogue, inventory, orders, customers, promotions and sales reports." },
    ],
  },
  manufacturing: {
    buildFirst: "Start where errors cost the most: live inventory with reservations tied to quotations and orders. Once sales and stores share one record, dealer portals, dispatch tracking and production planning follow naturally.",
    segments: [
      { title: "Stone, tiles and building materials", problem: "Unique or batch-specific stock is sold twice.", solution: "Item-level inventory with reservation at quotation." },
      { title: "Industrial manufacturers", problem: "Production plans don't reflect confirmed orders.", solution: "Order-driven production planning linked to stock and dispatch." },
      { title: "Distributors and wholesalers", problem: "Dealers call for stock and order status.", solution: "Dealer portals with live availability and order tracking." },
      { title: "Exporters", problem: "Documentation and shipment status are tracked manually.", solution: "Export order management with document checklists and milestones." },
      { title: "Small and mid-sized factories", problem: "Tally, spreadsheets and WhatsApp hold the whole operation.", solution: "A focused ERP that connects to accounting and replaces the spreadsheets." },
    ],
    faqs: [
      { q: "What is manufacturing ERP software?", a: "Manufacturing ERP connects inventory, purchasing, production, sales and dispatch so every team works from the same live data." },
      { q: "Can the ERP integrate with Tally?", a: "Yes, through Tally's integration options or scheduled data exchange, so accounting stays in Tally while operations move into the ERP." },
      { q: "Do you build dealer and distributor portals?", a: "Yes — dealers can check availability, place orders and track dispatch without calling your team." },
      { q: "Can you generate GST-compliant invoices?", a: "Yes. Invoice formats follow GST requirements and can integrate with e-invoicing where needed." },
      { q: "Is a custom ERP better than an off-the-shelf one?", a: "If your inventory, pricing or production rules are unusual, often yes. If they're standard, a packaged ERP may be faster — we'll give an honest view during discovery." },
    ],
  },
  logistics: {
    buildFirst: "Separate the path that takes orders and payments from everything else, then add dispatch and tracking that surface exceptions. A driver app with proof of delivery usually comes next.",
    segments: [
      { title: "Food and on-demand delivery", problem: "Meal-time peaks overload the ordering system.", solution: "Event-driven order platforms that isolate checkout from other services." },
      { title: "Courier and last-mile", problem: "Proof of delivery and status updates are manual.", solution: "Driver apps with offline support, photos and signatures." },
      { title: "Fleet operators", problem: "Dispatchers track vehicles through phone calls.", solution: "Fleet dashboards with assignments and exception alerts." },
      { title: "Warehousing", problem: "Inbound, storage and outbound aren't visible in one place.", solution: "Warehouse tools for receiving, locations and picking." },
      { title: "Freight and 3PL", problem: "Customers email for shipment status.", solution: "Customer tracking portals fed by live operational data." },
    ],
    faqs: [
      { q: "Do you build delivery and dispatch software?", a: "Yes — customer ordering, dispatch dashboards, driver apps and live tracking." },
      { q: "Can the driver app work without internet?", a: "Yes. Jobs and proof of delivery are stored on the device and synced when connectivity returns." },
      { q: "How do you handle order spikes?", a: "By separating services, using queues for work that can wait and scaling the busiest components independently." },
      { q: "Can customers track orders in real time?", a: "Yes, through tracking pages and notifications driven by status events." },
      { q: "Can you integrate with maps and shipping APIs?", a: "Yes — mapping, routing and courier partner APIs for rates, labels and tracking." },
    ],
  },
  finance: {
    buildFirst: "Start with structured application intake and maker-checker approval: every document collected, every decision recorded. Customer portals and management reporting then use the same auditable records.",
    segments: [
      { title: "NBFCs and lenders", problem: "Loan applications stall while documents are chased.", solution: "Loan origination workflows with document collection and approvals." },
      { title: "Wealth and advisory firms", problem: "Client reporting is assembled by hand.", solution: "Client portals and automated periodic reports." },
      { title: "Insurance intermediaries", problem: "Policies and renewals are tracked in spreadsheets.", solution: "Policy and renewal management with reminders." },
      { title: "Accounting and CA firms", problem: "Client documents arrive through email and chat.", solution: "Secure document portals with request tracking." },
      { title: "Fintech startups", problem: "Products need audit trails and strong access control early.", solution: "Secure product engineering with complete audit logging." },
    ],
    faqs: [
      { q: "Do you build loan management software?", a: "Yes — application intake, document collection, credit workflow, approvals, disbursement tracking and customer portals." },
      { q: "How do you keep financial software auditable?", a: "Every action is logged with who, what and when, approvals use maker-checker controls, and records can't be silently changed." },
      { q: "Can you integrate KYC and payment APIs?", a: "Yes, with established verification and payment providers through their official APIs." },
      { q: "Is customer financial data encrypted?", a: "Yes — encrypted in transit and at rest, with strict role-based access." },
      { q: "Do you build client portals for financial advisers?", a: "Yes, with secure document exchange, statements and status tracking." },
    ],
  },
  hospitality: {
    buildFirst: "A direct booking engine with payments is usually the first win, because it reduces dependence on commission-based channels. Guest records, operations tools and multi-property reporting build on the same data.",
    segments: [
      { title: "Hotels and resorts", problem: "Most bookings arrive through commission-based channels.", solution: "Direct booking websites with live availability and secure payments." },
      { title: "Restaurants and cafés", problem: "Reservations and orders are taken by phone.", solution: "Table reservation and online ordering systems." },
      { title: "Event and banquet venues", problem: "Enquiries, quotes and bookings are tracked in notebooks.", solution: "Venue booking software with quotations and payment schedules." },
      { title: "Homestays and villas", problem: "Calendars across platforms fall out of sync.", solution: "Booking engines with calendar sync and owner dashboards." },
      { title: "Multi-property groups", problem: "No single view across properties.", solution: "Consolidated occupancy, revenue and operations dashboards." },
    ],
    faqs: [
      { q: "Can you build a hotel booking engine?", a: "Yes — room types, rates, availability, secure payments and confirmation emails on your own website." },
      { q: "Can bookings sync with other channels?", a: "Where the channel supports it, calendars and availability can be synced to reduce double bookings." },
      { q: "Do you build restaurant ordering systems?", a: "Yes — online ordering, table reservations and kitchen order views." },
      { q: "Can we manage several properties in one system?", a: "Yes, with property-level access and group-level reporting." },
      { q: "Do you build guest apps?", a: "Yes — bookings, service requests, digital menus and loyalty." },
    ],
  },
  fitness: {
    buildFirst: "Start with memberships, recurring billing and check-in on one member record — that alone removes most manual reconciliation. Class booking, trainer management and a member app follow.",
    segments: [
      { title: "Commercial gyms", problem: "Front desks check memberships and payments by hand.", solution: "Check-in with instant membership validation and recurring billing." },
      { title: "Yoga, pilates and studios", problem: "Class capacity is managed in chat groups.", solution: "Class scheduling and online booking with capacity limits." },
      { title: "Personal training", problem: "Sessions and trainer commissions are tracked in notebooks.", solution: "Session packages, trainer schedules and commission reports." },
      { title: "Multi-location chains", problem: "Each branch reports separately.", solution: "Multi-branch management with a consolidated owner view." },
      { title: "Sports clubs and academies", problem: "Court bookings and memberships are separate.", solution: "Facility booking combined with member management." },
      { title: "Swimming and martial arts schools", problem: "Batches, levels and fees are managed manually.", solution: "Batch management with level tracking and fee reminders." },
    ],
    faqs: [
      { q: "What does gym management software include?", a: "Typically member records, membership plans, recurring billing, check-in, class booking, trainer management, reminders and reports." },
      { q: "Can members book classes and pay online?", a: "Yes, through a web portal or member app with UPI, cards or saved payment methods." },
      { q: "Can the software connect to access control or biometric devices?", a: "Where the device provides an integration method, check-in can validate membership and open access automatically." },
      { q: "Can we manage several gym branches?", a: "Yes, with branch-level data and a consolidated owner dashboard." },
      { q: "Do you build a branded member app?", a: "Yes — class booking, payments, attendance history and notifications under your brand." },
    ],
  },
  "professional-services": {
    buildFirst: "Start by moving the busiest pipeline — candidates or client requests — out of inboxes into a portal with clear stages. Document exchange and client self-service follow.",
    segments: [
      { title: "Recruitment and staffing", problem: "Candidates and roles are tracked across email threads.", solution: "Recruitment portals with job posting, applications and stage tracking." },
      { title: "Consulting firms", problem: "Client status updates take hours to prepare.", solution: "Client portals with live project status and deliverables." },
      { title: "Legal and compliance practices", problem: "Documents move through email without version control.", solution: "Secure document workflows with approvals and audit trails." },
      { title: "Agencies", problem: "Briefs, approvals and invoices are scattered.", solution: "Project and approval portals connected to billing." },
      { title: "Training providers", problem: "Enrolments and certificates are handled manually.", solution: "Enrolment, scheduling and certificate generation systems." },
    ],
    faqs: [
      { q: "Do you build recruitment and job portal software?", a: "Yes — job posting, candidate profiles, applications, stage tracking and recruiter dashboards." },
      { q: "Can clients log in to see their project status?", a: "Yes. Client portals show status, documents, requests and invoices for each engagement." },
      { q: "How are confidential documents protected?", a: "With role-based access, encrypted storage, access logs and retention rules." },
      { q: "Can the portal integrate with our accounting software?", a: "Yes, through the accounting system's API or scheduled exports." },
      { q: "Can we generate certificates or reports automatically?", a: "Yes, from templates filled with system data." },
    ],
  },
  b2b: {
    buildFirst: "Pick the process that crosses the most teams — often projects and billing, or orders and inventory — and build a system of record for it with APIs from the start. Other modules and legacy integrations follow in stages.",
    segments: [
      { title: "Construction and infrastructure", problem: "Attendance, wages and client bills are reconciled monthly by hand.", solution: "Construction ERP with role-based portals, payroll support and automated ledgers." },
      { title: "Industrial suppliers", problem: "Customer-specific pricing and orders are handled by email.", solution: "B2B ordering portals with account pricing and approvals." },
      { title: "Multi-unit enterprises", problem: "Business units report in different formats.", solution: "Shared data models and consolidated executive reporting." },
      { title: "Companies on legacy systems", problem: "Old software blocks integration with new tools.", solution: "API layers and staged modernization without big-bang cutovers." },
      { title: "Field-heavy operations", problem: "Site and field data arrives late and on paper.", solution: "Mobile field apps feeding the central system in real time." },
    ],
    faqs: [
      { q: "What is enterprise software development?", a: "Designing and building systems that run core business processes across many teams — ERP, portals, integrations and reporting — with the security and reliability that daily operational use requires." },
      { q: "Can you work alongside our existing IT team?", a: "Yes. We can deliver whole modules or work as an extended engineering team within your processes." },
      { q: "Do you support single sign-on?", a: "Yes, with your identity provider through standard protocols." },
      { q: "How do you integrate with legacy systems?", a: "Through APIs, database integration or scheduled exchange, chosen after reviewing what the legacy system can safely support." },
      { q: "Can the system be hosted in our own cloud account?", a: "Yes. Infrastructure is provisioned in your AWS, Azure or Google Cloud account and managed as code." },
    ],
  },
};
