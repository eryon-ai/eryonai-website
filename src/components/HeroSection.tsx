'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';



const TechLogos: { name: string; iconUrl: string }[] = [
  {
    name: 'Docker',
    iconUrl: 'https://img.icons8.com/color/48/docker.png',
  },
  {
    name: 'Kubernetes',
    iconUrl: 'https://img.icons8.com/color/48/kubernetes.png',
  },
  {
    name: 'Spring Boot',
    iconUrl: 'https://img.icons8.com/color/48/spring-logo.png',
  },
  {
    name: 'FastAPI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  },
  {
    name: 'AWS',
    iconUrl: 'https://img.icons8.com/color/48/amazon-web-services.png',
  },
  {
    name: 'Azure',
    iconUrl: 'https://img.icons8.com/color/48/azure-1.png',
  },
  {
    name: 'Jenkins',
    iconUrl: 'https://img.icons8.com/color/48/jenkins.png',
  },
];

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="hero-dark relative min-h-screen flex items-center"
      style={{ paddingTop: 140 }} // Space for floating nav
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Radial glow overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 55% at 50% -10%, rgba(0,102,255,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 85% 60%, rgba(0,180,216,0.1) 0%, transparent 60%)'
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0f172a)' }}
      />

      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: '#f8fafc',
                marginBottom: 24,
              }}
            >
              Enterprise-Grade{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Custom Software
              </span>
              <br />&amp;{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00b4d8, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                AI Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.7, marginBottom: 36, maxWidth: 560 }}
            >
              ERYON AI delivers enterprise-grade{' '}
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>Custom Web Applications</span>,{' '}
              <span style={{ color: '#60a5fa', fontWeight: 600 }}>Generative AI</span>,{' '}
              <span style={{ color: '#a78bfa', fontWeight: 600 }}>Mobile Apps</span> &{' '}
              <span style={{ color: '#34d399', fontWeight: 600 }}>Cloud Solutions</span>{' '}
              engineered for performance, security, and long-term growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push('/contact')}
                className="btn-primary w-full sm:w-auto justify-center"
                style={{ padding: '14px 40px', fontSize: 15 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => router.push('/portfolio')}
                className="btn-secondary w-full sm:w-auto justify-center"
                style={{
                  padding: '13px 28px',
                  borderColor: 'rgba(255,255,255,0.2)',
                  color: '#f8fafc',
                  fontSize: 15,
                }}
              >
                View Our Work →
              </motion.button>
            </motion.div>
            <div style={{ marginBottom: 10 }} />


            {/* Features row */}
            <motion.div

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-x-10 gap-y-3"
            >
              {['ISO 27001 Compliant', 'Agile Delivery', '24/7 Support', 'NDA Protected'].map((f, i) => (
                <div key={i} className="flex items-center gap-4" style={{ color: '#94a3b8', fontSize: 13 }}>
                  <span style={{ color: '#0066ff', fontSize: 15, fontWeight: 'bold' }}>✓</span>
                  {f}
                </div>
              ))}
            </motion.div>
            <div style={{ marginBottom: 10 }} />
          </div>


          {/* Right: Logo + floating cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center min-h-[340px]">
            {/* Central logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="animate-float relative z-10"
            >
              <div
                className="rounded-3xl flex flex-col items-center gap-2"
                style={{
                  background: 'rgba(255, 255, 255, 0)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
                  padding: '10px 14px',
                  minWidth: 80,
                }}
              >
                <img
                  src="/logo.png"
                  alt="ERYON AI"
                  width={100}
                  height={70}
                  style={{ objectFit: 'contain' }}
                />
                <div className="text-center" style={{ marginTop: 2 }}>
                  <p style={{ color: '#f8fafc', fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: 26 }}>
                    ERYON<span style={{ color: '#00b4d8' }}> AI</span>
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 10, letterSpacing: '0.18em', marginTop: 4 }}>
                    SOFTWARE SOLUTIONS
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating stat cards */}
            {[
              { iconUrl: 'https://img.icons8.com/color/48/target.png', label: 'AI Accuracy', value: '99.2%', color: '#0066ff', pos: { top: 10, left: -10 } },
              { iconUrl: 'https://img.icons8.com/color/48/flash-on.png', label: 'Uptime SLA', value: '99.99%', color: '#00b4d8', pos: { bottom: 10, right: -10 } },
              { iconUrl: 'https://img.icons8.com/color/48/globe.png', label: 'Global Clients', value: '80+', color: '#6366f1', pos: { top: '45%', right: -20 } },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="hidden lg:flex"
                style={{
                  position: 'absolute',
                  ...card.pos,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 14,
                  padding: '12px 16px',
                  alignItems: 'center',
                  gap: 10,
                  animation: `float ${5 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                <span style={{ display: 'inline-flex' }}><img src={card.iconUrl} alt={card.label} style={{ width: 26, height: 26, objectFit: 'contain' }} loading="lazy" /></span>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: 10, fontWeight: 600, letterSpacing: '0.05em' }}>{card.label}</p>
                  <p style={{ color: card.color, fontSize: 16, fontWeight: 800, fontFamily: 'Space Grotesk,sans-serif', lineHeight: 1.1 }}>{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '18+', label: 'Enterprise Clients' },
            { value: '8+', label: 'Years of Excellence' },
            { value: '50+', label: 'Expert Engineers' },
          ].map((s, i) => (
            <div
              key={i}
              className={`stat-item ${
                i % 2 === 0 ? 'border-r border-white/10' : ''
              } ${
                i < 2 ? 'border-b border-white/10' : ''
              } md:border-b-0 md:border-r md:border-white/10 ${
                i === 3 ? 'md:border-r-0' : ''
              }`}
            >
              <p className="stat-number">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-12"
        >
          <div style={{ marginBottom: 16 }} />
          <p className="text-center text-xs font-semibold mb-6" style={{ color: 'white', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            OUR Trusted Technologies & Platforms
          </p>
          <div style={{ marginBottom: 16 }} />
          <div className="flex flex-wrap justify-center gap-4 p-6">

            {TechLogos.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.07, borderColor: 'rgba(255,255,255,0.22)' }}
                className="flex flex-col items-center justify-center gap-2 px-5 py-4 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(12px)',
                  minWidth: 96,
                  cursor: 'default',
                  transition: 'border-color 0.2s',
                }}
              >
                <img src={logo.iconUrl} alt={logo.name} style={{ width: 40, height: 40, objectFit: 'contain' }} loading="lazy" />
                <span style={{ color: '#64748b', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', fontFamily: 'Space Grotesk,sans-serif' }}>
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>


      {/* Scroll indicator
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.4, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: '2px solid rgba(255,255,255,0.15)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: '#0066ff' }} />
        </div>
      </motion.div> */}
    </section>
  );
}
