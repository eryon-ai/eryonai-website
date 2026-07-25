'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Cpu } from 'lucide-react';
import SectionBadge from '@/components/ui/SectionBadge';

const techs = [
  { name: 'React', cat: 'Frontend', iconUrl: 'https://img.icons8.com/color/48/react-native.png', color: '#0066ff' },
  { name: 'Next.js', cat: 'Frontend', iconUrl: 'https://img.icons8.com/color/48/nextjs.png', color: '#0f172a' },
  { name: 'TypeScript', cat: 'Language', iconUrl: 'https://img.icons8.com/color/48/typescript.png', color: '#3b82f6' },
  { name: 'Spring Boot', cat: 'Backend', iconUrl: 'https://img.icons8.com/color/48/spring-logo.png', color: '#10b981' },
  { name: 'Python', cat: 'AI/ML', iconUrl: 'https://img.icons8.com/color/48/python.png', color: '#f59e0b' },
  { name: 'TensorFlow', cat: 'AI/ML', iconUrl: 'https://img.icons8.com/color/48/tensorflow.png', color: '#f97316' },
  { name: 'PostgreSQL', cat: 'Database', iconUrl: 'https://img.icons8.com/color/48/postgreesql.png', color: '#3b82f6' },
  { name: 'MongoDB', cat: 'Database', iconUrl: 'https://img.icons8.com/color/48/mongodb.png', color: '#10b981' },
  { name: 'Redis', cat: 'Cache', iconUrl: 'https://img.icons8.com/color/48/redis.png', color: '#ef4444' },
  { name: 'AWS', cat: 'Cloud', iconUrl: 'https://img.icons8.com/color/48/amazon-web-services.png', color: '#f97316' },
  { name: 'Docker', cat: 'DevOps', iconUrl: 'https://img.icons8.com/color/48/docker.png', color: '#0066ff' },
  { name: 'Kubernetes', cat: 'DevOps', iconUrl: 'https://img.icons8.com/color/48/kubernetes.png', color: '#6366f1' },
  { name: 'Terraform', cat: 'IaC', iconUrl: 'https://img.icons8.com/color/48/terraform.png', color: '#7c3aed' },
  { name: 'Kafka', cat: 'Streaming', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg', color: '#ec4899' },
  { name: 'GraphQL', cat: 'API', iconUrl: 'https://img.icons8.com/color/48/graphql.png', color: '#ec4899' },
  { name: 'React Native', cat: 'Mobile', iconUrl: 'https://img.icons8.com/color/48/react-native.png', color: '#0066ff' },
];

const row1 = [...techs.slice(0, 8), ...techs.slice(0, 8)];
const row2 = [...techs.slice(8, 16), ...techs.slice(8, 16)];

function TechCard({ tech }: { tech: typeof techs[0] }) {
  return (
    <div
      className="flex-shrink-0 flex items-center gap-3"
      style={{
        minWidth: 158,
        padding: '14px 18px',
        borderRadius: 12,
        background: '#1e293b',
        border: '1px solid rgba(255,255,255,0.08)',
        cursor: 'default',
      }}
    >
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `${tech.color}15`,
          border: `1px solid ${tech.color}30`,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <img src={tech.iconUrl} alt={tech.name} style={{ width: 22, height: 22, objectFit: 'contain' }} loading="lazy" />
      </span>
      <div>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#f8fafc', lineHeight: 1.2 }}>{tech.name}</p>
        <p style={{ fontSize: 11, color: '#64748b', marginTop: 1 }}>{tech.cat}</p>
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  return (
    <section id="tech-stack" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#0f172a' }}>
      <div ref={ref}>
        {/* Header */}
        <div className="container-custom text-center mb-14 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <SectionBadge icon={Cpu} label="Technology" color="#00b4d8" className="mx-auto" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Our <span className="gradient-text">Tech Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-base md:text-lg"
            style={{ color: '#94a3b8' }}
          >
            Battle-tested technologies chosen for reliability, performance, and future-readiness.
          </motion.p>
        </div>

        {/* Scrolling rows */}
        <div className="relative overflow-hidden" style={{ padding: '8px 0' }}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0f172a, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0f172a, transparent)' }} />

          {/* Row 1 — scroll left */}
          <motion.div
            className="flex gap-4 mb-4"
            animate={reduceMotion ? {} : { x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: reduceMotion ? 0 : Infinity }}
            style={{ width: 'max-content' }}
          >
            {row1.map((t, i) => <TechCard key={i} tech={t} />)}
          </motion.div>

          <div style={{ marginBottom: 26 }} />
          {/* Row 2 — scroll right */}
          <motion.div
            className="flex gap-9"
            animate={reduceMotion ? {} : { x: ['-50%', '0%'] }}
            transition={{ duration: 24, ease: 'linear', repeat: reduceMotion ? 0 : Infinity }}
            style={{ width: 'max-content' }}
          >
            {row2.map((t, i) => <TechCard key={i} tech={t} />)}
          </motion.div>
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
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '6px 14px',
                  borderRadius: 100,
                  background: 'rgba(0,102,255,0.1)',
                  color: '#3b9dff',
                  border: '1px solid rgba(0,102,255,0.25)',
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
