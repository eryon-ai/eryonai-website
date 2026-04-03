'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 50, dur = 1800;
    let cur = 0;
    const inc = target / steps;
    const id = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(cur));
    }, dur / steps);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const highlights = [
  { icon: '🎯', text: 'Agile & Iterative Development' },
  { icon: '🔒', text: 'ISO 27001 & SOC 2 Compliant' },
  { icon: '⚡', text: 'Sub-Second Load Performance' },
  { icon: '🤝', text: '24/7 Dedicated Support' },
  { icon: '🌍', text: 'Global Delivery, Local Teams' },
  { icon: '🏆', text: '98% Client Satisfaction Rate' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="section-pad" style={{ background: '#f8fafc' }}>
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="section-label">About ERYON AI</div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="section-title"
              style={{ marginTop: 12, marginBottom: 16 }}
            >
              Building the Future of{' '}
              <span className="gradient-text">Digital Experiences</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, marginBottom: 16 }}
            >
              ERYON AI is a forward-thinking technology company at the intersection of
              artificial intelligence and digital engineering. We partner with startups and
              enterprises alike to architect systems that are not just functional — they're transformative.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, marginBottom: 28 }}
            >
              From AI-powered automation to cloud-native architectures, every solution we
              build is engineered for scale, security, and long-term performance.
            </motion.p>

            {/* Highlights grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 px-7 py-3 rounded-2xl"
                  style={{ background: '#fff', border: '1px solid #e2e8f0' }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{h.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#334155' }}>{h.text}</span>
                </div>
              ))}
            </motion.div>
<div style={{ marginBottom: 16 }} />
            <motion.div
          
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-6"
            >
              <button
                className="btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Work With Us →
              </button>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Case Studies
              </button>
            </motion.div>
          </div>

          {/* Right */}
          <div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-6"
            >
              {[
                { value: 150, suffix: '+', label: 'Projects Delivered', color: '#0066ff' },
                { value: 80, suffix: '+', label: 'Enterprise Clients', color: '#6366f1' },
                { value: 8, suffix: '+', label: 'Years of Excellence', color: '#00b4d8' },
                { value: 50, suffix: '+', label: 'Expert Engineers', color: '#10b981' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="card text-center"
                  style={{ padding: '28px 20px', cursor: 'default' }}
                >
                  <p style={{
                    fontFamily: 'Space Grotesk,sans-serif',
                    fontSize: 38,
                    fontWeight: 800,
                    color: s.color,
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    <CountUp target={s.value} suffix={s.suffix} />
                  </p>
                  <p style={{ fontSize: 13, color: '#64748b', fontWeight: 500 }}>{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

<div style={{ marginBottom: 16 }} />
            {/* Mission / Vision */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              
              {[
                {
                  icon: '🎯',
                  title: 'Our Mission',
                  text: 'To democratize access to cutting-edge technology and empower businesses to achieve more through intelligent digital systems.',
                  color: '#0066ff',
                },
                {
                  icon: '🔭',
                  title: 'Our Vision',
                  text: 'To be the global leader in AI-driven digital transformation, creating solutions that outlast trends and define industries.',
                  color: '#6366f1',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card"
                  style={{ padding: '20px 24px', borderLeft: `3px solid ${item.color}` }}
                >
                  <div className="flex items-start gap-3">
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <h4 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: 15, color: '#0f172a', marginBottom: 6 }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.65 }}>{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div style={{ marginBottom: 16 }} />

            {/* Progress bars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="card"
              style={{ padding: '24px' }}
            >
              <h4 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: 15, color: '#0f172a', marginBottom: 16 }}>
                Performance Benchmarks
              </h4>
              {[
                { label: 'Client Satisfaction', pct: 98 },
                { label: 'On-Time Delivery', pct: 94 },
                { label: 'Project Success Rate', pct: 97 },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: i < 2 ? 14 : 0 }}>
                  <div className="flex justify-between mb-1.5" style={{ fontSize: 13 }}>
                    <span style={{ color: '#374151', fontWeight: 500 }}>{item.label}</span>
                    <span style={{ color: '#0066ff', fontWeight: 700 }}>{item.pct}%</span>
                  </div>
                  <div style={{ height: 6, background: '#f1f5f9', borderRadius: 3, overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.pct}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.2, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #0066ff, #00b4d8)',
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
