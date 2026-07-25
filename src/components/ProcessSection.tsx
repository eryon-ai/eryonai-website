'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, PenTool, Zap, CheckCircle2, Rocket, ShieldCheck, Compass } from 'lucide-react';
import SectionBadge from '@/components/ui/SectionBadge';
import GlowCard from '@/components/ui/GlowCard';

const steps = [
  {
    num: '01',
    title: 'Discovery & Requirements',
    desc: 'We start with deep-dive workshops to understand your business goals, technical constraints, and user needs. Deliverable: detailed requirements document and project roadmap.',
    icon: Search,
    color: '#0066ff',
  },
  {
    num: '02',
    title: 'Architecture & Design',
    desc: 'Our architects design scalable system blueprints while designers create user-tested UI prototypes. You review and approve before a single line of code is written.',
    icon: PenTool,
    color: '#00b4d8',
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints with weekly demos. You have full visibility via a real-time project dashboard, Slack channel, and dedicated project manager.',
    icon: Zap,
    color: '#6366f1',
  },
  {
    num: '04',
    title: 'Quality Assurance',
    desc: 'Rigorous automated testing, manual QA, security audits, and performance benchmarking ensure your product ships without compromise.',
    icon: CheckCircle2,
    color: '#10b981',
  },
  {
    num: '05',
    title: 'Deployment & Launch',
    desc: 'Zero-downtime CI/CD deployments with rollback capability. We configure monitoring, alerting, and logging before going live.',
    icon: Rocket,
    color: '#f59e0b',
  },
  {
    num: '06',
    title: 'Post-Launch Support',
    desc: 'Dedicated SLA-backed support, proactive monitoring, monthly performance reports, and quarterly strategy reviews included in all engagements.',
    icon: ShieldCheck,
    color: '#ec4899',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#0f172a' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,102,255,0.08) 0%, transparent 70%)',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left sticky header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge icon={Compass} label="How We Work" color="#0066ff" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl md:text-5xl font-extrabold mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Our Proven{' '}
              <span style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                6-Step Process
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg mb-8"
              style={{ color: '#94a3b8', lineHeight: 1.7 }}
            >
              A transparent, structured delivery methodology that ensures every project succeeds — on time and on budget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 16px 48px rgba(0,102,255,0.25)',
                color: 'white',
              }}
            >
              <p style={{ fontSize: 13, fontWeight: 600, opacity: 0.85, marginBottom: 6, marginLeft: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Average Time to Launch
              </p>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 36, fontWeight: 800, lineHeight: 1, marginBottom: 6, marginLeft: 8 }}>
                8–12 Weeks
              </p>
              <p style={{ fontSize: 13, opacity: 0.8, marginTop: 8, marginBottom: 6, marginLeft: 8 }}>
                For most enterprise projects
              </p>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginBottom: 8, marginLeft: 8 }}>
                <p style={{ fontSize: 13, opacity: 0.85 }}>
                  On-time delivery rate: <strong>94%</strong>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <GlowCard color={step.color} className="p-6 md:p-7">
                    <div className="flex gap-5 items-start">
                      {/* Icon + number */}
                      <div className="shrink-0 flex flex-col items-center gap-2">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}
                        >
                          <step.icon size={22} strokeWidth={2} color={step.color} aria-hidden="true" />
                        </div>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: step.color, fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {step.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, paddingTop: 4 }}>
                        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9' }}>
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#94a3b8', lineHeight: 1.7 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
