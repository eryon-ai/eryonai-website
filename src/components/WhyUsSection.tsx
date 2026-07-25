'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Zap, ShieldCheck, Rocket, Handshake, TrendingUp, Award } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import SectionBadge from '@/components/ui/SectionBadge';

const features = [
  {
    icon: Building2,
    title: 'Scalable Architecture',
    description: 'Microservices and cloud-native patterns designed to grow from 10 to 10 million users without rewrites.',
    color: '#0066ff',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Sub-second load times with edge caching, optimized queries, and Lighthouse scores of 95+.',
    color: '#f59e0b',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    description: 'Zero-trust security, OWASP compliance, automated vulnerability scanning built into every sprint.',
    color: '#ef4444',
  },
  {
    icon: Rocket,
    title: 'Modern Tech Stack',
    description: 'Battle-tested, actively maintained technologies. No legacy baggage — maintainable code from day one.',
    color: '#6366f1',
  },
  {
    icon: Handshake,
    title: 'Transparent Delivery',
    description: 'Weekly demos, real-time dashboards, and Slack-based communication. You always know where things stand.',
    color: '#10b981',
  },
  {
    icon: TrendingUp,
    title: 'ROI-Focused',
    description: 'Every feature decision is tied to business outcomes. We build what moves the needle, not what sounds cool.',
    color: '#00b4d8',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#0f172a' }}>
      {/* Background grid, matches MetricsSection */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge icon={Award} label="Why Choose Us" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Why Choose ERYON AI for{' '}
            <span style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Digital Transformation
            </span>
          </h2>
          <p className="text-base md:text-lg" style={{ color: '#94a3b8', lineHeight: 1.7 }}>
            Not just developers — experienced digital partners who deeply understand business.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <GlowCard color={f.color} className="p-6 md:p-7">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                >
                  <f.icon size={22} strokeWidth={2} color={f.color} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc' }}>
                  {f.title}
                </h3>
                <p className="text-sm" style={{ color: '#94a3b8', lineHeight: 1.7 }}>{f.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner — self-contained brand-gradient panel, unaffected by page bg */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
          className="cta-banner"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                Ready to Get Started?
              </p>
              <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 28, fontWeight: 800, color: 'white', lineHeight: 1.25, marginBottom: 12 }}>
                Transform your business with AI-powered digital solutions
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.65 }}>
                Free consultation, no commitment. We&apos;ll analyze your requirements and send a detailed proposal within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Start a Conversation →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                View Our Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
