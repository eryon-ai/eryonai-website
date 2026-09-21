import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getLocalizedPath, SupportedLocale } from '@/lib/layout-translations';

const CASE_SLUGS = [
  'hospital-hrms', 'edunexus-erp', 'realist-crm', 'atelier-clothing',
  'marblemart-crm', 'gym-dashboard', 'hirestream', 'craverush',
];

type Dict = { heading: string; subheading: string; cta: string; items: { title: string; description: string }[] };

export default function IndustriesSection({ dict, locale }: { dict: Dict; locale: SupportedLocale }) {
  return (
    <section className="py-20 md:py-28" style={{ background: '#0b1324' }} aria-labelledby="home-industries-heading">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2
            id="home-industries-heading"
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f8fafc' }}
          >
            {dict.heading}
          </h2>
          <p style={{ color: '#94a3b8' }}>{dict.subheading}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((item, i) => (
            <Link
              key={item.title}
              href={getLocalizedPath(`/case-study/${CASE_SLUGS[i]}`, locale)}
              className="group flex flex-col gap-3 rounded-2xl p-5 transition-colors hover:border-[#0066ff]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f1f5f9' }}>
                  {item.title}
                </h3>
                <ArrowUpRight size={16} aria-hidden="true" className="mt-0.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: '#00b4d8' }} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{item.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={getLocalizedPath('/portfolio', locale)} className="text-sm font-semibold" style={{ color: '#60a5fa' }}>
            {dict.cta} →
          </Link>
        </div>
      </div>
    </section>
  );
}
