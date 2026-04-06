'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        {/* Top bar */}
        <div style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)', padding: '7px 0' }}>
          <div className="container-custom flex items-center justify-between">
            <p className="text-white text-xs font-medium ">
              🚀 Now Accepting Enterprise Clients — Get a Free Consultation
            </p>
            <div className="hidden md:flex items-center gap-4 text-white text-xs">
              <span>📞 +91 82852 56571</span>
              <span>✉️ connect@eryonai.com</span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container-custom flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-0"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <img  
              src="/Full image1.png"
              alt="ERYON AI"
              width={240}
              height={70}
              style={{ objectFit: 'contain' }}
            />
            {/* <div className="ml-1.5">
              <div
                className="font-black text-xl leading-none tracking-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#0f172a' }}
              >
                ERYON<span style={{ color: '#0066ff' }}>AI</span>
              </div>
              <div className="text-[9px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#94a3b8' }}>
                Software Solutions
              </div>
            </div> */}
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group relative"
                style={{ color: '#374151', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#0066ff';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,102,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#374151';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="btn-ghost text-sm" onClick={() => scrollTo('#portfolio')}>
              View Work
            </button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#contact')}
              className="btn-primary text-sm"
              style={{ padding: '10px 22px' }}
            >
              Get a Free Quote → 
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg"
            style={{ background: 'none', border: '1px solid #e2e8f0', cursor: 'pointer' }}
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[calc(40px+64px)] left-0 right-0 z-40 bg-white border-b"
            style={{ borderColor: '#e2e8f0', boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{ color: '#374151', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-3 pb-2">
                <button className="btn-primary w-full text-center" onClick={() => scrollTo('#contact')}>
                  Get a Free Quote →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
