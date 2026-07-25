'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Zap, Globe2, TrendingDown, Trophy, Users, BarChart3 } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import SectionBadge from '@/components/ui/SectionBadge';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const metrics = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    sub: 'On time, on budget',
    icon: Rocket,
    color: '#0066ff',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Uptime Delivered',
    sub: 'Across all production systems',
    icon: Zap,
    color: '#00b4d8',
    decimals: 1,
  },
  {
    value: 80,
    suffix: '+',
    label: 'Enterprise Clients',
    sub: 'Across 15+ countries',
    icon: Globe2,
    color: '#6366f1',
  },
  {
    value: 38,
    suffix: '%',
    label: 'Avg. Cost Reduction',
    sub: 'From AI-driven automation',
    icon: TrendingDown,
    color: '#10b981',
  },
  {
    value: 8,
    suffix: '+',
    label: 'Years of Excellence',
    sub: 'Building enterprise systems',
    icon: Trophy,
    color: '#f59e0b',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Expert Engineers',
    sub: 'Spanning AI, Cloud & Mobile',
    icon: Users,
    color: '#ec4899',
  },
];

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
          <SectionBadge icon={BarChart3} label="By the Numbers" color="#00b4d8" />
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
            >
              <GlowCard color={m.color} className="p-6 md:p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                {/* Top accent bar */}
                <div className="-mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-5 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${m.color}, transparent)` }} />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${m.color}18`, border: `1px solid ${m.color}30` }}
                >
                  <m.icon size={20} strokeWidth={2} color={m.color} aria-hidden="true" />
                </div>

                <div className="text-4xl md:text-5xl font-extrabold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', color: m.color }}>
                  <AnimatedCounter value={m.value} suffix={m.suffix} decimals={m.decimals} />
                </div>

                <p className="text-base font-bold mb-1" style={{ color: '#f1f5f9' }}>{m.label}</p>
                <p className="text-sm" style={{ color: '#64748b' }}>{m.sub}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
