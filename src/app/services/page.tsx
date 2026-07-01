'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const categories = [
  {
    id: 'web-applications',
    icon: 'https://img.icons8.com/color/96/domain.png',
    label: 'Web Applications',
    tagline: 'Enterprise portals. Scalable platforms. Full-stack.',
    color: '#0066ff',
    bgColor: 'rgba(0,102,255,0.07)',
    borderTop: '#0066ff',
    items: [
      'Custom Web Applications',
      'Enterprise Business Portals',
      'Customer Portals',
      'Vendor Portals',
      'Admin Dashboards',
      'Analytics Platforms',
      'Booking Systems',
      'Marketplace Platforms',
      'Internal Business Systems',
    ],
  },
  {
    id: 'mobile-applications',
    icon: 'https://img.icons8.com/color/96/smartphone-tablet.png',
    label: 'Mobile Applications',
    tagline: 'iOS. Android. Cross-platform. Enterprise-ready.',
    color: '#ec4899',
    bgColor: 'rgba(236,72,153,0.07)',
    borderTop: '#ec4899',
    items: [
      'Android Apps',
      'iOS Apps',
      'Cross Platform Apps',
      'Business Apps',
      'Customer Apps',
      'Field Staff Apps',
      'Delivery Apps',
      'E-Commerce Apps',
    ],
  },
  {
    id: 'custom-saas',
    icon: 'https://img.icons8.com/color/96/rocket.png',
    label: 'Custom SaaS Applications',
    tagline: 'Multi-tenant. Scalable. Revenue-generating.',
    color: '#6366f1',
    bgColor: 'rgba(99,102,241,0.07)',
    borderTop: '#6366f1',
    items: [
      'Multi-Tenant SaaS',
      'B2B SaaS Platforms',
      'B2C SaaS Platforms',
      'SaaS MVP Development',
      'Subscription Platforms',
      'White Label SaaS',
      'CRM SaaS',
      'HRMS SaaS',
    ],
  },
  {
    id: 'crm-erp-solutions',
    icon: 'https://img.icons8.com/color/96/bar-chart.png',
    label: 'CRM, ERP & Business Management',
    tagline: 'Centralize. Automate. Scale operations.',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.07)',
    borderTop: '#f59e0b',
    items: [
      'Lead Management',
      'CRM Solutions',
      'ERP Systems',
      'Inventory Management',
      'Sales Management',
      'Marketing Management',
      'Vendor Management',
      'Procurement Systems',
    ],
  },
  {
    id: 'real-estate-software',
    icon: 'https://img.icons8.com/color/96/real-estate.png',
    label: 'Real Estate Software',
    tagline: 'Property management, CRM, and listing portals.',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.07)',
    borderTop: '#10b981',
    items: [
      'Property Listing Portals',
      'Real Estate CRM',
      'Property Management',
      'Transaction Management',
      'Map-Based Portals',
      'Agent Performance Portals',
      'Mortgage & Finance Tools',
      'Developer Project Portals',
    ],
  },
  {
    id: 'gym-management-software',
    icon: 'https://img.icons8.com/color/96/dumbbell.png',
    label: 'Gym Management Software',
    tagline: 'Memberships, scheduling, and billing platforms.',
    color: '#00b4d8',
    bgColor: 'rgba(0,180,216,0.07)',
    borderTop: '#00b4d8',
    items: [
      'Member Management',
      'Class & Schedule Management',
      'Online Booking',
      'Billing & Membership Plans',
      'Staff Management',
      'Access Control Integration',
      'Member Mobile App',
      'Business Analytics',
    ],
  },
  {
    id: 'ecommerce-solutions',
    icon: 'https://img.icons8.com/color/96/shopping-cart.png',
    label: 'E-Commerce Solutions',
    tagline: 'B2B, B2C, marketplaces. Sell at scale.',
    color: '#0066ff',
    bgColor: 'rgba(0,102,255,0.07)',
    borderTop: '#0066ff',
    items: [
      'B2B Commerce',
      'B2C Commerce',
      'Multi Vendor Marketplaces',
      'D2C Stores',
      'Subscription Commerce',
      'Inventory Integrated Stores',
      'Order Management',
      'Mobile Commerce',
    ],
  },
  {
    id: 'business-automation',
    icon: 'https://img.icons8.com/color/96/workflow.png',
    label: 'Business Automation',
    tagline: 'Process optimization. Workflow automation.',
    color: '#ec4899',
    bgColor: 'rgba(236,72,153,0.07)',
    borderTop: '#ec4899',
    items: [
      'Workflow Automation',
      'Document Automation',
      'Notification Automation',
      'Report Automation',
      'Customer Onboarding Automation',
      'Invoice & Payment Automation',
      'Approval Workflow Systems',
      'System Integration Automation',
    ],
  },
  {
    id: 'ai-solutions',
    icon: 'https://img.icons8.com/color/96/artificial-intelligence.png',
    label: 'AI & Automation Solutions',
    tagline: 'LLMs. Agents. Automation. Real business impact.',
    color: '#a855f7',
    bgColor: 'rgba(168,85,247,0.07)',
    borderTop: '#a855f7',
    items: [
      'AI Agents',
      'AI Chatbots',
      'LLM Integrations',
      'Workflow Automation',
      'Document Processing AI',
      'Recommendation Engines',
      'AI Knowledge Bases',
      'AI Dashboards & BI',
    ],
  },
  {
    id: 'data-analytics',
    icon: 'https://img.icons8.com/color/96/combo-chart.png',
    label: 'Data & Analytics Solutions',
    tagline: 'From raw data to executive decisions.',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.07)',
    borderTop: '#10b981',
    items: [
      'BI Dashboards',
      'Executive Dashboards',
      'Real-Time Analytics',
      'Reporting Automation',
      'Data Warehousing',
      'Customer Analytics',
      'Predictive Analytics',
      'Self-Service Analytics',
    ],
  },
  {
    id: 'devops-cloud',
    icon: 'https://img.icons8.com/color/96/settings.png',
    label: 'DevOps & Cloud Engineering',
    tagline: 'Infra that scales. Zero downtime. Always on.',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.07)',
    borderTop: '#f59e0b',
    items: [
      'AWS Infrastructure Design',
      'Cloud Migration',
      'Docker Containerization',
      'Kubernetes Deployment',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Monitoring & Observability',
      'Security Hardening',
    ],
  },
  {
    id: 'ui-ux-design',
    icon: 'https://img.icons8.com/color/96/design.png',
    label: 'UI/UX Design',
    tagline: 'Design that converts. Systems that scale.',
    color: '#00b4d8',
    bgColor: 'rgba(0,180,216,0.07)',
    borderTop: '#00b4d8',
    items: [
      'Product Design',
      'UX Strategy',
      'SaaS Dashboard Design',
      'Mobile App Design',
      'Design Systems',
      'Wireframing',
      'Interactive Prototypes',
      'Usability Testing',
    ],
  },
];

const PREVIEW_COUNT = 5;

/* ─────────────────────────────────────────────
   SINGLE CATEGORY CARD
───────────────────────────────────────────── */
function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const visible = expanded ? cat.items : cat.items.slice(0, PREVIEW_COUNT);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group relative flex flex-col bg-white rounded-[20px] border border-slate-100 overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] hover:-translate-y-1"
    >
      {/* Subtle top accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px]" 
        style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }} 
      />
      
      {/* Subtle glowing orb in the background on hover */}
      <div 
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
        style={{ background: cat.color }}
      />

      <div className="p-8 flex flex-col h-full relative z-10">
        {/* Header */}
        <Link href={`/services/${cat.id}`} className="block focus:outline-none mb-7">
          <div className="flex items-start gap-5 cursor-pointer">
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
              style={{ 
                background: `linear-gradient(135deg, #ffffff, ${cat.bgColor})`, 
                borderColor: `${cat.color}20`,
                boxShadow: `0 4px 20px ${cat.color}10`
              }}
            >
              <img src={cat.icon} alt={cat.label} width={36} height={36} className="object-contain" loading="lazy" />
            </div>
            <div className="pt-1.5">
              <h3 className="font-space text-[19px] font-bold text-navy mb-1.5 leading-tight group-hover:text-brand-blue transition-colors">
                {cat.label}
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                {cat.tagline}
              </p>
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-100 via-slate-100 to-transparent mb-6" />

        {/* Item list */}
        <div className="flex flex-col flex-1 gap-1 mb-8">
          <AnimatePresence initial={false}>
            {visible.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.25, delay: i * 0.02 }}
                className="overflow-hidden"
              >
                <div className="flex items-start gap-3 py-1.5 group/item cursor-default">
                  <div className="relative mt-[5px] flex-shrink-0 w-4 h-4 flex items-center justify-center">
                    {/* Default dot */}
                    <div className="absolute inset-0 rounded-full opacity-100 group-hover/item:opacity-0 transition-all duration-300 flex items-center justify-center"
                         style={{ background: `${cat.color}20` }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                    </div>
                    {/* Hover checkmark */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover/item:opacity-100 transition-all duration-300 flex items-center justify-center"
                         style={{ background: cat.color }}>
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[14.5px] text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors leading-snug">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              setExpanded(v => !v);
            }}
            className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-400 hover:text-slate-800 transition-colors focus:outline-none"
          >
            <span>{expanded ? 'Collapse' : `View ${cat.items.length - PREVIEW_COUNT} More`}</span>
            <svg 
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <Link 
            href={`/services/${cat.id}`}
            className="text-[14px] font-bold flex items-center gap-1.5 transition-all group/btn"
            style={{ color: '#0f172a' }}
          >
            Explore <span className="text-slate-300 group-hover/btn:text-brand-blue group-hover/btn:translate-x-1.5 transition-all duration-300">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <main>

      {/* ── HERO — dark, matches site hero-dark style ── */}
      <section
        className="hero-dark relative"
        ref={heroRef}
        style={{ paddingTop: 140, paddingBottom: 80 }}
      >
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-widest uppercase"
              style={{
                background: 'rgba(0,102,255,0.15)',
                border: '1px solid rgba(0,102,255,0.3)',
                color: '#60a5fa',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
              12 Solution Categories &nbsp;·&nbsp; 140+ Offerings
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(32px,5vw,64px)',
                fontWeight: 800,
                color: '#f8fafc',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Every Software Solution
              <br />
              <span className="gradient-text">Your Business Needs</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
              style={{
                fontSize: 18,
                color: '#94a3b8',
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 600,
                margin: '0 auto 36px',
              }}
            >
              From custom SaaS platforms and enterprise portals to AI automation and cloud
              infrastructure — Eryon AI engineers production-grade software for businesses
              that demand excellence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary">
                Discuss Your Project →
              </Link>
              <a
                href="#categories"
                className="btn-secondary"
                style={{ color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.2)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = '#e2e8f0';
                }}
              >
                Explore All Services ↓
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR — white strip ── */}
      <div
        ref={statsRef}
        style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { n: '12', l: 'Solution Categories' },
              { n: '140+', l: 'Service Offerings' },
              { n: '150+', l: 'Projects Delivered' },
              { n: '80+', l: 'Enterprise Clients' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="stat-item"
              >
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORIES GRID ── */}
      <section id="categories" className="section-pad" style={{ background: '#f8fafc' }}>
        <div className="container-custom" ref={gridRef}>

          {/* Section header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <div className="section-label mx-auto" style={{ display: 'inline-flex' }}>
              What We Build
            </div>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Purpose-Built Solutions,{' '}
              <span className="gradient-text">Not Generic Services</span>
            </h2>
            <p className="section-subtitle centered" style={{ marginTop: 12 }}>
              Every offering below is a real deliverable — not a buzzword. Click any card to explore the full scope of that category.
            </p>
          </motion.div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA — brand gradient banner ── */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="cta-banner text-center"
          >
            <div className="relative z-10">
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: 12,
                }}
              >
                Don&apos;t See What You Need?
              </p>
              <h3
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(24px, 3.5vw, 40px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                We Build Anything Your Business Requires
              </h3>
              <p
                style={{
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.7,
                  maxWidth: 520,
                  margin: '0 auto 32px',
                }}
              >
                Our engineering team handles entirely bespoke requirements. Share your idea
                and we&apos;ll scope it out — no commitment needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Start a Conversation →
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-secondary"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
