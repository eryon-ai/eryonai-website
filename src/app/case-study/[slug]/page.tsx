import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// ─── Project data ────────────────────────────────────────────────────────────

const projects: Record<string, Project> = {
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
      'https://images.unsplash.com/photo-1416879598056-cb6cfddce228?q=80&w=2070&auto=format&fit=crop', // Plant 2
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
  category: string;
  color: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  tech: string[];
  images: string[];
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
  return {
    title: `${p.title} — ${p.subtitle} | ERYON AI Case Study`,
    description: p.tagline,
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

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>

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
        <Link href="/" style={{
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
            <span style={{
              display: 'block',
              background: `linear-gradient(90deg, ${p.color}, ${p.color}99)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
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
                <div style={{
                  fontSize: 26,
                  fontWeight: 800,
                  fontFamily: 'Space Grotesk, sans-serif',
                  background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: 4,
                }}>{m.value}</div>
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
              borderRadius: 16,
              overflow: 'hidden',
              aspectRatio: '16/9',
              boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0',
              background: '#e2e8f0',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${p.title} screenshot ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading={i < 2 ? 'eager' : 'lazy'}
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
