// src/lib/service-page-data.ts

/* ─── TYPES ──────────────────────────────────────────────────── */
export type BuildItem = {
  icon: string; color: string; bgColor: string;
  title: string; description: string; features: string[];
};
export type Industry = {
  name: string; icon: string; color: string;
  challenge: string; solution: string;
};
export type FeatureBlock = {
  eyebrow: string; title: string; description: string;
  bullets: string[]; image: string; imageAlt: string; reverse: boolean;
};
export type TechItem = { name: string; icon: string };
export type TechGroup = { category: string; color: string; items: TechItem[] };
export type Benefit = {
  metric: string; label: string; description: string;
  icon: string; color: string;
};
export type FAQ = { q: string; a: string };
export type ServicePage = {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    badge: string; headline: string; headlineGrad: string;
    description: string; heroImage: string;
    stats: Array<{ value: string; label: string }>;
  };
  buildLabel: string; buildTitle: string; buildTitleGrad: string; buildSubtitle: string;
  buildItems: BuildItem[];
  industryLabel: string; industryTitle: string;
  industries: Industry[];
  featureLabel: string; featureTitle: string;
  features: FeatureBlock[];
  techGroups: TechGroup[];
  benefits: Benefit[];
  faqs: FAQ[];
  ctaTitle: string; ctaDescription: string;
};

/* ─── ICON HELPER ─────────────────────────────────────────────── */
const I = (n: string) => `https://img.icons8.com/color/96/${n}.png`;

/* ═══════════════════════════════════════════════════════════════
   1. WEB APPLICATIONS
═══════════════════════════════════════════════════════════════ */
const webApplications: ServicePage = {
  slug: 'web-applications',
  meta: { title: 'Custom Web Application Development | Eryon AI', description: 'Enterprise-grade custom web applications, business portals, admin dashboards, and scalable platforms tailored to your exact requirements.' },
  hero: {
    badge: 'Enterprise Web Application Development',
    headline: 'Custom Web Applications',
    headlineGrad: 'Built Around Your Business',
    description: 'We design and develop scalable web platforms that automate operations, improve productivity, and accelerate growth — from admin dashboards to complex multi-module enterprise portals.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    stats: [{ value: '150+', label: 'Platforms Built' }, { value: '40%', label: 'Avg. Efficiency Gain' }, { value: '99.9%', label: 'Uptime SLA' }],
  },
  buildLabel: 'What We Build', buildTitle: 'Web Solutions for Every', buildTitleGrad: 'Business Workflow',
  buildSubtitle: 'From customer-facing portals to internal operations platforms, every system is engineered around your actual processes — not generic templates.',
  buildItems: [
    { icon: I('dashboard-layout'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Admin Dashboards', description: 'Centralized control panels giving teams real-time visibility over operations, users, and KPIs.', features: ['Role-based views', 'Real-time data', 'Custom widgets'] },
    { icon: I('user'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Customer Portals', description: 'Self-service platforms where customers manage accounts, track orders, and raise support tickets.', features: ['Self-service tools', 'Order tracking', 'Support integration'] },
    { icon: I('conference-call'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Vendor Portals', description: 'Supplier management platforms for onboarding, PO tracking, invoicing, and communication.', features: ['Vendor onboarding', 'PO management', 'Invoice tracking'] },
    { icon: I('online-store'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'Marketplace Platforms', description: 'Multi-seller marketplaces with listing management, commission logic, and integrated payments.', features: ['Multi-vendor', 'Commission engine', 'Escrow payments'] },
    { icon: I('calendar'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Booking Systems', description: 'Appointment and reservation platforms with calendar sync and automated payment collection.', features: ['Calendar sync', 'Auto reminders', 'Online payments'] },
    { icon: I('combo-chart'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Analytics Platforms', description: 'Custom BI dashboards that turn raw operational data into decisions your team can act on today.', features: ['Custom reports', 'Live dashboards', 'Data exports'] },
    { icon: I('workflow'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Internal Business Systems', description: 'Operational tools replacing fragmented spreadsheets and disconnected apps with one unified platform.', features: ['Custom workflows', 'Team collaboration', 'Audit trails'] },
    { icon: I('organization'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Enterprise Portals', description: 'Unified enterprise hubs where employees, partners, and customers interact across all business modules.', features: ['SSO integration', 'Multi-role access', 'Module-based'] },
  ],
  industryLabel: 'Industries We Serve', industryTitle: 'Web Platforms Across Every Sector',
  industries: [
    { name: 'Real Estate', icon: I('real-estate'), color: '#0066ff', challenge: 'Agents manage listings and leads across disconnected tools with no unified view.', solution: 'Unified portals centralizing property data, lead pipelines, and transaction management.' },
    { name: 'Healthcare', icon: I('caduceus'), color: '#10b981', challenge: 'Patient records live in siloed systems with no connected care view.', solution: 'HIPAA-compliant patient portals connecting clinical, billing, and admin workflows.' },
    { name: 'Finance', icon: I('bank-building'), color: '#f59e0b', challenge: 'Manual reporting and compliance processes slow financial operations significantly.', solution: 'Automated financial dashboards and compliance tracking built to regulatory standards.' },
    { name: 'Logistics', icon: I('in-transit'), color: '#00b4d8', challenge: 'Shipments are tracked across multiple carriers with no single source of truth.', solution: 'Custom logistics platforms with live tracking, carrier integration, and warehouse management.' },
    { name: 'Manufacturing', icon: I('factory'), color: '#6366f1', challenge: 'Production planning and inventory are disconnected from sales and procurement.', solution: 'Integrated portals linking production schedules, inventory levels, and customer orders.' },
    { name: 'Education', icon: I('graduation-cap'), color: '#ec4899', challenge: 'Student data, attendance, and grades are managed in separate systems with no unified view.', solution: 'Unified school management portals connecting students, teachers, parents, and administration.' },
    { name: 'Retail', icon: I('shop'), color: '#0066ff', challenge: 'Inventory, sales, and returns are tracked separately across physical and digital channels.', solution: 'Retail management platforms unifying POS, inventory, and e-commerce in one system.' },
    { name: 'Construction', icon: I('brick-wall'), color: '#f59e0b', challenge: 'Project timelines, materials, and contractor payments are tracked in spreadsheets.', solution: 'Construction management platforms with project tracking, budget control, and subcontractor portals.' },
  ],
  featureLabel: 'Platform Capabilities', featureTitle: 'Built for How Enterprise Teams Actually Work',
  features: [
    { eyebrow: 'Access Control', title: 'Role-Based Permissions at Every Level', description: 'Fine-grained access control lets you define exactly what each user sees and can do. From global admin to read-only analyst, permissions adapt to your organizational structure — not the other way around.', bullets: ['Module-level and field-level permissions', 'Department-based role hierarchies', 'Every action logged and auditable', 'Dynamic permission inheritance'], image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80', imageAlt: 'Security and access control', reverse: false },
    { eyebrow: 'Real-Time Data', title: 'Dashboards That Update Without Refreshing', description: 'WebSocket-powered live updates keep every team member looking at the same data. No more "refresh to see latest" — your dashboards move with your operations in real time.', bullets: ['WebSocket and SSE data streams', 'Configurable widget library', 'Mobile-responsive layouts', 'Export to PDF, Excel, and CSV'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', imageAlt: 'Real-time analytics dashboard', reverse: true },
    { eyebrow: 'Workflow Engine', title: 'Automate the Approvals That Slow You Down', description: 'Multi-step approval workflows with conditions, escalations, and notifications. What once required email chains and manual chasing now resolves automatically — with a full audit trail.', bullets: ['Multi-step conditional flows', 'SLA-based auto-escalations', 'Email and in-app notifications', 'Full workflow history and rollback'], image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', imageAlt: 'Team workflow automation', reverse: false },
    { eyebrow: 'Integrations', title: 'Connect the Tools Your Team Already Uses', description: 'REST and GraphQL APIs, webhooks, and pre-built connectors let your new platform communicate with your existing ERP, CRM, payment gateways, and communication tools from day one.', bullets: ['REST & GraphQL API first', 'Pre-built payment gateway connectors', 'SSO with Google, Microsoft, Okta', 'Zapier and webhook support'], image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', imageAlt: 'API integration development', reverse: true },
  ],
  techGroups: [
    { category: 'Frontend', color: '#0066ff', items: [{ name: 'Next.js', icon: I('nextjs') }, { name: 'React', icon: I('react-native') }, { name: 'TypeScript', icon: I('typescript') }] },
    { category: 'Backend', color: '#10b981', items: [{ name: 'Spring Boot', icon: I('spring-logo') }, { name: 'FastAPI', icon: I('api') }, { name: 'Node.js', icon: I('nodejs') }] },
    { category: 'Database', color: '#f59e0b', items: [{ name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'MongoDB', icon: I('mongodb') }, { name: 'Redis', icon: I('redis') }] },
    { category: 'Cloud & DevOps', color: '#6366f1', items: [{ name: 'AWS', icon: I('amazon-web-services') }, { name: 'Docker', icon: I('docker') }, { name: 'Kubernetes', icon: I('kubernetes') }] },
  ],
  benefits: [
    { metric: '60%', label: 'Reduction in Manual Work', description: 'Automated workflows eliminate the repetitive manual tasks your team handles daily.', icon: I('automatic'), color: '#0066ff' },
    { metric: '3×', label: 'Faster Report Generation', description: 'Real-time dashboards replace weekly manual reporting cycles completely.', icon: I('combo-chart'), color: '#10b981' },
    { metric: '99.9%', label: 'Application Uptime', description: 'Auto-scaling cloud infrastructure keeps your platform available 24/7.', icon: I('flash-on'), color: '#f59e0b' },
    { metric: '40%', label: 'Better Team Productivity', description: 'Teams stop switching tools and work inside one unified operational platform.', icon: I('conference-call'), color: '#6366f1' },
    { metric: '2×', label: 'Faster Customer Onboarding', description: 'Self-service portals accelerate customer activation without support overhead.', icon: I('user'), color: '#ec4899' },
    { metric: '100%', label: 'Audit Trail Coverage', description: 'Every action is logged, timestamped, and attributable for compliance.', icon: I('security-checked'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'How long does a custom web application take to build?', a: 'Most web applications take 3–6 months depending on scope. We start with a 2-week discovery phase to define requirements and architecture before any development begins.' },
    { q: 'Can you integrate our new platform with existing CRM, ERP, or accounting software?', a: 'Yes. We build REST and GraphQL APIs that connect your platform to virtually any existing system — including Salesforce, SAP, QuickBooks, HubSpot, and custom in-house tools.' },
    { q: 'Do you handle both frontend and backend development?', a: 'We are a full-stack team. Our engineers handle UI/UX design, frontend, backend APIs, database architecture, cloud infrastructure, and deployment — end to end.' },
    { q: 'What happens if our requirements change mid-project?', a: 'We use Agile delivery with two-week sprints. At the start of each sprint, requirements can be adjusted or reprioritized. We maintain a shared backlog and discuss all changes transparently.' },
    { q: 'Can the application scale as our business grows?', a: 'Every system we build is designed for horizontal scaling using containerized deployments on Kubernetes with auto-scaling policies, ensuring your platform handles 10x growth without a rebuild.' },
    { q: 'How do you handle data security and authentication?', a: 'We implement JWT authentication, OAuth 2.0, encrypted data at rest and in transit, OWASP vulnerability scanning, and role-based access control as standard on every project.' },
    { q: 'Will the web application work on mobile devices?', a: 'All our web applications are fully responsive and mobile-optimized. For mobile-heavy use cases, we can also build companion iOS and Android apps sharing the same backend.' },
    { q: 'Do you provide post-launch maintenance?', a: 'Yes. We offer ongoing maintenance plans covering bug fixes, security patches, performance monitoring, and feature iterations. Most clients keep us on retainer after launch.' },
    { q: 'Can we see progress during development?', a: 'Absolutely. We share a staging environment from week one so you can test every feature before it goes live. Weekly demo calls ensure there are no surprises.' },
    { q: 'Do you sign NDAs?', a: 'Yes, we sign a mutual NDA before any discovery conversation. Your business requirements, data, and ideas remain strictly confidential throughout and after the engagement.' },
  ],
  ctaTitle: 'Ready to Build Your Web Platform?',
  ctaDescription: 'Share your requirements and we will scope your project, estimate the timeline, and propose the right technology stack — no commitment needed.',
};

/* ═══════════════════════════════════════════════════════════════
   2. MOBILE APPLICATIONS
═══════════════════════════════════════════════════════════════ */
const mobileApplications: ServicePage = {
  slug: 'mobile-applications',
  meta: { title: 'Mobile App Development — iOS & Android | Eryon AI', description: 'Cross-platform and native mobile apps built to perform at scale. React Native and Flutter solutions for iOS and Android with exceptional UX.' },
  hero: {
    badge: 'iOS & Android App Development',
    headline: 'Mobile Apps Your Users',
    headlineGrad: 'Will Actually Love Using',
    description: 'We build cross-platform and native mobile applications with performance-first architecture, intuitive UX, and real-world reliability — for both iOS and Android.',
    heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80',
    stats: [{ value: '100+', label: 'Apps Delivered' }, { value: '4.8★', label: 'Avg. App Rating' }, { value: 'Both', label: 'iOS & Android' }],
  },
  buildLabel: 'What We Build', buildTitle: 'Mobile Solutions for Every', buildTitleGrad: 'Use Case',
  buildSubtitle: 'Whether it\'s a customer-facing consumer app or a complex field operations tool, we build mobile experiences that work in the real world.',
  buildItems: [
    { icon: I('iphone'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'iOS Applications', description: 'Native iOS apps built with Swift or React Native, optimized for Apple\'s design guidelines and App Store standards.', features: ['Swift & React Native', 'App Store ready', 'Apple design guidelines'] },
    { icon: I('android-os'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'Android Applications', description: 'Native and cross-platform Android apps optimized for the diverse Android device ecosystem.', features: ['Kotlin & React Native', 'Google Play ready', 'Material Design'] },
    { icon: I('smartphone-tablet'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Cross-Platform Apps', description: 'Single codebase apps that run natively on both iOS and Android — reducing cost without compromising quality.', features: ['React Native & Flutter', 'Shared codebase', 'Native performance'] },
    { icon: I('conference-call'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Business Mobile Apps', description: 'Internal enterprise apps for teams, managers, and executives to manage operations from anywhere.', features: ['Offline support', 'Enterprise SSO', 'Push notifications'] },
    { icon: I('user'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Customer-Facing Apps', description: 'Consumer-grade apps that represent your brand, drive engagement, and generate revenue.', features: ['Onboarding flows', 'In-app purchases', 'Analytics built-in'] },
    { icon: I('in-transit'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Field Staff Apps', description: 'Apps for engineers, delivery staff, and field technicians who work with poor or no internet connectivity.', features: ['Offline-first', 'GPS tracking', 'Photo capture'] },
    { icon: I('delivery'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Delivery & Logistics Apps', description: 'Driver apps with route optimization, proof of delivery, and real-time dispatch integration.', features: ['Route optimization', 'Live tracking', 'Proof of delivery'] },
    { icon: I('organization'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Enterprise Mobile Solutions', description: 'Complex, role-based enterprise mobile platforms connecting remote teams with back-office systems.', features: ['Multi-role support', 'API integration', 'MDM compatible'] },
  ],
  industryLabel: 'Industries We Serve', industryTitle: 'Mobile Apps Built for Your Industry',
  industries: [
    { name: 'Healthcare', icon: I('caduceus'), color: '#10b981', challenge: 'Clinical teams need patient data at the bedside but systems are desktop-only.', solution: 'HIPAA-compliant mobile apps giving clinicians secure, real-time patient access from any device.' },
    { name: 'Logistics', icon: I('in-transit'), color: '#00b4d8', challenge: 'Drivers and field staff operate without reliable desktop access to management systems.', solution: 'Offline-first driver apps with route optimization, tracking, and proof of delivery workflows.' },
    { name: 'Real Estate', icon: I('real-estate'), color: '#0066ff', challenge: 'Agents need property data, client information, and documents while on-site at properties.', solution: 'Mobile CRM apps giving agents instant access to listings, leads, and document e-signing.' },
    { name: 'Fitness', icon: I('dumbbell'), color: '#ec4899', challenge: 'Gym members expect seamless class booking and progress tracking on their phones.', solution: 'Member apps with class booking, workout tracking, payments, and push notification engagement.' },
    { name: 'Retail', icon: I('shop'), color: '#f59e0b', challenge: 'Sales staff need real-time stock and customer data on the shop floor.', solution: 'POS-integrated retail apps giving floor staff inventory, pricing, and CRM data in their hands.' },
    { name: 'Construction', icon: I('brick-wall'), color: '#6366f1', challenge: 'Site managers cannot update project timelines or raise issues from the construction site.', solution: 'Construction management mobile apps for on-site reporting, punch lists, and photo documentation.' },
    { name: 'Finance', icon: I('bank-building'), color: '#0066ff', challenge: 'Financial advisors need client portfolio data and documents accessible off-site.', solution: 'Secure mobile banking and advisory apps with biometric authentication and real-time portfolio views.' },
    { name: 'Education', icon: I('graduation-cap'), color: '#10b981', challenge: 'Students and parents need access to schedules, grades, and fees on mobile.', solution: 'School apps giving students, parents, and teachers access to all academic data on any device.' },
  ],
  featureLabel: 'App Capabilities', featureTitle: 'What Makes Our Mobile Apps Different',
  features: [
    { eyebrow: 'Offline Architecture', title: 'Apps That Work Without Internet', description: 'We build offline-first applications that queue actions locally and sync automatically when connectivity is restored. Your field teams never lose data or productivity due to poor network coverage.', bullets: ['Local SQLite / Realm storage', 'Background sync on reconnect', 'Conflict resolution logic', 'Works in remote and underground locations'], image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', imageAlt: 'Mobile app offline capability', reverse: false },
    { eyebrow: 'Security & Auth', title: 'Biometric and Enterprise-Grade Security', description: 'Every app we build includes Face ID, Touch ID, and PIN authentication by default. Enterprise deployments support SAML-based SSO and MDM enrollment for complete security compliance.', bullets: ['Face ID & Touch ID login', 'SAML 2.0 SSO support', 'Encrypted local storage', 'Remote wipe via MDM'], image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80', imageAlt: 'Mobile security and authentication', reverse: true },
    { eyebrow: 'User Engagement', title: 'Push Notifications That Drive Real Actions', description: 'Intelligent, personalized push notifications designed to bring users back without annoying them. Trigger-based, segmented, and A/B testable from a unified notification management system.', bullets: ['Trigger-based automation', 'User segment targeting', 'Rich media notifications', 'Delivery and open rate analytics'], image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', imageAlt: 'Push notification engagement', reverse: false },
    { eyebrow: 'OTA Updates', title: 'Ship Updates Without App Store Delays', description: 'Over-the-air update capabilities let us deploy bug fixes and UI changes to all users immediately — bypassing App Store review for eligible updates and keeping your app current without friction.', bullets: ['CodePush for React Native', 'Hotfix deployment in minutes', 'Version rollback capability', 'Staged rollout support'], image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', imageAlt: 'OTA deployment pipeline', reverse: true },
  ],
  techGroups: [
    { category: 'Mobile', color: '#0066ff', items: [{ name: 'React Native', icon: I('react-native') }, { name: 'Flutter', icon: I('flutter') }, { name: 'TypeScript', icon: I('typescript') }] },
    { category: 'Backend', color: '#10b981', items: [{ name: 'FastAPI', icon: I('api') }, { name: 'Node.js', icon: I('nodejs') }, { name: 'Firebase', icon: I('firebase') }] },
    { category: 'Database', color: '#f59e0b', items: [{ name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'MongoDB', icon: I('mongodb') }, { name: 'SQLite', icon: I('sql') }] },
    { category: 'Cloud & Push', color: '#6366f1', items: [{ name: 'AWS', icon: I('amazon-web-services') }, { name: 'GCP', icon: I('google-cloud') }, { name: 'Firebase', icon: I('firebase') }] },
  ],
  benefits: [
    { metric: '4.8★', label: 'Average App Store Rating', description: 'Our apps consistently receive top ratings due to performance and UX quality.', icon: I('star'), color: '#f59e0b' },
    { metric: '60%', label: 'Reduction in Field Errors', description: 'Digital workflows replace paper forms, eliminating data entry mistakes.', icon: I('checkmark'), color: '#10b981' },
    { metric: '2×', label: 'Faster Field Operations', description: 'Mobile-first tools cut operational cycles in half for field teams.', icon: I('flash-on'), color: '#0066ff' },
    { metric: '35%', label: 'Higher User Retention', description: 'Intelligent notifications and personalized UX keep users coming back.', icon: I('user'), color: '#ec4899' },
    { metric: '99%', label: 'Crash-Free Sessions', description: 'Rigorous QA across 50+ device configurations ensures stability.', icon: I('security-checked'), color: '#6366f1' },
    { metric: '3×', label: 'Faster App Delivery vs. Native', description: 'Cross-platform development delivers iOS and Android simultaneously.', icon: I('rocket'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'Should I build native or cross-platform?', a: 'For most business applications, React Native or Flutter is the right choice — one codebase for both iOS and Android, 80% cost savings, and near-native performance. We recommend native only for apps with very demanding graphics or hardware integrations.' },
    { q: 'How long does mobile app development take?', a: 'A well-scoped mobile app typically takes 3–5 months. An MVP can be delivered in 8–12 weeks. Timeline depends on complexity, third-party integrations, and the number of user roles.' },
    { q: 'Do you handle App Store and Google Play submission?', a: 'Yes. We manage the full submission process for both App Store and Google Play, including compliance checks, screenshots, metadata, and responding to review requests.' },
    { q: 'Can the app work offline?', a: 'Yes. We specialize in offline-first architecture using local databases and background sync. This is particularly important for logistics, healthcare, and field operations apps.' },
    { q: 'Can you integrate the mobile app with our existing backend?', a: 'Absolutely. We build mobile apps that consume existing REST or GraphQL APIs. If your backend needs upgrading for mobile performance, we handle that too.' },
    { q: 'How do you handle app security for enterprise use?', a: 'We implement biometric authentication, certificate pinning, encrypted local storage, SAML SSO, and MDM compatibility as standard features for enterprise mobile applications.' },
    { q: 'What happens after the app is launched?', a: 'We offer post-launch support including crash monitoring, performance optimization, OS version compatibility updates, and feature additions on a monthly retainer or per-sprint basis.' },
    { q: 'Can you build both the mobile app and the backend?', a: 'Yes. We are a full-stack team. We design, build, and deploy the mobile app, backend APIs, database, and cloud infrastructure as one integrated engagement.' },
    { q: 'How do you test across different devices?', a: 'We test on real devices covering the top 95% of active OS versions for both iOS and Android. We use automated test suites and manual QA across screen sizes and hardware configurations.' },
    { q: 'Do you build tablet-compatible versions?', a: 'Yes. We build adaptive layouts that work across phones and tablets, with dedicated tablet UI optimizations where the larger screen real estate benefits the user experience.' },
  ],
  ctaTitle: 'Ready to Ship Your Mobile App?',
  ctaDescription: 'Tell us about your app idea and we will assess the right technology, estimate delivery timelines, and plan your MVP scope.',
};

/* ═══════════════════════════════════════════════════════════════
   3. CUSTOM SAAS
═══════════════════════════════════════════════════════════════ */
const customSaas: ServicePage = {
  slug: 'custom-saas',
  meta: { title: 'Custom SaaS Application Development | Eryon AI', description: 'We build multi-tenant SaaS platforms, B2B/B2C products, and white-label solutions engineered for scale, recurring revenue, and self-service growth.' },
  hero: {
    badge: 'SaaS Product Engineering',
    headline: 'SaaS Platforms That',
    headlineGrad: 'Scale With Your Revenue',
    description: 'We engineer multi-tenant SaaS platforms from architecture to launch — built for subscription revenue, self-service growth, and the scale demands of modern software businesses.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    stats: [{ value: '50+', label: 'SaaS Products Launched' }, { value: '1M+', label: 'End Users Served' }, { value: '99.99%', label: 'Multi-Tenant Uptime' }],
  },
  buildLabel: 'What We Build', buildTitle: 'SaaS Products for Every', buildTitleGrad: 'Market Segment',
  buildSubtitle: 'From MVP to enterprise-grade multi-tenant platforms, we build SaaS products that generate recurring revenue and grow themselves.',
  buildItems: [
    { icon: I('organization'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Multi-Tenant SaaS', description: 'Shared infrastructure, isolated data — the correct architecture for scalable software businesses.', features: ['Tenant isolation', 'Schema per tenant', 'Shared infrastructure'] },
    { icon: I('conference-call'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'B2B SaaS Platforms', description: 'Business-facing SaaS with team management, role-based access, API access, and enterprise billing.', features: ['Team workspaces', 'API keys', 'Enterprise billing'] },
    { icon: I('user'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'B2C SaaS Platforms', description: 'Consumer-facing products with self-service onboarding, freemium models, and virality mechanics.', features: ['Freemium support', 'Self-service', 'Viral referrals'] },
    { icon: I('rocket'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'SaaS MVP Development', description: 'Production-ready MVPs in 8–12 weeks with real multi-tenancy, auth, billing, and analytics from day one.', features: ['8–12 week delivery', 'Real multi-tenancy', 'Billing included'] },
    { icon: I('bank-cards'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Subscription Platforms', description: 'Recurring billing, plan management, usage-based pricing, and dunning automation built in.', features: ['Stripe & Paddle', 'Usage billing', 'Dunning flows'] },
    { icon: I('clone'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'White Label SaaS', description: 'Fully brandable SaaS platforms your resellers or customers can deploy under their own brand.', features: ['Custom domains', 'Brand theming', 'Reseller portals'] },
    { icon: I('combo-chart'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Cloud-Native SaaS', description: 'Microservices architecture with containerized deployment designed for 99.99% uptime at any scale.', features: ['Microservices', 'Auto-scaling', 'Multi-region'] },
    { icon: I('artificial-intelligence'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'AI-Powered SaaS', description: 'SaaS products with embedded AI features — copilots, recommendations, automation, and insights.', features: ['LLM integration', 'AI features', 'Usage metering'] },
  ],
  industryLabel: 'Industries We Serve', industryTitle: 'Vertical SaaS for Specialized Markets',
  industries: [
    { name: 'HR & Recruitment', icon: I('conference-call'), color: '#6366f1', challenge: 'HR teams manage hiring, onboarding, and performance in disconnected tools.', solution: 'Unified HRMS SaaS with recruitment pipelines, onboarding workflows, and performance management.' },
    { name: 'Legal Tech', icon: I('document'), color: '#0066ff', challenge: 'Law firms track billable hours, cases, and documents manually across spreadsheets.', solution: 'Legal management SaaS with time tracking, case management, billing, and document automation.' },
    { name: 'Healthcare', icon: I('caduceus'), color: '#10b981', challenge: 'Clinics and hospitals lack modern software for scheduling, billing, and patient communication.', solution: 'Healthcare SaaS platforms with appointment management, billing, and HIPAA-compliant records.' },
    { name: 'Education', icon: I('graduation-cap'), color: '#ec4899', challenge: 'EdTech companies need scalable platforms for course delivery, grading, and student analytics.', solution: 'LMS SaaS platforms handling course management, video delivery, assessments, and certifications.' },
    { name: 'Real Estate', icon: I('real-estate'), color: '#f59e0b', challenge: 'Property management companies lack software connecting landlords, tenants, and maintenance teams.', solution: 'Property management SaaS with tenant portals, maintenance workflows, and automated rent collection.' },
    { name: 'Finance', icon: I('bank-building'), color: '#00b4d8', challenge: 'Financial advisors and accountants work across multiple disconnected tools.', solution: 'FinTech SaaS with portfolio management, client reporting, and compliance automation.' },
    { name: 'Construction', icon: I('brick-wall'), color: '#0066ff', challenge: 'Construction firms manage complex multi-site projects without real-time visibility.', solution: 'Construction SaaS with project tracking, subcontractor management, and budget control.' },
    { name: 'Retail', icon: I('shop'), color: '#6366f1', challenge: 'Retail chains lack centralized software for inventory, pricing, and store performance.', solution: 'Retail management SaaS unifying inventory, pricing, POS, and analytics across all locations.' },
  ],
  featureLabel: 'SaaS Architecture', featureTitle: 'Built for the Scale SaaS Demands',
  features: [
    { eyebrow: 'Multi-Tenancy', title: 'True Data Isolation at Any Scale', description: 'Our multi-tenant architecture isolates each customer\'s data completely — while sharing the same efficient infrastructure. Schema-per-tenant for regulated industries. Row-level isolation for cost-optimized SaaS.', bullets: ['Schema and row-level isolation options', 'Tenant-scoped API keys', 'Per-tenant feature flags', 'Compliance-ready data residency'], image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', imageAlt: 'Multi-tenant cloud architecture', reverse: false },
    { eyebrow: 'Billing & Revenue', title: 'Subscription Revenue That Manages Itself', description: 'Stripe-integrated billing handling plans, upgrades, downgrades, usage metering, and failed payment recovery — so your team focuses on product, not chasing invoices.', bullets: ['Flat and usage-based billing', 'Plan upgrade/downgrade logic', 'Dunning and failed payment recovery', 'Revenue analytics and MRR dashboards'], image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', imageAlt: 'SaaS subscription billing', reverse: true },
    { eyebrow: 'Self-Service Onboarding', title: 'Customers Activate Without Contacting Support', description: 'Guided onboarding flows, interactive product tours, and in-app setup wizards let new customers reach their first value moment within minutes — without touching your support queue.', bullets: ['Interactive setup wizards', 'In-app product tours', 'Onboarding progress tracking', 'Automated activation emails'], image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', imageAlt: 'Customer self-service onboarding', reverse: false },
    { eyebrow: 'Analytics & Observability', title: 'Know Your Product Before Your Customers Complain', description: 'Built-in product analytics, health dashboards, and alerting give you real-time visibility into usage, performance, and errors — so you catch issues before customers notice them.', bullets: ['Feature usage analytics', 'Performance monitoring', 'Error tracking and alerting', 'Customer health scoring'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', imageAlt: 'SaaS analytics dashboard', reverse: true },
  ],
  techGroups: [
    { category: 'Frontend', color: '#0066ff', items: [{ name: 'Next.js', icon: I('nextjs') }, { name: 'React', icon: I('react-native') }, { name: 'TypeScript', icon: I('typescript') }] },
    { category: 'Backend', color: '#10b981', items: [{ name: 'Spring Boot', icon: I('spring-logo') }, { name: 'NestJS', icon: I('nestjs') }, { name: 'FastAPI', icon: I('api') }] },
    { category: 'Database & Cache', color: '#f59e0b', items: [{ name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'Redis', icon: I('redis') }, { name: 'Elasticsearch', icon: I('elasticsearch') }] },
    { category: 'Billing & Cloud', color: '#6366f1', items: [{ name: 'Stripe', icon: I('stripe') }, { name: 'AWS', icon: I('amazon-web-services') }, { name: 'Kubernetes', icon: I('kubernetes') }] },
  ],
  benefits: [
    { metric: '8 Wks', label: 'To Production-Ready MVP', description: 'Launch a real, billable, multi-tenant SaaS product in 8 weeks.', icon: I('rocket'), color: '#0066ff' },
    { metric: '40%', label: 'Lower Infrastructure Cost', description: 'Shared multi-tenant infrastructure significantly reduces per-customer cloud spend.', icon: I('combo-chart'), color: '#10b981' },
    { metric: '99%', label: 'Self-Activation Rate', description: 'Guided onboarding flows convert trials without manual sales intervention.', icon: I('user'), color: '#f59e0b' },
    { metric: '3×', label: 'Faster Feature Velocity', description: 'Shared codebase means features deploy to all tenants simultaneously.', icon: I('flash-on'), color: '#6366f1' },
    { metric: '0', label: 'Manual Invoice Failures', description: 'Dunning automation recovers failed payments without human intervention.', icon: I('bank-cards'), color: '#ec4899' },
    { metric: '99.99%', label: 'Uptime Delivered', description: 'Multi-region deployment with automatic failover ensures SLA compliance.', icon: I('security-checked'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'What is the difference between a SaaS MVP and a full SaaS product?', a: 'An MVP includes core functionality — multi-tenancy, authentication, billing, and the primary feature set — delivered in 8–12 weeks to validate the market. A full product adds advanced features, enterprise billing, white-labeling, and API access built over subsequent quarters.' },
    { q: 'How do you handle multi-tenancy architecture?', a: 'We evaluate your compliance requirements and scale needs, then recommend either schema-per-tenant (strongest isolation, used for regulated industries) or row-level isolation (more cost-efficient for high-volume SaaS).' },
    { q: 'Can you integrate Stripe for subscription billing?', a: 'Yes. We build full Stripe integration including plans, trials, proration, metered billing, dunning, customer portal, and revenue webhooks. We can also integrate Paddle for international SaaS tax handling.' },
    { q: 'What does "white label" mean in practice?', a: 'White label means your resellers or enterprise clients can use the platform under their own domain, brand colors, and logo. We build the branding system, custom domain routing, and reseller management portal.' },
    { q: 'How do you handle data compliance for multi-tenant SaaS?', a: 'We implement GDPR-compliant data handling, right-to-erasure workflows, data export for each tenant, and configurable data residency for EU/US/APAC hosting regions.' },
    { q: 'Can we add an AI copilot to our SaaS product?', a: 'Yes. We integrate GPT-4, Claude, or Gemini into your SaaS product as context-aware copilots, suggestion engines, or autonomous automation agents — with usage metering tied to your billing plan.' },
    { q: 'How do you manage feature access per subscription plan?', a: 'We implement feature flags tied to subscription plans, enabling or disabling features at the tenant or user level. Plan upgrades instantly unlock new capabilities without any code deployment.' },
    { q: 'Do you build the onboarding and activation flows?', a: 'Yes. We design and build the complete activation journey — signup, email verification, guided setup wizard, first-value moment, and drip email sequences — as part of the product.' },
    { q: 'What monitoring and alerting do you set up?', a: 'We implement Datadog or Grafana for infrastructure monitoring, Sentry for error tracking, and custom dashboards showing key SaaS metrics including MRR, churn, active tenants, and API health.' },
    { q: 'What ongoing support do you provide post-launch?', a: 'We offer monthly retainers for ongoing feature development, performance optimization, security patches, and scaling support as your SaaS product grows its customer base.' },
  ],
  ctaTitle: 'Ready to Launch Your SaaS Product?',
  ctaDescription: 'Tell us your product idea and we will design the architecture, scope the MVP, and give you a realistic timeline to first revenue.',
};

/* ═══════════════════════════════════════════════════════════════
   4. CRM, ERP & BUSINESS MANAGEMENT
═══════════════════════════════════════════════════════════════ */
const crmErp: ServicePage = {
  slug: 'crm-erp-solutions',
  meta: { title: 'Custom CRM & ERP Development | Eryon AI', description: 'Custom CRM, ERP, and business management systems built around your exact processes. Stop compromising with generic software — get a system that fits your business.' },
  hero: {
    badge: 'CRM, ERP & Business Management Systems',
    headline: 'Business Software That Fits',
    headlineGrad: 'How You Actually Operate',
    description: 'Generic CRM and ERP software forces your business to adapt to the software. We build the opposite — systems designed precisely around your processes, terminology, and workflows.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80',
    stats: [{ value: '60%', label: 'Reduction in Manual Work' }, { value: '2×', label: 'Faster Sales Cycles' }, { value: '100%', label: 'Custom to Your Process' }],
  },
  buildLabel: 'What We Build', buildTitle: 'Custom Systems for Every', buildTitleGrad: 'Business Function',
  buildSubtitle: 'From lead management to procurement, we build custom systems that match your terminology, processes, and team structure exactly.',
  buildItems: [
    { icon: I('customer-support'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'CRM Systems', description: 'Custom CRMs with pipeline management, contact history, activity tracking, and sales automation.', features: ['Sales pipelines', 'Contact history', 'Activity automation'] },
    { icon: I('organization'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'ERP Platforms', description: 'Enterprise resource planning covering finance, HR, procurement, and operations in one unified system.', features: ['Finance & accounting', 'Procurement', 'Operations'] },
    { icon: I('bookmark'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Lead Management', description: 'Custom lead capture, scoring, assignment, and nurture workflows replacing spreadsheet chaos.', features: ['Lead scoring', 'Auto-assignment', 'Nurture sequences'] },
    { icon: I('box'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Inventory Management', description: 'Real-time stock tracking across multiple warehouses with reorder automation and supplier management.', features: ['Multi-warehouse', 'Reorder automation', 'Supplier portal'] },
    { icon: I('combo-chart'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Sales Management', description: 'Sales performance dashboards, quota tracking, deal management, and commission automation.', features: ['Quota tracking', 'Commission calc', 'Deal velocity'] },
    { icon: I('supplier'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Procurement Systems', description: 'Purchase order management, vendor approval workflows, three-way matching, and spend analytics.', features: ['PO management', '3-way matching', 'Spend analytics'] },
    { icon: I('conference-call'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Employee Management', description: 'HR systems covering employee records, leave management, performance reviews, and org charts.', features: ['Leave management', 'Performance review', 'Org chart builder'] },
    { icon: I('money'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Billing & Invoicing', description: 'Automated invoice generation, recurring billing, payment tracking, and overdue management.', features: ['Auto invoicing', 'Recurring billing', 'Overdue alerts'] },
  ],
  industryLabel: 'Industries We Serve', industryTitle: 'Custom CRM & ERP for Every Sector',
  industries: [
    { name: 'Manufacturing', icon: I('factory'), color: '#0066ff', challenge: 'Production orders, inventory, and procurement are tracked in disconnected systems.', solution: 'Integrated manufacturing ERP linking BOM, production schedules, inventory, and supplier orders.' },
    { name: 'Construction', icon: I('brick-wall'), color: '#f59e0b', challenge: 'Project costs, subcontractor payments, and material procurement are tracked manually.', solution: 'Construction ERP with project budgeting, subcontractor management, and real-time cost tracking.' },
    { name: 'Real Estate', icon: I('real-estate'), color: '#10b981', challenge: 'Agents, developers, and property managers use different tools with no shared data.', solution: 'Real estate CRM connecting lead management, property listings, and transaction pipelines.' },
    { name: 'Healthcare', icon: I('caduceus'), color: '#ec4899', challenge: 'Patient billing, insurance claims, and inventory are handled by separate teams in separate systems.', solution: 'Healthcare management systems integrating patient billing, inventory, and compliance tracking.' },
    { name: 'Logistics', icon: I('in-transit'), color: '#6366f1', challenge: 'Fleet, driver performance, and client invoicing are managed without visibility across the business.', solution: 'Logistics management systems connecting dispatch, fleet tracking, billing, and client reporting.' },
    { name: 'Retail', icon: I('shop'), color: '#00b4d8', challenge: 'Stock levels, supplier orders, and sales data exist in separate systems with no unified view.', solution: 'Retail ERP unifying purchasing, inventory, POS, and sales analytics across all store locations.' },
    { name: 'Finance', icon: I('bank-building'), color: '#0066ff', challenge: 'Financial advisors track client portfolios, fees, and compliance manually.', solution: 'Financial CRM with client portfolio management, fee billing, and compliance documentation.' },
    { name: 'Education', icon: I('graduation-cap'), color: '#f59e0b', challenge: 'Student admissions, fee collection, and academic records are handled in separate systems.', solution: 'School ERP connecting admissions, fee management, academic records, and staff HR.' },
  ],
  featureLabel: 'System Capabilities', featureTitle: 'Systems That Grow With Your Business',
  features: [
    { eyebrow: '360° Customer View', title: 'Every Customer Interaction in One Timeline', description: 'Every call, email, deal, support ticket, invoice, and note — visible in a single chronological customer timeline. Your team never wastes time searching for context before a customer interaction.', bullets: ['Complete interaction history', 'Deal and invoice linkage', 'Task and follow-up management', 'Team activity visibility'], image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', imageAlt: 'CRM customer 360 view', reverse: false },
    { eyebrow: 'Smart Automation', title: 'Automated Lead Scoring That Prioritizes the Right Deals', description: 'Behavioral and demographic scoring models surface the leads most likely to convert — so your sales team spends time on opportunities worth pursuing, not cold outreach.', bullets: ['Behavior-based scoring rules', 'Auto-assignment by territory', 'Follow-up sequence automation', 'Deal stage trigger workflows'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', imageAlt: 'Lead scoring automation', reverse: true },
    { eyebrow: 'Inventory Intelligence', title: 'Real-Time Stock Visibility Across Every Location', description: 'Live inventory levels, warehouse-to-warehouse transfers, automatic reorder triggers, and supplier integration — so you never oversell or overstock, regardless of how many warehouses you operate.', bullets: ['Multi-warehouse real-time stock', 'Automated reorder points', 'Supplier PO generation', 'Barcode and RFID support'], image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', imageAlt: 'Inventory management system', reverse: false },
    { eyebrow: 'Financial Reporting', title: 'P&L, Cash Flow, and Forecasts — Automated', description: 'Financial dashboards that pull live data from every department and produce P&L statements, cash flow projections, and budget-vs-actual reports without the finance team spending a day in spreadsheets.', bullets: ['Automated P&L generation', 'Cash flow forecasting', 'Budget vs. actual tracking', 'Department cost centers'], image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', imageAlt: 'Financial reporting dashboard', reverse: true },
  ],
  techGroups: [
    { category: 'Frontend', color: '#0066ff', items: [{ name: 'React', icon: I('react-native') }, { name: 'TypeScript', icon: I('typescript') }, { name: 'Next.js', icon: I('nextjs') }] },
    { category: 'Backend', color: '#10b981', items: [{ name: 'Spring Boot', icon: I('spring-logo') }, { name: 'FastAPI', icon: I('api') }, { name: 'Node.js', icon: I('nodejs') }] },
    { category: 'Database', color: '#f59e0b', items: [{ name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'MySQL', icon: I('mysql') }, { name: 'Redis', icon: I('redis') }] },
    { category: 'Cloud', color: '#6366f1', items: [{ name: 'AWS', icon: I('amazon-web-services') }, { name: 'Azure', icon: I('azure-1') }, { name: 'Docker', icon: I('docker') }] },
  ],
  benefits: [
    { metric: '55%', label: 'Fewer Data Entry Hours', description: 'Automated data flows eliminate duplicate entry across departments.', icon: I('automatic'), color: '#0066ff' },
    { metric: '2×', label: 'Faster Sales Cycle', description: 'Pipeline visibility and automation compress deal timelines significantly.', icon: I('flash-on'), color: '#10b981' },
    { metric: '30%', label: 'Inventory Cost Reduction', description: 'Automated reorder prevents overstocking and stockout situations.', icon: I('box'), color: '#f59e0b' },
    { metric: '100%', label: 'Real-Time Financial Visibility', description: 'Live dashboards replace weekly manual P&L compilation.', icon: I('combo-chart'), color: '#6366f1' },
    { metric: '90%', label: 'Fewer Missed Follow-Ups', description: 'Automated task assignment ensures no lead falls through the cracks.', icon: I('bookmark'), color: '#ec4899' },
    { metric: '3×', label: 'Faster Invoice Processing', description: 'Auto-generated invoices and payment tracking reduce billing cycles.', icon: I('money'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'Why build a custom CRM instead of using Salesforce or HubSpot?', a: 'Generic CRMs force you to adapt your processes to their structure. A custom CRM uses your terminology, follows your actual sales workflow, and eliminates the features you pay for but never use. For most businesses, custom delivers more value at a lower total cost within 12 months.' },
    { q: 'How long does a custom CRM or ERP take to build?', a: 'A focused CRM takes 3–4 months. A full ERP covering multiple departments typically takes 6–12 months depending on the number of modules and integrations required.' },
    { q: 'Can you migrate our data from Salesforce, HubSpot, or another CRM?', a: 'Yes. We write custom data migration scripts that move your historical records, relationships, notes, and files from your existing system into the new platform cleanly.' },
    { q: 'Can the system integrate with our accounting software?', a: 'Yes. We integrate with QuickBooks, Xero, Tally, and other accounting platforms — automating invoice sync, payment reconciliation, and financial reporting.' },
    { q: 'How do you handle complex approval workflows?', a: 'We build multi-level approval workflows with configurable conditions, delegation rules, SLA-based escalations, and complete audit trails — covering purchase orders, leave requests, discount approvals, and more.' },
    { q: 'Can the system send automated emails and SMS?', a: 'Yes. We integrate email providers (SendGrid, Mailgun) and SMS gateways (Twilio) for automated communication sequences, payment reminders, lead nurture, and operational alerts.' },
    { q: 'Will managers be able to see team performance?', a: 'Yes. We build manager dashboards with team-level and individual-level performance metrics, activity tracking, deal velocity, and revenue attribution.' },
    { q: 'Can we customize the system after launch?', a: 'Yes. Every system we build is designed for ongoing iteration. We maintain a feature backlog and add new modules, reports, or integrations in regular sprints after launch.' },
    { q: 'Is the system accessible on mobile devices?', a: 'All our systems are fully responsive for mobile browsers. For field or sales teams that need native mobile features, we build companion iOS and Android apps connected to the same backend.' },
    { q: 'How secure is the data in our custom CRM/ERP?', a: 'We implement role-based access control, encrypted data storage, complete audit logs, and regular security scans. Enterprise deployments support SSO with your company directory (Active Directory, Okta).' },
  ],
  ctaTitle: 'Ready to Replace Your Generic Software?',
  ctaDescription: 'Tell us your current tools, your biggest operational bottlenecks, and what you wish your software could do — we will design the right system.',
};

/* ═══════════════════════════════════════════════════════════════
   5. REAL ESTATE SOFTWARE
═══════════════════════════════════════════════════════════════ */
const realEstateSoftware: ServicePage = {
  slug: 'real-estate-software',
  meta: { title: 'Real Estate Software Development | Eryon AI', description: 'Custom real estate platforms, property management systems, agent CRMs, and listing portals built specifically for real estate businesses.' },
  hero: {
    badge: 'Real Estate Technology Platform',
    headline: 'Real Estate Software That',
    headlineGrad: 'Closes Deals Faster',
    description: 'From property listing portals to agent CRMs and property management systems, we build real estate technology that gives your team an unfair advantage in a competitive market.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80',
    stats: [{ value: '30+', label: 'Real Estate Platforms' }, { value: '40%', label: 'Faster Lead Conversion' }, { value: 'MLS', label: 'Ready Integration' }],
  },
  buildLabel: 'What We Build', buildTitle: 'Real Estate Solutions for Every', buildTitleGrad: 'Business Model',
  buildSubtitle: 'Whether you are a brokerage, developer, property manager, or proptech startup, we build technology that accelerates your specific business.',
  buildItems: [
    { icon: I('real-estate'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Property Listing Portals', description: 'MLS-ready listing platforms with advanced search, media galleries, and lead capture.', features: ['MLS integration', 'Advanced search', 'Lead capture'] },
    { icon: I('customer-support'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'Real Estate CRM', description: 'Agent CRMs tracking leads, showings, offers, and client communication in one place.', features: ['Lead pipeline', 'Showing scheduler', 'Offer tracker'] },
    { icon: I('home'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Property Management', description: 'Platforms managing rental properties, tenants, leases, maintenance, and rent collection.', features: ['Tenant portal', 'Lease management', 'Maintenance requests'] },
    { icon: I('document'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Transaction Management', description: 'Digital transaction platforms with e-signatures, document checklists, and milestone tracking.', features: ['E-signature', 'Document checklists', 'Milestone tracking'] },
    { icon: I('map'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Map-Based Portals', description: 'Interactive map search with polygon drawing, neighborhood analytics, and nearby amenity data.', features: ['Polygon search', 'Neighborhood data', 'Amenity layers'] },
    { icon: I('combo-chart'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Agent Performance Portals', description: 'Broker dashboards tracking agent deals, leads, commission pipelines, and team metrics.', features: ['Agent analytics', 'Commission tracking', 'Deal velocity'] },
    { icon: I('money'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Mortgage & Finance Tools', description: 'EMI calculators, loan eligibility tools, and lender comparison integrated into listing portals.', features: ['EMI calculator', 'Eligibility check', 'Lender comparison'] },
    { icon: I('user'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Developer Project Portals', description: 'New construction portals for developers to showcase projects, collect bookings, and manage unit inventory.', features: ['Unit inventory', 'Online booking', 'Payment plans'] },
  ],
  industryLabel: 'Real Estate Segments We Serve', industryTitle: 'Technology for Every Real Estate Business',
  industries: [
    { name: 'Residential Brokerage', icon: I('home'), color: '#0066ff', challenge: 'Agents track leads, showings, and offers in their own spreadsheets with no brokerage visibility.', solution: 'Brokerage CRM giving managers full pipeline visibility while agents get mobile-optimized tools.' },
    { name: 'Commercial Real Estate', icon: I('building'), color: '#10b981', challenge: 'Complex lease negotiations and tenant management happen across disconnected tools.', solution: 'Commercial RE platforms with lease management, tenant billing, and property performance analytics.' },
    { name: 'Property Management', icon: I('key'), color: '#6366f1', challenge: 'Landlords manage maintenance requests, rent collection, and lease renewals manually.', solution: 'Property management systems automating rent, maintenance workflows, and tenant communication.' },
    { name: 'Real Estate Developers', icon: I('real-estate'), color: '#f59e0b', challenge: 'New project launches rely on spreadsheets for unit inventory and buyer tracking.', solution: 'Developer portals with unit inventory management, buyer CRM, and payment milestone tracking.' },
    { name: 'PropTech Startups', icon: I('rocket'), color: '#ec4899', challenge: 'Proptech founders need a technical platform without hiring a large in-house engineering team.', solution: 'Complete proptech product development from MVP to scalable platform with ongoing engineering support.' },
    { name: 'Real Estate Investment', icon: I('combo-chart'), color: '#00b4d8', challenge: 'Investment firms track portfolios, valuations, and returns across multiple asset classes manually.', solution: 'Investment management platforms with portfolio tracking, valuation tools, and investor reporting.' },
    { name: 'Rental Platforms', icon: I('key'), color: '#0066ff', challenge: 'Rental businesses handle inquiries, availability, and payments through manual processes.', solution: 'Short and long-term rental platforms with booking engines, payment processing, and owner portals.' },
    { name: 'Facility Management', icon: I('organization'), color: '#6366f1', challenge: 'Facility teams track maintenance, vendor contracts, and asset inventory in spreadsheets.', solution: 'Facility management systems with preventive maintenance schedules, vendor portals, and asset tracking.' },
  ],
  featureLabel: 'Platform Features', featureTitle: 'Technology Purpose-Built for Real Estate',
  features: [
    { eyebrow: 'Property Management', title: 'Manage Every Property From a Single Dashboard', description: 'Complete property oversight covering tenant information, lease dates, rent status, maintenance history, and financial performance — for every property in your portfolio, visible in one place.', bullets: ['Portfolio-level and property-level views', 'Automated rent payment reminders', 'Maintenance request tracking', 'Lease expiry alerts and renewal workflows'], image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', imageAlt: 'Property management dashboard', reverse: false },
    { eyebrow: 'Lead Pipeline', title: 'Never Let a Property Enquiry Go Cold', description: 'Automated lead capture from your website, portals, and social media feeds directly into a structured CRM pipeline — with automatic follow-up sequences, showing schedulers, and deal tracking.', bullets: ['Multi-channel lead capture', 'Automated follow-up sequences', 'Showing scheduler with calendar sync', 'Deal stage tracking and forecasting'], image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', imageAlt: 'Real estate lead pipeline CRM', reverse: true },
    { eyebrow: 'Digital Transactions', title: 'From Offer to Closing Without the Paper Trail', description: 'Digital offer management, e-signatures, document checklist tracking, and milestone management — eliminating the physical document chasing that delays every real estate transaction.', bullets: ['Digital offer submission and countering', 'DocuSign and e-signature integration', 'Document compliance checklists', 'Transaction milestone notifications'], image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', imageAlt: 'Digital real estate transaction', reverse: false },
    { eyebrow: 'Market Intelligence', title: 'Data-Driven Property Decisions for Your Clients', description: 'Market analytics tools embedded in your platform giving buyers and agents access to neighborhood trends, price history, rental yields, and comparable sales — driving more confident, faster decisions.', bullets: ['Neighborhood price trend charts', 'Comparable sales analysis', 'Rental yield calculators', 'Days-on-market analytics'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', imageAlt: 'Real estate market analytics', reverse: true },
  ],
  techGroups: [
    { category: 'Frontend', color: '#0066ff', items: [{ name: 'Next.js', icon: I('nextjs') }, { name: 'React', icon: I('react-native') }, { name: 'TypeScript', icon: I('typescript') }] },
    { category: 'Backend', color: '#10b981', items: [{ name: 'Spring Boot', icon: I('spring-logo') }, { name: 'FastAPI', icon: I('api') }, { name: 'Node.js', icon: I('nodejs') }] },
    { category: 'Database', color: '#f59e0b', items: [{ name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'PostGIS', icon: I('map') }, { name: 'Redis', icon: I('redis') }] },
    { category: 'Maps & Cloud', color: '#6366f1', items: [{ name: 'Google Maps', icon: I('google-maps') }, { name: 'AWS', icon: I('amazon-web-services') }, { name: 'Docker', icon: I('docker') }] },
  ],
  benefits: [
    { metric: '40%', label: 'Faster Lead Conversion', description: 'Automated follow-up and structured pipelines convert enquiries to deals faster.', icon: I('flash-on'), color: '#0066ff' },
    { metric: '3×', label: 'More Listings Managed Per Agent', description: 'Digital transaction tools let agents handle three times the workload.', icon: I('user'), color: '#10b981' },
    { metric: '60%', label: 'Reduction in Admin Time', description: 'Automated rent reminders, lease renewals, and reporting eliminate manual admin.', icon: I('automatic'), color: '#f59e0b' },
    { metric: '2 Days', label: 'Faster Transaction Closing', description: 'E-signatures and digital checklists compress closing timelines significantly.', icon: I('document'), color: '#6366f1' },
    { metric: '100%', label: 'Tenant Payment Visibility', description: 'Live rent payment tracking eliminates manual reconciliation.', icon: I('money'), color: '#ec4899' },
    { metric: '30%', label: 'Higher Lead Response Rate', description: 'Immediate automated responses improve engagement before manual follow-up.', icon: I('bookmark'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'Can you integrate MLS data into our listing portal?', a: 'Yes. We integrate with major MLS systems and property data APIs (RETS, IDX, Plunk, Estated) to automatically sync listings, price changes, and status updates to your portal in real time.' },
    { q: 'Can the platform handle both sales and rental properties?', a: 'Yes. We build platforms with separate modules for sales listings and rental properties, each with their own workflows, pricing models, and transaction processes.' },
    { q: 'Can agents access the CRM on mobile?', a: 'All our platforms are fully mobile-responsive. For heavy mobile use cases, we build dedicated iOS and Android apps for agents with offline capability and GPS-based property finding.' },
    { q: 'Can you integrate Google Maps or Mapbox for property search?', a: 'Yes. We integrate Google Maps, Mapbox, or HERE Maps with polygon drawing search, map clustering for large listing sets, and neighborhood boundary visualization.' },
    { q: 'Can tenants pay rent through the platform?', a: 'Yes. We integrate Stripe, Razorpay, or other payment gateways for online rent collection, including automatic receipt generation, payment reminders, and overdue notifications.' },
    { q: 'Can we automate lease renewal reminders?', a: 'Yes. We build automated lease expiry workflows that send configurable reminders to landlords and tenants, then track the renewal or vacancy process through a structured workflow.' },
    { q: 'How long does a real estate platform take to build?', a: 'A property listing portal with lead capture takes 2–3 months. A full property management system with tenant portals, payment integration, and maintenance workflows typically takes 4–6 months.' },
    { q: 'Can you build a platform for multiple cities or countries?', a: 'Yes. We build multi-city and multi-currency platforms with localized content, regional compliance requirements, and separate agent and listing databases per market.' },
    { q: 'How do you handle property media — photos and virtual tours?', a: 'We integrate with media storage systems (AWS S3, Cloudflare) for high-performance photo delivery. We also integrate Matterport and similar APIs for embedded 3D virtual tours.' },
    { q: 'Is the platform SEO-optimized for property listings?', a: 'Yes. All listing portals we build include structured data markup (JSON-LD), dynamic sitemap generation, canonical URL management, and server-side rendering for full Google indexability of every listing.' },
  ],
  ctaTitle: 'Ready to Build Your Real Estate Platform?',
  ctaDescription: 'Whether you are launching a new property portal or upgrading your agent tools, we can scope and build the right solution for your market.',
};

/* ═══════════════════════════════════════════════════════════════
   6. GYM MANAGEMENT SOFTWARE
═══════════════════════════════════════════════════════════════ */
const gymManagement: ServicePage = {
  slug: 'gym-management-software',
  meta: { title: 'Gym Management Software Development | Eryon AI', description: 'Custom gym and fitness center management software covering memberships, class scheduling, billing, and mobile apps — built for your fitness business.' },
  hero: {
    badge: 'Fitness Center Management Technology',
    headline: 'Gym Management Software',
    headlineGrad: 'Built for Your Fitness Business',
    description: 'Stop losing members to poor experience. We build custom gym management platforms covering memberships, class scheduling, automated billing, and mobile member apps — tailored to how your fitness business actually runs.',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80',
    stats: [{ value: '25%', label: 'Higher Member Retention' }, { value: '0', label: 'Manual Billing Errors' }, { value: '100%', label: 'Custom to Your Business' }],
  },
  buildLabel: 'What We Build', buildTitle: 'Software for Every Aspect of', buildTitleGrad: 'Your Fitness Business',
  buildSubtitle: 'From front desk operations to member engagement and financial reporting, we automate the workflows that consume your staff\'s time.',
  buildItems: [
    { icon: I('conference-call'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Member Management', description: 'Complete member lifecycle — acquisition, onboarding, profile management, and retention tracking.', features: ['Member profiles', 'Retention scoring', 'Communication history'] },
    { icon: I('calendar'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Class & Schedule Management', description: 'Dynamic timetables with instructor assignment, room allocation, capacity limits, and waitlists.', features: ['Dynamic timetables', 'Waitlist management', 'Instructor scheduling'] },
    { icon: I('appointment-reminders'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'Online Booking', description: 'Self-service class booking via web and mobile app with instant confirmation and automated reminders.', features: ['Self-service booking', 'Instant confirmation', 'Auto reminders'] },
    { icon: I('bank-cards'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Billing & Membership Plans', description: 'Recurring billing, plan upgrades, prorated charges, freeze requests, and overdue management.', features: ['Recurring billing', 'Plan management', 'Freeze & cancellation'] },
    { icon: I('user'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Staff Management', description: 'Staff scheduling, attendance, payroll calculation, and commission tracking for personal trainers.', features: ['Staff scheduling', 'PT commissions', 'Attendance tracking'] },
    { icon: I('security-checked'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Access Control Integration', description: 'Biometric and RFID door access integrated with membership status for automated entry management.', features: ['Biometric gates', 'RFID integration', 'Access logs'] },
    { icon: I('smartphone-tablet'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Member Mobile App', description: 'Branded mobile app for members to book classes, track progress, make payments, and engage with the gym.', features: ['Class booking', 'Progress tracking', 'In-app payments'] },
    { icon: I('combo-chart'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Business Analytics', description: 'Revenue dashboards, attendance trends, churn prediction, and instructor performance metrics.', features: ['Revenue trends', 'Churn prediction', 'Attendance analytics'] },
  ],
  industryLabel: 'Fitness Businesses We Serve', industryTitle: 'Management Software for Every Fitness Model',
  industries: [
    { name: 'Commercial Gyms', icon: I('dumbbell'), color: '#ec4899', challenge: 'Front desk staff manually check memberships, process payments, and book classes for hundreds of daily visitors.', solution: 'Automated check-in, online booking, and payment systems that reduce front desk workload by 60%.' },
    { name: 'CrossFit & HIIT Studios', icon: I('flash-on'), color: '#0066ff', challenge: 'Small-batch class studios need precise waitlists and no-show management for revenue protection.', solution: 'Class management with configurable waitlists, no-show fees, and automated fill-from-waitlist logic.' },
    { name: 'Yoga & Pilates Studios', icon: I('appointment-reminders'), color: '#10b981', challenge: 'Session-based studios manage complex teacher schedules and private session bookings manually.', solution: 'Private session booking, teacher availability management, and package purchase with session tracking.' },
    { name: 'Personal Training', icon: I('user'), color: '#6366f1', challenge: 'PTs track client progress, session counts, and revenue manually across spreadsheets.', solution: 'PT management platforms with client portfolios, session tracking, progress photos, and commission management.' },
    { name: 'Multi-Location Chains', icon: I('organization'), color: '#f59e0b', challenge: 'Chain gym operators have no unified view of membership, revenue, and performance across locations.', solution: 'Multi-location management platforms with location-level and chain-level dashboards and reporting.' },
    { name: 'Swimming Pools', icon: I('water'), color: '#00b4d8', challenge: 'Pool lanes, lesson bookings, and instructor schedules are managed through phone calls and paper.', solution: 'Pool management systems with lane booking, swim lesson scheduling, and lifeguard shift management.' },
    { name: 'Martial Arts Schools', icon: I('taekwondo'), color: '#ec4899', challenge: 'Belt progression, grading events, and attendance tracking require manual administration.', solution: 'Martial arts management platforms tracking belt levels, grading schedules, and student attendance history.' },
    { name: 'Sports Clubs', icon: I('basketball'), color: '#0066ff', challenge: 'Member registrations, court bookings, and club event management happen in separate systems.', solution: 'Sports club management with facility booking, member registration, event management, and team portals.' },
  ],
  featureLabel: 'Platform Features', featureTitle: 'Every Feature Your Gym Actually Needs',
  features: [
    { eyebrow: 'Member Retention', title: 'Identify Churn Before It Happens', description: 'Attendance pattern analysis automatically flags members who are becoming inactive — triggering personal outreach campaigns before they cancel. Keep more members with less manual effort.', bullets: ['Attendance-based churn scoring', 'Automated win-back campaigns', 'Freeze and pause management', 'Member engagement analytics'], image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80', imageAlt: 'Gym member retention analytics', reverse: false },
    { eyebrow: 'Scheduling Engine', title: 'Class Scheduling That Runs Itself', description: 'Dynamic class timetables with instructor assignments, room allocation, and capacity limits. Waitlists automatically fill when cancellations occur. Members book or cancel with 24 hours notice to protect your revenue.', bullets: ['Waitlist auto-fill on cancellation', 'Multi-room scheduling', 'Late cancellation fee automation', 'Recurring class templates'], image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', imageAlt: 'Gym class scheduling system', reverse: true },
    { eyebrow: 'Billing Automation', title: 'Recurring Revenue That Collects Itself', description: 'Automated recurring billing with smart payment retry logic ensures you collect what you are owed. Dunning sequences for failed payments, pro-rata plan changes, and membership freeze handling — all automated.', bullets: ['Automated recurring billing', 'Failed payment retry logic', 'Pro-rata plan change billing', 'Tax-compliant invoice generation'], image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', imageAlt: 'Gym billing automation', reverse: false },
    { eyebrow: 'Member App', title: 'A Branded App Your Members Open Daily', description: 'A custom-branded mobile app where members book classes, track their progress, view schedules, make payments, and interact with your gym community — building the daily habit that drives retention.', bullets: ['Class booking and cancellation', 'Workout and progress tracking', 'Push notification announcements', 'In-app payment and renewal'], image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80', imageAlt: 'Gym member mobile app', reverse: true },
  ],
  techGroups: [
    { category: 'Frontend', color: '#ec4899', items: [{ name: 'React', icon: I('react-native') }, { name: 'Next.js', icon: I('nextjs') }, { name: 'TypeScript', icon: I('typescript') }] },
    { category: 'Mobile', color: '#0066ff', items: [{ name: 'React Native', icon: I('react-native') }, { name: 'Flutter', icon: I('flutter') }, { name: 'Firebase', icon: I('firebase') }] },
    { category: 'Backend & DB', color: '#10b981', items: [{ name: 'Node.js', icon: I('nodejs') }, { name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'Redis', icon: I('redis') }] },
    { category: 'Payments & Cloud', color: '#f59e0b', items: [{ name: 'Stripe', icon: I('stripe') }, { name: 'AWS', icon: I('amazon-web-services') }, { name: 'Docker', icon: I('docker') }] },
  ],
  benefits: [
    { metric: '25%', label: 'Higher Member Retention', description: 'Churn prediction and automated re-engagement campaigns retain more members.', icon: I('user'), color: '#ec4899' },
    { metric: '0', label: 'Manual Billing Errors', description: 'Automated recurring billing eliminates human error in payment collection.', icon: I('bank-cards'), color: '#0066ff' },
    { metric: '60%', label: 'Less Front Desk Admin', description: 'Self-service booking and check-in reduce front desk workload dramatically.', icon: I('automatic'), color: '#10b981' },
    { metric: '3×', label: 'More Classes Booked Online', description: 'Mobile booking convenience drives more advance reservations per member.', icon: I('calendar'), color: '#f59e0b' },
    { metric: '100%', label: 'Real-Time Revenue Visibility', description: 'Live dashboards show daily revenue, arrears, and membership metrics.', icon: I('combo-chart'), color: '#6366f1' },
    { metric: '40%', label: 'Faster Instructor Scheduling', description: 'Dynamic timetable tools replace manual scheduling spreadsheets.', icon: I('flash-on'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'Can the software manage multiple gym locations?', a: 'Yes. We build multi-location platforms where members can access any location, managers see location-level reporting, and the central admin has a chain-wide view of revenue, attendance, and performance.' },
    { q: 'Can members book classes and pay online?', a: 'Yes. Self-service online booking and payment are core features. Members can book via web browser or the branded mobile app, with immediate confirmation and automatic reminders.' },
    { q: 'How does the membership billing work?', a: 'We integrate Stripe or Razorpay for automated recurring billing. The system handles monthly/annual plans, plan upgrades, prorated charges on mid-cycle changes, membership freezes, and failed payment retry sequences.' },
    { q: 'Can we integrate RFID or biometric access control?', a: 'Yes. We integrate with leading access control hardware systems, automatically granting or revoking door access based on membership status — eliminating manual access management.' },
    { q: 'Can personal trainers track their sessions and commissions?', a: 'Yes. PT management includes session logging, client assignment, package management, and automatic commission calculation based on your defined rate structures.' },
    { q: 'Can we send automated messages to members?', a: 'Yes. We build automated communication for class reminders, membership expiry warnings, birthday messages, re-engagement campaigns, and billing notifications via email, SMS, and push notification.' },
    { q: 'How long does gym management software take to build?', a: 'A core gym management system covering memberships, booking, and billing takes 3–4 months. Adding a branded mobile app extends the timeline by 6–8 weeks.' },
    { q: 'Can we customize the plan types, durations, and pricing?', a: 'Yes. Plan configuration is fully flexible — daily, weekly, monthly, annual, class-pack, and day-pass models are all supported, with configurable pricing, discounts, and access levels per plan.' },
    { q: 'Can non-technical staff manage the system themselves?', a: 'Yes. The admin interface is designed for gym managers and front desk staff — not technical users. Adding plans, updating schedules, processing refunds, and generating reports require no technical knowledge.' },
    { q: 'Do you provide training after the system goes live?', a: 'Yes. We provide staff training sessions, video tutorials, and documentation. We also offer onboarding support during the first 30 days after launch to ensure your team is comfortable with the system.' },
  ],
  ctaTitle: 'Ready to Modernize Your Gym Operations?',
  ctaDescription: 'Tell us about your gym — number of locations, members, and biggest operational pain points — and we will design the right system.',
};

/* ═══════════════════════════════════════════════════════════════
   7. AI & AUTOMATION SOLUTIONS
═══════════════════════════════════════════════════════════════ */
const aiSolutions: ServicePage = {
  slug: 'ai-solutions',
  meta: { title: 'AI & Automation Solutions Development | Eryon AI', description: 'Custom AI agents, LLM integrations, workflow automation, and intelligent document processing built to deliver measurable business outcomes.' },
  hero: {
    badge: 'AI Engineering & Intelligent Automation',
    headline: 'AI Solutions That Do',
    headlineGrad: 'Real Work in Your Business',
    description: 'We engineer AI agents, LLM-powered workflows, and intelligent automation systems that replace manual effort, accelerate decisions, and create compounding operational advantages.',
    heroImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80',
    stats: [{ value: '80%', label: 'Task Automation Rate' }, { value: '10×', label: 'Processing Speed' }, { value: '50+', label: 'AI Systems Deployed' }],
  },
  buildLabel: 'What We Build', buildTitle: 'AI Systems for Every', buildTitleGrad: 'Business Function',
  buildSubtitle: 'From intelligent chatbots to fully autonomous multi-agent workflows, we build AI systems designed around your specific business operations.',
  buildItems: [
    { icon: I('artificial-intelligence'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'AI Agents', description: 'Autonomous agents that complete multi-step business tasks — researching, deciding, and executing without human intervention.', features: ['Multi-step reasoning', 'Tool use & APIs', 'Human handoff logic'] },
    { icon: I('topic'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'AI Chatbots', description: 'Context-aware conversational AI for customer support, internal help desks, and lead qualification.', features: ['Context memory', 'Multi-intent handling', 'Escalation logic'] },
    { icon: I('api'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'LLM Integrations', description: 'GPT-4, Claude, and Gemini embedded into your existing products and workflows with proper context management.', features: ['Model routing', 'Context injection', 'Cost optimization'] },
    { icon: I('workflow'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'Workflow Automation', description: 'End-to-end business process automation replacing manual handoffs, approvals, and data entry workflows.', features: ['Trigger-based flows', 'API orchestration', 'Error recovery'] },
    { icon: I('document'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Document Processing AI', description: 'Extract, classify, and structure data from invoices, contracts, forms, and PDFs without manual entry.', features: ['OCR + LLM extraction', 'Structure recognition', 'Validation logic'] },
    { icon: I('combo-chart'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Recommendation Engines', description: 'ML-powered recommendation systems that surface the right product, content, or action for each user.', features: ['Collaborative filtering', 'Context-aware', 'A/B testing'] },
    { icon: I('brain'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'AI Knowledge Bases', description: 'RAG-powered knowledge systems letting your team query internal documents, policies, and data naturally.', features: ['Vector search', 'Source citation', 'Permission-aware'] },
    { icon: I('dashboard-layout'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'AI Dashboards & BI', description: 'Natural language querying of your data warehouse — no SQL required for any business user.', features: ['Natural language query', 'Auto visualization', 'Insight generation'] },
  ],
  industryLabel: 'Industries We Serve', industryTitle: 'AI Applied to Real Industry Problems',
  industries: [
    { name: 'Finance & Banking', icon: I('bank-building'), color: '#0066ff', challenge: 'Document-heavy processes like loan applications and KYC verification require significant manual review time.', solution: 'AI document processing systems that extract, verify, and classify financial documents with 95%+ accuracy.' },
    { name: 'Healthcare', icon: I('caduceus'), color: '#10b981', challenge: 'Clinical teams spend more time on documentation than on patient care due to manual note-taking.', solution: 'Clinical AI systems that transcribe consultations, extract structured data, and draft clinical notes automatically.' },
    { name: 'Legal', icon: I('document'), color: '#6366f1', challenge: 'Contract review and due diligence are time-consuming and expensive when done manually.', solution: 'AI contract analysis systems that extract key clauses, flag risks, and summarize documents in seconds.' },
    { name: 'E-Commerce & Retail', icon: I('online-store'), color: '#f59e0b', challenge: 'Customer support volume grows linearly with sales, but hiring support agents is expensive.', solution: 'AI customer support agents that resolve 70% of enquiries autonomously, escalating only complex cases.' },
    { name: 'HR & Recruitment', icon: I('conference-call'), color: '#ec4899', challenge: 'Screening hundreds of CVs and scheduling interviews consumes the majority of recruiter time.', solution: 'AI screening pipelines that rank candidates, generate interview questions, and schedule automatically.' },
    { name: 'Logistics', icon: I('in-transit'), color: '#00b4d8', challenge: 'Route planning and exception handling for large delivery networks rely heavily on manual dispatcher decisions.', solution: 'AI route optimization and exception management systems that improve delivery efficiency by 25%.' },
    { name: 'Manufacturing', icon: I('factory'), color: '#0066ff', challenge: 'Quality control inspection requires constant manual labor on production lines.', solution: 'Computer vision quality inspection systems that detect defects at line speed with 99% accuracy.' },
    { name: 'Education', icon: I('graduation-cap'), color: '#6366f1', challenge: 'Teachers spend significant time grading assessments and providing individual feedback to students.', solution: 'AI assessment and feedback systems that grade written work and generate personalized student feedback.' },
  ],
  featureLabel: 'AI Capabilities', featureTitle: 'AI That Actually Delivers Business Value',
  features: [
    { eyebrow: 'Agentic AI', title: 'AI That Completes Tasks — Not Just Answers', description: 'We build multi-step AI agents using LangGraph and tool-calling architecture. These agents research, decide, and execute across your APIs and data systems — handling complex workflows that previously required a human operator.', bullets: ['LangGraph multi-agent orchestration', 'Tool use: APIs, databases, browsers', 'Human-in-the-loop checkpoints', 'Agent memory and context persistence'], image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80', imageAlt: 'AI agent workflow system', reverse: false },
    { eyebrow: 'LLM Integration', title: 'The Right Model for Each Task in Your Workflow', description: 'Not all LLM tasks are equal. We design intelligent routing that selects the most appropriate model — GPT-4 for complex reasoning, Claude for document analysis, Gemini for multimodal tasks — optimizing for quality and cost.', bullets: ['Multi-model routing architecture', 'Prompt engineering and optimization', 'Context window management', 'Cost and latency monitoring'], image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', imageAlt: 'LLM integration and routing', reverse: true },
    { eyebrow: 'RAG Systems', title: 'Your Internal Knowledge, Instantly Queryable', description: 'Retrieval-Augmented Generation systems that let your team query internal documents, policies, and data in plain English — with citations to the source, permission-aware access, and always up-to-date knowledge.', bullets: ['Vector database with semantic search', 'Permission-aware document access', 'Source citation on every response', 'Automatic knowledge base updates'], image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80', imageAlt: 'RAG knowledge base system', reverse: false },
    { eyebrow: 'Document AI', title: 'Extract Structure From Unstructured Documents', description: 'Combining OCR, layout analysis, and LLMs, our document processing systems extract and validate structured data from invoices, contracts, forms, and medical records — with human review workflows for exceptions.', bullets: ['Multi-format document support', 'Structured data extraction', 'Validation against business rules', 'Exception review workflow'], image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80', imageAlt: 'AI document processing', reverse: true },
  ],
  techGroups: [
    { category: 'AI / LLM', color: '#00b4d8', items: [{ name: 'OpenAI', icon: I('chatgpt') }, { name: 'Anthropic', icon: I('artificial-intelligence') }, { name: 'LangGraph', icon: I('api') }] },
    { category: 'Backend', color: '#0066ff', items: [{ name: 'FastAPI', icon: I('api') }, { name: 'Python', icon: I('python') }, { name: 'Node.js', icon: I('nodejs') }] },
    { category: 'Vector & DB', color: '#6366f1', items: [{ name: 'Pinecone', icon: I('database') }, { name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'Redis', icon: I('redis') }] },
    { category: 'Cloud & MLOps', color: '#10b981', items: [{ name: 'AWS', icon: I('amazon-web-services') }, { name: 'GCP', icon: I('google-cloud') }, { name: 'Docker', icon: I('docker') }] },
  ],
  benefits: [
    { metric: '80%', label: 'Task Automation Rate', description: 'AI agents handle the majority of repetitive tasks without human intervention.', icon: I('automatic'), color: '#00b4d8' },
    { metric: '10×', label: 'Document Processing Speed', description: 'AI extracts and validates document data in seconds vs. minutes manually.', icon: I('flash-on'), color: '#0066ff' },
    { metric: '70%', label: 'Support Tickets Resolved by AI', description: 'Conversational AI handles common queries without human agent involvement.', icon: I('topic'), color: '#6366f1' },
    { metric: '40%', label: 'Reduction in Operational Cost', description: 'Automated workflows displace repetitive, expensive manual operations.', icon: I('combo-chart'), color: '#10b981' },
    { metric: '95%', label: 'Document Extraction Accuracy', description: 'LLM-powered extraction outperforms traditional OCR on complex documents.', icon: I('document'), color: '#f59e0b' },
    { metric: '24/7', label: 'AI Agents Always Active', description: 'AI agents work continuously without breaks, shifts, or human supervision.', icon: I('artificial-intelligence'), color: '#ec4899' },
  ],
  faqs: [
    { q: 'What is an AI agent and how is it different from a chatbot?', a: 'A chatbot answers questions. An AI agent takes actions — it can search the web, query databases, fill forms, send emails, and execute multi-step workflows to complete a task from start to finish. We build both, and help you identify which your use case requires.' },
    { q: 'Which LLM models do you work with?', a: 'We are model-agnostic. We work with OpenAI (GPT-4o), Anthropic (Claude 3.5), Google (Gemini Pro), Mistral, and open-source models like Llama. We design routing logic that selects the right model for each task based on quality and cost requirements.' },
    { q: 'How do you prevent AI hallucinations in business-critical systems?', a: 'We implement retrieval-augmented generation (RAG) so the AI only responds with information from your verified data sources, grounding responses in factual context. For high-stakes decisions, we implement human-in-the-loop checkpoints.' },
    { q: 'Can you integrate AI into our existing software?', a: 'Yes. We integrate AI capabilities into existing products and workflows via API. Whether it is adding a copilot feature to your SaaS product or automating a specific operational workflow, we work with your current tech stack.' },
    { q: 'How do you handle sensitive business data when using LLMs?', a: 'We use private API deployments and data anonymization techniques. For highly regulated industries, we deploy open-source models on your own infrastructure so data never leaves your environment.' },
    { q: 'What is a RAG system and when do I need one?', a: 'RAG (Retrieval-Augmented Generation) lets your AI search your internal documents or knowledge base before responding, so answers are grounded in your specific data rather than the model\'s general training. You need RAG when your use case involves internal policies, product documentation, or proprietary data.' },
    { q: 'Can you build AI features into a product we are already selling?', a: 'Yes. We add AI capabilities to existing SaaS products and applications — copilots, automation triggers, recommendation systems, or analytical features — as a product enhancement engagement.' },
    { q: 'How do you measure the success of an AI implementation?', a: 'We define success metrics with you before building — typically task automation rate, accuracy vs. human baseline, processing time reduction, and cost per operation. We instrument every system for ongoing measurement.' },
    { q: 'How long does an AI project take?', a: 'A focused AI chatbot or document processing system takes 6–10 weeks. A multi-agent orchestration system or production ML pipeline takes 3–5 months depending on complexity and integration requirements.' },
    { q: 'What happens if the AI makes a mistake in a production system?', a: 'We build confidence scoring, exception flagging, and human review workflows into every production AI system. Low-confidence outputs are automatically routed to human operators rather than acting autonomously.' },
  ],
  ctaTitle: 'Ready to Build Your AI System?',
  ctaDescription: 'Tell us the manual process you want to automate or the AI feature you want to ship — we will design the right architecture and timeline.',
};

/* ═══════════════════════════════════════════════════════════════
   8. DEVOPS & CLOUD ENGINEERING
═══════════════════════════════════════════════════════════════ */
const devopsCloud: ServicePage = {
  slug: 'devops-cloud',
  meta: { title: 'DevOps & Cloud Engineering Services | Eryon AI', description: 'AWS infrastructure design, cloud migration, Kubernetes deployment, CI/CD pipelines, and DevOps engineering for engineering teams that demand reliability and speed.' },
  hero: {
    badge: 'DevOps & Cloud Infrastructure Engineering',
    headline: 'Infrastructure That Never',
    headlineGrad: 'Lets Your Team Down',
    description: 'We design, build, and manage cloud infrastructure that scales automatically, deploys continuously, and operates with the reliability your business depends on — from startup to enterprise.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80',
    stats: [{ value: '99.99%', label: 'Uptime Delivered' }, { value: '10×', label: 'Deployment Frequency' }, { value: '60%', label: 'Avg. Cost Reduction' }],
  },
  buildLabel: 'What We Do', buildTitle: 'Cloud Engineering for Every', buildTitleGrad: 'Stage of Growth',
  buildSubtitle: 'From zero to production-grade infrastructure, or from legacy systems to modern cloud architecture — we build it right the first time.',
  buildItems: [
    { icon: I('amazon-web-services'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'AWS Infrastructure Design', description: 'Well-architected AWS deployments designed for the exact performance, cost, and compliance requirements of your workload.', features: ['Well-architected review', 'Right-sized resources', 'Cost optimization'] },
    { icon: I('cloud'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Cloud Migration', description: 'Lift-and-shift and re-architecture migrations from on-premises or legacy cloud environments to modern infrastructure.', features: ['Zero-downtime migration', 'Data migration', 'Rollback planning'] },
    { icon: I('docker'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Docker Containerization', description: 'Containerize your applications for consistent deployment across all environments from dev to production.', features: ['Multi-stage builds', 'Image optimization', 'Registry management'] },
    { icon: I('kubernetes'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Kubernetes Deployment', description: 'Production-grade Kubernetes clusters with auto-scaling, health checks, rolling deployments, and resource policies.', features: ['EKS / GKE / AKS', 'Auto-scaling', 'Rolling deployments'] },
    { icon: I('settings'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'CI/CD Pipelines', description: 'Automated build, test, and deployment pipelines that take code from commit to production in minutes.', features: ['GitHub Actions', 'GitLab CI', 'ArgoCD GitOps'] },
    { icon: I('terraform'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Infrastructure as Code', description: 'Terraform and CloudFormation templates that make your entire infrastructure version-controlled and reproducible.', features: ['Terraform modules', 'State management', 'Drift detection'] },
    { icon: I('combo-chart'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Monitoring & Observability', description: 'Full-stack observability with metrics, logs, and traces — so you know what is wrong before your users do.', features: ['Prometheus & Grafana', 'Distributed tracing', 'Alert management'] },
    { icon: I('security-checked'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Security Hardening', description: 'Zero-trust network architecture, secrets management, vulnerability scanning, and compliance automation.', features: ['Zero-trust network', 'Secrets management', 'Compliance automation'] },
  ],
  industryLabel: 'Industries We Serve', industryTitle: 'Cloud Engineering Across Regulated and High-Scale Industries',
  industries: [
    { name: 'FinTech', icon: I('bank-building'), color: '#0066ff', challenge: 'Financial services require high availability with strict security controls and audit trails.', solution: 'PCI-DSS compliant cloud architecture with 99.99% SLAs, encrypted data, and complete audit logging.' },
    { name: 'Healthcare', icon: I('caduceus'), color: '#10b981', challenge: 'Healthcare systems must meet HIPAA requirements while maintaining performance for clinical workflows.', solution: 'HIPAA-compliant AWS architectures with encrypted PHI, BAA agreements, and audit trails.' },
    { name: 'E-Commerce', icon: I('online-store'), color: '#f59e0b', challenge: 'Retail platforms must handle massive traffic spikes during sales events without downtime.', solution: 'Auto-scaling Kubernetes deployments handling 100x traffic spikes with pre-warming and CDN optimization.' },
    { name: 'SaaS Companies', icon: I('rocket'), color: '#6366f1', challenge: 'SaaS businesses need multi-region deployments with customer data residency controls.', solution: 'Multi-region Kubernetes deployments with data residency policies and per-tenant isolation.' },
    { name: 'Media & Streaming', icon: I('video-call'), color: '#ec4899', challenge: 'Video and media platforms require high-bandwidth, low-latency delivery at global scale.', solution: 'CloudFront-accelerated media delivery with origin failover and adaptive streaming infrastructure.' },
    { name: 'Government & Education', icon: I('graduation-cap'), color: '#00b4d8', challenge: 'Public sector organizations face strict compliance requirements and on-premises legacy systems.', solution: 'Hybrid cloud architectures connecting on-premises systems to cloud services with full compliance controls.' },
    { name: 'Logistics', icon: I('in-transit'), color: '#0066ff', challenge: 'Real-time tracking and routing systems require sub-second API responses at high concurrency.', solution: 'Event-driven microservices architectures with Redis caching and WebSocket infrastructure.' },
    { name: 'Manufacturing', icon: I('factory'), color: '#f59e0b', challenge: 'Manufacturing systems connect IoT devices, OT systems, and cloud platforms with legacy technology.', solution: 'Industrial IoT cloud architectures bridging factory floor systems to cloud analytics and monitoring.' },
  ],
  featureLabel: 'Engineering Practices', featureTitle: 'The Infrastructure Practices That Prevent 3am Incidents',
  features: [
    { eyebrow: 'Zero-Downtime Deployments', title: 'Ship Code Multiple Times Daily Without Risk', description: 'Blue-green and canary deployment strategies let you release changes to a small percentage of traffic before full rollout. Combined with automated rollback on degraded metrics, you can deploy confidently at any time.', bullets: ['Blue-green and canary deployments', 'Automated health-check gating', 'Instant rollback on error rate spike', 'Feature flags for progressive rollouts'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', imageAlt: 'CI/CD deployment pipeline', reverse: false },
    { eyebrow: 'Auto-Scaling', title: 'Infrastructure That Grows With Your Traffic', description: 'Horizontal pod auto-scaling and cluster auto-scaling ensure your application handles sudden traffic spikes without manual intervention — and scales back down to save costs when demand drops.', bullets: ['HPA and VPA Kubernetes scaling', 'Cluster node auto-scaling', 'Predictive scaling for known peaks', 'Cost optimization with spot instances'], image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', imageAlt: 'Auto-scaling Kubernetes cluster', reverse: true },
    { eyebrow: 'Observability Stack', title: 'See Everything Before Your Users Experience Anything', description: 'Complete observability with metrics (Prometheus), logs (Loki), and distributed traces (Tempo) aggregated in Grafana — giving your engineering team full context for any incident in any service.', bullets: ['Metrics, logs, and traces unified', 'SLA-based alerting rules', 'On-call escalation integration', 'Capacity planning dashboards'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', imageAlt: 'Infrastructure observability dashboards', reverse: false },
    { eyebrow: 'Cost Engineering', title: 'The Same Performance at 40% Less Cloud Spend', description: 'Right-sizing analysis, reserved instance planning, spot instance adoption, and storage tiering consistently reduce cloud bills by 30–60% without compromising performance or reliability.', bullets: ['Resource right-sizing analysis', 'Reserved and savings plan optimization', 'Spot instance adoption for workloads', 'Storage lifecycle and tiering policies'], image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', imageAlt: 'Cloud cost optimization', reverse: true },
  ],
  techGroups: [
    { category: 'Cloud Platforms', color: '#f59e0b', items: [{ name: 'AWS', icon: I('amazon-web-services') }, { name: 'GCP', icon: I('google-cloud') }, { name: 'Azure', icon: I('azure-1') }] },
    { category: 'Containers & Orch.', color: '#0066ff', items: [{ name: 'Docker', icon: I('docker') }, { name: 'Kubernetes', icon: I('kubernetes') }, { name: 'Helm', icon: I('settings') }] },
    { category: 'IaC & CI/CD', color: '#10b981', items: [{ name: 'Terraform', icon: I('terraform') }, { name: 'GitHub Actions', icon: I('github') }, { name: 'ArgoCD', icon: I('settings') }] },
    { category: 'Observability', color: '#6366f1', items: [{ name: 'Prometheus', icon: I('combo-chart') }, { name: 'Grafana', icon: I('dashboard-layout') }, { name: 'Datadog', icon: I('dog') }] },
  ],
  benefits: [
    { metric: '99.99%', label: 'Uptime SLA Delivered', description: 'Multi-AZ deployments and auto-healing infrastructure eliminate single points of failure.', icon: I('flash-on'), color: '#0066ff' },
    { metric: '10×', label: 'Deployment Frequency', description: 'CI/CD pipelines replace manual deployments with automated, safe releases.', icon: I('rocket'), color: '#10b981' },
    { metric: '60%', label: 'Cloud Cost Reduction', description: 'Right-sizing and spot instances consistently cut cloud spend without trade-offs.', icon: I('money'), color: '#f59e0b' },
    { metric: '<5 Min', label: 'Mean Time to Recovery', description: 'Auto-healing and instant rollback drastically cut incident resolution time.', icon: I('settings'), color: '#6366f1' },
    { metric: '100%', label: 'Infrastructure as Code', description: 'Every resource defined in Terraform — reproducible, auditable, and version-controlled.', icon: I('terraform'), color: '#ec4899' },
    { metric: '0', label: 'Manual Deployments After Setup', description: 'Fully automated pipelines eliminate risky and error-prone manual releases.', icon: I('automatic'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'What cloud platforms do you work with?', a: 'We primarily work with AWS and GCP, with Azure also supported. Most of our tooling is cloud-agnostic through Terraform and Kubernetes, making multi-cloud deployments straightforward.' },
    { q: 'Can you help us migrate from on-premises to cloud?', a: 'Yes. We conduct a pre-migration assessment, design the target architecture, execute the migration in phases with zero-downtime strategies, and validate performance after each phase.' },
    { q: 'How do you manage cloud costs?', a: 'We start with a cost audit of your current spend, implement right-sizing recommendations, move eligible workloads to spot instances, apply reserved instance savings plans, and set up cost anomaly alerting.' },
    { q: 'Can you set up monitoring for our existing infrastructure?', a: 'Yes. We implement Prometheus, Grafana, and alerting stacks on existing deployments. We also integrate with Datadog or New Relic if you have existing observability tooling.' },
    { q: 'Do you manage infrastructure on an ongoing basis?', a: 'Yes. We offer managed DevOps retainers covering on-call support, patch management, capacity planning, cost optimization reviews, and proactive incident management.' },
    { q: 'How do you handle secrets and credentials securely?', a: 'We use AWS Secrets Manager, HashiCorp Vault, or Kubernetes Secrets with RBAC, combined with automated rotation policies and audit logging for all secret access.' },
    { q: 'What is GitOps and should we use it?', a: 'GitOps treats your infrastructure and deployment configuration as code in Git. ArgoCD watches your Git repository and automatically syncs changes to your Kubernetes cluster. We recommend it for any team deploying to Kubernetes regularly.' },
    { q: 'Can you implement disaster recovery for our production systems?', a: 'Yes. We design and implement DR strategies including cross-region backups, failover automation, RTO/RPO analysis, and regular DR drills to validate recovery procedures.' },
    { q: 'How quickly can you set up a CI/CD pipeline?', a: 'A basic GitHub Actions pipeline for a containerized application can be set up in 1–2 days. A comprehensive pipeline with security scanning, multi-environment promotion, and automated testing takes 1–2 weeks.' },
    { q: 'Do you support compliance frameworks like SOC 2 or ISO 27001?', a: 'Yes. We implement infrastructure controls aligned with SOC 2 Type II and ISO 27001 requirements, including audit logging, access control, encryption, vulnerability scanning, and evidence collection automation.' },
  ],
  ctaTitle: 'Ready to Upgrade Your Infrastructure?',
  ctaDescription: 'Share your current setup, pain points, and reliability or cost goals — we will design the right architecture and give you a migration plan.',
};

/* ═══════════════════════════════════════════════════════════════
   9. UI/UX DESIGN
═══════════════════════════════════════════════════════════════ */
const uiUxDesign: ServicePage = {
  slug: 'ui-ux-design',
  meta: { title: 'UI/UX Design Services | Eryon AI', description: 'Research-led product design, SaaS dashboard design, design systems, and interactive prototyping that converts users and scales with your product.' },
  hero: {
    badge: 'Product Design & UX Engineering',
    headline: 'Interfaces That Convert',
    headlineGrad: 'Users Into Customers',
    description: 'We design digital products that feel effortless — backed by user research, tested with real users, and built to a standard that makes your competition look outdated.',
    heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80',
    stats: [{ value: '35%', label: 'Avg. Conversion Lift' }, { value: '4.8★', label: 'Product Satisfaction' }, { value: '200+', label: 'Products Designed' }],
  },
  buildLabel: 'What We Design', buildTitle: 'Design Services for Every', buildTitleGrad: 'Product Stage',
  buildSubtitle: 'From early-stage wireframes to enterprise-scale design systems, we design products that are both beautiful and strategically effective.',
  buildItems: [
    { icon: I('design'), color: '#a855f7', bgColor: 'rgba(168,85,247,0.08)', title: 'Product Design', description: 'End-to-end product design from discovery and research through to pixel-perfect high-fidelity screens.', features: ['Research-led process', 'High-fidelity screens', 'Design documentation'] },
    { icon: I('user'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'UX Strategy', description: 'User journey mapping, information architecture, and conversion funnel analysis grounded in behavioral data.', features: ['User journey mapping', 'Information architecture', 'Funnel analysis'] },
    { icon: I('dashboard-layout'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'SaaS Dashboard Design', description: 'Complex data-heavy dashboards that surface the right information without overwhelming the user.', features: ['Data visualization', 'Widget systems', 'Adaptive layouts'] },
    { icon: I('smartphone-tablet'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'Mobile App Design', description: 'iOS and Android-native designs following platform guidelines while maintaining your brand identity.', features: ['iOS & Android native', 'Gesture navigation', 'Platform compliance'] },
    { icon: I('topic'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Design Systems', description: 'Component libraries and design tokens that scale consistently across products, platforms, and teams.', features: ['Component library', 'Design tokens', 'Figma variables'] },
    { icon: I('workflow'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Wireframing', description: 'Low and mid-fidelity wireframes that validate information architecture before investing in visual design.', features: ['Low-fi exploration', 'Mid-fi validation', 'Stakeholder reviews'] },
    { icon: I('animation'), color: '#a855f7', bgColor: 'rgba(168,85,247,0.08)', title: 'Interactive Prototypes', description: 'Clickable Figma and code prototypes that simulate the real product for user testing and investor demos.', features: ['Figma prototypes', 'Code-based demos', 'User test-ready'] },
    { icon: I('checkmark'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Usability Testing', description: 'Moderated and unmoderated user testing sessions with synthesized findings and design recommendations.', features: ['Remote testing', 'Session recording', 'Heatmap analysis'] },
  ],
  industryLabel: 'Products We Design', industryTitle: 'Design Expertise Across Complex Product Categories',
  industries: [
    { name: 'SaaS Products', icon: I('rocket'), color: '#0066ff', challenge: 'SaaS products with complex feature sets confuse users and increase support burden.', solution: 'Progressive disclosure design that introduces features at the right moment in the user journey.' },
    { name: 'Healthcare Apps', icon: I('caduceus'), color: '#10b981', challenge: 'Healthcare interfaces must be intuitive under clinical pressure while meeting accessibility standards.', solution: 'WCAG 2.1 AA compliant clinical interfaces with cognitive load optimization for high-stress environments.' },
    { name: 'FinTech Platforms', icon: I('bank-building'), color: '#f59e0b', challenge: 'Financial data is complex but users need confidence and clarity when making financial decisions.', solution: 'Trust-centered financial UX that simplifies complexity and guides users to confident action.' },
    { name: 'E-Commerce', icon: I('online-store'), color: '#ec4899', challenge: 'Cart abandonment and poor checkout UX are costing e-commerce businesses significant revenue.', solution: 'Conversion-optimized product discovery and streamlined checkout flows tested against real user behavior.' },
    { name: 'Enterprise Software', icon: I('organization'), color: '#6366f1', challenge: 'Enterprise tools are functionally capable but so complex that employees avoid using them.', solution: 'Role-based interfaces that surface only relevant functionality, reducing training time and adoption friction.' },
    { name: 'Logistics & Operations', icon: I('in-transit'), color: '#00b4d8', challenge: 'Operations staff use tools on mobile in challenging environments requiring clarity at a glance.', solution: 'High-contrast, touch-optimized operational interfaces designed for real-world field conditions.' },
    { name: 'EdTech', icon: I('graduation-cap'), color: '#0066ff', challenge: 'Learning platforms need to maintain engagement across different age groups and learning styles.', solution: 'Learning-science-informed UX with gamification, progress visualization, and adaptive content presentation.' },
    { name: 'AI Products', icon: I('artificial-intelligence'), color: '#a855f7', challenge: 'AI product interfaces need to build trust and make AI outputs comprehensible to non-technical users.', solution: 'Explainable AI UX that surfaces AI confidence levels, source citations, and user override controls.' },
  ],
  featureLabel: 'Our Design Process', featureTitle: 'Design That Is Measurably Better',
  features: [
    { eyebrow: 'Research Foundation', title: 'Design Decisions Backed by Evidence', description: 'Every design engagement starts with user interviews, competitive analysis, and analytics review. We understand who your users are, what they are trying to do, and where your current design is failing them before we sketch a single screen.', bullets: ['Stakeholder and user interviews', 'Competitor UX benchmarking', 'Analytics and heatmap analysis', 'Job-to-be-done mapping'], image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80', imageAlt: 'UX research and user interviews', reverse: false },
    { eyebrow: 'Design Systems', title: 'Consistency That Scales Across Your Entire Product', description: 'We build Figma-based design systems with component libraries, design tokens, and usage documentation that allow your product and engineering teams to move fast while staying visually consistent across every screen.', bullets: ['Atomic component library', 'Figma variables and tokens', 'Dark and light mode support', 'Developer handoff documentation'], image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', imageAlt: 'Design system component library', reverse: true },
    { eyebrow: 'Accessibility', title: 'Inclusive Design From the First Screen', description: 'We bake WCAG 2.1 AA compliance into every design from the start — not as an afterthought. Proper color contrast, keyboard navigation, screen reader compatibility, and focus state design are built into our base component set.', bullets: ['WCAG 2.1 AA color contrast', 'Keyboard and focus state design', 'ARIA annotation for developers', 'Accessibility audit on delivery'], image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80', imageAlt: 'Accessible design implementation', reverse: false },
    { eyebrow: 'User Testing', title: 'Validate Before Engineering Writes a Line', description: 'Interactive prototypes tested with real users before development begins save your engineering team from building the wrong thing. We run moderated testing sessions, synthesize findings, and iterate until designs are validated.', bullets: ['Figma clickable prototypes', 'Moderated user testing sessions', 'Insight synthesis reports', 'Design iteration on findings'], image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', imageAlt: 'User testing and prototype validation', reverse: true },
  ],
  techGroups: [
    { category: 'Design Tools', color: '#a855f7', items: [{ name: 'Figma', icon: I('figma') }, { name: 'FigJam', icon: I('workflow') }, { name: 'Framer', icon: I('animation') }] },
    { category: 'Prototyping', color: '#0066ff', items: [{ name: 'Figma Proto', icon: I('design') }, { name: 'React', icon: I('react-native') }, { name: 'Framer Motion', icon: I('animation') }] },
    { category: 'Research Tools', color: '#10b981', items: [{ name: 'Maze', icon: I('user') }, { name: 'Hotjar', icon: I('combo-chart') }, { name: 'UserTesting', icon: I('checkmark') }] },
    { category: 'Frontend Build', color: '#f59e0b', items: [{ name: 'TypeScript', icon: I('typescript') }, { name: 'Storybook', icon: I('book') }, { name: 'Tailwind CSS', icon: I('tailwindcss') }] },
  ],
  benefits: [
    { metric: '35%', label: 'Conversion Rate Improvement', description: 'Optimized user flows and clear CTAs consistently drive higher conversion.', icon: I('combo-chart'), color: '#a855f7' },
    { metric: '50%', label: 'Reduction in Support Tickets', description: 'Intuitive UX reduces the confusion that drives users to contact support.', icon: I('customer-support'), color: '#0066ff' },
    { metric: '3×', label: 'Faster Feature Adoption', description: 'Well-designed onboarding drives users to new features without email campaigns.', icon: I('flash-on'), color: '#10b981' },
    { metric: '40%', label: 'Lower Development Rework', description: 'Validated designs prevent costly engineering rework due to UX misalignment.', icon: I('checkmark'), color: '#f59e0b' },
    { metric: '4.8★', label: 'Average Product Rating', description: 'Products we design consistently achieve top app store and G2 ratings.', icon: I('star'), color: '#6366f1' },
    { metric: '2×', label: 'Faster Engineering Velocity', description: 'Comprehensive design systems let engineers build new features faster.', icon: I('rocket'), color: '#ec4899' },
  ],
  faqs: [
    { q: 'Do you conduct user research before designing?', a: 'Yes. Every design engagement starts with research — user interviews, competitor analysis, and analytics review. We do not design based on assumptions.' },
    { q: 'Do you design in Figma?', a: 'Yes. We use Figma as our primary design tool for all screens, components, prototypes, and design system documentation. We deliver organized Figma files your team can maintain after engagement.' },
    { q: 'Can you design both web and mobile?', a: 'Yes. We design for web, iOS, and Android following each platform\'s design guidelines while maintaining brand consistency across all surfaces.' },
    { q: 'Do you create design systems or just screen designs?', a: 'We prefer to create design systems over one-off screen designs because they scale better. A proper design system means every new feature your engineering team builds is automatically consistent.' },
    { q: 'Can you work with our existing brand guidelines?', a: 'Yes. We design within existing brand constraints — using your established color palette, typography, and tone of voice. We can also recommend brand evolution where the current guidelines limit the product experience.' },
    { q: 'Do you do user testing?', a: 'Yes. We run moderated and unmoderated user testing sessions using Maze, UserTesting.com, or recruiting from your existing user base. We deliver synthesized findings with prioritized design recommendations.' },
    { q: 'What do you deliver at the end of a design project?', a: 'We deliver organized Figma files with all screens and components, a design system with documentation, developer handoff annotations (spacing, fonts, colors, interactions), and a prototype for user testing.' },
    { q: 'Can you work with our engineering team during development?', a: 'Yes. We stay engaged during development to answer design questions, review implementation fidelity, and adjust designs based on technical constraints discovered during build.' },
    { q: 'How long does a typical design project take?', a: 'A core user journey redesign takes 3–5 weeks. A full product design with research, design system, and validated prototypes takes 8–14 weeks depending on product scope.' },
    { q: 'Can you redesign our existing product without disrupting current users?', a: 'Yes. We use progressive redesign approaches — redesigning one user journey at a time, running A/B tests where needed, and rolling out changes in phases to minimize disruption.' },
  ],
  ctaTitle: 'Ready to Redesign Your Product?',
  ctaDescription: 'Share your current product, target users, and biggest UX frustrations — we will propose a research and design approach that fits your timeline.',
};

/* ═══════════════════════════════════════════════════════════════
   10. E-COMMERCE SOLUTIONS
═══════════════════════════════════════════════════════════════ */
const ecommerceSolutions: ServicePage = {
  slug: 'ecommerce-solutions',
  meta: { title: 'Custom E-Commerce Development | Eryon AI', description: 'Custom B2B and B2C e-commerce platforms, multi-vendor marketplaces, and subscription commerce solutions built for revenue growth and operational efficiency.' },
  hero: {
    badge: 'Custom E-Commerce Development',
    headline: 'E-Commerce Platforms',
    headlineGrad: 'Built to Sell at Scale',
    description: 'Generic e-commerce platforms cap your growth with rigid limitations. We build custom commerce systems — B2B, B2C, marketplace, and subscription — designed precisely around how you sell.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
    stats: [{ value: '40+', label: 'Commerce Platforms Built' }, { value: '2×', label: 'Avg. Conversion Rate' }, { value: '1M+', label: 'Orders Processed' }],
  },
  buildLabel: 'What We Build', buildTitle: 'Commerce Solutions for Every', buildTitleGrad: 'Business Model',
  buildSubtitle: 'Whether you sell to businesses, consumers, or both — through a single store or a marketplace — we build the platform your growth requires.',
  buildItems: [
    { icon: I('organization'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'B2B Commerce Platforms', description: 'Wholesale and B2B portals with negotiated pricing, account management, bulk ordering, and credit terms.', features: ['Negotiated pricing', 'Bulk ordering', 'Credit terms'] },
    { icon: I('online-store'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'B2C Online Stores', description: 'Consumer storefronts optimized for conversion with personalized product discovery and streamlined checkout.', features: ['Personalization', 'SEO-optimized', 'Mobile-first'] },
    { icon: I('conference-call'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Multi-Vendor Marketplaces', description: 'Marketplace platforms with seller onboarding, commission management, and dispute resolution workflows.', features: ['Seller portals', 'Commission engine', 'Dispute management'] },
    { icon: I('user'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'D2C Platforms', description: 'Direct-to-consumer stores with built-in CRM, loyalty programs, and subscription bundling.', features: ['Built-in CRM', 'Loyalty program', 'Subscription bundles'] },
    { icon: I('bank-cards'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Subscription Commerce', description: 'Recurring revenue commerce with plan management, dunning, and subscriber lifecycle automation.', features: ['Recurring billing', 'Dunning flows', 'Subscriber analytics'] },
    { icon: I('box'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Inventory Management', description: 'Real-time stock management across warehouses with reorder automation and supplier integration.', features: ['Multi-warehouse', 'Reorder automation', 'Supplier sync'] },
    { icon: I('in-transit'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Order Management', description: 'Order processing, fulfillment routing, returns management, and customer communication automation.', features: ['Fulfillment routing', 'Returns management', 'Status communication'] },
    { icon: I('smartphone-tablet'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Mobile Commerce Apps', description: 'Native iOS and Android shopping apps with push notifications, offline browsing, and one-tap checkout.', features: ['Native iOS & Android', 'Push notifications', 'One-tap checkout'] },
  ],
  industryLabel: 'Commerce Segments We Serve', industryTitle: 'Specialized Commerce for Every Industry',
  industries: [
    { name: 'Fashion & Apparel', icon: I('shirt'), color: '#ec4899', challenge: 'Fashion businesses need sophisticated visual merchandising, size filtering, and return management.', solution: 'Fashion commerce platforms with visual product discovery, size guides, AR try-on integration, and seamless returns.' },
    { name: 'Industrial & B2B', icon: I('factory'), color: '#0066ff', challenge: 'B2B buyers need account pricing, bulk ordering, and purchase order workflows not available in consumer platforms.', solution: 'B2B portals with account-specific pricing, tiered discounts, and PO approval workflow integration.' },
    { name: 'Grocery & FMCG', icon: I('shop'), color: '#10b981', challenge: 'Grocery e-commerce requires slot-based delivery scheduling and real-time inventory across dark stores.', solution: 'Grocery commerce platforms with slot booking, substitution management, and dark store inventory integration.' },
    { name: 'Electronics', icon: I('smartphone-tablet'), color: '#6366f1', challenge: 'Electronics commerce needs detailed technical specifications, comparison tools, and warranty management.', solution: 'Electronics commerce platforms with specification-based filtering, product comparison, and warranty registration.' },
    { name: 'Health & Wellness', icon: I('caduceus'), color: '#f59e0b', challenge: 'Health product commerce requires prescription verification, regulatory compliance, and subscription management.', solution: 'Health commerce platforms with prescription upload, compliance controls, and subscription auto-replenishment.' },
    { name: 'Food & Beverage', icon: I('restaurant'), color: '#ec4899', challenge: 'Food businesses need perishable inventory management, delivery time windows, and freshness tracking.', solution: 'Food commerce platforms with freshness date tracking, time-window delivery booking, and perishable inventory.' },
    { name: 'Home & Furniture', icon: I('home'), color: '#00b4d8', challenge: 'Furniture buyers need AR room visualization, delivery scheduling, and complex assembly service booking.', solution: 'Furniture commerce with AR placement, white-glove delivery scheduling, and assembly service integration.' },
    { name: 'Luxury & Artisan', icon: I('star'), color: '#a855f7', challenge: 'Luxury brands need commerce experiences that reflect exclusivity rather than mass-market aesthetics.', solution: 'Premium commerce experiences with appointment shopping, authentication certificates, and concierge features.' },
  ],
  featureLabel: 'Commerce Capabilities', featureTitle: 'Commerce Features That Drive Real Revenue',
  features: [
    { eyebrow: 'Product Discovery', title: 'Search and Filtering That Converts Browsers to Buyers', description: 'AI-powered search with faceted filtering, personalized recommendations, and visual similarity search lets shoppers find exactly what they want — driving higher add-to-cart rates and larger basket sizes.', bullets: ['AI semantic product search', 'Faceted filter systems', 'Personalized recommendations', 'Recently viewed and saved items'], image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', imageAlt: 'E-commerce product discovery', reverse: false },
    { eyebrow: 'Checkout Optimization', title: 'A Checkout That Reduces Abandonment by Design', description: 'Single-page checkout with address autocomplete, saved payment methods, guest checkout, and express payment options like Apple Pay and Google Pay — tested against real abandonment data.', bullets: ['Single-page checkout flow', 'Express pay (Apple Pay, GPay)', 'Address auto-complete', 'Guest and account checkout'], image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80', imageAlt: 'Optimized e-commerce checkout', reverse: true },
    { eyebrow: 'Inventory & Fulfillment', title: 'From Order Placed to Delivered — Automated', description: 'End-to-end fulfillment automation covering order routing to the nearest warehouse, pick-list generation, carrier label printing, and customer shipment tracking — without manual intervention.', bullets: ['Nearest warehouse routing', 'Pick list automation', 'Multi-carrier rate shopping', 'Customer tracking notifications'], image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', imageAlt: 'Order fulfillment automation', reverse: false },
    { eyebrow: 'Analytics & Growth', title: 'Revenue Intelligence That Guides Every Decision', description: 'Commerce analytics dashboards tracking revenue by channel, product performance, customer acquisition costs, cohort retention, and lifetime value — giving you the data to optimize every aspect of your business.', bullets: ['Revenue by channel and product', 'Customer LTV and cohort analysis', 'Cart abandonment attribution', 'Promotional performance tracking'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', imageAlt: 'Commerce analytics dashboard', reverse: true },
  ],
  techGroups: [
    { category: 'Frontend', color: '#0066ff', items: [{ name: 'Next.js', icon: I('nextjs') }, { name: 'React', icon: I('react-native') }, { name: 'TypeScript', icon: I('typescript') }] },
    { category: 'Backend', color: '#10b981', items: [{ name: 'Spring Boot', icon: I('spring-logo') }, { name: 'Node.js', icon: I('nodejs') }, { name: 'FastAPI', icon: I('api') }] },
    { category: 'Payments & Search', color: '#f59e0b', items: [{ name: 'Stripe', icon: I('stripe') }, { name: 'Elasticsearch', icon: I('elasticsearch') }, { name: 'Algolia', icon: I('search') }] },
    { category: 'Cloud & CDN', color: '#6366f1', items: [{ name: 'AWS', icon: I('amazon-web-services') }, { name: 'CloudFront', icon: I('cloud') }, { name: 'Docker', icon: I('docker') }] },
  ],
  benefits: [
    { metric: '2×', label: 'Higher Conversion Rate', description: 'Optimized checkout and product discovery double average conversion rates.', icon: I('combo-chart'), color: '#0066ff' },
    { metric: '35%', label: 'Larger Average Order Value', description: 'Personalized recommendations and bundle features increase basket size.', icon: I('online-store'), color: '#10b981' },
    { metric: '60%', label: 'Faster Order Processing', description: 'Automated fulfillment routing eliminates manual order handling delays.', icon: I('flash-on'), color: '#f59e0b' },
    { metric: '99.9%', label: 'Payment Success Rate', description: 'Smart payment routing and retry logic maximize payment capture.', icon: I('bank-cards'), color: '#6366f1' },
    { metric: '0', label: 'Manual Inventory Reconciliation', description: 'Real-time sync eliminates manual stock counting and reconciliation.', icon: I('box'), color: '#ec4899' },
    { metric: '3×', label: 'Faster Product Catalog Updates', description: 'Bulk import tools and API sync cut catalog management time dramatically.', icon: I('automatic'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'Why build a custom e-commerce platform instead of using Shopify or WooCommerce?', a: 'Custom platforms make sense when your business model does not fit Shopify\'s constraints — complex B2B pricing, marketplace functionality, unusual fulfillment workflows, or deep integration with existing ERP systems. For simple stores, we often recommend Shopify. For complex commerce, custom wins.' },
    { q: 'Can you integrate with our existing warehouse management system?', a: 'Yes. We integrate with leading WMS platforms (ShipBob, Deposco, NetSuite) and custom warehouse systems via API — enabling real-time inventory sync, automated pick lists, and fulfillment status updates.' },
    { q: 'What payment gateways do you support?', a: 'We integrate Stripe, PayPal, Razorpay, Braintree, and regional payment providers. For B2B, we also implement net payment terms, invoice-based payment, and purchase order workflows.' },
    { q: 'Can you build a marketplace with multiple sellers?', a: 'Yes. Multi-vendor marketplace development is a core specialty. We build seller onboarding flows, product listing approval workflows, commission calculation engines, seller payouts, and dispute resolution systems.' },
    { q: 'How do you handle high-traffic sales events like flash sales?', a: 'We architect for peak loads using auto-scaling, Redis queuing for order spikes, CDN-cached product pages, and database read replicas. We conduct load testing before major events to validate capacity.' },
    { q: 'Can customers track their orders in real time?', a: 'Yes. We implement order tracking with carrier API integration, real-time status updates, and customer-facing tracking pages — reducing customer service enquiries by up to 40%.' },
    { q: 'Can the platform handle multiple currencies and languages?', a: 'Yes. We build internationalized commerce platforms with multi-currency pricing, geolocation-based currency switching, translated product content, and localized checkout flows.' },
    { q: 'How do you handle product returns and refunds?', a: 'We build returns management workflows covering customer-initiated return requests, restocking fee calculation, automated refund processing, and return-to-warehouse tracking.' },
    { q: 'Is the storefront optimized for SEO?', a: 'Yes. All storefronts are built with server-side rendering for full Google indexability, structured product schema (JSON-LD), dynamic XML sitemaps, canonical URL management, and fast core web vitals.' },
    { q: 'How long does a custom e-commerce platform take to build?', a: 'A standard B2C store takes 3–4 months. A B2B platform with account management and ERP integration takes 4–6 months. A full marketplace with seller management takes 6–9 months.' },
  ],
  ctaTitle: 'Ready to Build Your Commerce Platform?',
  ctaDescription: 'Tell us your business model, current platform limitations, and growth targets — we will scope the right commerce system for you.',
};

/* ═══════════════════════════════════════════════════════════════
   11. BUSINESS AUTOMATION
═══════════════════════════════════════════════════════════════ */
const businessAutomation: ServicePage = {
  slug: 'business-automation',
  meta: { title: 'Business Process Automation Development | Eryon AI', description: 'Custom workflow automation, document automation, and business process optimization that eliminates manual work and scales your operations without scaling your headcount.' },
  hero: {
    badge: 'Business Process & Workflow Automation',
    headline: 'Automate the Work That',
    headlineGrad: 'Slows Your Business Down',
    description: 'We identify, map, and automate the manual business processes that consume your team\'s time — building scalable automation workflows that handle repetitive tasks so your people can focus on high-value work.',
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80',
    stats: [{ value: '70%', label: 'Task Automation Rate' }, { value: '5×', label: 'Process Speed Increase' }, { value: '40%', label: 'Operational Cost Reduction' }],
  },
  buildLabel: 'What We Automate', buildTitle: 'Automation Solutions for Every', buildTitleGrad: 'Business Process',
  buildSubtitle: 'From document generation to complex multi-system approval workflows, we automate the processes that are slowing your business down.',
  buildItems: [
    { icon: I('workflow'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Workflow Automation', description: 'End-to-end business process automation with conditional logic, parallel processing, and exception handling.', features: ['Conditional logic', 'Parallel processing', 'Error handling'] },
    { icon: I('document'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'Document Automation', description: 'Automated generation of contracts, proposals, invoices, and reports from templates and live business data.', features: ['Template engine', 'Dynamic data merge', 'E-signature integration'] },
    { icon: I('appointment-reminders'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Notification Automation', description: 'Multi-channel automated alerts — email, SMS, push, and Slack — triggered by business events across your systems.', features: ['Multi-channel delivery', 'Trigger conditions', 'Escalation logic'] },
    { icon: I('report-card'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Report Automation', description: 'Scheduled automated reporting pulling data from multiple systems and delivering to the right stakeholders.', features: ['Multi-source aggregation', 'Scheduled delivery', 'PDF & Excel output'] },
    { icon: I('customer-support'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Customer Onboarding Automation', description: 'Automated customer onboarding flows — welcome sequences, account setup, verification, and training scheduling.', features: ['Welcome sequences', 'Account provisioning', 'KYC automation'] },
    { icon: I('money'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Invoice & Payment Automation', description: 'Automated invoice generation, payment reminder sequences, reconciliation, and overdue escalation.', features: ['Auto invoice generation', 'Payment reminders', 'Reconciliation'] },
    { icon: I('checkmark'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Approval Workflow Systems', description: 'Multi-level digital approval systems for purchase orders, leave requests, contracts, and expense reports.', features: ['Multi-level approvals', 'Delegation rules', 'SLA escalations'] },
    { icon: I('api'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'System Integration Automation', description: 'Automated data synchronization between disconnected business systems — eliminating manual re-entry.', features: ['Bi-directional sync', 'Error retry logic', 'Conflict resolution'] },
  ],
  industryLabel: 'Industries We Serve', industryTitle: 'Automation That Transforms Operations Across Industries',
  industries: [
    { name: 'Finance & Accounting', icon: I('bank-building'), color: '#0066ff', challenge: 'Finance teams spend days each month manually compiling reports and reconciling transactions.', solution: 'Automated financial reporting and reconciliation systems that eliminate month-end manual work.' },
    { name: 'HR & Recruitment', icon: I('conference-call'), color: '#10b981', challenge: 'HR teams process paperwork, onboarding documents, and approvals manually for every new hire.', solution: 'Automated onboarding workflows provisioning accounts, generating documents, and scheduling training.' },
    { name: 'Legal & Compliance', icon: I('document'), color: '#6366f1', challenge: 'Legal teams manually draft, review, and track contract versions across email chains.', solution: 'Contract lifecycle automation with template generation, version tracking, and approval workflows.' },
    { name: 'Healthcare', icon: I('caduceus'), color: '#f59e0b', challenge: 'Administrative staff manually process referrals, prior authorizations, and insurance claims.', solution: 'Healthcare administration automation covering referrals, prior auth, and claims processing workflows.' },
    { name: 'Manufacturing', icon: I('factory'), color: '#ec4899', challenge: 'Production planning, quality reports, and supplier POs are created manually, causing delays.', solution: 'Manufacturing automation linking production plans to PO generation, quality reports, and supplier alerts.' },
    { name: 'Real Estate', icon: I('real-estate'), color: '#00b4d8', challenge: 'Lease renewals, maintenance requests, and tenant communications are handled manually by property managers.', solution: 'Property management automation for lease renewals, maintenance workflows, and tenant communication sequences.' },
    { name: 'Retail & E-Commerce', icon: I('online-store'), color: '#0066ff', challenge: 'Reorder decisions, supplier POs, and customer service responses are handled by staff manually.', solution: 'Automated inventory replenishment, supplier PO generation, and customer service response workflows.' },
    { name: 'Logistics', icon: I('in-transit'), color: '#6366f1', challenge: 'Dispatcher teams manually assign drivers, update tracking, and communicate delay alerts to customers.', solution: 'Automated dispatch assignment, tracking update broadcasts, and proactive customer delay notifications.' },
  ],
  featureLabel: 'Automation Capabilities', featureTitle: 'Automation That Handles the Hard Parts',
  features: [
    { eyebrow: 'Process Mapping', title: 'Understand the Process Before Automating It', description: 'We map your current business process end-to-end before writing a single automation rule — identifying bottlenecks, exception paths, and integration points. Automating a broken process just makes it fail faster.', bullets: ['As-is process mapping and analysis', 'Bottleneck and handoff identification', 'Exception scenario documentation', 'To-be process design and validation'], image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', imageAlt: 'Business process mapping workshop', reverse: false },
    { eyebrow: 'Document Generation', title: 'From Template to Signed Document in Seconds', description: 'Dynamic document generation pulls live data from your CRM, ERP, or database into configurable templates — producing contracts, proposals, invoices, and reports that previously required hours of manual assembly.', bullets: ['Template-driven document generation', 'CRM and ERP data integration', 'PDF, DOCX, and Excel output', 'DocuSign and e-signature integration'], image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', imageAlt: 'Automated document generation', reverse: true },
    { eyebrow: 'Approval Routing', title: 'Smart Approval Workflows With Zero Manual Routing', description: 'Rule-based approval routing automatically directs requests to the right approver based on value, department, type, and urgency — with SLA timers, delegation during absence, and escalation when approvals stall.', bullets: ['Value and type-based routing rules', 'Delegation during absence', 'SLA-based automatic escalation', 'Mobile-ready approval interface'], image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80', imageAlt: 'Automated approval workflow', reverse: false },
    { eyebrow: 'System Integration', title: 'One Change in Any System, Reflected Everywhere', description: 'Bi-directional integration automation keeps data consistent across your CRM, ERP, accounting software, and communication tools — eliminating the manual re-entry that causes errors and consumes hours.', bullets: ['Bi-directional data synchronization', 'Conflict detection and resolution', 'Event-driven trigger architecture', 'Failed sync retry and alerting'], image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', imageAlt: 'System integration automation', reverse: true },
  ],
  techGroups: [
    { category: 'Workflow Engine', color: '#0066ff', items: [{ name: 'Python', icon: I('python') }, { name: 'Node.js', icon: I('nodejs') }, { name: 'FastAPI', icon: I('api') }] },
    { category: 'Automation Tools', color: '#10b981', items: [{ name: 'n8n', icon: I('workflow') }, { name: 'Celery', icon: I('settings') }, { name: 'Redis Queue', icon: I('redis') }] },
    { category: 'Integrations', color: '#f59e0b', items: [{ name: 'Zapier', icon: I('api') }, { name: 'Twilio', icon: I('topic') }, { name: 'SendGrid', icon: I('appointment-reminders') }] },
    { category: 'Cloud & DB', color: '#6366f1', items: [{ name: 'AWS', icon: I('amazon-web-services') }, { name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'MongoDB', icon: I('mongodb') }] },
  ],
  benefits: [
    { metric: '70%', label: 'Tasks Automated', description: 'Systematic automation eliminates the majority of manual operational work.', icon: I('automatic'), color: '#0066ff' },
    { metric: '5×', label: 'Faster Process Execution', description: 'Automated workflows complete in seconds what previously took hours.', icon: I('flash-on'), color: '#10b981' },
    { metric: '40%', label: 'Operational Cost Reduction', description: 'Automation displaces manual labor without reducing team capability.', icon: I('money'), color: '#f59e0b' },
    { metric: '0', label: 'Manual Data Entry Errors', description: 'System-to-system automation eliminates human error in data transfer.', icon: I('checkmark'), color: '#6366f1' },
    { metric: '24/7', label: 'Workflows Running Non-Stop', description: 'Automated systems work around the clock without supervision.', icon: I('settings'), color: '#ec4899' },
    { metric: '100%', label: 'Audit Trail on Every Action', description: 'Every automated action is logged and attributable for compliance.', icon: I('security-checked'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'How do you decide which processes to automate first?', a: 'We start with a process audit to identify high-volume, repetitive tasks with clear rules. We prioritize automation by impact (time saved × frequency) and implementation risk — targeting quick wins first, then complex workflows.' },
    { q: 'Can you automate processes that span multiple systems?', a: 'Yes. Cross-system automation is our specialty. We build integration middleware that triggers workflows based on events in one system and executes actions across multiple others.' },
    { q: 'What if a process has many exceptions and special cases?', a: 'Exception handling is built into every automation. We map edge cases during the process analysis phase and implement conditional routing, human-review queues, and fallback actions for every identified exception.' },
    { q: 'Can non-technical staff change automation rules after implementation?', a: 'For business logic that changes frequently, we build admin interfaces that allow business users to adjust rules, thresholds, and templates without developer involvement.' },
    { q: 'How do you ensure automations do not create errors that compound?', a: 'We implement error detection with automatic retry, failed-item quarantine, and human review queues. No automation runs silently — every failure generates an alert and a correctable exception record.' },
    { q: 'Can you integrate with our existing CRM, ERP, or accounting software?', a: 'Yes. We integrate with Salesforce, HubSpot, SAP, QuickBooks, Xero, Tally, and custom in-house systems via REST APIs, webhooks, or database-level integration depending on available connectivity.' },
    { q: 'Do you automate AI tasks as well as rule-based tasks?', a: 'Yes. We combine rule-based automation for deterministic tasks with AI models for tasks requiring judgment — such as document classification, email intent detection, and content generation.' },
    { q: 'How long does automation implementation take?', a: 'A focused automation for one business process takes 3–6 weeks. A comprehensive automation program covering multiple departments takes 3–6 months depending on process complexity and integration requirements.' },
    { q: 'Will automation disrupt our current operations?', a: 'We implement automation in parallel with existing processes, running both simultaneously until the automation is validated. We never hard-cut over to automation without a proven validation period.' },
    { q: 'How do you measure the ROI of automation?', a: 'We baseline the current process — time per task, volume, cost — before automation, then measure the same metrics after deployment. Most automation projects achieve ROI within 6–9 months of implementation.' },
  ],
  ctaTitle: 'Ready to Automate Your Operations?',
  ctaDescription: 'Tell us your most time-consuming manual process and we will assess the automation potential and design the right solution.',
};

/* ═══════════════════════════════════════════════════════════════
   12. DATA & ANALYTICS
═══════════════════════════════════════════════════════════════ */
const dataAnalytics: ServicePage = {
  slug: 'data-analytics',
  meta: { title: 'Data & Analytics Platform Development | Eryon AI', description: 'Custom BI dashboards, data warehousing, real-time analytics platforms, and self-service reporting tools that turn your raw data into business decisions.' },
  hero: {
    badge: 'Data Engineering & Business Intelligence',
    headline: 'Turn Your Data Into',
    headlineGrad: 'Decisions That Drive Growth',
    description: 'We build data pipelines, analytics platforms, and BI dashboards that give every level of your organization — from operators to executives — the right data, at the right time, in the right format.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    stats: [{ value: '10×', label: 'Faster Insight Generation' }, { value: '100%', label: 'Real-Time Data' }, { value: '0', label: 'Manual Reports' }],
  },
  buildLabel: 'What We Build', buildTitle: 'Analytics Solutions for Every', buildTitleGrad: 'Data Challenge',
  buildSubtitle: 'From raw data ingestion to executive dashboards, we build the data infrastructure and analytics tools that power data-driven organizations.',
  buildItems: [
    { icon: I('dashboard-layout'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'BI Dashboards', description: 'Custom business intelligence dashboards surfacing the KPIs that drive your specific business outcomes.', features: ['Custom KPI design', 'Cross-source data', 'Interactive drill-down'] },
    { icon: I('combo-chart'), color: '#10b981', bgColor: 'rgba(16,185,129,0.08)', title: 'Executive Dashboards', description: 'C-suite analytics views presenting company-wide health across revenue, operations, and customer metrics.', features: ['Real-time metrics', 'Department roll-up', 'Mobile-optimized'] },
    { icon: I('flash-on'), color: '#f59e0b', bgColor: 'rgba(245,158,11,0.08)', title: 'Real-Time Analytics', description: 'Stream processing platforms that analyze events as they occur — for live operations, fraud detection, and instant alerts.', features: ['Event streaming', 'Sub-second latency', 'Alert triggers'] },
    { icon: I('report-card'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Reporting Automation', description: 'Scheduled automated reports delivered to the right people in the right format — eliminating manual compilation.', features: ['Scheduled delivery', 'PDF & Excel output', 'Multi-recipient'] },
    { icon: I('database'), color: '#ec4899', bgColor: 'rgba(236,72,153,0.08)', title: 'Data Warehousing', description: 'Cloud data warehouses consolidating data from all your operational systems into a single queryable source of truth.', features: ['Multi-source ETL', 'Historical retention', 'Star schema design'] },
    { icon: I('user'), color: '#00b4d8', bgColor: 'rgba(0,180,216,0.08)', title: 'Customer Analytics', description: 'Customer behavior analysis, segmentation, cohort analysis, and LTV modeling built on your transactional data.', features: ['Cohort analysis', 'LTV modeling', 'Churn prediction'] },
    { icon: I('artificial-intelligence'), color: '#0066ff', bgColor: 'rgba(0,102,255,0.08)', title: 'Predictive Analytics', description: 'Machine learning models built on your historical data to forecast demand, predict churn, and optimize pricing.', features: ['Demand forecasting', 'Churn prediction', 'Price optimization'] },
    { icon: I('search'), color: '#6366f1', bgColor: 'rgba(99,102,241,0.08)', title: 'Self-Service Analytics', description: 'Business user query interfaces that let non-technical staff explore data in natural language without SQL.', features: ['Natural language query', 'No SQL required', 'Visual exploration'] },
  ],
  industryLabel: 'Industries We Serve', industryTitle: 'Analytics Platforms for Data-Rich Industries',
  industries: [
    { name: 'Finance & Banking', icon: I('bank-building'), color: '#0066ff', challenge: 'Finance teams spend excessive time compiling regulatory reports and risk dashboards from multiple systems.', solution: 'Automated financial reporting platforms with regulatory report generation and real-time risk dashboards.' },
    { name: 'E-Commerce & Retail', icon: I('online-store'), color: '#10b981', challenge: 'Retail businesses cannot see which products, channels, and campaigns actually drive profitable revenue.', solution: 'Commerce analytics platforms with multi-channel attribution, product profitability, and campaign ROI.' },
    { name: 'Healthcare', icon: I('caduceus'), color: '#f59e0b', challenge: 'Clinical and operational data live in EMR, billing, and scheduling systems with no unified analytics view.', solution: 'Healthcare analytics platforms unifying clinical, operational, and financial data for complete organizational insight.' },
    { name: 'Manufacturing', icon: I('factory'), color: '#6366f1', challenge: 'Production performance, quality defects, and machine downtime are tracked in disconnected systems.', solution: 'Manufacturing analytics platforms with OEE tracking, quality trend analysis, and downtime root cause dashboards.' },
    { name: 'Logistics', icon: I('in-transit'), color: '#ec4899', challenge: 'Logistics businesses cannot measure on-time delivery performance or driver efficiency across their fleet.', solution: 'Logistics analytics dashboards tracking SLA performance, route efficiency, and cost-per-delivery trends.' },
    { name: 'SaaS Companies', icon: I('rocket'), color: '#00b4d8', challenge: 'SaaS businesses track product usage, churn, and MRR across disconnected tools with no unified growth view.', solution: 'SaaS analytics platforms with product usage, customer health scoring, MRR expansion, and churn analytics.' },
    { name: 'Real Estate', icon: I('real-estate'), color: '#0066ff', challenge: 'Real estate firms lack visibility into which agents, properties, and markets generate the best returns.', solution: 'Real estate performance analytics covering agent productivity, market analysis, and portfolio ROI.' },
    { name: 'Education', icon: I('graduation-cap'), color: '#6366f1', challenge: 'Educators lack data on which students are at risk and which teaching approaches drive better outcomes.', solution: 'Educational analytics platforms tracking student performance, engagement, and early warning indicators.' },
  ],
  featureLabel: 'Platform Capabilities', featureTitle: 'From Raw Data to Confident Decisions',
  features: [
    { eyebrow: 'Data Pipeline', title: 'All Your Data in One Place, Always Fresh', description: 'We build ELT data pipelines that continuously extract data from your operational systems — CRM, ERP, database, APIs — and load it into a central data warehouse, keeping every dashboard current without manual exports.', bullets: ['Multi-source extraction (API, DB, files)', 'Incremental and real-time sync options', 'Data quality validation and alerts', 'Historical data backfill'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', imageAlt: 'Data pipeline and ETL architecture', reverse: false },
    { eyebrow: 'Executive Dashboards', title: 'Company Health in a Single View', description: 'Custom executive dashboards designed for your specific KPIs — revenue, pipeline, operations, customer satisfaction — surfaced in a morning-brief format that gives leadership instant situational awareness without a data team.', bullets: ['Custom KPI framework design', 'Department-level drill-down', 'Target vs. actual tracking', 'Mobile-optimized for any device'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', imageAlt: 'Executive business intelligence dashboard', reverse: true },
    { eyebrow: 'Predictive Models', title: 'Know What Will Happen Before It Does', description: 'Machine learning forecasting models built on your historical data give you demand forecasts, churn predictions, and revenue projections you can plan operations around — not gut feel or spreadsheet extrapolation.', bullets: ['Demand and sales forecasting', 'Customer churn prediction', 'Inventory optimization models', 'Model accuracy monitoring'], image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80', imageAlt: 'Predictive analytics and forecasting', reverse: false },
    { eyebrow: 'Self-Service Analytics', title: 'Your Business Team Queries Data in Plain English', description: 'Natural language analytics interfaces let any business user ask data questions and get instant visualizations — without waiting for a data team to write queries. Democratize data without compromising governance.', bullets: ['Natural language to SQL generation', 'Visual chart and table output', 'Saved reports and dashboards', 'Row-level data access control'], image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80', imageAlt: 'Self-service business analytics', reverse: true },
  ],
  techGroups: [
    { category: 'Data Platform', color: '#0066ff', items: [{ name: 'PostgreSQL', icon: I('postgreesql') }, { name: 'Snowflake', icon: I('database') }, { name: 'BigQuery', icon: I('google-cloud') }] },
    { category: 'ETL & Pipeline', color: '#10b981', items: [{ name: 'Python', icon: I('python') }, { name: 'Apache Kafka', icon: I('api') }, { name: 'dbt', icon: I('settings') }] },
    { category: 'Visualization', color: '#f59e0b', items: [{ name: 'React', icon: I('react-native') }, { name: 'D3.js', icon: I('combo-chart') }, { name: 'Recharts', icon: I('dashboard-layout') }] },
    { category: 'ML & Cloud', color: '#6366f1', items: [{ name: 'Python ML', icon: I('artificial-intelligence') }, { name: 'AWS', icon: I('amazon-web-services') }, { name: 'GCP', icon: I('google-cloud') }] },
  ],
  benefits: [
    { metric: '10×', label: 'Faster Insight Generation', description: 'Automated pipelines deliver insights in seconds vs. days of manual analysis.', icon: I('flash-on'), color: '#0066ff' },
    { metric: '0', label: 'Manual Monthly Reports', description: 'Automated scheduling replaces all manually compiled reporting cycles.', icon: I('report-card'), color: '#10b981' },
    { metric: '100%', label: 'Real-Time Data Freshness', description: 'Continuous pipeline sync eliminates stale data in decision-making.', icon: I('combo-chart'), color: '#f59e0b' },
    { metric: '40%', label: 'Better Forecast Accuracy', description: 'ML forecasting models outperform manual projections by significant margins.', icon: I('artificial-intelligence'), color: '#6366f1' },
    { metric: '5×', label: 'More Teams Using Data', description: 'Self-service tools democratize analytics beyond the data team.', icon: I('conference-call'), color: '#ec4899' },
    { metric: '30%', label: 'Reduction in Poor Decisions', description: 'Data-backed decisions measurably reduce costly mistakes and misjudgments.', icon: I('checkmark'), color: '#00b4d8' },
  ],
  faqs: [
    { q: 'What is a data warehouse and do we need one?', a: 'A data warehouse is a central repository consolidating data from all your operational systems — CRM, ERP, database, marketing tools — into one queryable source. You need one when your data lives in multiple systems and you need cross-system analytics.' },
    { q: 'Can you connect to our existing databases and APIs?', a: 'Yes. We connect to any database (PostgreSQL, MySQL, MongoDB, SQL Server), any REST or GraphQL API, and common SaaS platforms (Salesforce, HubSpot, Stripe, Google Analytics) to consolidate data into your warehouse.' },
    { q: 'What visualization tools do you use?', a: 'We build custom React-based dashboards using D3.js and Recharts for full design control. For teams needing business-user self-service, we also implement and configure Metabase, Apache Superset, or Looker.' },
    { q: 'How do you keep dashboards up to date?', a: 'We build ELT pipelines with configurable refresh frequencies — from real-time streaming to hourly or daily batch updates. Dashboard data freshness is displayed to users and monitored with automated alerts on pipeline failures.' },
    { q: 'Can non-technical users create their own reports?', a: 'Yes. We implement self-service analytics tools where business users can query data in natural language, create visualizations, and save personal dashboards — without SQL knowledge or data team involvement.' },
    { q: 'Can you build predictive models on our data?', a: 'Yes. We build supervised ML models on your historical data for demand forecasting, churn prediction, lead scoring, and price optimization. Models are deployed as APIs your dashboards and applications can query.' },
    { q: 'How do you handle sensitive data in analytics systems?', a: 'We implement column-level and row-level data access control, data masking for sensitive fields (PII, financial data), and audit logging of all query activity — ensuring compliance with GDPR and industry regulations.' },
    { q: 'What is the difference between BI and real-time analytics?', a: 'BI dashboards analyze historical data — what happened. Real-time analytics processes events as they occur — what is happening right now. Most businesses need both. We architect systems supporting both patterns from a shared data layer.' },
    { q: 'How long does an analytics platform take to build?', a: 'A core BI dashboard with data pipeline takes 6–10 weeks. A full analytics platform with custom warehouse, multiple source integrations, and predictive models takes 3–6 months depending on data complexity.' },
    { q: 'Can you improve our existing analytics setup?', a: 'Yes. We frequently engage to audit, optimize, and extend existing analytics environments — improving data pipeline reliability, dashboard performance, data model design, and adding new data sources or features.' },
  ],
  ctaTitle: 'Ready to Build Your Analytics Platform?',
  ctaDescription: 'Tell us where your data lives, what decisions you need it to drive, and we will design the right data architecture for your business.',
};

/* ═══════════════════════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════════════════════ */
export const SERVICE_PAGES: ServicePage[] = [
  webApplications, mobileApplications, customSaas, crmErp,
  realEstateSoftware, gymManagement, aiSolutions, devopsCloud,
  uiUxDesign, ecommerceSolutions, businessAutomation, dataAnalytics,
];

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find(p => p.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_PAGES.map(p => p.slug);
}
