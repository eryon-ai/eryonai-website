'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CTO, NovaMind Health',
    company: 'NovaMind',
    text: 'ERYON AI transformed our diagnostic workflow completely. Their ML pipeline reduced radiologist review time by 70% while improving accuracy. Professional, communicative, and delivered beyond expectations.',
    rating: 5,
    initials: 'SC',
    color: '#0066ff',
  },
  {
    name: 'Marcus Reid',
    title: 'VP Engineering, TradeFlux',
    company: 'TradeFlux',
    text: 'The trading dashboard handles millions of WebSocket events per second without breaking a sweat. Their architecture decisions were spot-on. We\'ve scaled 10x since launch without a single incident.',
    rating: 5,
    initials: 'MR',
    color: '#6366f1',
  },
  {
    name: 'Priya Nair',
    title: 'Product Director, UrbanFlow',
    company: 'UrbanFlow',
    text: 'Our smart city app reached 500K users in 3 months. ERYON delivered a rock-solid React Native app with real-time IoT data. Exceptional quality, great communication throughout the project.',
    rating: 5,
    initials: 'PN',
    color: '#10b981',
  },
  {
    name: 'James Whitmore',
    title: 'CEO, SecureShield',
    company: 'SecureShield',
    text: 'We hired ERYON AI to build our threat detection platform and they delivered a world-class product. The AI-driven anomaly detection catches threats we\'d never have caught manually.',
    rating: 5,
    initials: 'JW',
    color: '#ef4444',
  },
  {
    name: 'Aisha Okonkwo',
    title: 'Head of Growth, ShopSense',
    company: 'ShopSense',
    text: 'ERYON AI\'s recommendation engine increased our GMV by 35% in Q1. The personalization is accurate and the team understood our business goals deeply. Could not be happier.',
    rating: 5,
    initials: 'AO',
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
                  <p style={{ fontSize: 12, color: '#64748b' }}>{t.title}</p>
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
                  <p style={{ fontSize: 12, color: '#64748b' }}>{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
