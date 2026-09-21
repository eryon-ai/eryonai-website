import { ChevronDown } from 'lucide-react';

type FAQItem = { q: string; a: string };

export default function FAQSection({ dict }: { dict: { heading: string; items: FAQItem[] } }) {
  return (
    <section className="py-20 md:py-28" style={{ background: '#0f172a' }} aria-labelledby="home-faq-heading">
      <div className="container-custom max-w-3xl mx-auto">
        <h2
          id="home-faq-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f8fafc' }}
        >
          {dict.heading}
        </h2>
        <div className="flex flex-col gap-3">
          {dict.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff] rounded-2xl"
                style={{ color: '#f1f5f9', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <h3 className="text-base font-semibold" style={{ color: '#f1f5f9' }}>{item.q}</h3>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  style={{ color: '#00b4d8' }}
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
