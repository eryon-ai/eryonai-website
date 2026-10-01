import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { projects } from "@/lib/work";
import { articles } from "@/lib/insights";
import { techGroups } from "@/lib/tech";
import { credentials, insightCategories, processSteps, stats } from "@/lib/site";

// English source strings. Other languages implement the same `Messages` shape.
// "\n" in a title marks a line break on desktop.
export const en = {
  ui: {
    nav: { whatWeDo: "What We Do", industries: "Industries", work: "Our Work", process: "How We Work", insights: "Insights", about: "About", careers: "Careers", contact: "Contact Us", start: "Start a Project", search: "Search", openMenu: "Open menu", closeMenu: "Close menu", language: "Language" },
    header: {
      newGuide: "New guide",
      banner: "Software engineering from New Delhi, for teams in India and abroad",
      mega: {
        services: { title: "What we do", text: "Software engineering and digital product services, from first architecture to long-term support.", cta: "All services" },
        industries: { title: "Industries", text: "Systems designed around the operational realities of each sector we work in.", cta: "All industries" },
        insights: { title: "Insights", text: "Practical writing on architecture, product engineering and business systems.", cta: "All insights" },
      },
      megaCard: "Have a system that needs building or fixing?",
      latest: "Latest",
      allInsights: "All Insights",
      caseStudies: "Case Studies",
      mobileAll: { services: "All services", industries: "All industries", insights: "All insights" },
    },
    footer: {
      blurb: "Custom software, enterprise applications and digital products — designed and engineered in New Delhi, India.",
      email: "Email", phone: "Phone", india: "India", global: "Global", globalText: "Remote delivery for clients outside India",
      services: "Services", industries: "Industries", company: "Company", follow: "Follow",
      links: { work: "Our Work", process: "How We Work", technology: "Technology", insights: "Insights", about: "About", careers: "Careers", contact: "Contact" },
      newsletterTitle: "Engineering notes, monthly.",
      newsletterText: "Architecture, product and business-systems writing from our team.",
      statement: "Software built for the way\nyour business works.",
      rights: "MSME registered. All rights reserved.",
      legal: { privacy: "Privacy", terms: "Terms", cookie: "Cookie Policy", accessibility: "Accessibility", sitemap: "Sitemap" },
      cookieSettings: "Cookie settings",
    },
    common: {
      home: "Home",
      start: "Start a Project",
      viewWork: "View Our Work",
      readCaseStudy: "Read the case study",
      challenge: "Challenge", solution: "Solution", outcome: "Outcome", technology: "Technology",
      minRead: "min read",
      featured: "Featured",
      faqs: "FAQs",
      all: "All",
      result: "result", results: "results",
      clearFilters: "Clear filters",
      noMatchTitle: "Nothing matches these filters yet.",
      noMatchText: "Try removing a filter — or tell us about your project and we'll share relevant experience directly.",
      filterBy: "Filter by",
      lastUpdated: "Last updated",
      englishOnly: "English",
    },
    cta: { title: "Have a product\nworth building?", text: "Let's turn the idea into a system your business can actually use." },
    form: { optional: "(optional)", select: "Select…", sending: "Sending…", reply: "We reply within 24 hours.", error: "Something went wrong. Please try again.", network: "We couldn't reach the server. Check your connection and try again.", honeypot: "Leave this empty" },
    newsletter: { email: "Work email", subscribe: "Subscribe", subscribing: "Subscribing…", done: "Thanks — you're subscribed. The next issue will arrive in your inbox.", note: "One email a month. Unsubscribe any time.", error: "Something went wrong. Please try again.", network: "We couldn't reach the server. Please try again." },
    cookie: { region: "Cookie consent", text: "We use essential cookies to run this site and, with your permission, Google Analytics and Google Ads cookies to measure visits and enquiries.", policy: "Cookie policy", accept: "Accept", decline: "Decline" },
  },

  meta: {
    home: { title: "Eryon — Custom Software Development & Digital Product Engineering", description: "Custom software, enterprise web apps, mobile apps, SaaS and CRM/ERP systems — designed and engineered by Eryon in New Delhi for businesses in India and worldwide." },
    about: { title: "About Eryon — Software Engineering Company in New Delhi", description: "Eryon is a software engineering and digital product company in New Delhi, building custom software and business systems for clients in India and abroad." },
    services: { title: "Software Development Services", description: "Custom software, web and mobile apps, SaaS, CRM & ERP, e-commerce, automation, cloud & DevOps, data, UI/UX, security and modernization services from Eryon." },
    process: { title: "How We Work — Our Software Delivery Process", description: "Eryon's eight-stage delivery process — discovery to optimization — with clear objectives, deliverables and client involvement at every step." },
    technology: { title: "Technology — Our Engineering Stack", description: "The frontend, backend, mobile, data, cloud, DevOps and security technologies Eryon uses — linked to the delivered projects where each was used." },
    work: { title: "Our Work — Case Studies", description: "Case studies of CRMs, ERPs, HR systems, SaaS, e-commerce and mobile apps Eryon has built — with the challenge, architecture and outcome of each." },
    contact: { title: "Contact Us — Start a Software Project", description: "Tell Eryon about your software project. We reply within 24 hours. Email connect@eryonai.com or call +91 78278 86571. Based in New Delhi, India." },
    contactSuccess: { title: "Message received", description: "Thank you for contacting Eryon." },
    insights: { title: "Insights — Architecture, Product & Business Technology", description: "Practical writing from Eryon's engineers on software architecture, SaaS, CRM and ERP, cloud, security, modernization and product engineering." },
    privacy: { title: "Privacy Policy", description: "How Eryon collects, uses and protects personal data submitted through this website." },
    terms: { title: "Terms & Conditions", description: "Terms governing use of the Eryon website." },
    cookie: { title: "Cookie Policy", description: "The cookies and browser storage used by the Eryon website." },
  },

  home: {
    eyebrow: "Software Engineering & Digital Products",
    heroBefore: "We build software",
    heroEm: "businesses",
    heroAfter: "can depend on.",
    heroText: "Eryon designs and engineers custom digital products, enterprise applications and business systems built around real operational needs — from first architecture to long-term scale.",
    heroAlts: ["Operations dashboard with sales overview, orders by status and recent orders", "Timetable management screen from a school ERP", "Mobile store administration app showing revenue and recent orders"],
    trust: ["Software Engineering", "Product Development", "Enterprise Systems", "Cloud & Infrastructure"],
    numbers: "By the numbers · since 2019",
    credentialsLabel: "Credentials",
    build: {
      eyebrow: "What We Build", title: "Systems for the work that keeps your business running.", intro: "The screenshots are from systems we have designed and engineered.", cta: "Explore all services",
      cards: [
        { category: "Custom Software", title: "Operational systems", text: "Internal platforms that encode how your business runs — approvals, scheduling, projects and payroll." },
        { category: "Enterprise Web", title: "Web platforms and portals", text: "Multi-role dashboards and portals for staff, partners and customers." },
        { category: "Mobile", title: "Mobile products", text: "iOS and Android apps connected to the systems behind them." },
        { category: "SaaS", title: "SaaS platforms", text: "Multi-tenant products with billing, onboarding and room to grow." },
        { category: "CRM & ERP", title: "CRM and ERP systems", text: "One system of record for sales, operations, people and money." },
        { category: "E-commerce", title: "Commerce platforms", text: "Fast storefronts with the order operations to support them." },
      ],
      previewAlt: "interface preview",
    },
    around: {
      eyebrow: "Built Around Your Business", title: "We learn the operation before we write the software.",
      cols: [
        { k: "Understand", t: "How work actually moves", d: "We sit with the people who do the work, map the process as it runs today and find where time, money and data are lost." },
        { k: "Design", t: "A system that fits", d: "Roles, workflows and a data model that reflect your business — designed and tested with your team before a line of production code." },
        { k: "Engineer", t: "Built to last", d: "Clean architecture, automated tests on critical paths, security in the data model and infrastructure you own." },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities", title: "Engineering across the whole lifecycle.", intro: "One team for architecture, product, infrastructure and support — so nothing is lost between hand-offs.",
      items: [
        { title: "Product Engineering", text: "From first release to a product that serves many customers reliably." },
        { title: "Application Development", text: "Web and mobile applications built for daily operational use." },
        { title: "Cloud Infrastructure", text: "Environments, pipelines and monitoring that make releases routine." },
        { title: "Data Platforms", text: "Pipelines and reporting you can trust." },
        { title: "System Integration", text: "APIs and events connecting the tools you already run." },
        { title: "Automation", text: "Rule-based work taken off your team's desk." },
        { title: "Security", text: "Access control and hardening designed in, not bolted on." },
        { title: "UI/UX", text: "Interfaces designed around real tasks, with the engineers who build them." },
      ],
    },
    work: { eyebrow: "Selected Work", title: "What we've built.", cta: "See all case studies", intro: "Three systems from manufacturing, healthcare and education — the problem, the system we built and what changed for the business." },
    process: { eyebrow: "How We Work", title: "Six stages, each with something you can review.", cta: "See the full process" },
    industries: { eyebrow: "Industries", title: "Built for the realities of your sector.", cta: "All industries" },
    tech: { eyebrow: "Technology Ecosystem", title: "Proven tools, chosen for the problem.", text: "Part of our team's working stack — see the technology page for where each has been used in delivered work.", cta: "Our technology" },
    why: {
      eyebrow: "Why Eryon", title: "Reasons clients trust us with core systems.",
      items: [
        { title: "Engineering depth", text: "Event-driven services, row-level security, multi-tenant data models — we make architecture decisions deliberately and write them down." },
        { title: "Business understanding", text: "We start with how work moves through your organisation, not with a feature list. The software follows the operation." },
        { title: "Transparent delivery", text: "Working software demonstrated every week, a written scope, and estimates with their assumptions attached." },
        { title: "Long-term partnership", text: "You own the code and infrastructure. We stay for support and the improvements real usage reveals — or hand over cleanly." },
      ],
    },
    insights: { eyebrow: "Insights", title: "Notes from the engineering floor.", cta: "All insights" },
    faq: {
      title: "Questions businesses ask us first.",
      items: [
        { q: "What does Eryon build?", a: "Custom software for businesses: web applications and portals, mobile apps, SaaS products, CRM and ERP systems, e-commerce platforms, business automation, data dashboards and the cloud infrastructure they run on." },
        { q: "How much does custom software development cost?", a: "It depends on the number of users and roles, workflows, integrations and design depth. We start with a short discovery and then give a written estimate for a clearly scoped first release, so the budget is agreed before development begins." },
        { q: "How long does it take to build a web or mobile application?", a: "A focused first release usually takes a few months. We plan releases so your team uses part of the system early, and you see working software every week." },
        { q: "Which countries do you work with?", a: "We are based in New Delhi and work with clients in India, the USA, the UK, the UAE, Australia and Canada, delivering remotely with agreed working-hour overlap." },
        { q: "Which technologies do you use?", a: "Mainly React, Next.js and TypeScript on the front end; Java Spring Boot, Node.js and Python on the back end; PostgreSQL, MongoDB and Redis for data; React Native and Flutter for mobile; and AWS, Azure or Google Cloud with Docker and Kubernetes." },
        { q: "Do you provide support after launch?", a: "Yes. Every release includes a support period, and most clients continue with an agreement for monitoring, fixes and planned improvements." },
      ],
    },
  },

  about: {
    crumb: "About", eyebrow: "About Eryon", title: "Engineering with purpose.",
    intro: "Eryon is a software engineering and digital product company based in New Delhi, building software for businesses since 2019. We design, build and support the systems businesses run on — CRMs, ERPs, operational platforms, customer portals, mobile apps and SaaS products — for clients in India and abroad.",
    who: {
      eyebrow: "Who We Are", title: "A team of engineers and designers who like hard operational problems.",
      p1: "Our work tends to sit in the middle of a business: the system that holds the inventory, the schedule, the pipeline or the ledger. That's where software has the most effect on how a company actually runs — and where it has to be dependable.",
      p2: "Since 2019 we have delivered more than 150 projects for over 80 clients across India, the USA, the UK, the UAE, Australia and Canada — in manufacturing, healthcare, education, real estate, retail, logistics and professional services — using mainstream technology your future team can maintain.",
      alts: ["CRM dashboard built by Eryon for a stone distributor", "Hospital HR dashboard built by Eryon"],
    },
    numbers: "Eryon in numbers",
    mission: { eyebrow: "Our Mission", text: "Make dependable, well-engineered software accessible to every business — from a first product to a core enterprise system." },
    vision: { eyebrow: "Our Vision", text: "To be the engineering partner businesses trust with the systems they run on, for as long as those systems matter." },
    beliefs: {
      eyebrow: "What We Believe", title: "Four principles behind every decision.",
      items: [
        { t: "Software should fit the business", d: "Not the other way round. We learn the operation first, then design the system around it." },
        { t: "Clarity beats cleverness", d: "Boring, well-understood technology and readable code outlive fashionable choices." },
        { t: "Say what you'll do, then do it", d: "Written scope, visible progress every week and early warning when something changes." },
        { t: "Ownership belongs to the client", d: "Your code, your accounts, your documentation — from the first day." },
      ],
    },
    how: { eyebrow: "How We Work", title: "One accountable team from first workshop to production.", text: "A lead engineer owns architecture and delivery for each engagement, working with designers and engineers who stay on the project. You see working software every week and review every significant decision in writing.", cta: "Our delivery process" },
    culture: {
      eyebrow: "Our Engineering Culture", title: "Habits that make software dependable.",
      items: [
        { t: "Code review on every change", d: "No code reaches the main branch without a second engineer reading it." },
        { t: "Tests where it matters", d: "Automated tests concentrate on the paths that carry money, permissions and data." },
        { t: "Written architecture", d: "Significant decisions are documented with the alternatives we considered." },
        { t: "Engineers meet users", d: "The people building the system talk to the people who will use it." },
        { t: "Learning time", d: "Engineers share what they learn through internal reviews and write-ups like our Insights." },
        { t: "Sustainable pace", d: "Tired teams write bugs. We plan work to be delivered at a pace we can keep." },
      ],
    },
    leadership: { eyebrow: "Our Leadership", title: "Senior people stay close to the work.", lead: "Leadership at Eryon is hands-on. The people responsible for the company are the people reviewing architecture, joining discovery workshops and answering when a client calls.", text: "Every engagement has a named lead engineer who is accountable for technical decisions and delivery, and a direct line to company leadership if anything needs escalating." },
    capabilities: { eyebrow: "Our Capabilities", title: "Twelve services, one team.", cta: "All services" },
    trust: { eyebrow: "Certifications & Trust", title: "Recognised standards behind our delivery." },
    standards: {
      eyebrow: "Our Standards", title: "Baselines we hold ourselves to.",
      items: ["WCAG 2.2 AA as the accessibility baseline for interfaces we design", "OWASP Top 10 as the baseline for application security reviews", "Infrastructure as code for environments we manage", "Separate staging and production environments", "Secrets kept out of source code", "Documentation delivered with every system"],
    },
    locations: { eyebrow: "Our Locations", title: "Based in India. Working globally.", hq: "India — Headquarters", hqPlace: "New Delhi, India", hqText: "Engineering, design and delivery.", global: "Global", globalPlace: "Remote delivery", globalText: "For clients outside India, with working-hour overlap agreed per engagement." },
    cta: "Let's build something\nuseful together.",
  },

  services: {
    crumb: "Services", eyebrow: "What We Do", title: "Technology that moves\nthe business forward.",
    intro: "Twelve services, one team. We design, engineer and support the systems businesses run on — from a first release to the platform it grows into. Each service below links to a detailed page with process, technology, related work and answers to common questions.",
    index: "Service index", explore: "Explore", build: "What we build", deliverables: "Deliverables", useCases: "Typical use cases", technology: "Technology", industries: "Related industries", work: "Related case studies",
    models: {
      eyebrow: "Engagement Models", title: "Three ways to work with us.",
      items: [
        { title: "Project delivery", text: "A defined scope, a release plan and one accountable team from discovery to launch." },
        { title: "Dedicated engineering team", text: "Engineers, a lead and a designer who work as an extension of your product organisation." },
        { title: "Support and evolution", text: "Monitoring, fixes and planned improvements for systems already in production." },
      ],
    },
    cta: { title: "Not sure which service fits?", text: "Describe the problem. We'll tell you what we would build — or whether you need to build anything at all." },
    detailsInEnglish: "Detailed service pages are in English.",
  },

  process: {
    crumb: "How We Work", eyebrow: "How We Work", title: "A delivery process\nyou can see into.",
    intro: "Eight stages from first conversation to a system that keeps improving. Each stage has a clear objective, a set of activities, documents you can review and a defined role for your team — so you always know where the project stands and what comes next.",
    labels: { activities: "Activities", deliverables: "Deliverables", involvement: "Your involvement", output: "Output" },
    stages: [
      { id: "discovery", title: "Discovery", objective: "Understand how the business actually works before deciding what to build.", activities: ["Stakeholder and user interviews", "Observation of the current process", "Review of existing systems, data and integrations", "Identification of constraints: budget, timeline, compliance"], deliverables: ["Current-state process map", "Problem statement and goals", "Integration and data inventory"], client: "Access to the people who do the work, not only those who manage it. Typically a few workshops.", output: "A shared, written understanding of the problem." },
      { id: "definition", title: "Product Definition", objective: "Decide what the first release must do — and what it deliberately won't.", activities: ["User roles and permissions", "Core workflows and edge cases", "Release scoping and prioritisation", "Non-functional requirements"], deliverables: ["Scope document", "Release plan", "Estimate with written assumptions"], client: "Decisions on priorities and trade-offs. A single product owner on your side helps.", output: "An agreed scope and plan you can hold us to." },
      { id: "architecture", title: "Architecture", objective: "Make the expensive-to-change decisions deliberately.", activities: ["Data model design", "Service and module boundaries", "Hosting and environment plan", "Security and access model"], deliverables: ["Architecture document with trade-offs", "Data model", "Infrastructure plan"], client: "Review with your technical stakeholders, if you have them. We explain choices in plain language if you don't.", output: "A reviewed technical foundation." },
      { id: "ux-ui", title: "UX / UI", objective: "Design interfaces around real tasks and test them before building.", activities: ["User flows and wireframes", "Clickable prototypes", "Visual design and design system", "Usability review with real users"], deliverables: ["Flows and wireframes", "High-fidelity designs", "Prototype", "Design system components"], client: "Feedback sessions and access to a few representative users.", output: "Validated designs ready for engineering." },
      { id: "development", title: "Development", objective: "Build working software in short cycles you can see and steer.", activities: ["Sprint planning", "Feature development across the stack", "Code review on every change", "Automated tests on critical paths"], deliverables: ["Working software on staging every week", "Source code in your repository", "Sprint notes"], client: "Weekly demo attendance and prompt answers to product questions.", output: "Software that grows visibly, week by week." },
      { id: "testing", title: "Testing", objective: "Prove the system does what it must before real users depend on it.", activities: ["Functional and regression testing", "Role-by-role acceptance testing", "Performance checks", "Security review"], deliverables: ["Test plan and results", "Acceptance sign-off", "Security findings and fixes"], client: "Acceptance testing by the people who will use the system.", output: "A release candidate your team has accepted." },
      { id: "deployment", title: "Deployment", objective: "Go live safely, with a way back if something goes wrong.", activities: ["Production environment setup", "Data migration and verification", "Staged rollout", "User training"], deliverables: ["Production system", "Migration verification report", "Runbooks", "Training material"], client: "Go-live decision, training attendance and a communication plan for your users.", output: "A live system with people trained to use it." },
      { id: "optimization", title: "Optimization", objective: "Improve the system based on how it is actually used.", activities: ["Monitoring and incident response", "Usage review", "Performance and cost tuning", "Planned improvements"], deliverables: ["Support reports", "Improvement backlog", "Regular releases"], client: "Feedback from users and periodic priority reviews.", output: "A system that gets better after launch, not worse." },
    ],
    constant: {
      eyebrow: "What Stays Constant", title: "Principles that apply at every stage.",
      items: [
        { t: "Written decisions", d: "Scope, architecture and trade-offs are documented, not just discussed." },
        { t: "Visible progress", d: "Working software every week, on an environment you can use." },
        { t: "Your ownership", d: "Code, designs, accounts and documentation belong to you from day one." },
        { t: "No surprises", d: "Changes in scope, timeline or cost are raised early, with options." },
      ],
    },
    faq: {
      title: "Questions about the process.",
      items: [
        { q: "How long does each stage take?", a: "It depends on the size of the system. Discovery and definition are usually a matter of weeks; development runs in weekly cycles until the first release is ready. We give you a plan with dates after product definition." },
        { q: "Can we skip discovery if we already have requirements?", a: "We'll review what you have and shorten discovery accordingly. We rarely skip it entirely — a short review usually finds assumptions worth checking." },
        { q: "What if priorities change mid-project?", a: "They often do. Weekly demos and a visible backlog make it straightforward to re-prioritise; we'll show you the effect on scope and timeline before you decide." },
        { q: "Do we need a technical person on our side?", a: "No. It helps to have one decision-maker who knows the business well. We explain technical decisions in plain language." },
      ],
    },
    cta: { title: "Start with\na conversation.", text: "The first step is a call about your operation and what isn't working. No commitment, no sales script." },
  },

  technology: {
    crumb: "Technology", eyebrow: "Technology", title: "Mainstream tools,\nused deliberately.",
    intro: "We choose technology your future team can hire for and maintain. Where a technology has been used in a published case study, we link to it — so you can see it in context rather than take our word for it.",
    categories: "Technology categories", usedIn: "Used in",
    cta: { title: "Have an existing\nstack?", text: "We work inside established codebases as often as we start new ones. Tell us what you run today." },
  },

  work: {
    crumb: "Our Work", eyebrow: "Our Work", title: "Systems in production,\nexplained honestly.",
    intro: "Selected work from 150+ projects delivered since 2019. Each case study covers the problem, the architecture, the product and what changed for the business — with the decisions and trade-offs behind it.",
    all: "All case studies",
    filters: { industry: "Industry", service: "Service", platform: "Platform", business: "Business type" },
    detailsInEnglish: "Full case studies are in English.",
  },

  contact: {
    crumb: "Contact", eyebrow: "Contact", title: "Let's build something useful.",
    intro: "Tell us about the system you need — what it should do, who will use it and what isn't working today. The more context you share, the more useful our reply will be.",
    formTitle: "Project details", required: "Fields marked * are required.", submit: "Send enquiry",
    fields: { name: "Name", email: "Work email", company: "Company", phone: "Phone", projectType: "Project type", budget: "Estimated budget", timeline: "Timeline", message: "Message", messageHint: "What should the system do, who will use it, and what's happening today?" },
    projectExtra: ["Dedicated engineering team", "Something else"],
    budgets: ["Under US$2,000 (≈ ₹1.7 lakh)", "US$2,000–5,000 (≈ ₹1.7–4 lakh)", "US$5,000–15,000 (≈ ₹4–12 lakh)", "US$15,000–50,000 (≈ ₹12–40 lakh)", "US$50,000–150,000 (≈ ₹40 lakh–1.25 crore)", "Above US$150,000", "Let's discuss"],
    timelines: ["As soon as possible", "Within 3 months", "3–6 months", "Just exploring"],
    other: { title: "Other ways to reach us", email: "Email", phone: "Phone", location: "Location", locationValue: "New Delhi, India", remote: "Remote delivery for clients worldwide.", credentials: "Credentials", nda: "NDA on request" },
    next: {
      eyebrow: "What Happens Next", title: "After you press send.",
      items: [
        { t: "We read it properly", d: "A person on our team reads your message — not an automated sequence." },
        { t: "We reply within 24 hours", d: "Usually with a few questions to understand the problem better." },
        { t: "A discovery call", d: "A conversation about your operation, constraints and what success looks like." },
        { t: "A tailored proposal", d: "Scope, approach and estimate in writing — or an honest view that you may not need custom software." },
      ],
    },
    faq: {
      title: "Before you write.",
      items: [
        { q: "Is the first conversation free?", a: "Yes. The first call is to understand your problem and decide together whether we're a good fit." },
        { q: "Do you sign NDAs?", a: "Yes. If you'd like one before sharing details, mention it in your message and we'll send one or sign yours." },
        { q: "Do you work with clients outside India?", a: "Yes. We deliver remotely and agree working-hour overlap and communication routines at the start of each engagement." },
        { q: "What if I don't know my budget yet?", a: "That's common. Choose 'Let's discuss' — part of the first conversation is helping you understand what different scopes would cost." },
      ],
    },
  },

  contactSuccess: { eyebrow: "Message received", title: "Thank you. We'll be in touch.", textBefore: "A member of our engineering team will reply within 24 hours, usually with a few questions. If it's urgent, call us on", work: "Browse our work", process: "How we work" },

  insights: {
    crumb: "Insights", eyebrow: "Insights", title: "Engineering notes for\npeople who run businesses.",
    intro: "Architecture, product decisions and the practical trade-offs behind business software — written by the people who build it.",
    category: "Category",
    newsletterTitle: "Get new articles by email", newsletterText: "A short monthly note with our latest writing on architecture, SaaS and business systems.",
  },

  article: { author: "Author", published: "Published", updated: "Updated", readingTime: "Reading time", min: "min", contents: "Contents", takeaways: "Key takeaways", relatedService: "Related service", newsletter: "Enjoyed this? Get the next one by email.", related: "Related articles", authorName: "Eryon Engineering" },

  legal: {
    privacy: {
      title: "Privacy Policy",
      intro: "This policy explains what personal data ERYON AI Software Solutions (\"Eryon\", \"we\") collects through this website, why, and the choices you have. It is written to be consistent with India's Digital Personal Data Protection Act, 2023.",
      sections: [
        { h: "What we collect", p: ["When you submit the contact form: your name, work email, company, phone number, project details, budget and timeline if you choose to share them.", "When you subscribe to our newsletter: your email address.", "When you apply for a role: your name, contact details, links you provide, your CV and any note you include.", "Our hosting provider records standard server logs (such as IP address, browser and time of request) for security and reliability.", "If you accept cookies, Google Analytics and Google Ads collect information about your visit (pages viewed, device, approximate location, and whether you submitted an enquiry) so we can measure our website and advertising. These tools are not loaded unless you accept."] },
        { h: "Why we use it", p: ["To reply to your enquiry and discuss a potential engagement.", "To assess job applications and contact applicants.", "To keep the website secure, including rate-limiting and preventing spam.", "With your consent, to measure website traffic and the performance of our advertising."] },
        { h: "Who we share it with", p: ["Form submissions are delivered to our team by email through our email provider.", "With your consent, Google (Google Analytics and Google Ads) processes visit and conversion data under its own privacy policy.", "Our forms use Google reCAPTCHA to block spam; it processes device and interaction data under Google's privacy policy.", "Form submissions are also stored in a private Google Sheet used by our team.", "We do not sell personal data. We may disclose information where required by law."] },
        { h: "How long we keep it", p: ["Enquiries are kept for as long as needed to respond and, if we work together, for the duration of the relationship — typically no longer than 24 months after our last contact unless the law requires otherwise.", "Newsletter addresses are kept until you unsubscribe.", "Job applications are kept for up to 12 months so we can consider you for future roles, unless you ask us to delete them sooner."] },
        { h: "Your rights", p: ["You can ask to access, correct or delete the personal data we hold about you, or withdraw consent, by writing to connect@eryonai.com. We will respond within a reasonable time."] },
        { h: "Security", p: ["Data is transmitted over encrypted connections (HTTPS). Access to enquiries and applications is limited to the people who need it."] },
        { h: "Changes", p: ["We may update this policy. The date at the top shows when it last changed."] },
        { h: "Contact", p: ["ERYON AI Software Solutions, New Delhi, Delhi 110001, India.", "Email connect@eryonai.com · Phone +91 78278 86571"] },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      intro: "These terms govern your use of this website, operated by ERYON AI Software Solutions. Client engagements are governed by separate written agreements.",
      sections: [
        { h: "Use of the website", p: ["You may browse and share content from this website for lawful purposes. You may not attempt to disrupt the website, gain unauthorised access to it, or submit automated or abusive requests."] },
        { h: "Content", p: ["Content on this website is provided for general information. It is not professional advice for your specific situation. Case studies describe past work; screenshots and descriptions may be simplified or anonymised to protect client confidentiality."] },
        { h: "Intellectual property", p: ["Text, design and code of this website belong to ERYON AI Software Solutions unless otherwise stated. Product names and trademarks mentioned belong to their respective owners."] },
        { h: "Enquiries and proposals", p: ["Submitting an enquiry does not create a contract. Any engagement begins only when both parties sign a written agreement."] },
        { h: "External links", p: ["Links to third-party websites, including live project builds, are provided for convenience. We are not responsible for their content or availability."] },
        { h: "Liability", p: ["To the extent permitted by law, we are not liable for losses arising from use of this website or reliance on its content."] },
        { h: "Governing law", p: ["These terms are governed by the laws of India, and the courts of New Delhi have jurisdiction."] },
        { h: "Contact", p: ["Questions about these terms: connect@eryonai.com."] },
      ],
    },
    cookie: {
      title: "Cookie Policy",
      intro: "This website uses a small number of essential cookies, and — only if you accept — Google Analytics and Google Ads cookies.",
      sections: [
        { h: "Essential storage", p: ["A local-storage entry (eryon-consent) remembers whether you accepted or declined cookies, so we don't ask on every visit.", "Our hosting infrastructure may set strictly necessary technical cookies for security and load balancing.", "When you start filling in one of our forms, Google reCAPTCHA loads to protect it from spam. It is only used on forms and only for security."] },
        { h: "Analytics and advertising (only with consent)", p: ["Google Analytics helps us understand which pages are useful. Google Ads measures whether visitors from our adverts go on to send an enquiry.", "These scripts are not loaded until you press Accept. If you decline, they are never loaded."] },
        { h: "Changing your choice", p: ["Use Cookie settings in the website footer at any time to accept or decline. You can also clear cookies and local storage in your browser."] },
        { h: "What we don't do", p: ["We do not sell data collected through cookies, and we do not load any tracking scripts before you choose."] },
      ],
    },
  },

  // Content from the data files, keyed so translations can overlay it.
  data: {
    services: Object.fromEntries(services.map((s) => [s.slug, {
      title: s.title, nav: s.nav, value: s.value, summary: s.summary,
      offerings: s.offerings.map((o) => o.title), deliverables: [...s.deliverables], useCases: s.useCases.map((u) => u.title),
    }])) as Record<string, { title: string; nav: string; value: string; summary: string; offerings: string[]; deliverables: string[]; useCases: string[] }>,
    industries: Object.fromEntries(industries.map((i) => [i.slug, { name: i.name, challenge: i.challenge }])) as Record<string, { name: string; challenge: string }>,
    projects: Object.fromEntries(projects.map((p) => [p.slug, { industryLabel: p.industryLabel, kind: p.kind, outcome: p.outcome, challenge: p.challenge, solution: p.solution }])) as Record<string, { industryLabel: string; kind: string; outcome: string; challenge: string; solution: string }>,
    articles: Object.fromEntries(articles.map((a) => [a.slug, {
      title: a.title, subtitle: a.subtitle, summary: a.summary, imageAlt: a.imageAlt, takeaways: [...a.takeaways],
      sections: a.sections.map((s) => ({ h: s.h, p: [...s.p], ...(s.list ? { list: [...s.list] } : {}) })),
    }])) as Record<string, { title: string; subtitle: string; summary: string; imageAlt: string; takeaways: string[]; sections: { h: string; p: string[]; list?: string[] }[] }>,
    categories: Object.fromEntries(insightCategories.map((c) => [c.slug, c.label])) as Record<string, string>,
    processSteps: processSteps.map((s) => ({ title: s.title as string, text: s.text as string })),
    stats: stats.map((s) => s.label as string),
    credentials: credentials.map((c) => ({ title: c.title as string, text: c.text as string })),
    techGroups: Object.fromEntries(techGroups.map((g) => [g.key, { title: g.title, text: g.text }])) as Record<string, { title: string; text: string }>,
    techRoles: Object.fromEntries(techGroups.flatMap((g) => g.items.map((t) => [t.role, t.role]))) as Record<string, string>,
    platforms: { Web: "Web", Mobile: "Mobile", "Web + Mobile": "Web + Mobile" } as Record<string, string>,
    business: { B2B: "B2B", B2C: "B2C", "Internal operations": "Internal operations" } as Record<string, string>,
  },
};

export type Messages = typeof en;
