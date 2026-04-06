'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const TechLogos: { name: string; svg: React.ReactNode }[] = [
  {
    name: 'Docker',
    svg: (
      <svg viewBox="0 0 24 24" width="52" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .006-.22l.033.22h-2.158zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.185V3.445a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v2.018c0 .102.083.185.185.185zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.16a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v2.018c0 .103.082.186.185.186zm0 2.717h2.118a.186.186 0 0 0 .186-.185V8.877a.185.185 0 0 0-.186-.184h-2.118a.185.185 0 0 0-.185.184v2.018c0 .102.082.185.185.185zm-2.964 0h2.119a.186.186 0 0 0 .185-.185V8.877a.185.185 0 0 0-.185-.184H8.065a.185.185 0 0 0-.184.184v2.018c0 .102.082.185.184.185zm5.928 2.717h2.118a.186.186 0 0 0 .186-.186v-2.018a.185.185 0 0 0-.186-.184h-2.118a.185.185 0 0 0-.185.184v2.018c0 .103.082.186.185.186zm-2.964 0h2.118a.186.186 0 0 0 .186-.186v-2.018a.185.185 0 0 0-.186-.184h-2.118a.185.185 0 0 0-.185.184v2.018c0 .103.083.186.185.186zm-2.964 0h2.119a.185.185 0 0 0 .185-.186v-2.018a.185.185 0 0 0-.185-.184H8.065a.185.185 0 0 0-.184.184v2.018c0 .103.082.186.184.186zm-2.974 0h2.118a.186.186 0 0 0 .185-.186v-2.018a.185.185 0 0 0-.185-.184H5.101a.185.185 0 0 0-.184.184v2.018c0 .103.082.186.184.186zm14.973 1.776c-.137-.093-.546-.314-1.175-.314-.137 0-.274.014-.41.028-.137-1.049-.956-1.557-1.011-1.585l-.205-.136-.15.199c-.177.24-.355.57-.423.914-.178.731.068 1.408.479 1.872-.678.397-1.78.397-2.003.397H.796a.795.795 0 0 0-.795.795c-.013.767.068 1.52.231 2.243a8.4 8.4 0 0 0 .9 2.394c.424.685 1.05 1.258 1.817 1.616.862.41 2.256.643 3.827.643.705 0 1.41-.055 2.092-.178.958-.178 1.876-.534 2.67-1.08.67-.466 1.258-1.053 1.726-1.727.833-1.148 1.327-2.434 1.69-3.571h.15c.931 0 1.504-.383 1.822-.698.205-.191.355-.41.451-.643l.068-.24a.188.188 0 0 0-.06-.21z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    svg: (
      <svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.983 0a12.206 12.206 0 0 0-8.51 3.653 12.194 12.194 0 0 0-3.49 8.57c.001 4.923 2.985 9.589 7.8 11.254a12.25 12.25 0 0 0 8.43-.001c4.814-1.664 7.8-6.33 7.8-11.253a12.21 12.21 0 0 0-3.49-8.57A12.208 12.208 0 0 0 11.982 0zM7.054 4.246c.439 0 .79.354.79.79 0 .106-.021.212-.062.308L6.44 8.682a7.935 7.935 0 0 1 2.59-1.327l.042-2.63a.79.79 0 1 1 1.578.026l-.04 2.601a7.89 7.89 0 0 1 2.66 1.327l-1.35-3.343a.79.79 0 1 1 1.463-.59l1.327 3.29a7.96 7.96 0 0 1 1.706 2.224l3.025-1.34a.79.79 0 1 1 .643 1.449l-2.99 1.325c.166.633.25 1.29.25 1.955 0 .64-.08 1.271-.23 1.88l2.97 1.278a.79.79 0 1 1-.623 1.455l-3.01-1.297a7.97 7.97 0 0 1-1.695 2.232l1.364 3.378a.79.79 0 1 1-1.466.59l-1.36-3.37a7.923 7.923 0 0 1-2.673 1.302l-.04 2.54a.79.79 0 1 1-1.579-.025l.04-2.514a7.934 7.934 0 0 1-2.62-1.302l-1.36 3.37a.79.79 0 1 1-1.466-.591l1.363-3.377a7.978 7.978 0 0 1-1.695-2.232L3.03 15.59a.79.79 0 1 1-.623-1.455l2.97-1.278a8.003 8.003 0 0 1-.23-1.88c0-.665.084-1.322.25-1.955L2.407 9.697a.79.79 0 1 1 .643-1.449l3.025 1.34a7.97 7.97 0 0 1 1.706-2.224l1.327-3.29a.79.79 0 0 1 .726-.488c.029 0 .058.002.086.005a.789.789 0 0 1-.866-.845zM12 7.79a4.21 4.21 0 1 0 0 8.42 4.21 4.21 0 0 0 0-8.42z" fill="#326CE5" />
      </svg>
    ),
  },
  {
    name: 'Spring Boot',
    svg: (
      <svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.826 3.497-.994 4.937-1.744 2.7-1.376 5.377-4.403 5.923-7.528-1.027 3.007-4.134 5.594-6.961 6.651-1.942.739-5.461 1.459-5.461 1.459a5.209 5.209 0 0 1-.88-.48c-2.503-1.755-2.582-9.51 3.813-12.054 2.746-1.086 5.373-.489 8.341-.886 3.165-.424 6.83-1.772 8.309-4.672.702 2.099 1.373 5.451.783 7.981zM6.673.386C6.673.386 2.62 2.757 2.47 8.155c-.11 3.979 2.227 7.942 5.056 9.596a6.406 6.406 0 0 1-.849-4.785c.4-2.26 1.683-4.14 3.128-5.944-.874 1.023-5.08 8.636.39 13.644.16.146.318.293.491.424.173-.122.347-.246.513-.378a12.35 12.35 0 0 0 4.09-6.618c.741 3.065-.178 6.293-2.19 8.484 9.246-1.838 12.784-12.59 7.601-19.441C19.016 1.073 16.3-.004 13.44 0c-2.025.003-4.021.666-5.48 1.843-.462.361-.886.762-1.287 1.187zm9.94 3.799c1.145-.017 2.28.23 3.117.68-.863.059-1.534.469-1.978 1.214-.647 1.09-.578 3.151-1.903 3.99-1.297.822-3.013.38-3.83-.893-.836-1.31-.517-3.214.7-4.265.978-.847 2.383-1.308 3.893-1.327z" fill="#6DB33F" />
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    svg: (
      <svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" fill="#009688" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    svg: (
      <svg viewBox="0 0 24 24" width="52" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.072.056.144.056.208 0 .088-.056.184-.176.272l-.584.384a.414.414 0 0 1-.24.08c-.096 0-.192-.048-.288-.136a2.938 2.938 0 0 1-.344-.448 7.38 7.38 0 0 1-.296-.576c-.744.88-1.68 1.32-2.808 1.32-.8 0-1.44-.232-1.904-.688-.464-.456-.704-1.064-.704-1.832 0-.808.288-1.464.872-1.96.584-.496 1.36-.744 2.336-.744.328 0 .664.024 1.016.08.352.056.712.136 1.096.232v-.696c0-.728-.152-1.232-.448-1.52-.304-.288-.816-.424-1.552-.424-.336 0-.68.04-1.032.128a7.61 7.61 0 0 0-1.032.32c-.144.056-.248.088-.304.104-.056.016-.104.024-.144.024-.12 0-.184-.088-.184-.272v-.432c0-.144.016-.248.056-.312.04-.064.112-.128.216-.184A6.648 6.648 0 0 1 3.8 3.76a6.65 6.65 0 0 1 1.592-.208c1.216 0 2.104.272 2.672.816.56.544.84 1.376.84 2.496v3.144zM4.76 11.56c.312 0 .632-.056.976-.168.344-.112.648-.32.904-.608.152-.184.264-.384.32-.616.056-.232.088-.512.088-.832v-.4c-.28-.064-.576-.12-.88-.16-.304-.04-.6-.064-.896-.064-.64 0-1.104.12-1.424.368-.32.248-.472.608-.472 1.088 0 .456.12.8.352 1.04.232.24.568.352 1.032.352zm7.688 1.04c-.16 0-.272-.024-.344-.08-.072-.048-.136-.16-.192-.304l-2.144-7.08a1.385 1.385 0 0 1-.072-.32c0-.128.064-.2.192-.2h.792c.168 0 .286.024.35.08.072.048.128.16.184.304l1.536 6.048 1.424-6.048c.048-.152.104-.256.176-.304.072-.048.2-.08.36-.08h.648c.168 0 .288.024.36.08.072.048.128.16.176.304l1.44 6.128 1.584-6.128c.056-.152.12-.256.184-.304.064-.048.184-.08.344-.08h.752c.128 0 .2.064.2.2 0 .04-.008.08-.016.128-.016.048-.04.112-.08.2l-2.192 7.08c-.056.152-.12.256-.192.304-.072.048-.184.08-.344.08h-.696c-.168 0-.288-.024-.36-.08-.072-.056-.128-.16-.176-.312l-1.416-5.88-1.408 5.872c-.048.16-.104.264-.176.312-.072.056-.2.08-.368.08h-.696zm11.7.24c-.416 0-.832-.048-1.232-.144-.4-.096-.712-.208-.92-.336a.57.57 0 0 1-.232-.208.512.512 0 0 1-.04-.192v-.448c0-.184.072-.272.208-.272.056 0 .112.008.168.024.056.016.136.056.232.104.312.136.648.248.992.32.352.072.696.112.944.112.504 0 .904-.088 1.192-.264.288-.176.44-.432.44-.76 0-.224-.072-.408-.216-.568-.144-.16-.416-.304-.808-.44l-1.16-.36c-.584-.184-1.016-.456-1.288-.816a1.936 1.936 0 0 1-.408-1.176c0-.336.072-.632.216-.888.144-.256.336-.48.576-.664.24-.184.512-.32.832-.416.32-.096.66-.144 1.016-.144.176 0 .36.008.536.032.184.024.352.056.512.096.16.04.32.088.464.136.144.048.256.096.336.144a.702.702 0 0 1 .232.2.44.44 0 0 1 .072.264v.416c0 .184-.064.28-.192.28-.064 0-.168-.04-.312-.12-.528-.24-1.12-.36-1.776-.36-.456 0-.816.072-1.072.224-.256.152-.384.376-.384.68 0 .224.08.416.24.568.16.152.456.304.88.44l1.136.36c.576.184.992.44 1.24.776.248.328.368.712.368 1.136 0 .344-.072.656-.208.928-.144.272-.336.512-.592.712-.256.2-.56.352-.912.456-.368.112-.76.168-1.184.168z" fill="#FF9900" />
        <path d="M21.315 16.512c-2.624 1.928-6.432 2.952-9.712 2.952-4.592 0-8.728-1.696-11.856-4.52-.24-.216-.024-.512.272-.344 3.376 1.96 7.544 3.136 11.848 3.136 2.904 0 6.096-.6 9.04-1.84.44-.192.808.296.408.616z" fill="#FF9900" />
        <path d="M22.419 15.24c-.336-.432-2.216-.208-3.064-.104-.256.032-.296-.192-.064-.36 1.496-1.056 3.952-.752 4.24-.4.288.36-.08 2.84-1.48 4.024-.216.184-.424.088-.328-.152.32-.8 1.032-2.584.696-3.008z" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: 'Azure',
    svg: (
      <svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.05 4.24L6.56 18.05l-4.35.01 5.4-9.36-3.5-4.46h8.94zm1.42 1.52l3.53 9.93-9.27 2.85L15.74 17l4.09-1.08-3.18-5.36 1.82-4.8z" fill="#0089D6" />
      </svg>
    ),
  },
  {
    name: 'Jenkins',
    svg: (
      <svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.141 9.014s-.057 4.109 1.479 5.363c.248.688.37 1.395.287 2.12.024.03.05.06.074.088 1.068-1.42 1.562-3.083 1.492-4.716-.115-1.36-2.095-2.6-3.332-2.855zm10.82-.977C12.14 4.38 9.12 2.79 6.41 3.02c-1.37.12-2.59.73-3.48 1.81-.48.58-.81 1.2-1.02 1.88.62.38 2.12 1.29 3.35 2.03.81.48 1.63.75 2.48.79 1.23.06 2.42-.37 3.49-1.11.5-.34.95-.7 1.37-1.08.5.42.95.86 1.36 1.32v-.62zm-5.22 9.09c-.62-1.4-.55-3.71 1.56-5.06.72-.45 1.56-.72 2.41-.87-.6-.54-1.33-1.17-1.78-1.58-.74.62-1.51 1.11-2.29 1.4-1.19.44-2.45.45-3.73.05-.94-.29-1.77-.74-2.47-1.3-.15.87-.18 1.77-.02 2.67.51 2.81 2.61 4.88 5.07 5.5.42.1.85.16 1.27.18-.01-.33-.02-.66-.02-.99zm3.97.04a5.26 5.26 0 0 0-2.35.14c.01.29.02.59.03.91.01.71.15 1.41.41 2.07.14.38.33.75.55 1.09.23.36.5.7.8 1.01.33.34.69.65 1.09.9.37.23.76.42 1.17.55.41.13.83.21 1.25.23.44.02.88-.03 1.31-.14.34-.09.68-.22.99-.39.3-.16.58-.36.83-.59.22-.21.42-.45.58-.71.15-.25.27-.52.35-.8.06-.22.1-.44.11-.66v-.27l-.71-2.27c-.19.25-.41.47-.64.66-.25.2-.53.37-.82.51-.29.13-.6.22-.91.27-.33.05-.67.05-1.01 0-.17-.03-.34-.07-.51-.12-.16-.06-.32-.12-.47-.2-.14-.08-.28-.17-.41-.27l-.04-.03zm5.62-6.82c-.46-.63-1.05-1.2-1.71-1.69-.07-.05-.13-.1-.2-.15-.9.84-1.95 1.53-3.07 1.98-.51.2-1.04.35-1.58.42-.76.1-1.55.07-2.32-.09.7.62 1.45 1.25 2.07 1.79 1.05-.19 2.12-.24 3.17-.11 1.09.14 2.13.49 3.06 1l.03.02c.2-.97.24-2.01-.45-3.17z" fill="#D33833" />
        <path d="M18.43 14.01c-.93-.51-1.97-.86-3.06-1-.27-.03-.54-.05-.81-.06.31.49.54 1.02.66 1.57.06.27.09.55.1.82.59-.1 1.21-.08 1.81.05.6.14 1.17.39 1.67.74.09-.36.14-.73.16-1.1-.17-.37-.35-.71-.53-1.02z" fill="#EFC06E" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="hero-dark relative min-h-screen flex items-center"
      style={{ paddingTop: 112 }} // navbar (40 top bar + 64 nav) + space
    >
      {/* 3D Canvas */}
      <HeroCanvas />

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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(0,180,216,0.12)',
                border: '1px solid rgba(0,180,216,0.25)',
                color: '#38bdf8',
                letterSpacing: '0.06em',
              }}
            >


            </motion.div>

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
              We Build{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0066ff, #00b4d8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Scalable Digital
              </span>
              <br />Systems for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00b4d8, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Modern Business
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.7, marginBottom: 36, maxWidth: 560 }}
            >
              ERYON AI delivers enterprise-grade{' '}
              <span style={{ color: '#38bdf8', fontWeight: 600 }}>AI/ML</span>,{' '}
              <span style={{ color: '#60a5fa', fontWeight: 600 }}>Web</span>,{' '}
              <span style={{ color: '#34d399', fontWeight: 600 }}>Enterprise</span>,{' '}
              <span style={{ color: '#a78bfa', fontWeight: 600 }}>Mobile</span> &{' '}
              <span style={{ color: '#34d399', fontWeight: 600 }}>Cloud</span>{' '}

              solutions engineered for performance, security, and long-term growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="flex flex-wrap gap-5 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="btn-primary"
                style={{ padding: '14px 40px', fontSize: 15 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('portfolio')}
                className="btn-secondary"
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
              { icon: '🎯', label: 'AI Accuracy', value: '99.2%', color: '#0066ff', pos: { top: 10, left: -10 } },
              { icon: '⚡', label: 'Uptime SLA', value: '99.99%', color: '#00b4d8', pos: { bottom: 10, right: -10 } },
              { icon: '🌍', label: 'Global Clients', value: '80+', color: '#6366f1', pos: { top: '45%', right: -20 } },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                style={{
                  position: 'absolute',
                  ...card.pos,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 14,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  animation: `float ${5 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                <span style={{ fontSize: 22 }}>{card.icon}</span>
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
              className="stat-item"
              style={{
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
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
                {logo.svg}
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
