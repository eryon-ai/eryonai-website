'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  type LucideIcon,
  Globe,
  Smartphone,
  Rocket,
  BarChart3,
  Building2,
  Dumbbell,
  ShoppingCart,
  Workflow,
  Brain,
  LineChart,
  Cloud,
  Palette,
  Layers,
  Check,
  ChevronDown,
  Lock,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import SectionBadge from '@/components/ui/SectionBadge';
import MovingBorderButton from '@/components/ui/MovingBorderButton';

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

/* Lucide replacements for the old icons8.com raster icons, keyed by category id.
   Kept separate from `categories` so the data array itself stays untouched. */
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'web-applications': Globe,
  'mobile-applications': Smartphone,
  'custom-saas': Rocket,
  'crm-erp-solutions': BarChart3,
  'real-estate-software': Building2,
  'gym-management-software': Dumbbell,
  'ecommerce-solutions': ShoppingCart,
  'business-automation': Workflow,
  'ai-solutions': Brain,
  'data-analytics': LineChart,
  'devops-cloud': Cloud,
  'ui-ux-design': Palette,
};

/* ─────────────────────────────────────────────
   SINGLE CATEGORY CARD
───────────────────────────────────────────── */
function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = CATEGORY_ICONS[cat.id] ?? Layers;

  const visible = expanded ? cat.items : cat.items.slice(0, PREVIEW_COUNT);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="h-full"
    >
      <GlowCard
        color={cat.color}
        className="p-7 md:p-8 h-full"
        style={{ background: `linear-gradient(135deg, ${cat.bgColor}, rgba(255,255,255,0.02))` }}
      >
        {/* Top accent line */}
        <div
          className="-mx-7 -mt-7 md:-mx-8 md:-mt-8 mb-6 h-0.5 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
        />

        {/* Header */}
        <Link href={`/services/${cat.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded-xl mb-6" style={{ ['--tw-ring-color' as string]: cat.color }}>
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
            >
              <Icon size={26} strokeWidth={2} color={cat.color} aria-hidden="true" />
            </div>
            <div className="pt-1">
              <h3
                className="text-lg font-bold mb-1.5 leading-tight transition-colors"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc' }}
              >
                {cat.label}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: '#94a3b8' }}>
                {cat.tagline}
              </p>
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="h-px w-full mb-5" style={{ background: 'rgba(255,255,255,0.08)' }} />

        {/* Item list */}
        <div className="flex flex-col flex-1 gap-0.5 mb-7">
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
                  <div className="relative mt-0.75 flex-shrink-0 w-4 h-4 flex items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center opacity-100 group-hover/item:opacity-0 transition-opacity duration-300"
                      style={{ background: `${cat.color}22` }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                    </div>
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                      style={{ background: cat.color }}
                    >
                      <Check size={10} strokeWidth={3.5} color="#0f172a" aria-hidden="true" />
                    </div>
                  </div>
                  <span
                    className="text-[14px] font-medium leading-snug transition-colors group-hover/item:text-[#f1f5f9]"
                    style={{ color: '#94a3b8' }}
                  >
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setExpanded((v) => !v);
            }}
            className="flex items-center gap-1.5 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded-md"
            style={{ color: '#64748b' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#f8fafc')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#64748b')}
          >
            <span>{expanded ? 'Collapse' : `View ${cat.items.length - PREVIEW_COUNT} More`}</span>
            <ChevronDown
              size={14}
              strokeWidth={2.5}
              aria-hidden="true"
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>

          <Link
            href={`/services/${cat.id}`}
            className="text-[13px] font-bold flex items-center gap-1.5 transition-all group/btn"
            style={{ color: cat.color }}
          >
            Explore
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </GlowCard>
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
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' });

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

      {/* ── STATS BAR — dark strip, matches hero/section-dark theme ── */}
      <div
        ref={statsRef}
        style={{ background: '#0f172a', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
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
      <section id="categories" className="section-pad relative overflow-hidden" style={{ background: '#0f172a' }}>
        {/* Radial background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,102,255,0.08) 0%, transparent 70%)' }}
        />

        <div className="container-custom relative z-10" ref={gridRef}>

          {/* Section header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 16 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <SectionBadge icon={Layers} label="What We Build" />
            <h2
              className="text-3xl md:text-5xl font-extrabold mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Purpose-Built Solutions,{' '}
              <span style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Not Generic Services
              </span>
            </h2>
            <p className="text-base md:text-lg" style={{ color: '#64748b', lineHeight: 1.7 }}>
              Every offering below is a real deliverable — not a buzzword. Click any card to explore the full scope of that category.
            </p>
          </motion.div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA — dark, matches FinalCTASection style ── */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{ background: '#0f172a' }} ref={ctaRef}>
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, #0066ff, transparent 70%)' }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
          />
        </div>

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(0,102,255,0.15)', border: '1px solid rgba(0,102,255,0.3)', color: '#60a5fa' }}
          >
            Don&apos;t See What You Need?
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#f8fafc',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            We Build Anything Your Business Requires
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            style={{ fontSize: 17, color: '#94a3b8', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 36px' }}
          >
            Our engineering team handles entirely bespoke requirements. Share your idea
            and we&apos;ll scope it out — no commitment needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MovingBorderButton href="/contact">
              Start a Conversation
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </MovingBorderButton>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'border-color 0.3s, color 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)';
                (e.currentTarget as HTMLElement).style.color = '#f8fafc';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLElement).style.color = '#cbd5e1';
              }}
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs font-semibold"
            style={{ color: '#475569' }}
          >
            {[
              { icon: Lock, label: 'NDA on request' },
              { icon: Zap, label: 'Response in 24h' },
              { icon: CheckCircle2, label: 'No commitment needed' },
            ].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <item.icon size={13} strokeWidth={2.5} aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
