'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProjectCard } from '@/components/ui/project-card';

const projects = [
  {
    title: 'CraveRush — Food Delivery Platform',
    description:
      'Event-driven microservices architecture built with Spring Boot, Apache Kafka, React, and seamless Stripe payment integration.',
    imgSrc:
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775236621/WhatsApp_Image_2026-04-03_at_16.17.11_jixs2u.jpg',
    link: '/case-study/craverush',
    linkText: 'View Case Study',
  },
  {
    title: 'Origin — Digital Experience',
    description:
      'Immersive Awwwards-style creative portfolio utilizing Three.js WebGL, GSAP scroll animations, and React Lenis.',
    imgSrc:
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775241107/Screenshot_2026-04-03_at_11.59.01_PM_ainicc.png',
    link: '/case-study/origin',
    linkText: 'View Case Study',
  },
  {
    title: 'HireStream — Online Job Portal',
    description:
      'Comprehensive recruitment platform with role-based JWT authentication, resume parsing, and secure Spring Boot REST APIs.',
    imgSrc:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    link: '/case-study/hirestream',
    linkText: 'View Case Study',
  },
  {
    title: 'Kyprox — Music Web Experience',
    description:
      'Premium interactive platform for artists featuring Three.js particle effects, GSAP animations, and Next.js performance.',
    imgSrc:
      'https://res.cloudinary.com/dy4ngisxj/image/upload/v1775238959/Screenshot_2026-04-03_at_11.24.23_PM_ppgjqq.png',
    link: '/case-study/kyprox',
    linkText: 'View Case Study',
  },
  {
    title: 'Aura Planters — E-Commerce',
    description:
      'Full-stack MERN e-commerce platform with Redux state management, Razorpay payment gateway, and an admin dashboard.',
    imgSrc:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop',
    link: '/case-study/auraplanters',
    linkText: 'View Case Study',
  },
  {
    title: 'EchoSync — Real-Time Voice AI',
    description:
      'Streaming voice AI pipeline featuring state machine logic, sub-1s latency, and concurrent WebSocket call orchestration.',
    imgSrc:
      'https://images.unsplash.com/photo-1589254066213-a0c9dc853511?q=80&w=2000&auto=format&fit=crop',
    link: '/case-study/echosync',
    linkText: 'View Case Study',
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="portfolio" className="section-pad" style={{ background: '#ffffff' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="section-label">Case Studies</div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="section-title"
              style={{ marginTop: 10, maxWidth: 480 }}
            >
              Work That <span className="gradient-text">Speaks</span>
            </motion.h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
            >
              <ProjectCard
                imgSrc={p.imgSrc}
                title={p.title}
                description={p.description}
                link={p.link}
                linkText={p.linkText}
                className="h-full"
                style={
                  {
                    '--tw-shadow': '0 4px 24px rgba(0,0,0,0.07)',
                    border: '1px solid #e2e8f0',
                  } as React.CSSProperties
                }
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="text-center mt-16 pt-4"
        >
          <p style={{ color: '#64748b', marginBottom: 20, fontSize: 15 }}>
            These are just a few highlights — we&apos;ve delivered 150+ projects across industries.
          </p>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
