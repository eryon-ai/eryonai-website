'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techs = [
  { name: 'React', cat: 'Frontend', icon: '⚛️', color: '#0066ff' },
  { name: 'Next.js', cat: 'Frontend', icon: '▲', color: '#0f172a' },
  { name: 'TypeScript', cat: 'Language', icon: 'TS', color: '#3b82f6' },
  { name: 'Spring Boot', cat: 'Backend', icon: '🍃', color: '#10b981' },
  { name: 'Python', cat: 'AI/ML', icon: '🐍', color: '#f59e0b' },
  { name: 'TensorFlow', cat: 'AI/ML', icon: '🧠', color: '#f97316' },
  { name: 'PostgreSQL', cat: 'Database', icon: '🐘', color: '#3b82f6' },
  { name: 'MongoDB', cat: 'Database', icon: '🍃', color: '#10b981' },
  { name: 'Redis', cat: 'Cache', icon: '⚡', color: '#ef4444' },
  { name: 'AWS', cat: 'Cloud', icon: '☁️', color: '#f97316' },
  { name: 'Docker', cat: 'DevOps', icon: '🐳', color: '#0066ff' },
  { name: 'Kubernetes', cat: 'DevOps', icon: '☸️', color: '#6366f1' },
  { name: 'Terraform', cat: 'IaC', icon: '🏗️', color: '#7c3aed' },
  { name: 'Kafka', cat: 'Streaming', icon: '📨', color: '#ec4899' },
  { name: 'GraphQL', cat: 'API', icon: '◈', color: '#ec4899' },
  { name: 'React Native', cat: 'Mobile', icon: '📱', color: '#0066ff' },
];

const row1 = [...techs.slice(0, 8), ...techs.slice(0, 8)];
const row2 = [...techs.slice(8, 16), ...techs.slice(8, 16)];

function TechCard({ tech }: { tech: typeof techs[0] }) {
  return (
    <div
      className="flex-shrink-0 card flex items-center gap-3"
      style={{
        minWidth: 158,
        padding: '14px 18px',
        borderRadius: 12,
        transition: 'none',
        cursor: 'default',
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          width: 36,
          height: 36,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `${tech.color}12`,
          color: tech.color,
          border: `1px solid ${tech.color}20`,
          flexShrink: 0,
        }}
      >
        {tech.icon}
      </span>
      <div>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#0f172a', lineHeight: 1.2 }}>{tech.name}</p>
        <p style={{ fontSize: 11, color: '#94a3b8', marginTop: 1 }}>{tech.cat}</p>
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="tech-stack" className="section-pad" style={{ background: '#ffffff' }}>
      <div ref={ref}>
        {/* Header */}
        <div className="container-custom text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <div className="section-label mx-auto" style={{ display: 'inline-flex' }}>Technology</div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="section-title"
            style={{ marginTop: 12 }}
          >
            Our <span className="gradient-text">Tech Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="section-subtitle centered"
            style={{ marginTop: 12 }}
          >
            Battle-tested technologies chosen for reliability, performance, and future-readiness.
          </motion.p>
        </div>

        {/* Scrolling rows */}
        <div className="relative overflow-hidden" style={{ padding: '8px 0' }}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

          {/* Row 1 — scroll left */}
          <div className="flex gap-4 mb-4" style={{ animation: 'scroll-left 28s linear infinite' }}>
            {row1.map((t, i) => <TechCard key={i} tech={t} />)}
          </div>

<div style={{ marginBottom: 26 }} />
          {/* Row 2 — scroll right */}
          <div className="flex gap-9" style={{ animation: 'scroll-right 24s linear infinite' }}>
            {row2.map((t, i) => <TechCard key={i} tech={t} />)}
          </div>
        </div>
        <div style={{ marginBottom: 16 }} />

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="container-custom mt-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {['Frontend', 'Backend', 'AI/ML', 'Mobile', 'Cloud', 'DevOps', 'Database', 'Security'].map((cat) => (
              <span
                key={cat}
                className="tag-blue"
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '6px 14px',
                  borderRadius: 100,
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
