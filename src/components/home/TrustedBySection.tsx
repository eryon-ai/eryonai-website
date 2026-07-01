'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'AWS', url: 'https://img.icons8.com/color/96/amazon-web-services.png' },
  { name: 'Google Cloud', url: 'https://img.icons8.com/color/96/google-cloud.png' },
  { name: 'Microsoft Azure', url: 'https://img.icons8.com/color/96/azure-1.png' },
  { name: 'Docker', url: 'https://img.icons8.com/color/96/docker.png' },
  { name: 'Kubernetes', url: 'https://img.icons8.com/color/96/kubernetes.png' },
  { name: 'Stripe', url: 'https://img.icons8.com/color/96/stripe.png' },
  { name: 'Slack', url: 'https://img.icons8.com/color/96/slack-new.png' },
  { name: 'GitHub', url: 'https://img.icons8.com/color/96/github.png' },
  { name: 'Shopify', url: 'https://img.icons8.com/color/96/shopify.png' },
  { name: 'PostgreSQL', url: 'https://img.icons8.com/color/96/postgreesql.png' },
  { name: 'MongoDB', url: 'https://img.icons8.com/color/96/mongodb.png' },
  { name: 'Terraform', url: 'https://img.icons8.com/color/96/terraform.png' },
];

const marqueeItems = [...brands, ...brands];

export default function TrustedBySection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16" style={{ background: '#0a0f1e', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0a0f1e, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0a0f1e, transparent)' }} />

      <div className="text-center mb-8 md:mb-10 px-4">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Integrating with the tools enterprises trust most
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          style={{ width: 'max-content' }}
        >
          {marqueeItems.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity duration-300"
              style={{ minWidth: 90 }}
            >
              <img
                src={brand.url}
                alt={brand.name}
                width={40}
                height={40}
                style={{ objectFit: 'contain', filter: 'grayscale(100%) brightness(2)' }}
                loading="lazy"
              />
              <span className="text-[10px] font-semibold tracking-wider whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
