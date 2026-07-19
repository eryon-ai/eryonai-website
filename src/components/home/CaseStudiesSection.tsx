'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const caseStudies = [
  {
    tag: 'FinTech',
    title: 'Real-Time Trading Dashboard',
    description: 'Rebuilt a legacy trading platform from scratch — handling 3× peak load with sub-20ms latency and 99.99% uptime SLA.',
    metrics: [
      { value: '3×', label: 'Peak Load Capacity' },
      { value: '<20ms', label: 'Response Latency' },
      { value: '99.99%', label: 'Uptime SLA' },
    ],
    tech: ['React', 'Kafka', 'Redis', 'AWS'],
    color: '#0066ff',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    gradient: 'linear-gradient(180deg, transparent 30%, rgba(0,102,255,0.9) 100%)',
  },
  {
    tag: 'HealthTech',
    title: 'AI Patient Intake System',
    description: 'Transformed a manual hospital intake process into an AI-powered triage system that reduced nurse handoff time by 32%.',
    metrics: [
      { value: '32%', label: 'Time Saved' },
      { value: '4.8★', label: 'Patient Rating' },
      { value: '2 Weeks', label: 'Deploy Time' },
    ],
    tech: ['Python', 'FastAPI', 'LLM', 'PostgreSQL'],
    color: '#10b981',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    gradient: 'linear-gradient(180deg, transparent 30%, rgba(16,185,129,0.9) 100%)',
  },
  {
    tag: 'E-Commerce',
    title: 'AI Personalization Engine',
    description: 'Deployed an ML-driven product recommendation layer that lifted repeat purchase rates by 21% within 8 weeks of launch.',
    metrics: [
      { value: '+21%', label: 'Repeat Purchases' },
      { value: '8 Weeks', label: 'Time to Value' },
      { value: '1.4M', label: 'Users Served' },
    ],
    tech: ['Python', 'TensorFlow', 'Next.js', 'GCP'],
    color: '#6366f1',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    gradient: 'linear-gradient(180deg, transparent 30%, rgba(99,102,241,0.9) 100%)',
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: '#0f172a' }}>
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', color: '#a5b4fc' }}>
              💼 Featured Work
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Projects That{' '}
              <span style={{ background: 'linear-gradient(135deg, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Made History
              </span>
            </h2>
          </div>
          <Link href="/portfolio" className="flex-shrink-0 group flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: '#64748b' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f8fafc'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748b'}
          >
            View all case studies
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                  src={cs.img}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: cs.gradient }} />
                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: `${cs.color}30`, border: `1px solid ${cs.color}60`, color: 'white', backdropFilter: 'blur(8px)' }}>
                  {cs.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {cs.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: '#64748b' }}>
                  {cs.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  {cs.metrics.map((m, mi) => (
                    <div key={mi} className="text-center">
                      <p className="text-base font-extrabold" style={{ color: cs.color, fontFamily: 'Space Grotesk, sans-serif' }}>{m.value}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: '#475569' }}>{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {cs.tech.map((t, ti) => (
                    <span key={ti} className="px-2 py-0.5 rounded-full text-[11px] font-semibold"
                      style={{ background: 'rgba(255,255,255,0.06)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
