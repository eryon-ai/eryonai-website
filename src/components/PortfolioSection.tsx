'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'NovaMind — AI Diagnostic Platform',
    category: 'AI / Healthcare',
    description: 'End-to-end ML pipeline for medical image analysis, reducing diagnostic time by 70% with 94% CNN-based accuracy.',
    tech: ['PyTorch', 'FastAPI', 'Next.js', 'AWS SageMaker'],
    metrics: ['94% Accuracy', '70% Faster', '50K+ Scans/mo'],
    color: '#0066ff',
    bg: '#f0f6ff',
  },
  {
    title: 'TradeFlux — FinTech Trading Platform',
    category: 'Web / Finance',
    description: 'Real-time trading dashboard with WebSocket-powered live charts, portfolio analytics, and automated alert systems.',
    tech: ['React', 'Spring Boot', 'WebSocket', 'Redis'],
    metrics: ['<50ms Latency', '$2B+ Volume', '99.99% Uptime'],
    color: '#6366f1',
    bg: '#f5f3ff',
  },
  {
    title: 'UrbanFlow — Smart City Mobile App',
    category: 'Mobile / IoT',
    description: 'Cross-platform React Native app integrating IoT sensors for real-time city monitoring, traffic management, and civic alerts.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'MQTT'],
    metrics: ['500K+ Users', '3 Cities', '200+ Sensors'],
    color: '#10b981',
    bg: '#f0fdf9',
  },
  {
    title: 'CloudVault — Enterprise Data Platform',
    category: 'Cloud / DevOps',
    description: 'Multi-tenant cloud data warehouse with automated ETL, BI dashboards, and role-based access control.',
    tech: ['Terraform', 'Kubernetes', 'Airflow', 'Snowflake'],
    metrics: ['10TB+ Data', '5 Regions', '40% Cost Cut'],
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    title: 'ShopSense — AI Commerce Engine',
    category: 'AI / E-Commerce',
    description: 'Personalized recommendation engine using collaborative filtering and transformer models powering $50M+ in transactions.',
    tech: ['Python', 'TensorFlow', 'Kafka', 'PostgreSQL'],
    metrics: ['35% More Sales', '$50M+ GMV', '2M+ Users'],
    color: '#ec4899',
    bg: '#fef2f8',
  },
  {
    title: 'SecureShield — Cyber Security Suite',
    category: 'Security / DevOps',
    description: 'Zero-trust security platform with AI threat detection, SIEM integration, and automated incident response playbooks.',
    tech: ['ElasticSearch', 'Python', 'Docker', 'Ansible'],
    metrics: ['99.8% Threat Block', 'SOC 2 Compliant', '<1min Response'],
    color: '#ef4444',
    bg: '#fff5f5',
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    
    <section id="portfolio" className="section-pad" style={{ background: '#ffffff' }}>
      
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="section-label">Case Studies</div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="section-title"
              style={{ marginTop: 10, maxWidth: 480 }}
            >
              Work That <span className="gradient-text">Speaks</span>
            </motion.h2>
          </div>
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.18 }}
            style={{ fontSize: 17, color: '#64748b', maxWidth: 340, lineHeight: 1.65}}
          >
            Real-world solutions delivering measurable business impact across industries.
          </motion.p> */}
          
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -5 }}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                cursor: 'default',
                border: hovered === i ? `1px solid ${p.color}30` : '1px solid #e2e8f0',
                boxShadow: hovered === i ? `0 16px 48px ${p.color}14` : 'var(--shadow-card)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Color top bar */}
              <div style={{ height: 4, background: `linear-gradient(90deg, ${p.color}, ${p.color}80)` }} />

              {/* Card bg tint */}
              <div style={{ background: p.bg, padding: '20px 24px 16px' }}>
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}20` }}
                  >
                    {p.category}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'Space Grotesk,sans-serif',
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#0f172a',
                    marginTop: 12,
                    lineHeight: 1.35,
                  }}
                >
                  {p.title}
                </h3>
              </div>
              

              {/* Body */}
              <div style={{ padding: '16px 24px 24px', background: '#fff' }}>
                <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.65, marginBottom: 16 }}>
                  {p.description}
                </p>

                {/* Metrics */}
                
                <div className="flex flex-wrap gap-1 mb-4">
                  
                  {p.metrics.map((m, mi) => (
                    <span
                      key={mi}
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: 100,
                        background: `${p.color}10`,
                        color: p.color,
                        border: `1px solid ${p.color}15`,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }} />

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, ti) => (
                    <span key={ti} className="tag" style={{ fontSize: 11 }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        

<div style={{ marginBottom: 16 }} />
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="text-center mt-12"
        >
          <p style={{ color: '#64748b', marginBottom: 16, fontSize: 15 }}>
            These are just a few highlights — we've delivered 150+ projects across industries.
          </p>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
