import { industryExtras, type IndustryExtra } from "./industry-extras";

type Item = { title: string; text: string };

type IndustryBase = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  challenge: string;
  problems: string[];
  solution: string;
  systems: Item[];
  workflows: string[];
  compliance: string[];
  work: string[];
  services: string[];
};

export type Industry = IndustryBase & IndustryExtra;

const base: IndustryBase[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    metaTitle: "Real Estate Software Development — CRM, Portals & Listings",
    metaDescription: "Real estate software development: property CRMs, listing platforms, broker portals and lead management systems for agencies and developers.",
    h1: "Software for agencies and developers who sell on speed and trust.",
    intro: "Real estate runs on relationships, inventory and timing. Whoever matches the right property to the right buyer first usually wins the deal — and that depends on how well listings, leads and follow-ups are organised.",
    challenge: "Listings, client preferences and follow-ups are usually spread across spreadsheets, portals and agents' personal phones.",
    problems: [
      "Leads from several portals arrive in different formats and are assigned by hand.",
      "Client history leaves with the agent who owned the relationship.",
      "Inventory status — available, on hold, booked — is out of date by the time it reaches sales.",
      "Follow-ups depend on memory, so warm leads go cold.",
    ],
    solution: "A CRM built around properties and clients together: listings with live status, leads captured from every source and assigned by rule, map-based search, and automated follow-ups that keep the agency — not the individual — in charge of the relationship.",
    systems: [
      { title: "Property CRM", text: "Leads, clients, viewings and deal stages linked to listings." },
      { title: "Listing management", text: "Units, media, pricing and availability in one inventory." },
      { title: "Broker and channel partner portals", text: "Partners see available inventory and register leads." },
      { title: "Customer portals", text: "Buyers track bookings, payments and documents." },
    ],
    workflows: ["Lead capture from portals and campaigns", "Rule-based lead assignment", "Viewing scheduling and feedback", "Booking and payment milestone tracking", "Automated follow-up messaging"],
    compliance: ["Consent and opt-out handling for SMS and WhatsApp messaging", "Role-based access to client financial documents", "Audit trails on booking and price changes", "Personal data handling aligned with India's DPDP Act 2023"],
    work: ["realist-crm"],
    services: ["crm-erp-development", "web-applications", "business-automation", "mobile-applications"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    metaTitle: "Healthcare Software Development — HRMS & Clinic Systems",
    metaDescription: "Healthcare software development for hospitals and clinics: staff and shift management, appointment systems and patient portals with strong access control.",
    h1: "Systems for hospitals and clinics where scheduling and privacy are not optional.",
    intro: "Healthcare operations combine round-the-clock staffing, strict access rules and sensitive records. Software here has to be reliable at 3 a.m. and careful about who sees what.",
    challenge: "Staff scheduling, credentials, appointments and records often live in separate systems that don't share data.",
    problems: [
      "Shift rotas conflict with approved leave and nobody notices until a ward is short.",
      "Credential and document expiry is tracked manually.",
      "Appointment booking relies on phone calls and paper diaries.",
      "Sensitive data is shared through files with no access control.",
    ],
    solution: "Role-based systems that connect staff, schedules and records: rota planning with conflict checks, credential tracking, appointment management and access control designed around clinical roles from the first day.",
    systems: [
      { title: "Hospital HRMS", text: "Staff records, shifts, attendance, leave and credentials." },
      { title: "Appointment management", text: "Booking, reminders and department calendars." },
      { title: "Patient portals", text: "Appointments, documents and communication for patients." },
      { title: "Administrative dashboards", text: "Staffing and operational visibility for management." },
    ],
    workflows: ["Rota planning and publication", "Leave requests and approvals", "Credential and document renewal reminders", "Appointment booking and reminders", "Department-level reporting"],
    compliance: ["Least-privilege access by clinical and administrative role", "Audit logging of access to sensitive records", "Encryption in transit and at rest", "Design support for obligations such as India's DPDP Act 2023 and, for US clients, HIPAA"],
    work: ["hospital-hrms"],
    services: ["web-applications", "crm-erp-development", "cybersecurity", "mobile-applications"],
  },
  {
    slug: "education",
    name: "Education",
    metaTitle: "Education Software Development — School ERP & Parent Apps",
    metaDescription: "School ERP and education software development: admissions, attendance, fees, examinations, transport and parent–teacher apps for schools and campuses.",
    h1: "One system for the school office, the classroom and the parent's phone.",
    intro: "Schools and campuses manage admissions, academics, fees, transport and communication for thousands of students, often across several campuses, with small administrative teams.",
    challenge: "Student data is entered into several disconnected systems, and parents hear about attendance, fees and results late.",
    problems: [
      "The same student details are typed into admissions, fees and exam systems separately.",
      "Teachers spend class time on attendance registers and manual grading sheets.",
      "Fee follow-ups are manual and payment status is unclear.",
      "Parents get information through scattered calls, notes and chat groups.",
    ],
    solution: "A school ERP with one student record shared by every module, mobile apps for teachers and parents, online fee payments and automated notifications — with multi-campus support for groups of schools.",
    systems: [
      { title: "School ERP", text: "Admissions, academics, fees, payroll, transport and library." },
      { title: "Teacher app", text: "Attendance, assignments and grading from a phone." },
      { title: "Parent app", text: "Attendance, homework, results, fees and messaging." },
      { title: "Campus dashboards", text: "Operational and academic visibility across campuses." },
    ],
    workflows: ["Admissions and enrolment", "Daily attendance and absence alerts", "Examination scheduling and grading", "Fee invoicing, payment and reminders", "Transport routing and updates"],
    compliance: ["Protection of minors' personal data", "Parental consent and communication preferences", "Role-based access for staff, parents and students", "Personal data handling aligned with India's DPDP Act 2023"],
    work: ["edunexus-erp"],
    services: ["crm-erp-development", "mobile-applications", "web-applications", "data-analytics"],
  },
  {
    slug: "retail",
    name: "Retail & E-commerce",
    metaTitle: "Retail & E-commerce Software Development",
    metaDescription: "Retail and e-commerce software: storefronts, shopping apps, catalogue and inventory management, order operations and promotions for brands and retailers.",
    h1: "Commerce that looks like your brand and runs like your operation.",
    intro: "Retail brands compete on presentation, speed and fulfilment. The storefront earns the first order; operations earn the second.",
    challenge: "Templates limit brand presentation, and stock, orders and promotions end up managed across disconnected tools.",
    problems: [
      "Product pages load slowly with high-quality imagery.",
      "Online and offline stock drift apart, leading to overselling.",
      "Promotions require developer changes.",
      "Customer service can't see order history in one place.",
    ],
    solution: "Fast, brand-led storefronts and shopping apps on a back office built for your catalogue, stock and fulfilment rules — with promotions and reporting the team controls.",
    systems: [
      { title: "Storefronts", text: "Server-rendered, image-optimised web stores." },
      { title: "Shopping apps", text: "iOS and Android apps sharing one commerce back end." },
      { title: "Store administration", text: "Catalogue, inventory, orders, customers and promotions." },
      { title: "Retail analytics", text: "Sales, product and customer reporting." },
    ],
    workflows: ["Catalogue and variant management", "Checkout and payment", "Order fulfilment and returns", "Campaigns and discount codes", "Stock sync across channels"],
    compliance: ["Tokenised payments — card data never stored", "Consumer data consent and marketing preferences", "Secure admin access with audit logs", "Tax and invoice formats for your markets"],
    work: ["atelier-commerce", "atelier-mobile", "velorian", "auraplanters"],
    services: ["ecommerce-development", "mobile-applications", "ui-ux-design", "data-analytics"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    metaTitle: "Manufacturing Software Development — ERP, CRM & Inventory",
    metaDescription: "Manufacturing and distribution software: inventory, orders, dealer and sales CRMs, production tracking and B2B catalogues built around your operation.",
    h1: "Operational software for manufacturers and distributors.",
    intro: "Manufacturers and distributors depend on accurate stock, reliable orders and a sales team that knows what can actually be delivered.",
    challenge: "Inventory, orders and sales activity are tracked in spreadsheets updated at different times by different teams.",
    problems: [
      "Sales commits stock that is already reserved or in transit.",
      "Quotations are built by hand from price lists and stock sheets.",
      "Dealers and distributors call to check availability and order status.",
      "Management can't see pipeline, stock and dispatch together.",
    ],
    solution: "A system of record for stock, orders and customers: live availability, quotations generated from real inventory, dealer portals and dashboards that connect sales to operations.",
    systems: [
      { title: "Inventory and warehouse", text: "Stock by location, reservations and movements." },
      { title: "Sales CRM", text: "Leads, quotations and field sales." },
      { title: "Dealer portals", text: "Availability, ordering and order tracking for partners." },
      { title: "B2B catalogue websites", text: "Product catalogues connected to enquiry workflows." },
    ],
    workflows: ["Stock intake and reservation", "Quotation and order creation", "Dispatch and delivery tracking", "Dealer ordering", "Invoice generation"],
    compliance: ["GST-compliant invoicing formats", "Role-based access for sales, logistics and finance", "Audit trails on stock and price changes", "Integration with existing accounting systems"],
    work: ["marblemart-crm", "marblemart-web"],
    services: ["crm-erp-development", "custom-software-development", "business-automation", "data-analytics"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    metaTitle: "Logistics & Delivery Software Development",
    metaDescription: "Logistics and delivery software: order platforms, dispatch and fleet dashboards, tracking and event-driven architecture that holds up under peak demand.",
    h1: "Delivery and logistics systems that hold up at peak demand.",
    intro: "Logistics software has to deal with real-world movement: orders arriving in peaks, vehicles and people in the field, and customers expecting to know where things are.",
    challenge: "Order, dispatch and tracking systems are often a single application where one overloaded part slows everything.",
    problems: [
      "Checkout slows or fails during demand peaks.",
      "Dispatchers work from lists instead of exceptions.",
      "Customers call to ask for order status.",
      "Nobody can trace an order's path across systems when something goes wrong.",
    ],
    solution: "Event-driven platforms where ordering, payments, dispatch and tracking are separated, can scale independently and share status through events — with dashboards that show dispatchers what needs attention.",
    systems: [
      { title: "Order platforms", text: "Customer ordering and payments." },
      { title: "Dispatch and fleet dashboards", text: "Assignment, tracking and exceptions." },
      { title: "Driver apps", text: "Jobs, navigation hand-off and proof of delivery." },
      { title: "Tracking and notifications", text: "Live status for customers." },
    ],
    workflows: ["Order intake and payment", "Assignment and dispatch", "Live status updates", "Proof of delivery", "Exception handling"],
    compliance: ["Location data minimisation and retention limits", "Driver and customer data access controls", "Payment security via hosted gateways", "Distributed tracing for incident investigation"],
    work: ["craverush"],
    services: ["custom-software-development", "cloud-devops", "mobile-applications", "software-modernization"],
  },
  {
    slug: "finance",
    name: "Finance",
    metaTitle: "Financial Services Software Development",
    metaDescription: "Software for financial services firms: customer portals, loan and application workflows, reporting and secure integrations designed with strong access control.",
    h1: "Software for financial services, built with control and auditability.",
    intro: "Lenders, advisory firms and financial service providers need digital workflows that are fast for customers and fully traceable for the business.",
    challenge: "Applications, documents and approvals move through email and spreadsheets, with limited traceability.",
    problems: [
      "Loan or account applications stall while documents are chased by email.",
      "Approval decisions are hard to trace after the fact.",
      "Customers have no self-service view of their application or account.",
      "Reporting to management is assembled by hand.",
    ],
    solution: "Workflow systems with structured applications, document collection, maker-checker approvals, customer portals and complete audit trails — integrated with the verification and payment services you already use.",
    systems: [
      { title: "Application workflows", text: "Structured intake, document collection and approvals." },
      { title: "Customer portals", text: "Application status, documents and statements." },
      { title: "Internal operations consoles", text: "Queues, assignments and maker-checker controls." },
      { title: "Management reporting", text: "Pipeline, turnaround and portfolio reporting." },
    ],
    workflows: ["Application intake", "Document collection and verification", "Maker-checker approvals", "Customer communication", "Periodic reporting"],
    compliance: ["Full audit trails for every decision", "Encryption and strict access control for financial data", "Payment data handled only through compliant gateways", "Design support for applicable RBI guidelines and data protection law"],
    work: [],
    services: ["custom-software-development", "cybersecurity", "business-automation", "data-analytics"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    metaTitle: "Hospitality Software Development — Booking & Operations",
    metaDescription: "Hospitality software: booking platforms, guest apps, restaurant and outlet operations and back-office systems for hotels, restaurants and venues.",
    h1: "Booking and operations software for hotels, restaurants and venues.",
    intro: "Hospitality businesses sell time and capacity — rooms, tables, slots — and win repeat guests on service. Software needs to handle both the booking and what happens after it.",
    challenge: "Bookings, guest information and outlet operations sit in separate tools and third-party platforms.",
    problems: [
      "Direct bookings are hard to take, so commission-based channels dominate.",
      "Guest preferences are not recorded between visits.",
      "Staff coordinate housekeeping and service by phone and paper.",
      "Owners lack one view across outlets or properties.",
    ],
    solution: "Direct booking platforms, guest-facing apps and back-office tools that share one guest record and give owners a view across every outlet or property.",
    systems: [
      { title: "Direct booking platforms", text: "Rooms, tables or slots with payments." },
      { title: "Guest apps and portals", text: "Bookings, requests and loyalty." },
      { title: "Operations tools", text: "Housekeeping, service requests and staff tasks." },
      { title: "Multi-property dashboards", text: "Occupancy and revenue across locations." },
    ],
    workflows: ["Availability and booking", "Payment and deposits", "Guest requests", "Staff task assignment", "Daily operational reporting"],
    compliance: ["Guest personal data protection", "Tokenised payments", "Role-based staff access", "Marketing consent management"],
    work: [],
    services: ["web-applications", "mobile-applications", "ecommerce-development", "ui-ux-design"],
  },
  {
    slug: "fitness",
    name: "Fitness & Wellness",
    metaTitle: "Fitness & Wellness Software Development — Gym Management",
    metaDescription: "Gym and wellness software development: membership management, recurring billing, check-ins, class booking and member apps for fitness businesses.",
    h1: "Membership, billing and check-in software for fitness businesses.",
    intro: "Fitness and wellness businesses live on recurring memberships. Keeping billing, attendance and renewals connected is the difference between a steady business and a leaky one.",
    challenge: "Billing, attendance and member records are managed in separate tools and reconciled by hand.",
    problems: [
      "Failed or missed payments go unnoticed.",
      "Expired memberships keep checking in.",
      "Class capacity is managed on paper or chat groups.",
      "Owners can't see usage trends across the facility.",
    ],
    solution: "A cloud platform that ties each member's plan, payments and check-ins together, with class booking, renewal follow-up and usage analytics — usable from a tablet at the front desk.",
    systems: [
      { title: "Membership management", text: "Plans, members and renewals." },
      { title: "Recurring billing", text: "Subscriptions and payment retries." },
      { title: "Check-in and access", text: "Real-time check-in with membership validation." },
      { title: "Member apps", text: "Class booking, payments and progress." },
    ],
    workflows: ["Member sign-up and plan selection", "Recurring billing", "Check-in", "Class booking", "Renewal follow-up"],
    compliance: ["Tokenised recurring payments", "Member health data kept to the minimum needed", "Role-based access for staff and trainers", "Consent for marketing communication"],
    work: ["fitness-operations"],
    services: ["saas-development", "web-applications", "mobile-applications", "business-automation"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    metaTitle: "Software for Professional Services Firms",
    metaDescription: "Software for professional services and staffing firms: client portals, recruitment platforms, project and time tracking and document workflows.",
    h1: "Client, project and people systems for professional services firms.",
    intro: "Consultancies, agencies and staffing firms sell expertise and time. Their systems need to track clients, projects, people and documents without slowing the experts down.",
    challenge: "Client work, hiring pipelines and documents are managed through inboxes and shared drives.",
    problems: [
      "Candidate and client pipelines live in email threads.",
      "Documents are shared by email with no version control.",
      "Time and project status are reported manually.",
      "Clients ask for updates that a portal could provide.",
    ],
    solution: "Portals and internal systems for recruitment, client work and documents: structured pipelines, secure document sharing and self-service status for clients and candidates.",
    systems: [
      { title: "Recruitment platforms", text: "Jobs, applicants and stage tracking." },
      { title: "Client portals", text: "Status, documents and requests." },
      { title: "Project and time tracking", text: "Engagements, tasks and effort." },
      { title: "Document workflows", text: "Templates, approvals and e-signature integration." },
    ],
    workflows: ["Job posting and applications", "Candidate stage tracking", "Client onboarding", "Document requests and approvals", "Status reporting"],
    compliance: ["Candidate and client data protection", "Access control on confidential documents", "Retention and deletion policies", "Audit trails on document access"],
    work: ["hirestream"],
    services: ["web-applications", "custom-software-development", "business-automation", "cybersecurity"],
  },
  {
    slug: "b2b",
    name: "B2B / Enterprise",
    metaTitle: "Enterprise Software Development for B2B Companies",
    metaDescription: "Enterprise software development for B2B companies: ERPs, partner portals, integrations and modernization of core business systems.",
    h1: "Core systems for B2B companies and enterprise operations.",
    intro: "B2B companies run on long relationships, complex pricing, multiple sites and many internal teams. Their core systems need to be dependable, integrated and adaptable over years.",
    challenge: "Core processes are split across legacy systems, packaged tools and spreadsheets that don't share data.",
    problems: [
      "Multiple sites or business units report differently.",
      "Legacy systems block integration with newer tools.",
      "Partner and customer requests are handled by email.",
      "Workforce, project and billing data don't reconcile.",
    ],
    solution: "ERPs, partner portals and integration layers that give each business unit the tools it needs and leadership one consistent view — modernized in stages rather than replaced in a single risky project.",
    systems: [
      { title: "Enterprise resource planning", text: "Projects, workforce, materials and billing." },
      { title: "Partner and customer portals", text: "Orders, requests and documents." },
      { title: "Integration layers", text: "APIs and events connecting existing systems." },
      { title: "Executive reporting", text: "Consolidated operational and financial views." },
    ],
    workflows: ["Project setup and tracking", "Attendance and payroll", "Procurement and materials", "Client billing and ledgers", "Cross-unit reporting"],
    compliance: ["Segregation of duties in approval workflows", "Single sign-on and centralised access control", "Audit trails across modules", "Data residency options on major cloud providers"],
    work: ["construction-erp", "marblemart-crm"],
    services: ["crm-erp-development", "software-modernization", "cloud-devops", "custom-software-development"],
  },
];

export const industries: Industry[] = base.map((i) => ({ ...i, ...industryExtras[i.slug] }));

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const industriesBy = (slugs: string[]) => slugs.map(getIndustry).filter((i): i is Industry => !!i);
