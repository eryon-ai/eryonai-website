'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Requirements',
    desc: 'We start with deep-dive workshops to understand your business goals, technical constraints, and user needs. Deliverable: detailed requirements document and project roadmap.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Architecture & Design',
    desc: 'Our architects design scalable system blueprints while designers create user-tested UI prototypes. You review and approve before a single line of code is written.',
    icon: '📐',
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints with weekly demos. You have full visibility via a real-time project dashboard, Slack channel, and dedicated project manager.',
    icon: '⚡',
  },
  {
    num: '04',
    title: 'Quality Assurance',
    desc: 'Rigorous automated testing, manual QA, security audits, and performance benchmarking ensure your product ships without compromise.',
    icon: '✅',
  },
  {
    num: '05',
    title: 'Deployment & Launch',
    desc: 'Zero-downtime CI/CD deployments with rollback capability. We configure monitoring, alerting, and logging before going live.',
    icon: '🚀',
  },
  {
    num: '06',
    title: 'Post-Launch Support',
    desc: 'Dedicated SLA-backed support, proactive monitoring, monthly performance reports, and quarterly strategy reviews included in all engagements.',
    icon: '🛡️',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="process" className="section-pad" style={{ background: '#f8fafc' }}>
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left sticky header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="section-label">How We Work</div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="section-title"
              style={{ marginTop: 12, marginBottom: 16 }}
            >
              Our Proven{' '}
              <span className="gradient-text">6-Step Process</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="section-subtitle"
              style={{ marginBottom: 32 }}
            >
              A transparent, structured delivery methodology that ensures every project succeeds — on time and on budget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', color: 'white' }}
            >
              
              <p style={{ fontSize: 13, fontWeight: 600, opacity: 0.85, marginBottom: 6,marginLeft: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Average Time to Launch
              </p>
              <p style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 36, fontWeight: 800, lineHeight: 1 ,marginBottom: 6,marginLeft: 8}}>
                8–12 Weeks
              </p>
              <p style={{ fontSize: 13, opacity: 0.8, marginTop: 8 ,marginBottom: 6,marginLeft: 8}}>
                For most enterprise projects
              </p>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' ,marginBottom: 8,marginLeft: 8 }}>
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
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  whileHover={{ x: 4 }}
                  className="card flex gap-5"
                  style={{ padding: '24px 28px', cursor: 'default' , marginBottom: 16 }}
                >
                  
                  {/* Left: step number */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontFamily: 'Space Grotesk,sans-serif',
                        fontWeight: 800,
                        fontSize: 14,
                        boxShadow: '0 4px 12px rgba(0,102,255,0.25)',
                        flexShrink: 0,
                      }}
                    >
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{
                        width: 2,
                        flex: 1,
                        minHeight: 16,
                        background: 'linear-gradient(to bottom, rgba(0,102,255,0.3), transparent)',
                        borderRadius: 1,
                      }} />
                    )}
                  </div>

                  {/* Right: content */}
                  <div style={{ flex: 1, paddingTop: 4 }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ fontSize: 18 }}>{step.icon}</span>
                      <h3 style={{
                        fontFamily: 'Space Grotesk,sans-serif',
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#0f172a',
                      }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
