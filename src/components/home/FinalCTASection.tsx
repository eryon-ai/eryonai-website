'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function FinalCTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: '#070c1a' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, #0066ff, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, #00b4d8, transparent 70%)' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto" ref={ref}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-xs font-semibold tracking-wider uppercase"
          style={{ background: 'rgba(0,102,255,0.12)', border: '1px solid rgba(0,102,255,0.3)', color: '#60a5fa' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Now accepting enterprise clients for Q3 2026
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.04em' }}
        >
          Ready to Build{' '}
          <br className="hidden sm:block" />
          <span style={{
            background: 'linear-gradient(135deg, #0066ff 0%, #00b4d8 50%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Something Exceptional?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          style={{ color: '#64748b', lineHeight: 1.7 }}
        >
          Whether you&apos;re scaling an existing platform or building from the ground up — 
          we bring the engineering discipline and AI expertise to make it happen.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
              color: 'white',
              boxShadow: '0 0 32px rgba(0,102,255,0.5)',
              textDecoration: 'none',
            }}
          >
            <span className="relative z-10">Start Your Project</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
            {/* Shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)' }} />
          </Link>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#cbd5e1',
              textDecoration: 'none',
              transition: 'border-color 0.3s, color 0.3s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)';
              (e.currentTarget as HTMLElement).style.color = '#f8fafc';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
              (e.currentTarget as HTMLElement).style.color = '#cbd5e1';
            }}
          >
            View Our Portfolio
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs font-semibold"
          style={{ color: '#475569' }}
        >
          {['🔒 NDA on request', '⚡ Response in 24h', '✅ No commitment needed', '🌍 Remote-first team'].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
