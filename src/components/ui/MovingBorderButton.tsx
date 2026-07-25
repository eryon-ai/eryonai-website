import Link from 'next/link';
import { ReactNode } from 'react';

const GRADIENT = 'conic-gradient(from 90deg at 50% 50%, #0066ff 0%, #00b4d8 33%, #6366f1 66%, #0066ff 100%)';

interface MovingBorderButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Primary CTA with a slowly rotating gradient ring, Aceternity "Moving Border" style. */
export default function MovingBorderButton({ href, children, className = '' }: MovingBorderButtonProps) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex overflow-hidden rounded-full p-[1.5px] shadow-[0_0_32px_rgba(0,102,255,0.35)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(0,102,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] focus-visible:ring-[#0066ff] ${className}`}
    >
      <span
        className="absolute inset-[-100%] animate-spin motion-reduce:animate-none"
        style={{ background: GRADIENT, animationDuration: '3.5s' }}
        aria-hidden="true"
      />
      <span
        className="relative z-10 inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white"
        style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)' }}
      >
        {children}
      </span>
    </Link>
  );
}
