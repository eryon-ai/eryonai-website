'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'High-performance, SEO-optimized web applications built with Next.js, React, and modern frameworks. From landing pages to complex enterprise SaaS platforms.',
    features: ['Next.js & React', 'TypeScript', 'REST & GraphQL APIs', 'CMS Integration'],
    iconBg: 'rgba(0,102,255,0.08)',
    iconColor: '#0066ff',
    borderTop: '#0066ff',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile applications with exceptional UX. React Native & Flutter solutions that work seamlessly on iOS and Android.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'Offline-First'],
    iconBg: 'rgba(99,102,241,0.08)',
    iconColor: '#6366f1',
    borderTop: '#6366f1',
  },
  {
    icon: '🤖',
    title: 'AI / ML Solutions',
    description: 'Intelligent systems powered by machine learning, NLP, and computer vision. Transform raw data into actionable insights and automated workflows.',
    features: ['LLM Integration', 'Computer Vision', 'NLP & Chatbots', 'Predictive Analytics'],
    iconBg: 'rgba(0,180,216,0.08)',
    iconColor: '#00b4d8',
    borderTop: '#00b4d8',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure on AWS, GCP, and Azure with CI/CD pipelines, Kubernetes orchestration, and infrastructure-as-code for zero-downtime deployments.',
    features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Terraform IaC'],
    iconBg: 'rgba(16,185,129,0.08)',
    iconColor: '#10b981',
    borderTop: '#10b981',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Zero-trust security frameworks, OWASP compliance, automated vulnerability scanning, and penetration testing to keep your systems secure at every layer.',
    features: ['Zero-Trust Model', 'Pen Testing', 'OWASP Compliance', 'SOC 2 Audit'],
    iconBg: 'rgba(239,68,68,0.08)',
    iconColor: '#ef4444',
    borderTop: '#ef4444',
  },
  {
    icon: '📊',
    title: 'UI/UX Design',
    description: 'Research-driven product design that converts. We create intuitive interfaces backed by user research, accessibility standards, and world-class design systems.',
    features: ['Figma Prototyping', 'Design Systems', 'Accessibility (WCAG)', 'User Research'],
    iconBg: 'rgba(245,158,11,0.08)',
    iconColor: '#f59e0b',
    borderTop: '#f59e0b',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" className="section-pad" style={{ background: '#ffffff' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <div className="section-label mx-auto" style={{ display: 'inline-flex' }}>
              Our Expertise
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="section-title"
            style={{ marginTop: 12 }}
          >
            Services That{' '}
            <span className="gradient-text">Drive Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="section-subtitle centered"
            style={{ marginTop: 12 }}
          >
            End-to-end digital solutions built for scale, performance, and measurable business impact.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              whileHover={{ y: -4 }}
              className="card group"
              style={{
                borderTop: `3px solid ${s.borderTop}`,
                padding: '28px',
                cursor: 'default',
              }}
            >
              {/* Icon */}
              <div
                className="icon-box"
                style={{ background: s.iconBg, fontSize: 24 }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 18 }}>
                {s.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {s.features.map((f, fi) => (
                  <span key={fi} className="tag">
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div style={{ marginBottom: 6 }} />
              <div
                className="flex items-center gap-1.5 text-sm font-semibold mt-auto transition-all duration-200"
                style={{ color: s.iconColor }}
              >
                Learn More
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ marginBottom: 16 }} />

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-6"
          style={{
            background: 'linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,180,216,0.05))',
            border: '1px solid rgba(0,102,255,0.12)',
          }}
        >
          <div>
            <p style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: 17, color: '#0f172a', marginBottom: 4 ,marginLeft : 4}}>
              Don't see what you need?
            </p>
            <p style={{ fontSize: 14, color: '#64748b',marginBottom: 4 ,marginLeft : 4 }}>
              We offer custom solutions. Let's discuss your unique requirements.
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ whiteSpace: 'nowrap' }}
          >
            Talk to Our Expert →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
