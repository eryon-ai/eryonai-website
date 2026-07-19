'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    sub: 'On time, on budget',
    icon: '🚀',
    color: '#0066ff',
    glow: 'rgba(0,102,255,0.25)',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime Delivered',
    sub: 'Across all production systems',
    icon: '⚡',
    color: '#00b4d8',
    glow: 'rgba(0,180,216,0.25)',
    decimals: 1,
  },
  {
    value: 80,
    suffix: '+',
    label: 'Enterprise Clients',
    sub: 'Across 15+ countries',
    icon: '🌍',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.25)',
  },
  {
    value: 38,
    suffix: '%',
    label: 'Avg. Cost Reduction',
    sub: 'From AI-driven automation',
    icon: '📉',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.25)',
  },
  {
    value: 8,
    suffix: '+',
    label: 'Years of Excellence',
    sub: 'Building enterprise systems',
    icon: '🏆',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Expert Engineers',
    sub: 'Spanning AI, Cloud & Mobile',
    icon: '👥',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.25)',
  },
];

function AnimatedCounter({ target, suffix, decimals = 0, inView }: { target: number; suffix: string; decimals?: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: '#0f172a' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(0,180,216,0.1)', border: '1px solid rgba(0,180,216,0.2)', color: '#00b4d8' }}>
            📊 By the Numbers
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em' }}>
            Results That Speak{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              For Themselves
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: '#64748b' }}>
            Every metric below represents a real outcome delivered to a real client.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative rounded-2xl p-6 md:p-8 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${m.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${m.glow}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${m.color}, transparent)` }} />

              <div className="text-3xl mb-4">{m.icon}</div>

              <div className="text-4xl md:text-5xl font-extrabold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: m.color }}>
                <AnimatedCounter target={m.value} suffix={m.suffix} decimals={m.decimals} inView={inView} />
              </div>

              <p className="text-base font-bold mb-1" style={{ color: '#f1f5f9' }}>{m.label}</p>
              <p className="text-sm" style={{ color: '#64748b' }}>{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
