'use client';

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Card wrapper with a cursor-tracked radial spotlight + hover lift/glow.
 * Mouse position drives a CSS custom property via a motion value so the
 * spotlight moves without triggering React re-renders per frame.
 */
export default function GlowCard({ children, color = '#0066ff', className = '', style }: GlowCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, ${color}22, transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ borderColor: 'rgba(255,255,255,0.08)' }}
      whileHover={{ y: -4, borderColor: `${color}50`, boxShadow: `0 16px 48px ${color}22` }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      className={`group relative overflow-hidden rounded-2xl border cursor-default ${className}`}
      style={style}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
        aria-hidden="true"
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
}
