'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    iconUrl: 'https://img.icons8.com/color/48/building.png',
    title: 'Scalable Architecture',
    description: 'Microservices and cloud-native patterns designed to grow from 10 to 10 million users without rewrites.',
    color: '#0066ff',
  },
  {
    iconUrl: 'https://img.icons8.com/color/48/flash-on.png',
    title: 'High Performance',
    description: 'Sub-second load times with edge caching, optimized queries, and Lighthouse scores of 95+.',
    color: '#f59e0b',
  },
  {
    iconUrl: 'https://img.icons8.com/color/48/security-checked.png',
    title: 'Secure by Design',
    description: 'Zero-trust security, OWASP compliance, automated vulnerability scanning built into every sprint.',
    color: '#ef4444',
  },
  {
    iconUrl: 'https://img.icons8.com/color/48/rocket.png',
    title: 'Modern Tech Stack',
    description: 'Battle-tested, actively maintained technologies. No legacy baggage — maintainable code from day one.',
    color: '#6366f1',
  },
  {
    iconUrl: 'https://img.icons8.com/color/48/handshake.png',
    title: 'Transparent Delivery',
    description: 'Weekly demos, real-time dashboards, and Slack-based communication. You always know where things stand.',
    color: '#10b981',
  },
  {
    iconUrl: 'https://img.icons8.com/color/48/graph.png',
    title: 'ROI-Focused',
    description: 'Every feature decision is tied to business outcomes. We build what moves the needle, not what sounds cool.',
    color: '#00b4d8',
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="why-us" className="section-pad" style={{ background: '#ffffff' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <div className="section-label mx-auto" style={{ display: 'inline-flex' }}>Why Choose Us</div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="section-title"
            style={{ marginTop: 12 }}
          >
            Why Choose ERYON AI for <span className="gradient-text">Digital Transformation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="section-subtitle centered"
            style={{ marginTop: 12 }}
          >
            Not just developers — experienced digital partners who deeply understand business.
          </motion.p>
          <div style={{ marginBottom: 16 }} />
        </div>

        {/* Feature grid */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              whileHover={{ y: -4 }}
              className="card"
              style={{ padding: '28px', cursor: 'default' }}
            >
              <div
                className="icon-box"
                style={{
                  background: `${f.color}10`,
                  border: `1px solid ${f.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <img src={f.iconUrl} alt={f.title} style={{ width: 28, height: 28, objectFit: 'contain' }} loading="lazy" />
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk,sans-serif', fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ marginBottom: 16 }} />
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
