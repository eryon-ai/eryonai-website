'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { getRecaptchaToken } from '@/lib/recaptcha-client';
import { getLocaleFromPathname, layoutTranslations, getLocalizedPath } from '@/lib/layout-translations';

const navColHrefs = [
  ['/services', '/services', '/services', '/services', '/services', '/services'],
  ['/about', '/portfolio', '/process', '/blogs', '#', '/contact'],
  ['/contact', '/contact', '/contact', '/privacy', '/terms', '/sitemap.xml'],
];

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = layoutTranslations[locale].footer;

  const navCols = [
    { title: t.servicesTitle, links: t.servicesLinks, hrefs: navColHrefs[0] },
    { title: t.companyTitle, links: t.companyLinks, hrefs: navColHrefs[1] },
    { title: t.contactTitle, links: t.contactLinks, hrefs: navColHrefs[2] },
  ];

  const [subEmail, setSubEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subError, setSubError] = useState('');

  const handleSubscribe = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subEmail)) {
      setSubError('Please enter a valid email.');
      return;
    }
    setSubStatus('loading');
    setSubError('');
    try {
      const recaptchaToken = await getRecaptchaToken('subscribe').catch(() => '');
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subEmail, recaptchaToken }),
      });
      if (res.ok) {
        setSubStatus('success');
        setSubEmail('');
      } else {
        setSubStatus('error');
        setSubError('Something went wrong. Try again.');
      }
    } catch {
      setSubStatus('error');
      setSubError('Network error. Try again.');
    }
  };

  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8' }}>
      {/* Top gradient line */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #0066ff, #00b4d8, #6366f1)' }} />

      <div className="container-custom" style={{ paddingTop: 64, paddingBottom: 40 }}>
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href={getLocalizedPath("/", locale)}
              className="flex items-center justify-center md:justify-start gap-2 mb-5"
              style={{ textDecoration: 'none', padding: 0 }}
            >
              <Image src="/logo-removebg-preview.png" alt="ERYON AI" width={220} height={100} style={{ objectFit: 'contain', height: 'auto' }} />
              {/* <span style={{
                fontFamily: 'Space Grotesk,sans-serif',
                fontSize: 20,
                fontWeight: 800,
                color: '#f8fafc',
              }}>
                ERYON<span style={{ color: '#00b4d8' }}>AI</span>
              </span> */}
            </Link>
            <div style={{ marginBottom: 16 }} />

            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20, color: '#64748b' }}>
              {t.tagline}
            </p>

            {/* Socials */}
            <div className="flex gap-2 justify-center md:justify-start">
              {[
                { iconUrl: 'https://img.icons8.com/color/48/instagram-new.png', label: 'Instagram', href: 'https://www.instagram.com/eryonaisoftwaresolutions?utm_source=qr' },
                { iconUrl: 'https://img.icons8.com/color/48/linkedin.png', label: 'LinkedIn', href: 'https://www.linkedin.com/company/113904195' },
                { iconUrl: 'https://img.icons8.com/color/48/github.png', label: 'GitHub', href: 'https://github.com/eryon-ai' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36,
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'border-color 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,180,216,0.4)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <img src={s.iconUrl} alt={s.label} style={{ width: 20, height: 20, objectFit: 'contain' }} loading="lazy" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col, ci) => (
            <div key={ci} className="flex flex-col items-center md:items-start text-center md:text-left">
              <h5 style={{
                fontFamily: 'Space Grotesk,sans-serif',
                fontWeight: 700,
                fontSize: 12,
                color: '#f1f5f9',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 16,
              }}>
                {col.title}
              </h5>
              <ul className="flex flex-col gap-2.5 items-center md:items-start" style={{ listStyle: 'none', padding: 0 }}>
                {col.links.map((link, li) => (
                  <li key={li}>
                    <Link
                      href={col.hrefs[li].endsWith('.xml') ? col.hrefs[li] : getLocalizedPath(col.hrefs[li], locale)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        fontSize: 14,
                        color: '#64748b',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00b4d8'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#64748b'; }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ marginBottom: 16 }} />
        <div
          className="rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left"
          style={{
            background: 'rgba(0,102,255,0.08)',
            border: '1px solid rgba(0,102,255,0.15)',
          }}
        >
          <div className="flex flex-col items-center md:items-start">
            <h5 style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 700, fontSize: 16, color: '#f1f5f9', marginBottom: 4 }}>
              {t.newsletterTitle}
            </h5>
            <p style={{ fontSize: 13, color: '#64748b' }}>
              {t.newsletterDesc}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-auto items-center md:items-start">
            {subStatus === 'success' ? (
              <p className="inline-flex items-center gap-1.5" style={{ fontSize: 14, color: '#10b981', fontWeight: 600, padding: '10px 0' }}>
                <CheckCircle2 size={16} strokeWidth={2.5} aria-hidden="true" />
                {t.subscribedMsg}
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={subEmail}
                  onChange={(e) => { setSubEmail(e.target.value); setSubError(''); }}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                  disabled={subStatus === 'loading'}
                  style={{
                    flex: 1,
                    minWidth: 200,
                    padding: '10px 14px',
                    borderRadius: 8,
                    border: subError ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#f1f5f9',
                    fontSize: 13,
                    outline: 'none',
                  }}
                />
                <button
                  onClick={handleSubscribe}
                  disabled={subStatus === 'loading'}
                  className="btn-primary justify-center"
                  style={{ padding: '10px 20px', fontSize: 13, whiteSpace: 'nowrap', opacity: subStatus === 'loading' ? 0.7 : 1 }}
                >
                  {subStatus === 'loading' ? '...' : t.subscribeBtn}
                </button>
              </div>
            )}
            {subError && <p style={{ fontSize: 12, color: '#ef4444', marginTop: 2 }}>{subError}</p>}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24 }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p style={{ fontSize: 13, color: '#475569' }}>
              © 2019 ERYON AI Software Solutions. {t.allRightsReserved}
            </p>
            <div className="flex items-center justify-center gap-2">
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 12, color: '#475569' }}>All systems operational</span>
            </div>
            <div className="flex items-center justify-center gap-5">
              {[
                { label: 'Privacy Policy', href: getLocalizedPath('/privacy', locale) },
                { label: 'Terms', href: getLocalizedPath('/terms', locale) },
                { label: 'Cookies', href: `${getLocalizedPath('/privacy', locale)}#cookies` },
              ].map((link, i) => (
                <Link key={i} href={link.href} style={{ fontSize: 13, color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00b4d8'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
