'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Ananya Iyer',
    text: 'ERYON AI streamlined our patient intake and triage flow. We cut nurse handoff time by 32% and saw a noticeable lift in patient satisfaction. The team communicated clearly and shipped on time.',
    rating: 4,
    initials: 'AI',
    color: '#0066ff',
  },
  {
    name: 'Rohit Mehta',
    text: 'They rebuilt our real-time trading dashboard and the system now handles 3x the peak load with smoother latency. Architecture decisions were pragmatic and future-proof.',
    rating: 5,
    initials: 'RM',
    color: '#6366f1',
  },
  {
    name: 'Nisha Kulkarni',
    text: 'Their product team helped us ship a B2B SaaS onboarding revamp that reduced time-to-first-value by 38%. The UX was thoughtful and the implementation was clean.',
    rating: 4,
    initials: 'NK',
    color: '#10b981',
  },
  {
    name: 'Michael Hart',
    text: 'We engaged ERYON AI to build our threat detection platform, and the results exceeded expectations. Alert precision improved by roughly 25% without adding operational overhead.',
    rating: 4,
    initials: 'MH',
    color: '#ef4444',
  },
  {
    name: 'Sanya Rao',
    text: 'ERYON AI built a personalization layer that lifted repeat purchase rate by 21% in eight weeks. The strategy was grounded in our goals and the rollout was smooth.',
    rating: 5,
    initials: 'SR',
    color: '#ec4899',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const getVisible = () => [0, 1, 2].map((offset) => testimonials[(current + offset) % testimonials.length]);

  return (
    <section id="testimonials" className="section-pad" style={{ background: '#f8fafc' }}>
      
      <div className="container-custom" ref={ref}>
        {/* Header */}
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
              <div className="section-label">Client Stories</div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="section-title"
              style={{ marginTop: 10 }}
            >
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </motion.h2>
          </div>
          
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={prev}
              style={{
                width: 40, height: 40,
                borderRadius: '50%',
                border: '1.5px solid #e2e8f0',
                background: 'white',
                cursor: 'pointer',
                fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
                color: '#374151',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0066ff'; (e.currentTarget as HTMLElement).style.color = '#0066ff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.color = '#374151'; }}
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: 6,
                    width: i === current ? 24 : 6,
                    borderRadius: 3,
                    background: i === current ? '#0066ff' : '#e2e8f0',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              style={{
                width: 40, height: 40,
                borderRadius: '50%',
                border: '1.5px solid #e2e8f0',
                background: 'white',
                cursor: 'pointer',
                fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
                color: '#374151',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0066ff'; (e.currentTarget as HTMLElement).style.color = '#0066ff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'; (e.currentTarget as HTMLElement).style.color = '#374151'; }}
            >
              →
            </button>
          </motion.div>
        </div>

        {/* Desktop: 3 cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="hidden md:grid grid-cols-3 gap-6"
        >
          {getVisible().map((t, i) => (
            
            <motion.div
              key={`${current}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="testimonial-card"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array(t.rating).fill(0).map((_, si) => (
                  <span key={si} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
                ))}
              </div>

              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 20, flex: 1 }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                <div
                  style={{
                    width: 40, height: 40,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}90)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 800,
                    fontFamily: 'Space Grotesk,sans-serif',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#0f172a', fontFamily: 'Space Grotesk,sans-serif' }}>{t.name}</p>
                  <div style={{ height: 6 }} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: single */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="testimonial-card"
            >
              <div className="flex gap-0.5 mb-4">
                {Array(testimonials[current].rating).fill(0).map((_, si) => (
                  <span key={si} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 20 }}>
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}90)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 13, fontWeight: 800, fontFamily: 'Space Grotesk,sans-serif',
                }}>
                  {testimonials[current].initials}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>{testimonials[current].name}</p>
                  <div style={{ height: 6 }} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
