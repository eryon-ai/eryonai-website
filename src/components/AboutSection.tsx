'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Script from 'next/script';

/* ─── Animated counter ─────────────────────────────────────────────── */
function CountUp({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60, dur = 2000;
    let cur = 0;
    const inc = target / steps;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(cur));
    }, dur / steps);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Infinite marquee ─────────────────────────────────────────────── */
function InfiniteMarquee({ items }: { items: { label: string; iconUrl: string }[] }) {
  const duplicated = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
        background: 'linear-gradient(to right, #f0f7ff, transparent)', zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
        background: 'linear-gradient(to left, #f0f7ff, transparent)', zIndex: 2, pointerEvents: 'none',
      }} />
      <div
        style={{
          display: 'flex', gap: 12, width: 'max-content',
          animation: 'scroll-left 28s linear infinite',
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 16px', borderRadius: 99,
              background: '#fff', border: '1.5px solid #e2e8f0',
              fontSize: 13, fontWeight: 600, color: '#334155',
              whiteSpace: 'nowrap', boxShadow: '0 1px 4px rgba(15,23,42,0.05)',
            }}
          >
            <img src={item.iconUrl} alt={item.label} style={{ width: 18, height: 18, objectFit: 'contain' }} loading="lazy" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Animated progress bar ─────────────────────────────────────────── */
function ProgressBar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ height: 10, background: '#f1f5f9', borderRadius: 6, overflow: 'hidden' }}>
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

/* ─── Data ──────────────────────────────────────────────────────────── */
const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', caption: 'Shipped on time, on budget', color: '#0A5CFF' },
  { value: 80,  suffix: '+', label: 'Enterprise Clients',  caption: 'From seed-stage to Fortune 500', color: '#6366f1' },
  { value: 5,   suffix: '+', label: 'Years of Excellence', caption: 'Consistent growth since 2019', color: '#0096c7' },
  { value: 98,  suffix: '%', label: 'Satisfaction Rate',   caption: 'Verified across all engagements', color: '#059669' },
];

const benchmarks = [
  { label: 'Client Satisfaction', pct: 98, color: '#0A5CFF' },
  { label: 'On-Time Delivery',    pct: 94, color: '#6366f1' },
  { label: 'Project Success Rate', pct: 97, color: '#059669' },
  { label: 'Code Quality Score',  pct: 96, color: '#0096c7' },
];

const techStack = [
  { name: 'Next.js',      iconUrl: 'https://img.icons8.com/color/48/nextjs.png',              bg: '#f8f8f8', border: '#00000020' },
  { name: 'Python',       iconUrl: 'https://img.icons8.com/color/48/python.png',              bg: '#eff6ff', border: '#3776ab30' },
  { name: 'AWS',          iconUrl: 'https://img.icons8.com/color/48/amazon-web-services.png', bg: '#fff7ed', border: '#e8810a30' },
  { name: 'React',        iconUrl: 'https://img.icons8.com/color/48/react-native.png',        bg: '#f0f9ff', border: '#0ea5e930' },
  { name: 'Node.js',      iconUrl: 'https://img.icons8.com/color/48/nodejs.png',              bg: '#f0fdf4', border: '#33993330' },
  { name: 'GCP',          iconUrl: 'https://img.icons8.com/color/48/google-cloud.png',        bg: '#eff6ff', border: '#4285f430' },
  { name: 'TensorFlow',   iconUrl: 'https://img.icons8.com/color/48/tensorflow.png',          bg: '#fff7ed', border: '#ff6f0030' },
  { name: 'Docker',       iconUrl: 'https://img.icons8.com/color/48/docker.png',              bg: '#eff6ff', border: '#2496ed30' },
  { name: 'PostgreSQL',   iconUrl: 'https://img.icons8.com/color/48/postgreesql.png',         bg: '#eff6ff', border: '#33679130' },
  { name: 'TypeScript',   iconUrl: 'https://img.icons8.com/color/48/typescript.png',          bg: '#eff6ff', border: '#3178c630' },
  { name: 'Cloud DevOps', iconUrl: 'https://img.icons8.com/color/48/cloud-sync.png',          bg: '#f0f9ff', border: '#0ea5e930' },
  { name: 'DevOps',       iconUrl: 'https://img.icons8.com/color/48/data-configuration.png',  bg: '#eff6ff', border: '#3776ab30' },
  { name: 'MEAN',         iconUrl: 'https://img.icons8.com/color/48/javascript.png',          bg: '#fff7ed', border: '#e8810a30' },
  { name: 'MERN',         iconUrl: 'https://img.icons8.com/color/48/programming.png',         bg: '#f0f9ff', border: '#0ea5e930' },
  { name: 'Java',         iconUrl: 'https://img.icons8.com/color/48/java-coffee-cup-logo.png',bg: '#fff7ed', border: '#e8810a30' },
  { name: 'Kafka',        iconUrl: 'https://img.icons8.com/color/48/network-cable.png',       bg: '#eff6ff', border: '#3776ab30' },
  { name: 'Dot Net',      iconUrl: 'https://img.icons8.com/color/48/net-framework.png',       bg: '#f0f9ff', border: '#0ea5e930' },
  { name: 'Shopify',      iconUrl: 'https://img.icons8.com/color/48/shopify.png',             bg: '#f0fdf4', border: '#33993330' },
  { name: 'WordPress',    iconUrl: 'https://img.icons8.com/color/48/wordpress.png',           bg: '#f8f8f8', border: '#00000020' },
  { name: 'Kubernetes',   iconUrl: 'https://img.icons8.com/color/48/kubernetes.png',          bg: '#eff6ff', border: '#3178c630' },
  { name: 'Redis',        iconUrl: 'https://img.icons8.com/color/48/redis.png',               bg: '#fff7ed', border: '#ff6f0030' },
  { name: 'MySQL',        iconUrl: 'https://img.icons8.com/color/48/mysql-logo.png',          bg: '#eff6ff', border: '#33679130' },
  { name: 'GraphQL',      iconUrl: 'https://img.icons8.com/color/48/graphql.png',             bg: '#f0fdf4', border: '#33993330' },
  { name: 'Firebase',     iconUrl: 'https://img.icons8.com/color/48/firebase.png',            bg: '#fff7ed', border: '#e8810a30' },
  { name: 'Tailwind CSS', iconUrl: 'https://img.icons8.com/color/48/tailwindcss.png',         bg: '#f0f9ff', border: '#0ea5e930' },
  { name: 'Nginx',        iconUrl: 'https://img.icons8.com/color/48/nginx.png',               bg: '#f0fdf4', border: '#33993330' },
  { name: 'Linux',        iconUrl: 'https://img.icons8.com/color/48/linux.png',               bg: '#f8f8f8', border: '#00000020' },
  { name: 'Git',          iconUrl: 'https://img.icons8.com/color/48/git.png',                 bg: '#fff7ed', border: '#e8810a30' },
  { name: 'GitHub',       iconUrl: 'https://img.icons8.com/color/48/github.png',              bg: '#f8f8f8', border: '#00000020' },
  { name: 'Jira',         iconUrl: 'https://img.icons8.com/color/48/jira.png',                bg: '#eff6ff', border: '#3776ab30' },
  { name: 'Figma',        iconUrl: 'https://img.icons8.com/color/48/figma.png',               bg: '#f0f9ff', border: '#0ea5e930' },
  { name: 'Android',      iconUrl: 'https://img.icons8.com/color/48/android-os.png',          bg: '#f0fdf4', border: '#33993330' },
  { name: 'macOS',        iconUrl: 'https://img.icons8.com/color/48/mac-os.png',              bg: '#f8f8f8', border: '#00000020' },
  { name: 'Ubuntu',       iconUrl: 'https://img.icons8.com/color/48/ubuntu.png',              bg: '#fff7ed', border: '#e8810a30' },
  { name: 'NPM',          iconUrl: 'https://img.icons8.com/color/48/npm.png',                 bg: '#fff7ed', border: '#ff6f0030' },
];

const certifications = [
  { iconUrl: 'https://img.icons8.com/color/48/shield.png',      label: 'ISO 27001',      desc: 'Information Security Mgmt' },
  { iconUrl: 'https://img.icons8.com/color/48/approve.png',     label: 'SOC 2 Type II',  desc: 'Trust Services Criteria' },
  { iconUrl: 'https://img.icons8.com/color/48/lock.png',        label: 'GDPR Ready',     desc: 'EU Data Privacy Compliant' },
  { iconUrl: 'https://img.icons8.com/color/48/amazon-web-services.png', label: 'AWS Partner', desc: 'Advanced Cloud Solutions' },
  { iconUrl: 'https://img.icons8.com/color/48/flash-on.png',   label: 'SLA 99.9%',      desc: 'Guaranteed Uptime' },
  { iconUrl: 'https://img.icons8.com/color/48/trophy.png',      label: 'Agile Certified', desc: 'Scaled Agile Framework' },
];

const highlights = [
  { iconUrl: 'https://img.icons8.com/color/48/target.png',      text: 'Agile & Iterative Development' },
  { iconUrl: 'https://img.icons8.com/color/48/lock.png',        text: 'Enterprise Security Compliant' },
  { iconUrl: 'https://img.icons8.com/color/48/flash-on.png',   text: 'Sub-Second Load Performance' },
  { iconUrl: 'https://img.icons8.com/color/48/handshake.png',   text: '24/7 Dedicated Support' },
  { iconUrl: 'https://img.icons8.com/color/48/globe.png',       text: 'Global Delivery, Local Teams' },
  { iconUrl: 'https://img.icons8.com/color/48/recycling.png',   text: 'Long-Term Partnership Model' },
];

const industries = [
  { label: 'FinTech',        iconUrl: 'https://img.icons8.com/color/48/bank.png' },
  { label: 'Healthcare',     iconUrl: 'https://img.icons8.com/color/48/hospital.png' },
  { label: 'SaaS',           iconUrl: 'https://img.icons8.com/color/48/cloud.png' },
  { label: 'E-Commerce',     iconUrl: 'https://img.icons8.com/color/48/online-store.png' },
  { label: 'EdTech',         iconUrl: 'https://img.icons8.com/color/48/books--v1.png' },
  { label: 'Logistics',      iconUrl: 'https://img.icons8.com/color/48/truck.png' },
  { label: 'Legal Tech',     iconUrl: 'https://img.icons8.com/color/48/court.png' },
  { label: 'Real Estate',    iconUrl: 'https://img.icons8.com/color/48/property.png' },
  { label: 'InsureTech',     iconUrl: 'https://img.icons8.com/color/48/agreement.png' },
  { label: 'HR & Workforce', iconUrl: 'https://img.icons8.com/color/48/teamwork.png' },
  { label: 'AI & Robotics',  iconUrl: 'https://img.icons8.com/color/48/artificial-intelligence.png' },
  { label: 'Media & OTT',    iconUrl: 'https://img.icons8.com/color/48/tv.png' },
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
    telephone: '+91-82852-56571',
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

/* ─── Stagger children helper ────────────────────────────────────────── */
const stagger = (i: number, base = 0) => ({ delay: base + i * 0.08 });

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
        style={{
          background: 'linear-gradient(180deg, #f0f7ff 0%, #f8fafc 50%, #ffffff 100%)',
          paddingTop: 96, paddingBottom: 112,
          overflow: 'hidden',
        }}
      >
        <div className="container-custom" ref={ref}>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 1 — STORY HERO
          ═══════════════════════════════════════════════════════════ */}
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label" style={{ display: 'inline-flex', marginBottom: 20 }}>
                About ERYON AI
              </div>
            </motion.div>

            <motion.h2
              id="about-heading"
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              style={{ maxWidth: 760, marginInline: 'auto', marginBottom: 20 }}
            >
              Engineering Intelligence,{' '}
              <span className="gradient-text">Delivering Excellence</span>
            </motion.h2>

            {/* GEO-optimized entity statement */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
              style={{
                fontSize: 17, color: '#475569', lineHeight: 1.8,
                maxWidth: 680, marginInline: 'auto', marginBottom: 10,
              }}
            >
              ERYON AI is an enterprise software engineering agency headquartered in{' '}
              <strong style={{ color: '#0f172a', fontWeight: 700 }}>New Delhi, India</strong>, delivering{' '}
              <strong style={{ color: '#0f172a', fontWeight: 700 }}>AI/ML solutions, cloud-native architectures,
              full-stack products, and cybersecurity</strong> for startups and global enterprises since 2019.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.24 }}
              style={{ fontSize: 15, color: '#94a3b8', maxWidth: 560, marginInline: 'auto', lineHeight: 1.75 }}
            >
              From seed-stage startups building their first MVP to Fortune 500 enterprises modernizing legacy systems —
              we architect digital experiences that are not just functional, but transformative.
            </motion.p>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 2 — STATS STRIP
          ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="about-stats-strip"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: 20,
              boxShadow: '0 4px 24px rgba(15,23,42,0.07)',
              marginBottom: 72,
              overflow: 'hidden',
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ background: '#f8fafc' }}
                style={{
                  padding: '36px 24px', textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid #e2e8f0' : 'none',
                  cursor: 'default', transition: 'background 0.2s',
                }}
              >
                <p style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 44, fontWeight: 800, lineHeight: 1,
                  marginBottom: 6,
                  background: `linear-gradient(135deg, ${s.color}, ${s.color}99)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </p>
                <p style={{ fontSize: 13.5, color: '#0f172a', fontWeight: 700, marginBottom: 4 }}>{s.label}</p>
                <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>{s.caption}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 3 — MISSION + VISION (equal-height 2-col)
          ═══════════════════════════════════════════════════════════ */}
          <div
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 20, marginBottom: 20, alignItems: 'stretch',
            }}
            className="about-mv-grid"
          >
            {[
              {
                iconUrl: 'https://img.icons8.com/color/48/target.png', color: '#0A5CFF', gradBg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                border: '#bfdbfe',
                title: 'Our Mission',
                text: 'To democratize access to cutting-edge technology — making world-class software engineering accessible to every business, from bold startups to established enterprises, empowering them to achieve more through intelligent digital systems.',
                link: 'How we work →',
              },
              {
                iconUrl: 'https://img.icons8.com/color/48/telescope.png', color: '#6366f1', gradBg: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
                border: '#c7d2fe',
                title: 'Our Vision',
                text: 'To be the global benchmark in AI-driven digital transformation — creating solutions that don\'t just solve today\'s problems, but architect the systems that define tomorrow\'s industries, setting new standards for engineering excellence.',
                link: 'Our work →',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ...stagger(i, 0.2) }}
                whileHover={{ y: -4 }}
                style={{
                  padding: '32px', borderRadius: 20,
                  background: item.gradBg,
                  border: `1.5px solid ${item.border}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default',
                }}
              >
                <img src={item.iconUrl} alt={item.title} style={{ width: 32, height: 32, objectFit: 'contain', marginBottom: 16 }} loading="lazy" />
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 18, fontWeight: 800, color: '#0f172a',
                  marginBottom: 12,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14.5, color: '#475569', lineHeight: 1.75, marginBottom: 20 }}>
                  {item.text}
                </p>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: 13, fontWeight: 700, color: item.color,
                    padding: 0, display: 'flex', alignItems: 'center', gap: 4,
                    transition: 'gap 0.2s',
                  }}
                >
                  {item.link}
                </button>
              </motion.div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 4 — PROOF TRIPTYCH (3-col)
          ═══════════════════════════════════════════════════════════ */}
          <div
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              gap: 20, marginBottom: 20,
            }}
            className="about-triptych-grid"
          >
            {/* Col 1: Performance Benchmarks */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.28 }}
              style={{ padding: 28 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'linear-gradient(135deg, #0A5CFF, #0096c7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, flexShrink: 0,
                }}>
                  <img src="https://img.icons8.com/color/48/bar-chart.png" alt="benchmarks" style={{ width: 20, height: 20, objectFit: 'contain' }} loading="lazy" />
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, fontWeight: 700, color: '#0f172a' }}>
                  Performance Benchmarks
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {benchmarks.map((item, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 13, color: '#334155', fontWeight: 500 }}>{item.label}</span>
                      <span style={{ fontSize: 13, color: item.color, fontWeight: 700 }}>{item.pct}%</span>
                    </div>
                    <ProgressBar pct={item.pct} color={item.color} delay={0.6 + i * 0.12} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Col 2: Tech Stack */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.36 }}
              style={{ padding: 28 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, flexShrink: 0,
                }}>
                  <img src="https://img.icons8.com/color/48/settings.png" alt="tech stack" style={{ width: 20, height: 20, objectFit: 'contain' }} loading="lazy" />
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, fontWeight: 700, color: '#0f172a' }}>
                  Core Technology Stack
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {techStack.map((tech) => (
                  <motion.span
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    title={tech.name}
                    style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: tech.bg, border: `1.5px solid ${tech.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'default', transition: 'box-shadow 0.2s',
                    }}
                  >
                    <img src={tech.iconUrl} alt={tech.name} style={{ width: 26, height: 26, objectFit: 'contain' }} loading="lazy" />
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Col 3: Certifications */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.44 }}
              style={{ padding: 28 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'linear-gradient(135deg, #059669, #34d399)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, flexShrink: 0,
                }}>
                  <img src="https://img.icons8.com/color/48/medal.png" alt="certifications" style={{ width: 20, height: 20, objectFit: 'contain' }} loading="lazy" />
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 15, fontWeight: 700, color: '#0f172a' }}>
                  Certifications & Trust
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '10px 14px', borderRadius: 12,
                      background: '#f8fafc', border: '1px solid #e2e8f0',
                      transition: 'all 0.2s',
                    }}
                  >
                    <img src={cert.iconUrl} alt={cert.label} style={{ width: 22, height: 22, objectFit: 'contain', flexShrink: 0 }} loading="lazy" />
                    <div>
                      <p style={{ fontSize: 12.5, fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>{cert.label}</p>
                      <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 1 }}>{cert.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 5 — INDUSTRIES MARQUEE
          ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ marginBottom: 20 }}
          >
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Industries We&apos;ve Transformed
              </p>
            </div>
            <div
              style={{
                background: '#fff', border: '1px solid #e2e8f0',
                borderRadius: 16, padding: '20px 0',
                boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
              }}
            >
              <InfiniteMarquee items={industries} />
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════
              BLOCK 6 — TRUST HIGHLIGHTS 3-COL GRID
          ═══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.46 }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 14, marginBottom: 64,
            }}
            className="about-highlights-grid"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(10,92,255,0.1)', borderColor: 'rgba(10,92,255,0.3)' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 18px', borderRadius: 14,
                  background: '#fff', border: '1.5px solid #e2e8f0',
                  transition: 'all 0.25s ease', cursor: 'default',
                }}
              >
                <img src={h.iconUrl} alt={h.text} style={{ width: 22, height: 22, objectFit: 'contain', flexShrink: 0 }} loading="lazy" />
                <span style={{ fontSize: 13, fontWeight: 600, color: '#334155', lineHeight: 1.3 }}>{h.text}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Responsive grid overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .about-triptych-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .about-mv-grid {
            grid-template-columns: 1fr !important;
          }
          .about-triptych-grid {
            grid-template-columns: 1fr !important;
          }
          .about-highlights-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 430px) {
          .about-highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
        /* Stats strip responsive */
        @media (max-width: 640px) {
          .about-stats-strip {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-stats-strip > div {
            border-right: none !important;
            border-bottom: 1px solid #e2e8f0;
          }
          .about-stats-strip > div:nth-child(odd) {
            border-right: 1px solid #e2e8f0 !important;
          }
          .about-stats-strip > div:last-child,
          .about-stats-strip > div:nth-last-child(2) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </>
  );
}
