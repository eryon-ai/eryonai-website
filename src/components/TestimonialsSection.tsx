'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import SectionBadge from '@/components/ui/SectionBadge';

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
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#0f172a' }}>
      {/* Radial background glow, matches CapabilitiesSection */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
              <SectionBadge icon={MessageSquareQuote} label="Client Stories" color="#6366f1" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-3xl md:text-5xl font-extrabold"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Trusted by{' '}
              <span style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Industry Leaders
              </span>
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
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              style={{ border: '1.5px solid rgba(255,255,255,0.12)', background: '#1e293b', color: '#94a3b8' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0066ff'; (e.currentTarget as HTMLElement).style.color = '#0066ff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
            >
              <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="p-0 border-0 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
                  style={{
                    height: 6,
                    width: i === current ? 24 : 6,
                    background: i === current ? '#0066ff' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              style={{ border: '1.5px solid rgba(255,255,255,0.12)', background: '#1e293b', color: '#94a3b8' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#0066ff'; (e.currentTarget as HTMLElement).style.color = '#0066ff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
            >
              <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
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
            >
              <GlowCard color={t.color} className="p-7" style={{ background: 'rgba(255,255,255,0.03)' }}>
                {/* Stars — rating glyphs, not decorative icons */}
                <div className="flex gap-0.5 mb-4">
                  {Array(t.rating).fill(0).map((_, si) => (
                    <span key={si} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
                  ))}
                </div>

                <p className="text-sm italic mb-5 flex-1" style={{ color: '#cbd5e1', lineHeight: 1.75 }}>
                  &quot;{t.text}&quot;
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[13px] font-extrabold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}90)`,
                      fontFamily: 'Space Grotesk,sans-serif',
                    }}
                  >
                    {t.initials}
                  </div>
                  <p className="text-sm font-bold" style={{ color: '#f8fafc', fontFamily: 'Space Grotesk,sans-serif' }}>{t.name}</p>
                </div>
              </GlowCard>
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
            >
              <GlowCard color={testimonials[current].color} className="p-7" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="flex gap-0.5 mb-4">
                  {Array(testimonials[current].rating).fill(0).map((_, si) => (
                    <span key={si} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
                  ))}
                </div>
                <p className="text-sm italic mb-5" style={{ color: '#cbd5e1', lineHeight: 1.75 }}>
                  &quot;{testimonials[current].text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[13px] font-extrabold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${testimonials[current].color}, ${testimonials[current].color}90)`,
                      fontFamily: 'Space Grotesk,sans-serif',
                    }}
                  >
                    {testimonials[current].initials}
                  </div>
                  <p className="text-sm font-bold" style={{ color: '#f8fafc' }}>{testimonials[current].name}</p>
                </div>
              </GlowCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
