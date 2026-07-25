'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import Script from 'next/script';
import {
  Sparkles, Target, Telescope, BarChart3, Settings, Medal,
  ShieldCheck, CheckCircle2, Lock, Zap, Trophy,
  Landmark, Stethoscope, Cloud, ShoppingBag, BookOpen, Truck, Scale, Building2, FileText, Users, Bot, Tv,
  Handshake, Globe, Recycle,
  type LucideIcon,
} from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import SectionBadge from '@/components/ui/SectionBadge';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

/* ─── Infinite marquee (reduced-motion-safe, pattern from TrustedBySection) ─── */
function InfiniteMarquee({ items }: { items: { label: string; icon: LucideIcon }[] }) {
  const reduceMotion = useReducedMotion();
  const duplicated = [...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #1e293b, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #1e293b, transparent)' }} />
      <motion.div
        className="flex gap-3"
        style={{ width: 'max-content' }}
        animate={reduceMotion ? {} : { x: ['0%', '-50%'] }}
        transition={{ duration: 26, ease: 'linear', repeat: reduceMotion ? 0 : Infinity }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap shrink-0"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <item.icon size={16} strokeWidth={2} color="#00b4d8" aria-hidden="true" />
            <span className="text-[13px] font-semibold" style={{ color: '#cbd5e1' }}>{item.label}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Animated progress bar (dark track) ─────────────────────────────── */
function ProgressBar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-2.5 rounded-md overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : {}}
        transition={{ duration: 1.4, delay, ease: 'easeOut' }}
        style={{
          height: '100%',
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          borderRadius: 6,
          boxShadow: `0 0 10px ${color}55`,
        }}
      />
    </div>
  );
}

/* ─── Data (content preserved; icons8 URLs swapped for lucide icons) ─── */
const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', caption: 'Shipped on time, on budget', color: '#0066ff' },
  { value: 80, suffix: '+', label: 'Enterprise Clients', caption: 'From seed-stage to Fortune 500', color: '#6366f1' },
  { value: 5, suffix: '+', label: 'Years of Excellence', caption: 'Consistent growth since 2019', color: '#00b4d8' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', caption: 'Verified across all engagements', color: '#059669' },
];

const benchmarks = [
  { label: 'Client Satisfaction', pct: 98, color: '#0066ff' },
  { label: 'On-Time Delivery', pct: 94, color: '#6366f1' },
  { label: 'Project Success Rate', pct: 97, color: '#059669' },
  { label: 'Code Quality Score', pct: 96, color: '#00b4d8' },
];

/* Genuine third-party brand/tech logos — kept as <img>, matching the
   existing convention in TechStackSection.tsx */
const techStack = [
  { name: 'Next.js', iconUrl: 'https://img.icons8.com/color/48/nextjs.png' },
  { name: 'Python', iconUrl: 'https://img.icons8.com/color/48/python.png' },
  { name: 'AWS', iconUrl: 'https://img.icons8.com/color/48/amazon-web-services.png' },
  { name: 'React', iconUrl: 'https://img.icons8.com/color/48/react-native.png' },
  { name: 'Node.js', iconUrl: 'https://img.icons8.com/color/48/nodejs.png' },
  { name: 'GCP', iconUrl: 'https://img.icons8.com/color/48/google-cloud.png' },
  { name: 'TensorFlow', iconUrl: 'https://img.icons8.com/color/48/tensorflow.png' },
  { name: 'Docker', iconUrl: 'https://img.icons8.com/color/48/docker.png' },
  { name: 'PostgreSQL', iconUrl: 'https://img.icons8.com/color/48/postgreesql.png' },
  { name: 'TypeScript', iconUrl: 'https://img.icons8.com/color/48/typescript.png' },
  { name: 'Cloud DevOps', iconUrl: 'https://img.icons8.com/color/48/cloud-sync.png' },
  { name: 'DevOps', iconUrl: 'https://img.icons8.com/color/48/data-configuration.png' },
  { name: 'MEAN', iconUrl: 'https://img.icons8.com/color/48/javascript.png' },
  { name: 'MERN', iconUrl: 'https://img.icons8.com/color/48/programming.png' },
  { name: 'Java', iconUrl: 'https://img.icons8.com/color/48/java-coffee-cup-logo.png' },
  { name: 'Kafka', iconUrl: 'https://img.icons8.com/color/48/network-cable.png' },
  { name: 'Dot Net', iconUrl: 'https://img.icons8.com/color/48/net-framework.png' },
  { name: 'Shopify', iconUrl: 'https://img.icons8.com/color/48/shopify.png' },
  { name: 'WordPress', iconUrl: 'https://img.icons8.com/color/48/wordpress.png' },
  { name: 'Kubernetes', iconUrl: 'https://img.icons8.com/color/48/kubernetes.png' },
  { name: 'Redis', iconUrl: 'https://img.icons8.com/color/48/redis.png' },
  { name: 'MySQL', iconUrl: 'https://img.icons8.com/color/48/mysql-logo.png' },
  { name: 'GraphQL', iconUrl: 'https://img.icons8.com/color/48/graphql.png' },
  { name: 'Firebase', iconUrl: 'https://img.icons8.com/color/48/firebase.png' },
  { name: 'Tailwind CSS', iconUrl: 'https://img.icons8.com/color/48/tailwindcss.png' },
  { name: 'Nginx', iconUrl: 'https://img.icons8.com/color/48/nginx.png' },
  { name: 'Linux', iconUrl: 'https://img.icons8.com/color/48/linux.png' },
  { name: 'Git', iconUrl: 'https://img.icons8.com/color/48/git.png' },
  { name: 'GitHub', iconUrl: 'https://img.icons8.com/color/48/github.png' },
  { name: 'Jira', iconUrl: 'https://img.icons8.com/color/48/jira.png' },
  { name: 'Figma', iconUrl: 'https://img.icons8.com/color/48/figma.png' },
  { name: 'Android', iconUrl: 'https://img.icons8.com/color/48/android-os.png' },
  { name: 'macOS', iconUrl: 'https://img.icons8.com/color/48/mac-os.png' },
  { name: 'Ubuntu', iconUrl: 'https://img.icons8.com/color/48/ubuntu.png' },
  { name: 'NPM', iconUrl: 'https://img.icons8.com/color/48/npm.png' },
];

const certifications: { icon?: LucideIcon; iconUrl?: string; label: string; desc: string }[] = [
  { icon: ShieldCheck, label: 'ISO 27001', desc: 'Information Security Mgmt' },
  { icon: CheckCircle2, label: 'SOC 2 Type II', desc: 'Trust Services Criteria' },
  { icon: Lock, label: 'GDPR Ready', desc: 'EU Data Privacy Compliant' },
  { iconUrl: 'https://img.icons8.com/color/48/amazon-web-services.png', label: 'AWS Partner', desc: 'Advanced Cloud Solutions' },
  { icon: Zap, label: 'SLA 99.9%', desc: 'Guaranteed Uptime' },
  { icon: Trophy, label: 'Agile Certified', desc: 'Scaled Agile Framework' },
];

const highlights = [
  { icon: Target, text: 'Agile & Iterative Development', color: '#0066ff' },
  { icon: Lock, text: 'Enterprise Security Compliant', color: '#ef4444' },
  { icon: Zap, text: 'Sub-Second Load Performance', color: '#f59e0b' },
  { icon: Handshake, text: '24/7 Dedicated Support', color: '#10b981' },
  { icon: Globe, text: 'Global Delivery, Local Teams', color: '#00b4d8' },
  { icon: Recycle, text: 'Long-Term Partnership Model', color: '#6366f1' },
];

const industries = [
  { label: 'FinTech', icon: Landmark },
  { label: 'Healthcare', icon: Stethoscope },
  { label: 'SaaS', icon: Cloud },
  { label: 'E-Commerce', icon: ShoppingBag },
  { label: 'EdTech', icon: BookOpen },
  { label: 'Logistics', icon: Truck },
  { label: 'Legal Tech', icon: Scale },
  { label: 'Real Estate', icon: Building2 },
  { label: 'InsureTech', icon: FileText },
  { label: 'HR & Workforce', icon: Users },
  { label: 'AI & Robotics', icon: Bot },
  { label: 'Media & OTT', icon: Tv },
];

const missionVision = [
  {
    icon: Target,
    color: '#0066ff',
    title: 'Our Mission',
    text: 'To democratize access to cutting-edge technology — making world-class software engineering accessible to every business, from bold startups to established enterprises, empowering them to achieve more through intelligent digital systems.',
    link: 'How we work →',
  },
  {
    icon: Telescope,
    color: '#6366f1',
    title: 'Our Vision',
    text: 'To be the global benchmark in AI-driven digital transformation — creating solutions that don\'t just solve today\'s problems, but architect the systems that define tomorrow\'s industries, setting new standards for engineering excellence.',
    link: 'Our work →',
  },
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': 'https://www.eryonai.com/#organization',
  name: 'ERYON AI',
  legalName: 'ERYON AI Technologies',
  url: 'https://www.eryonai.com',
  logo: 'https://www.eryonai.com/logo.png',
  description:
    'ERYON AI is an enterprise software engineering agency based in New Delhi, India, specializing in AI/ML solutions, cloud-native architectures, full-stack web development, mobile apps, and cybersecurity for startups and enterprises worldwide.',
  foundingDate: '2019',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 50 },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-78278-86571',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  email: 'connect@eryonai.com',
  knowsAbout: [
    'Artificial Intelligence', 'Machine Learning', 'Cloud Computing',
    'Web Development', 'Mobile App Development', 'Cybersecurity',
    'DevOps', 'UI/UX Design', 'Software Engineering',
  ],
  areaServed: { '@type': 'GeoShape', name: 'Worldwide' },
  hasCredential: ['ISO 27001', 'SOC 2 Type II', 'GDPR Compliant'],
};

/* ─── Main Section ───────────────────────────────────────────────────── */
export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />

      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: '#0f172a' }}
      >
        {/* Radial background glow, matches CapabilitiesSection */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,102,255,0.08) 0%, transparent 70%)',
        }} />

        <div className="container-custom relative z-10" ref={ref}>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 1 — STORY HERO
          ═══════════════════════════════════════════════════════════ */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <SectionBadge icon={Sparkles} label="About ERYON AI" />
            </motion.div>

            <motion.h2
              id="about-heading"
              className="text-3xl md:text-5xl font-extrabold mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Engineering Intelligence,{' '}
              <span style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Delivering Excellence
              </span>
            </motion.h2>

            {/* GEO-optimized entity statement */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base md:text-lg mb-3"
              style={{ color: '#94a3b8', lineHeight: 1.8 }}
            >
              ERYON AI is an enterprise software engineering agency headquartered in{' '}
              <strong style={{ color: '#f8fafc', fontWeight: 700 }}>New Delhi, India</strong>, delivering{' '}
              <strong style={{ color: '#f8fafc', fontWeight: 700 }}>AI/ML solutions, cloud-native architectures,
              full-stack products, and cybersecurity</strong> for startups and global enterprises since 2019.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="text-sm max-w-xl mx-auto"
              style={{ color: '#94a3b8', lineHeight: 1.75 }}
            >
              From seed-stage startups building their first MVP to Fortune 500 enterprises modernizing legacy systems —
              we architect digital experiences that are not just functional, but transformative.
            </motion.p>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 2 — STATS STRIP
          ═══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.14 + i * 0.08 }}
              >
                <GlowCard color={s.color} className="p-6 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="-mx-6 -mt-6 mb-3 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />
                  <p
                    className="text-3xl md:text-4xl font-extrabold mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', color: s.color }}
                  >
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-[13px] font-bold mb-1" style={{ color: '#f1f5f9' }}>{s.label}</p>
                  <p className="text-[11px] leading-snug" style={{ color: '#94a3b8' }}>{s.caption}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 3 — MISSION + VISION
          ═══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {missionVision.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.08 }}
              >
                <GlowCard color={item.color} className="p-7 md:p-8">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={22} strokeWidth={2} color={item.color} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-extrabold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm mb-5" style={{ color: '#94a3b8', lineHeight: 1.75 }}>
                    {item.text}
                  </p>
                  <button
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-1 text-sm font-bold bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e293b] rounded"
                    style={{ color: item.color }}
                  >
                    {item.link}
                  </button>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 4 — PROOF TRIPTYCH
          ═══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            {/* Col 1: Performance Benchmarks */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              <GlowCard color="#0066ff" className="p-7">
                <div className="flex items-center gap-2.5 mb-6">
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)' }}
                  >
                    <BarChart3 size={18} strokeWidth={2} color="#fff" aria-hidden="true" />
                  </div>
                  <h3 className="text-[15px] font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc' }}>
                    Performance Benchmarks
                  </h3>
                </div>
                <div className="flex flex-col gap-4.5">
                  {benchmarks.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[13px] font-medium" style={{ color: '#cbd5e1' }}>{item.label}</span>
                        <span className="text-[13px] font-bold" style={{ color: item.color }}>{item.pct}%</span>
                      </div>
                      <ProgressBar pct={item.pct} color={item.color} delay={0.6 + i * 0.12} />
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Col 2: Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.36 }}
            >
              <GlowCard color="#6366f1" className="p-7">
                <div className="flex items-center gap-2.5 mb-6">
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                  >
                    <Settings size={18} strokeWidth={2} color="#fff" aria-hidden="true" />
                  </div>
                  <h3 className="text-[15px] font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc' }}>
                    Core Technology Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech) => (
                    <motion.span
                      key={tech.name}
                      whileHover={{ scale: 1.1, y: -2 }}
                      title={tech.name}
                      className="w-11 h-11 rounded-[10px] flex items-center justify-center cursor-default"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <img src={tech.iconUrl} alt={tech.name} style={{ width: 24, height: 24, objectFit: 'contain' }} loading="lazy" />
                    </motion.span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Col 3: Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.44 }}
            >
              <GlowCard color="#10b981" className="p-7">
                <div className="flex items-center gap-2.5 mb-6">
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #059669, #34d399)' }}
                  >
                    <Medal size={18} strokeWidth={2} color="#fff" aria-hidden="true" />
                  </div>
                  <h3 className="text-[15px] font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc' }}>
                    Certifications &amp; Trust
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      {cert.icon ? (
                        <cert.icon size={20} strokeWidth={2} color="#10b981" aria-hidden="true" className="shrink-0" />
                      ) : (
                        <img src={cert.iconUrl} alt={cert.label} style={{ width: 20, height: 20, objectFit: 'contain', flexShrink: 0 }} loading="lazy" />
                      )}
                      <div>
                        <p className="text-[12.5px] font-bold leading-tight" style={{ color: '#f1f5f9' }}>{cert.label}</p>
                        <p className="text-[11px] mt-0.5" style={{ color: '#94a3b8' }}>{cert.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 5 — INDUSTRIES MARQUEE
          ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-5"
          >
            <div className="text-center mb-4">
              <p className="text-[11px] font-bold uppercase" style={{ color: '#64748b', letterSpacing: '0.1em' }}>
                Industries We&apos;ve Transformed
              </p>
            </div>
            <div
              className="rounded-2xl py-5"
              style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <InfiniteMarquee items={industries} />
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 6 — TRUST HIGHLIGHTS
          ═══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.46 + i * 0.05 }}
              >
                <GlowCard color={h.color} className="px-4.5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
                      style={{ background: `${h.color}18`, border: `1px solid ${h.color}30` }}
                    >
                      <h.icon size={17} strokeWidth={2} color={h.color} aria-hidden="true" />
                    </div>
                    <span className="text-[13px] font-semibold leading-tight" style={{ color: '#e2e8f0' }}>{h.text}</span>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
