'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getLocalizedPath, SupportedLocale } from '@/lib/layout-translations';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧', path: '/' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', path: '/ja' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', path: '/de' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', path: '/fr' },
  { code: 'es', label: 'Español', flag: '🇪🇸', path: '/es' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪', path: '/ar' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current active language based on route prefix
  const currentLang =
    languages.find((lang) => lang.code !== 'en' && pathname.startsWith(`/${lang.code}`)) ||
    languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLanguage = (code: string) => {
    // 1. Set user preference cookie
    document.cookie = `eryon_lang=${code}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
    setIsOpen(false);

    // 2. Navigate to corresponding localized path
    let pathWithoutLocale = pathname;
    if (currentLang.code !== 'en') {
      pathWithoutLocale = pathname.replace(`/${currentLang.code}`, '') || '/';
    }

    router.push(getLocalizedPath(pathWithoutLocale, code as SupportedLocale));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/6 hover:bg-white/12 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all backdrop-blur-md shadow-sm"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <Globe size={13} className="text-cyan-400 shrink-0" aria-hidden="true" />
        <span className="text-[11px] font-bold uppercase tracking-wider">{currentLang.code}</span>
        <span className="hidden md:inline text-slate-400 font-normal">|</span>
        <span className="hidden md:inline text-[11.5px]">{currentLang.label}</span>
        <ChevronDown
          size={12}
          className={`text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#0f172a]/95 backdrop-blur-xl border border-white/12 shadow-[0_12px_36px_rgba(0,0,0,0.5)] p-1.5 z-6000 overflow-hidden"
          >
            <div className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 text-slate-400">
              Select Language
            </div>
            <div className="flex flex-col gap-0.5">
              {languages.map((lang) => {
                const isActive = currentLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang.code)}
                    className={`flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-colors text-left ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    {isActive && <Check size={13} className="text-cyan-400" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
