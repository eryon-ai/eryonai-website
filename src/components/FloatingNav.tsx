'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
];

const servicesDropdown = [
  { label: 'Web Applications', href: '/services/web-applications' },
  { label: 'Mobile Applications', href: '/services/mobile-applications' },
  { label: 'Custom SaaS', href: '/services/custom-saas' },
  { label: 'CRM & ERP', href: '/services/crm-erp-solutions' },
  { label: 'E-Commerce', href: '/services/ecommerce-solutions' },
  { label: 'Business Automation', href: '/services/business-automation' },
  { label: 'AI Solutions', href: '/services/ai-solutions' },
  { label: 'Data & Analytics', href: '/services/data-analytics' },
  { label: 'DevOps & Cloud', href: '/services/devops-cloud' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
];

export default function FloatingNav() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setIsAtTop(true);
        setVisible(true);
      } else {
        setIsAtTop(false);
        const direction = current - scrollYProgress.getPrevious()!;
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setMobileOpen(false); // Close mobile menu when scrolling down
        }
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={`w-[95%] lg:w-auto lg:max-w-fit fixed inset-x-0 mx-auto z-5000 transition-all duration-300 ${
            isAtTop ? 'top-14 lg:top-16' : 'top-4 lg:top-6'
          }`}
        >
          {/* Backdrop-blur lives on a non-transformed child — a `transform` (which
              framer-motion always sets inline, even at rest) on the same element as
              `backdrop-filter` makes Chromium/WebKit sample the wrong compositing
              layer (renders the white <body> instead of the page behind it). */}
          <div className="flex w-full rounded-full px-3 lg:px-6 py-2 lg:py-3 items-center justify-between gap-4 lg:gap-10 bg-white/4 backdrop-blur-xl border border-white/10 shadow-[0px_8px_32px_rgba(0,0,0,0.25)]">
          {/* Left Home Link */}
          <Link
            href="/"
            className="relative flex items-center justify-center rounded-full font-bold text-sm shrink-0 text-white transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <span>Home</span>
          </Link>

          {/* Middle Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-10">
            {navLinks.map((navItem, idx: number) => {
              if (navItem.label === 'Services') {
                return (
                  <div key={`link=${idx}`} className="relative group/nav py-4">
                    <Link
                      href={navItem.href}
                      className="flex items-center gap-1 relative text-sm font-bold text-slate-200 transition-colors hover:text-white"
                    >
                      <span>{navItem.label}</span>
                      <ChevronDown size={14} strokeWidth={2.5} className="transition-transform group-hover/nav:rotate-180" aria-hidden="true" />
                    </Link>

                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-135 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-6000">
                      <div className="bg-[#0f172a] rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 p-6 grid grid-cols-2 gap-x-6 gap-y-1 relative overflow-hidden backdrop-blur-xl">
                        <div className="-mx-6 -mt-6 mb-4 h-1 bg-linear-to-r from-[#0066ff] to-[#00b4d8]" style={{ gridColumn: '1 / -1' }} />

                        {servicesDropdown.map((service, sIdx) => (
                          <Link
                            key={sIdx}
                            href={service.href}
                            className="group/dropitem flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/30 group-hover/dropitem:bg-brand-blue transition-colors" />
                            <span className="text-[13.5px] font-semibold text-slate-300 group-hover/dropitem:text-white transition-colors">
                              {service.label}
                            </span>
                          </Link>
                        ))}

                        <div className="col-span-2 mt-3 pt-3 border-t border-white/8 flex justify-center">
                          <Link href="/services" className="text-[13px] font-bold text-brand-blue hover:text-brand-blue/80 flex items-center gap-2 transition-colors">
                            View All Services <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={`link=${idx}`}
                  href={navItem.href}
                  className="relative text-sm font-bold text-slate-200 transition-colors py-4 hover:text-white"
                >
                  <span>{navItem.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right CTA (Desktop & Mobile) */}
          <Link
            href="/contact"
            className="border text-[11px] lg:text-sm font-bold relative border-transparent px-3 py-2 lg:px-5 lg:py-2.5 rounded-full transition-colors shrink-0 bg-white text-navy hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <span>Get a Free Quote →</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-white/10 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} strokeWidth={2} aria-hidden="true" /> : <Menu size={20} strokeWidth={2} aria-hidden="true" />}
          </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && visible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-32 inset-x-4 z-4900 lg:hidden"
          >
            <div className="flex flex-col p-2 max-h-[70vh] overflow-y-auto backdrop-blur-xl border rounded-2xl shadow-2xl bg-[#0f172a]/95 border-white/10">
              {navLinks.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <div key={link.label} className="flex flex-col mb-2">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-4 py-3 text-base font-bold rounded-xl transition-colors text-center text-white bg-white/5"
                      >
                        {link.label}
                      </Link>
                      <div className="grid grid-cols-1 gap-1 py-2 px-2 mt-1">
                        {servicesDropdown.map((service, sIdx) => (
                          <Link
                            key={sIdx}
                            href={service.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 text-[14px] font-medium transition-colors text-center rounded-lg text-slate-300 hover:text-brand-blue hover:bg-white/5"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base font-bold rounded-xl transition-colors text-center mb-1 text-slate-200 hover:text-brand-blue hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
