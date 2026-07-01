'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const capabilities = [
  {
    icon: '🧠',
    title: 'AI & Machine Learning',
    description: 'Custom LLMs, RAG pipelines, computer vision, NLP, and predictive analytics that deliver measurable business outcomes.',
    tags: ['LLM Fine-tuning', 'Vector DB', 'MLOps', 'Agentic AI'],
    color: '#0066ff',
    glow: 'rgba(0,102,255,0.15)',
    gradient: 'linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,180,216,0.08))',
  },
  {
    icon: '🌐',
    title: 'Enterprise Web Apps',
    description: 'High-performance, SEO-optimized web platforms built with Next.js, React, and TypeScript — from SaaS portals to B2B systems.',
    tags: ['Next.js', 'React', 'TypeScript', 'GraphQL'],
    color: '#00b4d8',
    glow: 'rgba(0,180,216,0.15)',
    gradient: 'linear-gradient(135deg, rgba(0,180,216,0.12), rgba(99,102,241,0.08))',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Polished, cross-platform mobile apps with exceptional UX. React Native and Flutter apps for iOS and Android.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.15)',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08))',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Multi-cloud architecture, CI/CD pipelines, Kubernetes orchestration, and FinOps strategies that keep your infrastructure lean and fast.',
    tags: ['AWS', 'GCP', 'Kubernetes', 'Terraform'],
    color: '#10b981',
    glow: 'rgba(16,185,129,0.15)',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(245,158,11,0.08))',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'End-to-end security audits, penetration testing, zero-trust architecture, and compliance frameworks for ISO 27001 and SOC 2.',
    tags: ['Pen Testing', 'Zero Trust', 'ISO 27001', 'SIEM'],
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.15)',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(239,68,68,0.08))',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Research-driven design systems, interactive prototypes, and pixel-perfect implementations that convert visitors into customers.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'A/B Testing'],
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.15)',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(99,102,241,0.08))',
  },
];

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: '#070c1a' }}>
      {/* Radial background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,102,255,0.08) 0%, transparent 70%)',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(0,102,255,0.1)', border: '1px solid rgba(0,102,255,0.25)', color: '#60a5fa' }}>
            ⚡ Core Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Everything You Need to{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Build & Scale
            </span>
          </h2>
          <p className="text-base md:text-lg" style={{ color: '#64748b', lineHeight: 1.7 }}>
            From ideation to production deployment, we cover the full spectrum of modern digital engineering.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-2xl p-6 md:p-7 flex flex-col overflow-hidden cursor-default"
              style={{
                background: cap.gradient,
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
              }}
              whileHover={{ y: -4 }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cap.color}50`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${cap.glow}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-5">{cap.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3" style={{ color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#94a3b8' }}>
                {cap.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag, ti) => (
                  <span key={ti} className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: `${cap.color}18`, color: cap.color, border: `1px solid ${cap.color}30` }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${cap.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
