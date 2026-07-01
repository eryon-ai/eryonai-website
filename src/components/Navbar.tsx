import FloatingNav from './FloatingNav';
import Link from 'next/link';
export default function Navbar() {
  return (
    <>
      {/* Top Banner */}
      <Link href="/contact" className="block relative w-full overflow-hidden group z-50">
        <div 
          className="relative px-4 py-2.5 border-b border-white/10 transition-colors duration-500 group-hover:border-blue-500/30"
          style={{ background: 'linear-gradient(90deg, #020617 0%, #0f172a 50%, #020617 100%)' }}
        >
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between relative z-10">
            <div className="flex items-center gap-3">
              {/* Pulsing indicator dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              
              <p className="text-blue-100/80 text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
                Now Accepting Enterprise Clients 
                <span className="hidden sm:inline mx-2.5 text-blue-500/40">|</span> 
                <span className="text-white group-hover:text-cyan-300 transition-colors duration-300 inline-flex items-center gap-1">
                  Get a Free Consultation <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </span>
              </p>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-blue-200/60 text-[11px] font-semibold tracking-wider uppercase hover:text-white transition-colors">
              <span>connect@eryonai.com</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Floating Capsule Nav */}
      <FloatingNav />
    </>
  );
}
