'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    // In production, connect to your email service
    setStatus('success');
    setEmail('');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0066ff 150%)',
        padding: '60px 40px',
      }}
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-blue-300 border border-blue-500/30 bg-blue-500/10 mb-4">
          📬 NEWSLETTER
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Stay Updated With Technology Trends
        </h2>
        <p className="text-blue-200/80 text-lg mb-8">
          Get the latest insights on AI, Software Engineering, and Emerging Technologies delivered to your inbox every week.
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="text-5xl">🎉</div>
            <p className="text-white font-semibold text-lg">You&apos;re subscribed!</p>
            <p className="text-blue-200/70 text-sm">We&apos;ll send you the best tech articles every week.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-white whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)' }}
            >
              Subscribe Free →
            </motion.button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-2 text-red-400 text-sm">Please enter a valid email address.</p>
        )}

        <p className="mt-4 text-blue-300/50 text-xs">No spam, ever. Unsubscribe at any time.</p>
      </div>
    </motion.section>
  );
}
