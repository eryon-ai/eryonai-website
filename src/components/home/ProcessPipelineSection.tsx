'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    icon: 'https://img.icons8.com/color/96/search.png',
    title: 'Discovery & Strategy',
    description: 'We run deep discovery sessions to map your technical landscape, define success metrics, and align on a delivery strategy before a single line of code is written.',
    details: ['Technical audit', 'Stakeholder interviews', 'Risk mapping', 'ROI projections'],
    color: '#0066ff',
  },
  {
    number: '02',
    icon: 'https://img.icons8.com/color/96/drafting-compass.png',
    title: 'Architecture & Design',
    description: 'Our senior architects design systems built to scale — from data models and API contracts to infrastructure blueprints and design systems.',
    details: ['System design', 'UI/UX wireframes', 'API contracts', 'Tech stack selection'],
    color: '#00b4d8',
  },
  {
    number: '03',
    icon: 'https://img.icons8.com/color/96/laptop.png',
    title: 'Agile Development',
    description: 'Two-week sprints with daily standups, continuous integration, and weekly demos. You see real progress every single week.',
    details: ['2-week sprints', 'Daily standups', 'Weekly demos', 'CI/CD from day one'],
    color: '#6366f1',
  },
  {
    number: '04',
    icon: 'https://img.icons8.com/color/96/test-tube.png',
    title: 'QA & Security',
    description: 'Every feature is tested across unit, integration, and E2E levels. Security audits and penetration testing are built into the delivery process.',
    details: ['E2E test suites', 'Pen testing', 'Load testing', 'Accessibility audit'],
    color: '#10b981',
  },
  {
    number: '05',
    icon: 'https://img.icons8.com/color/96/rocket.png',
    title: 'Zero-Downtime Deployment',
    description: 'Blue-green deployments, feature flags, and automated rollback ensure every launch is smooth — for both you and your users.',
    details: ['Blue-green deploy', 'Feature flags', 'Auto rollback', 'Monitoring & alerts'],
    color: '#f59e0b',
  },
  {
    number: '06',
    icon: 'https://img.icons8.com/color/96/line-chart.png',
    title: 'Scale & Optimize',
    description: 'Post-launch, we monitor performance, optimize infrastructure costs, and iterate based on real user data.',
    details: ['FinOps review', 'Performance tuning', 'Analytics setup', '24/7 support'],
    color: '#ec4899',
  },
];

export default function ProcessPipelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: '#070c1a' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,102,255,0.07) 0%, transparent 70%)',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399' }}>
            ⚙️ How We Work
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Engineering Excellence,{' '}
            <span style={{ background: 'linear-gradient(135deg, #10b981, #0066ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Every Step
            </span>
          </h2>
          <p className="text-base md:text-lg" style={{ color: '#64748b', lineHeight: 1.7 }}>
            A battle-tested 6-phase delivery process used on every engagement — from startup MVPs to enterprise platforms.
          </p>
        </motion.div>

        {/* Desktop: horizontal process */}
        <div className="hidden lg:block">
          {/* Step selector */}
          <div className="relative mb-12">
            {/* Track lines — rendered FIRST so they are behind circles in DOM */}
            <div className="absolute left-0 right-0 h-px" style={{ top: 24, background: 'rgba(255,255,255,0.08)', zIndex: 0, pointerEvents: 'none' }} />
            <div className="absolute left-0 h-px transition-all duration-500" style={{
              top: 24,
              background: `linear-gradient(90deg, ${steps[activeStep].color}, ${steps[activeStep].color}60)`,
              width: `${((activeStep + 0.5) / steps.length) * 100}%`,
              zIndex: 0,
              pointerEvents: 'none',
            }} />

            {/* Buttons row — rendered AFTER lines so they sit on top */}
            <div className="flex items-start justify-between">
              {steps.map((step, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="flex flex-col items-center gap-3"
                  style={{ position: 'relative', zIndex: 2, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.07 }}
                >
                  {/* Circle — solid background to cover the line */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: i === activeStep ? step.color : '#070c1a',
                      border: `2px solid ${i === activeStep ? step.color : 'rgba(255,255,255,0.15)'}`,
                      boxShadow: i === activeStep ? `0 0 28px ${step.color}70` : 'none',
                      position: 'relative',
                      zIndex: 3,
                    }}
                  >
                    <img src={step.icon} alt={step.title} className="w-6 h-6 object-contain" />
                  </div>
                  <span
                    className="text-xs font-semibold whitespace-nowrap transition-colors duration-300"
                    style={{ color: i === activeStep ? step.color : '#475569' }}
                  >
                    {step.number}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl p-8 md:p-10 grid grid-cols-2 gap-10 items-center"
            style={{
              background: `linear-gradient(135deg, ${steps[activeStep].color}10, rgba(255,255,255,0.03))`,
              border: `1px solid ${steps[activeStep].color}30`,
            }}
          >
            <div>
              <div className="mb-5"><img src={steps[activeStep].icon} alt="" className="w-12 h-12 object-contain" /></div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>
                {steps[activeStep].title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                {steps[activeStep].description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {steps[activeStep].details.map((d, di) => (
                <div key={di} className="flex items-center gap-2.5 p-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span style={{ color: steps[activeStep].color, fontWeight: 700 }}>✓</span>
                  <span className="text-sm font-medium" style={{ color: '#cbd5e1' }}>{d}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile: vertical cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl p-5 flex gap-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${step.color}18`, border: `1.5px solid ${step.color}40` }}>
                <img src={step.icon} alt={step.title} className="w-5 h-5 object-contain" />
              </div>
              <div>
                <div className="text-xs font-semibold mb-1" style={{ color: step.color }}>{step.number}</div>
                <h3 className="text-base font-bold mb-1" style={{ color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
