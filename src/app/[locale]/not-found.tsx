'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname, getLocalizedPath, SupportedLocale } from '@/lib/layout-translations';

const copy: Record<SupportedLocale, { title: string; body: string; home: string; services: string }> = {
  en: { title: 'Page not found', body: 'The page you are looking for does not exist or has moved.', home: 'Back to home', services: 'Explore our services' },
  ja: { title: 'ページが見つかりません', body: 'お探しのページは存在しないか、移動した可能性があります。', home: 'ホームに戻る', services: 'サービスを見る' },
  de: { title: 'Seite nicht gefunden', body: 'Die gesuchte Seite existiert nicht oder wurde verschoben.', home: 'Zur Startseite', services: 'Unsere Leistungen entdecken' },
  fr: { title: 'Page introuvable', body: "La page que vous recherchez n'existe pas ou a été déplacée.", home: "Retour à l'accueil", services: 'Découvrir nos services' },
  es: { title: 'Página no encontrada', body: 'La página que buscas no existe o se ha movido.', home: 'Volver al inicio', services: 'Explorar nuestros servicios' },
  ar: { title: 'الصفحة غير موجودة', body: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.', home: 'العودة إلى الرئيسية', services: 'استكشف خدماتنا' },
};

export default function NotFound() {
  const locale = getLocaleFromPathname(usePathname());
  const t = copy[locale];

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 pt-28 pb-20" style={{ background: '#0f172a' }}>
      <div className="max-w-lg text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest" style={{ color: '#00b4d8' }}>404</p>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f8fafc' }}>
          {t.title}
        </h1>
        <p className="mb-8" style={{ color: '#94a3b8' }}>{t.body}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={getLocalizedPath('/', locale)} className="btn-primary justify-center">{t.home}</Link>
          <Link href={getLocalizedPath('/services', locale)} className="text-sm font-semibold" style={{ color: '#60a5fa' }}>
            {t.services}
          </Link>
        </div>
      </div>
    </main>
  );
}
