'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isHome = pathname === '/';
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
          className={`flex w-[95%] lg:w-auto lg:max-w-fit fixed inset-x-0 mx-auto rounded-full transition-all duration-300 z-[5000] px-3 lg:px-6 py-2 lg:py-3 items-center justify-between gap-4 lg:gap-10 ${
            isAtTop ? 'top-14 lg:top-16' : 'top-4 lg:top-6'
          } ${
            isHome ? 'bg-transparent border border-white/20 shadow-[0px_8px_32px_rgba(0,0,0,0.1)]' : 'border border-transparent shadow-[0_20px_60px_rgba(10,92,255,0.3)] ring-2 ring-brand-blue/30'
          }`}
          style={!isHome ? {
            backgroundImage: "url('/nav-bg.png')",
            backgroundSize: '130%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          } : {}}
        >


          {/* Left Circular Logo */}
          <Link
            href="/"
            className={`relative flex items-center justify-center w-10 h-10 rounded-full text-black shrink-0 overflow-hidden ${isHome ? 'bg-white' : 'bg-transparent'}`}
          >
            <img src="/logo.png" alt="ERYON AI" className="w-7 h-7 object-contain" />
          </Link>

          {/* Middle Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-10">
            {navLinks.map((navItem, idx: number) => {
              if (navItem.label === 'Services') {
                return (
                  <div key={`link=${idx}`} className="relative group/nav py-4">
                    <Link
                      href={navItem.href}
                      className={`flex items-center gap-1 relative text-sm font-bold transition-colors ${
                        isHome ? 'text-slate-200 hover:text-white' : 'text-navy hover:text-brand-blue'
                      }`}
                    >
                      <span>{navItem.label}</span>
                      <svg className="w-3.5 h-3.5 transition-transform group-hover/nav:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    
                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[540px] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-[6000]">
                      <div className="bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 p-6 grid grid-cols-2 gap-x-6 gap-y-1 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066ff] to-[#00b4d8]" />
                        
                        {servicesDropdown.map((service, sIdx) => (
                          <Link 
                            key={sIdx} 
                            href={service.href}
                            className="group/dropitem flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/20 group-hover/dropitem:bg-brand-blue transition-colors" />
                            <span className="text-[13.5px] font-semibold text-slate-700 group-hover/dropitem:text-brand-blue transition-colors">
                              {service.label}
                            </span>
                          </Link>
                        ))}
                        
                        <div className="col-span-2 mt-3 pt-3 border-t border-slate-50 flex justify-center">
                          <Link href="/services" className="text-[13px] font-bold text-brand-blue hover:text-brand-blue/80 flex items-center gap-2 transition-colors">
                            View All Services <span>→</span>
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
                  className={`relative text-sm font-bold transition-colors py-4 ${
                    isHome ? 'text-slate-200 hover:text-white' : 'text-navy hover:text-brand-blue'
                  }`}
                >
                  <span>{navItem.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right CTA (Desktop & Mobile) */}
          <Link
            href="/contact"
            className={`border text-[11px] lg:text-sm font-bold relative border-transparent px-3 py-2 lg:px-5 lg:py-2.5 rounded-full transition-colors shrink-0 ${
              isHome 
                ? 'bg-white text-navy hover:bg-slate-200' 
                : 'bg-navy text-white hover:bg-slate-800'
            }`}
          >
            <span>Get a Free Quote →</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
              isHome ? 'bg-white/10 text-white' : 'bg-slate-100 text-navy'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && visible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-32 inset-x-4 z-[4900] backdrop-blur-xl border rounded-2xl shadow-2xl lg:hidden overflow-hidden ${
              isHome ? 'bg-navy/95 border-white/10' : 'bg-white/95 border-slate-200'
            }`}
          >
            <div className="flex flex-col p-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <div key={link.label} className="flex flex-col mb-2">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`px-4 py-3 text-base font-bold rounded-xl transition-colors text-center ${
                          isHome 
                            ? 'text-white bg-white/5' 
                            : 'text-navy bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <div className="grid grid-cols-1 gap-1 py-2 px-2 mt-1">
                        {servicesDropdown.map((service, sIdx) => (
                          <Link
                            key={sIdx}
                            href={service.href}
                            onClick={() => setMobileOpen(false)}
                            className={`py-2 text-[14px] font-medium transition-colors text-center rounded-lg ${
                              isHome ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-brand-blue hover:bg-blue-50'
                            }`}
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
                    className={`px-4 py-3 text-base font-bold rounded-xl transition-colors text-center mb-1 ${
                      isHome 
                        ? 'text-slate-200 hover:text-white hover:bg-white/5' 
                        : 'text-navy hover:text-brand-blue hover:bg-slate-50'
                    }`}
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
