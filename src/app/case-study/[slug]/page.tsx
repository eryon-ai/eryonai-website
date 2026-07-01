import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

// ─── Project data ────────────────────────────────────────────────────────────

const projects: Record<string, Project> = {
  'gym-dashboard': {
    slug: 'gym-dashboard',
    title: 'Gym Dashboard',
    subtitle: 'Fitness Center Admin Panel',
    category: 'Web / Management',
    color: '#ef4444', // Red
    tagline: 'A unified portal for member management and subscription analytics.',
    overview: 'This comprehensive admin panel was built for modern fitness centers. It digitizes member tracking, automates subscription billing, and provides real-time analytics on facility usage, enabling gym owners to focus on growth rather than paperwork.',
    challenge: 'Fitness centers often struggle with legacy, desktop-bound software that silos payment data and member attendance. Staff spent hours manually reconciling payments and tracking check-ins. The client needed a cloud-native, mobile-friendly solution that integrated billing and access control in real-time.',
    solution: 'We engineered a highly responsive React SPA powered by a robust Next.js backend. Integrating Stripe for recurring billing and Supabase for real-time member check-in sync, the platform significantly reduced administrative overhead. The UI, built with Tailwind CSS, ensures staff can manage operations seamlessly from tablets on the gym floor.',
    metrics: [
      { label: 'Admin Time Saved', value: '45%' },
      { label: 'Platform', value: 'Web / Mobile' },
      { label: 'Payments', value: 'Stripe Integration' },
      { label: 'Analytics', value: 'Real-time' },
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Stripe', 'Framer Motion'],
    liveLink: 'https://gym-website-admin-panel.vercel.app',
    images: [
      '/portfolio/gym-home.png',
      '/portfolio/gym-membership.png',
      '/portfolio/gym-crm-dashboard.png',
      '/portfolio/gym-crm-analytics.png',
      '/portfolio/gym-crm-expired.png',
    ],
  },
  'hospital-hrms': {
    slug: 'hospital-hrms',
    title: 'Hospital HRMS',
    subtitle: 'Medical Staff CRM',
    category: 'Enterprise / Healthcare',
    color: '#0ea5e9', // Sky Blue
    tagline: 'Technology & Architecture',
    overview: 'An enterprise-grade healthcare workforce management platform engineered to streamline hospital operations through centralized employee management, medical staff CRM, department coordination, attendance tracking, shift scheduling, leave management, payroll support, document management, and real-time administrative dashboards. Built on a secure, scalable, cloud-ready architecture with role-based access control, optimized performance, and seamless integration capabilities for modern healthcare organizations.',
    challenge: 'Hospitals face unique HR challenges, including complex shift rotations, strict credentialing requirements, and data privacy regulations. The client\'s existing systems were fragmented, causing scheduling conflicts and delaying critical staff communications during emergencies.',
    solution: 'We deployed a secure, centralized HRMS using React and Node.js. The system utilizes PostgreSQL for structured data integrity and incorporates robust RBAC (Role-Based Access Control) to ensure medical staff only access relevant patient data. Automated scheduling algorithms optimize shift coverage, while real-time notifications keep staff informed.',
    metrics: [
      { label: 'Compliance', value: 'HIPAA Ready' },
      { label: 'Scheduling Efficiency', value: '+30%' },
      { label: 'Security', value: 'End-to-End Encryption' },
      { label: 'Role Types', value: '5+ Medical Roles' },
    ],
    tech: ['Next.js', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'JWT with OAuth'],
    liveLink: 'https://medical-hospital-crm-website.vercel.app',
    images: [
      '/portfolio/hrms-home.png',
      '/portfolio/hrms-dashboard-light.png',
      '/portfolio/hrms-appointments.png',
      '/portfolio/hrms-patients.png',
      '/portfolio/hrms-dashboard-dark.png',
    ],
  },
  'velorian-watches': {
    slug: 'velorian-watches',
    title: 'Velorian',
    subtitle: 'Luxury Watch E-Commerce',
    category: 'E-Commerce / Premium',
    color: '#d4af37', // Gold
    tagline: 'High-Performance E-Commerce Platform',
    overview: 'Engineered for lightning-fast browsing, secure transactions, advanced product management, and a premium shopping experience across all devices.',
    challenge: 'Selling luxury goods online requires establishing deep trust and delivering a flawless user experience. Standard e-commerce templates felt cheap and failed to highlight the intricate details of the watches. The site needed to load instantly while rendering ultra-high-resolution imagery and complex 3D models.',
    solution: 'We built a headless commerce solution using Next.js for server-side rendered performance and SEO. The UI is carefully crafted with subtle Framer Motion animations to guide the user journey. A seamless integration with Shopify Storefront API handles secure checkout, while Sanity CMS empowers the marketing team to curate collections effortlessly.',
    metrics: [
      { label: 'Page Load', value: '<1.2s' },
      { label: 'Conversion Rate', value: '+18%' },
      { label: 'Architecture', value: 'Headless' },
      { label: 'UX', value: 'Premium / Fluid' },
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    liveLink: 'https://velorian-luxury-store.vercel.app/',
    images: [
      '/portfolio/velorian-home.png',
      '/portfolio/velorian-1.png',
      '/portfolio/velorian-2.png',
      '/portfolio/velorian-3.png',
      '/portfolio/velorian-4.png',
    ],
  },
  'marblemart-crm': {
    slug: 'marblemart-crm',
    title: 'MarbleMart CRM',
    subtitle: 'Custom Operations Dashboard',
    category: 'Enterprise / B2B',
    color: '#64748b', // Slate
    tagline: 'Enterprise Business Management Platform',
    overview: 'An enterprise-grade CRM and operational management platform purpose-built for marble manufacturers, wholesalers, and distributors. The platform unifies customer relationship management, lead assignment, inventory administration, quotation workflows, project tracking, field sales management, document handling, team collaboration, and executive dashboards into a single intelligent ecosystem. Designed with modular architecture, role-based security, and real-time reporting, it enables organizations to increase operational efficiency, improve sales performance, and deliver exceptional customer experiences while supporting long-term business scalability.',
    challenge: 'The client was tracking multi-million dollar marble slabs across international warehouses using fragmented spreadsheets. This led to inventory inaccuracies, delayed shipments, and poor visibility for the sales team regarding available stock.',
    solution: 'We engineered a robust internal tool using Next.js and Supabase. The system provides real-time database subscriptions, meaning the sales team sees inventory updates instantly as logistics updates the system. We implemented granular role-based access control and automated PDF invoice generation.',
    metrics: [
      { label: 'Inventory Sync', value: 'Real-time' },
      { label: 'Data Stack', value: 'Supabase' },
      { label: 'Reporting', value: 'Automated PDF' },
      { label: 'Roles', value: 'Sales, Logistics, Admin' },
    ],
    tech: ['Next.js', 'PostgreSQL', 'Supabase', 'Cloud Ready', 'Secure Access'],
    liveLink: 'https://custom-crm-next-supabase.vercel.app',
    testCredentials: {
      id: 'admin@marblemart.com',
      pass: 'Admin@123456',
    },
    images: [
      '/portfolio/marblemart-home.png',
      '/portfolio/marblemart-1.png',
      '/portfolio/marblemart-2.png',
      '/portfolio/marblemart-3.png',
      '/portfolio/marblemart-4.png',
    ],
  },
  'marblemart-web': {
    slug: 'marblemart-web',
    title: 'MarbleMart Web',
    subtitle: 'Corporate B2B Catalog',
    subtitleColor: '#ffffff',
    category: 'Web / Corporate',
    color: '#0f172a', // Slate Dark
    tagline: 'A high-performance corporate website showcasing premium marble collections.',
    overview: 'Serving as the digital face for MarbleMart, this corporate catalog website is designed to impress B2B clients, architects, and designers. It beautifully presents high-resolution imagery of luxury marble slabs while maintaining exceptional performance.',
    challenge: 'High-resolution images of marble are incredibly heavy, leading to slow page loads on the client\'s legacy site. They needed a portfolio that looked as luxurious as their product but loaded instantly to prevent bounce rates from impatient corporate buyers.',
    solution: 'We leveraged Next.js image optimization and edge caching to deliver massive images without the latency penalty. The UI features smooth scroll-triggered reveals and a minimalist aesthetic that allows the marble textures to stand out. Advanced SEO implementations significantly improved organic lead generation.',
    metrics: [
      { label: 'Performance', value: '99/100 Lighthouse' },
      { label: 'Media', value: 'Edge Optimized' },
      { label: 'Organic Leads', value: '+45%' },
      { label: 'Design', value: 'Minimalist Premium' },
    ],
    tech: ['Next.js', 'Vercel Edge', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'],
    liveLink: 'https://marble-mart-website.vercel.app',
    images: [
      '/portfolio/marblemart-web-home.png',
      '/portfolio/marblemart-web-1.png',
      '/portfolio/marblemart-web-2.png',
      '/portfolio/marblemart-web-3.png',
      '/portfolio/marblemart-web-4.png',
    ],
  },
  'edunexus-erp': {
    slug: 'edunexus-erp',
    title: 'EduNexus',
    subtitle: 'School ERP System',
    category: 'Enterprise / EdTech',
    color: '#8b5cf6', // Violet
    tagline: 'Next-generation School ERP and Education Management Platform.',
    overview: 'EduNexus is a next-generation School ERP and Education Management Platform designed to centralize every aspect of academic and administrative operations within a single intelligent ecosystem. The platform seamlessly connects students, parents, teachers, administrators, and management through secure web and mobile applications, enabling educational institutions to streamline daily operations, enhance collaboration, and make data-driven decisions.\n\nFrom admissions and attendance to examinations, payroll, transportation, communication, and financial management, EduNexus delivers a scalable digital infrastructure tailored for modern schools, colleges, and multi-campus institutions.',
    challenge: 'Educational institutions often rely on multiple disconnected systems to manage admissions, attendance, academics, finance, transportation, communication, and human resources. This fragmented approach creates duplicated data, manual administrative work, reporting inconsistencies, delayed communication, and a poor experience for teachers, students, and parents.\n\nThe client required a unified, secure, and scalable platform capable of managing thousands of users while providing real-time visibility into academic performance, operational efficiency, and institutional growth. They also needed dedicated mobile applications to ensure seamless access for parents, students, teachers, and administrators anytime, anywhere.',
    solution: 'We engineered a comprehensive School ERP platform with dedicated web and mobile applications, delivering a unified digital ecosystem for educational institutions.\n\nThe platform centralizes student lifecycle management, admissions, attendance tracking, examination management, grading, fee collection, payroll, transport management, timetable scheduling, document management, library operations, and parent-teacher communication into a single integrated solution.\n\nRole-based dashboards provide personalized experiences for administrators, teachers, students, parents, accountants, librarians, and transport coordinators, enabling each user to access relevant information securely and efficiently.\n\nThe integrated mobile applications allow parents to monitor attendance, academic progress, homework, examination schedules, fee payments, transport updates, announcements, and direct communication with teachers. Teachers can manage attendance, assignments, grading, classroom activities, and student performance directly from their mobile devices, while administrators can oversee institutional operations through real-time dashboards and analytics.\n\nThe platform incorporates secure online fee payments, automated notifications through SMS, email, and push notifications, real-time reporting, advanced analytics, document management, and cloud-based infrastructure designed to support multi-campus institutions with thousands of concurrent users.\n\nBuilt using an enterprise-grade, scalable architecture, EduNexus empowers educational organizations to digitize operations, reduce administrative overhead, improve communication, enhance learning outcomes, and provide a seamless digital experience across both web and mobile platforms.',
    metrics: [
      { label: 'Scale', value: 'Multi-Campus Ready' },
      { label: 'Modules', value: '12+ Core Features' },
      { label: 'Data', value: 'Unified Silos' },
      { label: 'Accessibility', value: 'WCAG Compliant' },
    ],
    tech: ['React', 'React Native', 'Java', 'Spring Boot', 'PostgreSQL', 'Twilio API', 'Stripe'],
    liveLink: 'https://edu-nexus-school-erp.vercel.app/login',
    images: [
      '/portfolio/edunexus-home.png',
      '/portfolio/edunexus-1.png',
      '/portfolio/edunexus-2.png',
      '/portfolio/edunexus-3.png',
      '/portfolio/edunexus-4.png',
      '/portfolio/edunexus-5.png',
      '/portfolio/edunexus-6.png',
    ],
  },
  'atelier-clothing': {
    slug: 'atelier-clothing',
    title: 'Atelier',
    subtitle: 'Boutique E-Commerce',
    category: 'E-Commerce / Fashion',
    color: '#ec4899', // Pink
    tagline: 'Enterprise-grade premium luxury fashion e-commerce platform.',
    overview: 'ATELIER is a premium luxury fashion and streetwear e-commerce platform designed to deliver an immersive digital shopping experience across web and mobile devices. Built with a modern, performance-focused architecture, the platform combines editorial-inspired design, intelligent product discovery, secure shopping workflows, and a comprehensive administration portal into a unified commerce ecosystem.\n\nFrom product exploration and personalized collections to inventory management, order processing, customer analytics, and promotional campaigns, ATELIER provides brands with a scalable platform capable of supporting high-volume retail operations while delivering an exceptional customer experience.',
    challenge: 'Luxury fashion customers expect more than a traditional online store—they demand a visually immersive experience, seamless navigation, lightning-fast performance, and personalized shopping journeys. Conventional e-commerce platforms often struggle with slow page loads, limited customization, disconnected inventory management, and poor mobile experiences, resulting in lower engagement and reduced conversion rates.\n\nThe client required a premium digital commerce solution that could combine sophisticated product presentation, advanced search and filtering, wishlist management, secure shopping workflows, promotional campaigns, and a centralized administration dashboard while maintaining enterprise-level performance and scalability across desktop and mobile devices.',
    solution: 'We engineered a next-generation e-commerce platform that unifies customer engagement, product management, order processing, marketing, and business analytics into a single cloud-ready digital ecosystem.\n\nThe platform delivers an immersive shopping experience through editorial-inspired layouts, animated product showcases, intelligent category navigation, advanced filtering, real-time search, personalized wishlists, persistent shopping carts, promotional campaigns, and responsive product detail pages optimized for every screen size.\n\nOn the operational side, the platform includes a comprehensive administration portal for product catalog management, inventory monitoring, customer management, order processing, sales analytics, revenue tracking, promotional campaign management, and business performance reporting. Every component is designed to streamline retail operations while providing complete visibility into customer behavior and sales performance.\n\nDedicated mobile optimization ensures customers enjoy the same premium experience across smartphones, tablets, and desktops, with responsive layouts, smooth animations, optimized media delivery, and intuitive navigation that encourage engagement and increase conversion rates.\n\nBuilt on a scalable, cloud-ready architecture with modular components, intelligent state management, secure authentication, and performance-first engineering, ATELIER enables fashion brands to deliver exceptional digital shopping experiences while supporting long-term business growth, operational efficiency, and enterprise-scale retail expansion.',
    metrics: [
      { label: 'Mobile UX', value: 'Native-like Feel' },
      { label: 'Cart Speed', value: 'Instant Updates' },
      { label: 'Conversions', value: 'Increased by 24%' },
      { label: 'Architecture', value: 'Server-Side Rendered' },
    ],
    tech: ['Enterprise Architecture', 'Next.js', 'Spring Boot', 'PostgreSQL', 'MongoDB Atlas', 'Valkey', 'Docker', 'RabbitMQ', 'Clerk', 'Websocket'],
    liveLink: 'https://atelier-clothing-store-one.vercel.app',
    images: [
      '/portfolio/atelier-home.png',
      '/portfolio/atelier-1.png',
      '/portfolio/atelier-2.png',
      '/portfolio/atelier-3.png',
      '/portfolio/atelier-4.png',
      '/portfolio/atelier-5.png',
      '/portfolio/atelier-6.png',
      '/portfolio/atelier-7.png',
      '/portfolio/atelier-8.png',
      '/portfolio/atelier-9.png',
      '/portfolio/atelier-10.png',
      '/portfolio/atelier-11.png',
    ],
  },
  'realist-crm': {
    slug: 'realist-crm',
    title: 'Realist CRM',
    subtitle: 'Luxury Real Estate Management',
    category: 'Enterprise / Real Estate',
    color: '#10b981', // Emerald
    tagline: 'Sleek property management solution for high-end agencies.',
    overview: 'Realist CRM provides elite real estate agents with a powerful tool to manage high-net-worth clients, off-market property listings, and complex negotiation pipelines. It brings enterprise power wrapped in a premium, dark-mode aesthetic.',
    challenge: 'Luxury real estate agents operate in a fast-paced environment where managing exclusive listings and demanding clients via spreadsheets is untenable. They needed a CRM that was as elegant as the properties they sold, with powerful geospatial filtering and automated follow-ups.',
    solution: 'We architected a scalable CRM using Python/FastAPI for the backend and a highly polished React frontend. Integrating Mapbox for advanced property mapping and Twilio for automated client communications, the platform empowers agents to close deals faster while maintaining a premium brand image.',
    metrics: [
      { label: 'Mapping', value: 'Geospatial Search' },
      { label: 'UI/UX', value: 'Premium Dark Mode' },
      { label: 'Automation', value: 'Client Follow-ups' },
      { label: 'Backend', value: 'High-Performance API' },
    ],
    tech: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Mapbox', 'Twilio'],
    liveLink: 'https://real-estate-crm-xi-beryl.vercel.app/',
    images: [
      '/portfolio/realist-home.png',
      '/portfolio/realist-1.png',
      '/portfolio/realist-2.png',
      '/portfolio/realist-3.png',
      '/portfolio/realist-4.png',
    ],
  },
  craverush: {
    slug: 'craverush',
    title: 'CraveRush',
    subtitle: 'Event-Driven Food Delivery Platform',
    category: 'Microservices / Web',
    color: '#f97316', // Orange
    tagline: 'High-availability microservices architecture powered by Apache Kafka.',
    overview:
      'CraveRush is a modern, mobile-first food delivery platform. It embraces an event-driven microservices architecture to handle high concurrency during peak dining hours. Equipped with polyglot persistence, real-time messaging, and secure payments, it serves as a robust example of enterprise scalability.',
    challenge:
      'Monolithic food delivery apps frequently experience database bottlenecks and fault cascades when order volume spikes. CraveRush required a decoupled structure where a failure in the recommendation engine or inventory service would not disrupt the core checkout and payment flow.',
    solution:
      'We designed an event-driven architecture relying on Apache Kafka for asynchronous communication between Spring Boot microservices. The presentation layer is a React SPA utilizing Zustand and React Query. The backend employs Polyglot Persistence, mixing PostgreSQL for ACID transactions (orders/payments) and MongoDB for document storage (menus). A Dockerized dev stack with Zipkin tracing guarantees fault isolation and high observability.',
    metrics: [
      { label: 'Arch Pattern', value: 'Microservices' },
      { label: 'Message Broker', value: 'Apache Kafka' },
      { label: 'Payments', value: 'Stripe API' },
      { label: 'Fault Isolation', value: 'Decoupled' },
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'React', 'PostgreSQL', 'MongoDB', 'Docker', 'Stripe'],
    images: [
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775236621/WhatsApp_Image_2026-04-03_at_16.17.11_jixs2u.jpg',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775236621/WhatsApp_Image_2026-04-03_at_16.20.42_him1xd.jpg',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775241807/WhatsApp_Image_2026-04-04_at_00.13.03_pchy1n.jpg',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775241967/WhatsApp_Image_2026-04-04_at_00.15.57_f56tfb.jpg',
    ],
  },
  origin: {
    slug: 'origin',
    title: 'Origin',
    subtitle: 'Immersive Digital Experience',
    category: 'WebGL / Creative Design',
    color: '#f43f5e', // Rose
    tagline: 'An Awwwards-worthy interactive journey powered by Three.js and GSAP.',
    overview:
      'Origin is an ultra-premium creative agency website that prioritizes visual storytelling through interactive WebGL environments and fluid DOM animations. Designed to break away from traditional grid-based layouts, it offers a seamless, cinematic scrolling experience.',
    challenge:
      'High-end creative studios require digital experiences that act as an extension of their brand. Standard web templates feel static and fail to capture attention. The challenge was to deliver complex 3D rendering and scroll-linked typographical animations without sacrificing 60fps performance across devices.',
    solution:
      'We engineered a highly performant React 18 SPA powered by Vite. The visual layer uses Three.js for interactive 3D elements, seamlessly integrated with GSAP and Split-Type for intricate, scroll-triggered text revelations. To ensure buttery-smooth navigation, we implemented @studio-freight/react-lenis for custom smooth scrolling, achieving a high-end, immersive "Awwwards-style" presentation.',
    metrics: [
      { label: 'Animation FPS', value: '60fps' },
      { label: 'Scroll Engine', value: 'Lenis' },
      { label: '3D Rendering', value: 'WebGL' },
      { label: 'Device Support', value: '100% Responsive' },
    ],
    tech: ['React 18', 'Three.js', 'GSAP', 'Framer Motion', 'React Lenis', 'Split-Type', 'Vite'],
    images: [
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775241107/Screenshot_2026-04-03_at_11.59.01_PM_ainicc.png',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775241111/Screenshot_2026-04-03_at_11.59.43_PM_lfwucy.png',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775241103/Screenshot_2026-04-03_at_11.59.24_PM_j9lryt.png',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775241106/Screenshot_2026-04-04_at_12.01.07_AM_qkdrh4.png',
    ],
  },
  hirestream: {
    slug: 'hirestream',
    title: 'HireStream',
    subtitle: 'Online Job Recruitment Portal',
    category: 'Web / Enterprise',
    color: '#0d9488', // Teal
    tagline: 'Connecting 10,000+ candidates with recruiters via robust Spring Boot APIs.',
    overview:
      'HireStream is an end-to-end online recruitment and job portal designed to streamline the hiring process. The platform features separate portals for Candidates, Recruiters, and Administrators—managed through stateless JWT security. It automates profile management, application tracking, and dynamic PDF generation for resumes and application receipts.',
    challenge:
      'The client\'s previous hiring process relied exclusively on scattered email threads and manual spreadsheet tracking, leading to lost resumes and mismanaged candidate pipelines. They required a centralized, highly secure portal where recruiters could autonomously post jobs and candidates could apply and track statuses in real-time.',
    solution:
      'We developed a robust RESTful API backend using Java Spring Boot (v3.1) and Spring Data JPA backed by a MySQL database. Security was fortified using Spring Security with custom JWT-based filters. The frontend is a highly responsive React 18 SPA utilizing React Bootstrap for rapid, accessible UI styling.',
    metrics: [
      { label: 'Role Types', value: '3 (Admin, HR, User)' },
      { label: 'Applications Handled', value: '50K+' },
      { label: 'Security Standard', value: 'Stateless JWT' },
      { label: 'System Uptime', value: '99.9%' },
    ],
    tech: ['React', 'Spring Boot 3', 'MySQL', 'Spring Security', 'JWT', 'React Bootstrap', 'OpenPDF', 'Lombok'],
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    ],
  },
  kyprox: {
    slug: 'kyprox',
    title: 'Kyprox',
    subtitle: 'Web Experience for Musicians',
    category: 'Web / Creative',
    color: '#a855f7', // Purple
    tagline: 'Immersive digital experiences with WebGL and Framer Motion.',
    overview:
      'Kyprox is a premium digital platform tailored for musicians, artists, and performers. Built specifically to showcase creative portfolios, it delivers a stunning, highly interactive web experience featuring custom particle backgrounds, fluid animations, and immersive WebGL interfaces.',
    challenge:
      'Independent musicians and performers often rely on templated website builders that fail to capture the essence of their art. They needed a distinct, high-performance web presence that could handle heavy visual assets, interactive media, and contact inquiries without sacrificing page speed or mobile responsiveness.',
    solution:
      'We designed a headless Next.js architecture heavily augmented with Three.js and GSAP. The UI leverages Framer Motion for buttery-smooth page transitions, while Custom TS-Particles power dynamic interactive backgrounds. The result is an ultra-fast, visually breathtaking portfolio that scales perfectly on all devices.',
    metrics: [
      { label: 'Page Speed', value: '98/100' },
      { label: 'Animation Rate', value: '60 fps' },
      { label: 'Bounce Rate', value: '- 45%' },
      { label: 'Engagement', value: '+ 120%' },
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'GSAP', 'TsParticles', 'Formspree'],
    images: [
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775238959/Screenshot_2026-04-03_at_11.24.23_PM_ppgjqq.png',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775238959/Screenshot_2026-04-03_at_11.24.49_PM_boigsk.png',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775238960/Screenshot_2026-04-03_at_11.25.10_PM_u20yyc.png',
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775238960/Screenshot_2026-04-03_at_11.25.26_PM_nsreab.png',
    ],
  },
  auraplanters: {
    slug: 'auraplanters',
    title: 'Aura Planters',
    subtitle: 'MERN E-Commerce Platform',
    category: 'Full-Stack / Retail',
    color: '#16a34a', // Green
    tagline: 'End-to-end plant boutique storefront with Razorpay checkout.',
    overview:
      'Aura Planters is a comprehensive full-stack e-commerce platform built for a boutique indoor plant retailer. It features a scalable MERN stack architecture (MongoDB, Express, React, Node.js), complete with robust Redux state management, secure JWT authentication, and seamless payment processing via Razorpay.',
    challenge:
      'The client needed a bespoke online storefront capable of handling dynamic inventory, detailed product variations (pot sizes, plant types), and a seamless checkout experience. Off-the-shelf solutions lacked the customization required for their unique botanical supply chain and specific delivery logic.',
    solution:
      'We engineered a highly responsive React 19 SPA powered by Vite, styling the UI with a hybrid approach of Tailwind CSS and Material UI. The backend runs on an Express/Node.js server with Mongoose handling complex data relations in MongoDB. We integrated Cloudinary for optimized image delivery and Razorpay for secure Indian Rupee (INR) transactions. An Admin dashboard is also included for managing orders, products, and users.',
    metrics: [
      { label: 'State Management', value: 'Redux Toolkit' },
      { label: 'Payment Gateway', value: 'Razorpay' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Media Serving', value: 'Cloudinary' },
    ],
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Razorpay', 'Tailwind', 'Material UI'],
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop', // Plant 1
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop', // Payment
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', // Admin DB
      'https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=2070&auto=format&fit=crop', // Plant 2
    ],
  },
  echosync: {
    slug: 'echosync',
    title: 'EchoSync AI',
    subtitle: 'Voice Bot Pipeline',
    category: 'Voice AI / Automation',
    color: '#0284c7', // Slate Blue
    tagline: 'Production-ready voice AI with sub-1000ms latency.',
    overview:
      'EchoSync is a production-ready conversational Voice AI pipeline tailored for businesses requiring ultra-low latency audio streaming. Designed with a FastAPI & WebSocket backend, the platform leverages Python Asyncio for non-blocking concurrent call handling. With state machine logic driving the flow, it can flawlessly pause, resume, and qualify dynamic conversations.',
    challenge:
      'Legacy IVR systems and standard REST-based chatbots are notoriously rigid and slow. Financial firms like QuickRupee needed rapid loan qualification bots, while home renovation agencies needed dynamic lead scoring. They required a solution capable of true bidirectional streaming with conversational intelligence and immediate handoffs.',
    solution:
      'We engineered a robust pipeline integrating Deepgram or Whisper for high-speed ASR, OpenAI for LLM intent generation, and ElevenLabs for natural TTS. Built heavily around state machines, the AI systematically asks predefined qualification questions (e.g., salary, location) and dynamically determines whether to pass the lead to a human agent.',
    metrics: [
      { label: 'Voice Latency', value: '< 1000ms' },
      { label: 'Concurrent Scans', value: 'Asyncio' },
      { label: 'Conversion Rate', value: '3x Lift' },
      { label: 'Dialogue Flow', value: 'State Machine' },
    ],
    tech: ['Python', 'FastAPI', 'WebSockets', 'Asyncio', 'OpenAI', 'Deepgram', 'ElevenLabs'],
    images: [
      'https://images.unsplash.com/photo-1589254066213-a0c9dc853511?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    ],
  },
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface Metric { label: string; value: string; }
interface Project {
  slug: string;
  title: string;
  subtitle: string;
  subtitleColor?: string;
  category: string;
  color: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  tech: string[];
  images: string[];
  liveLink?: string;
  testCredentials?: {
    id: string;
    pass: string;
  };
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) return { title: 'Case Study Not Found' };
  const url = `https://www.eryonai.com/case-study/${slug}`;
  return {
    title: `${p.title} — ${p.subtitle} | ERYON AI Case Study`,
    description: `${p.tagline} Built with ${p.tech.slice(0, 4).join(', ')}. Read the full case study.`,
    keywords: [...p.tech, p.category, 'ERYON AI', 'case study', p.title],
    openGraph: {
      title: `${p.title} — ${p.subtitle} | ERYON AI`,
      description: p.tagline,
      url,
      type: 'article',
      siteName: 'ERYON AI',
      images: [{ url: p.images[0], width: 1200, height: 630, alt: `${p.title} — ${p.subtitle}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${p.title} — ${p.subtitle}`,
      description: p.tagline,
      images: [p.images[0]],
    },
    alternates: { canonical: url },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) notFound();

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${p.title} - ${p.subtitle}`,
    "description": p.tagline,
    "creator": {
      "@type": "Organization",
      "name": "ERYON AI",
      "url": "https://www.eryonai.com"
    },
    "keywords": p.tech.join(', '),
    "image": p.images[0]
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      {/* ── Top nav bar ── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
      }}>
        <Link href="/portfolio" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          color: '#0066ff',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 14,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Portfolio
        </Link>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: p.color,
          background: `${p.color}12`,
          border: `1px solid ${p.color}25`,
          padding: '4px 12px',
          borderRadius: 999,
        }}>
          {p.category}
        </span>
      </nav>

      {/* ── Hero ── */}
      <header style={{
        background: `linear-gradient(135deg, #0f172a 0%, #1e293b 100%)`,
        padding: '80px 24px 72px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            color: '#f8fafc',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 12px',
          }}>
            {p.title}
            <span style={
              p.subtitleColor
                ? { display: 'block', color: p.subtitleColor }
                : {
                    display: 'block',
                    background: `linear-gradient(90deg, ${p.color}, ${p.color}99)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }
            }>
              {p.subtitle}
            </span>
          </h1>
          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.6, margin: '0 0 40px' }}>
            {p.tagline}
          </p>

          {/* Metrics row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            {p.metrics.map((m) => (
              <div key={m.label} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '16px 24px',
                minWidth: 120,
                textAlign: 'center',
              }}>
                <div style={
                  p.subtitleColor
                    ? {
                        fontSize: 26,
                        fontWeight: 800,
                        fontFamily: 'Space Grotesk, sans-serif',
                        color: p.subtitleColor,
                        lineHeight: 1,
                        marginBottom: 4,
                      }
                    : {
                        fontSize: 26,
                        fontWeight: 800,
                        fontFamily: 'Space Grotesk, sans-serif',
                        background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                        marginBottom: 4,
                      }
                }>{m.value}</div>
                <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Screenshot gallery ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 48px' }}>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#0f172a',
          margin: '0 0 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <span style={{ width: 4, height: 22, background: p.color, borderRadius: 2, display: 'inline-block' }} />
          Project Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {p.images.map((src, i) => (
            <div key={i} style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              aspectRatio: '16/9',
              boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0',
              background: '#e2e8f0',
            }}>
              <Image
                src={src}
                alt={`${p.title} screenshot ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                style={{ objectFit: 'cover', display: 'block' }}
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Overview + Tech Stack ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 64px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-5 lg:gap-8 items-start">

          {/* Left: overview / challenge / solution */}
          <div>
            {[
              { heading: 'Project Overview', body: p.overview },
              { heading: 'The Challenge', body: p.challenge },
              { heading: 'Our Solution', body: p.solution },
            ].map(({ heading, body }) => (
              <div key={heading} style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: '28px 32px',
                marginBottom: 20,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 17,
                  fontWeight: 700,
                  color: '#0f172a',
                  margin: '0 0 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <span style={{ width: 3, height: 18, background: p.color, borderRadius: 2, display: 'inline-block' }} />
                  {heading}
                </h3>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Tech Stack card */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 16,
            padding: '28px 28px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }} className="static lg:sticky lg:top-[76px]">
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 17,
              fontWeight: 700,
              color: '#0f172a',
              margin: '0 0 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <span style={{ width: 3, height: 18, background: p.color, borderRadius: 2, display: 'inline-block' }} />
              Tech Stack
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {p.tech.map((t) => (
                <span key={t} style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: `${p.color}10`,
                  color: p.color,
                  border: `1px solid ${p.color}25`,
                }}>
                  {t}
                </span>
              ))}
            </div>

            {p.liveLink && (
              <div style={{ marginTop: 24 }}>
                <a href={p.liveLink} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: p.color,
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 14,
                  padding: '11px 22px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  boxShadow: `0 4px 14px ${p.color}40`,
                }} className="hover:opacity-90 transition-opacity">
                  Demo Live Site
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            )}

            {p.testCredentials && (
              <div style={{
                marginTop: 24,
                padding: 16,
                background: `${p.color}15`,
                border: `1px solid ${p.color}40`,
                borderRadius: 8,
              }}>
                <div style={{ color: p.color, fontWeight: 600, marginBottom: 8, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Test Credentials (Must be Highlighted)
                </div>
                <div style={{ fontSize: 14, color: '#e2e8f0' }}>
                  <span style={{ opacity: 0.7 }}>ID:</span> <strong style={{ color: '#fff' }}>{p.testCredentials.id}</strong>
                  <br />
                  <span style={{ opacity: 0.7 }}>Password:</span> <strong style={{ color: '#fff' }}>{p.testCredentials.pass}</strong>
                </div>
              </div>
            )}

            <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid #f1f5f9' }}>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, margin: '0 0 16px' }}>
                Interested in a similar solution for your business?
              </p>
              <Link href="/#contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: `linear-gradient(135deg, #0066ff, #00b4d8)`,
                color: '#fff',
                fontWeight: 600,
                fontSize: 14,
                padding: '11px 22px',
                borderRadius: 10,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,102,255,0.25)',
              }}>
                Discuss Your Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
