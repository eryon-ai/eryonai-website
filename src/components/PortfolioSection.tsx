'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderKanban } from 'lucide-react';
import { ProjectCard } from '@/components/ui/project-card';
import SectionBadge from '@/components/ui/SectionBadge';
import MovingBorderButton from '@/components/ui/MovingBorderButton';

const projects = [
  {
    title: 'Gym & Fitness Management Dashboard',
    description: 'A comprehensive admin panel tailored for fitness centers, featuring member tracking, subscription management, and analytics.',
    imgSrc: '/portfolio/gym-home.png',
    link: '/case-study/gym-dashboard',
    linkText: 'View Case Study',
  },
  {
    title: 'Hospital HRMS & Medical CRM',
    description: 'Enterprise healthcare CRM designed for medical staff management, patient records, and hospital administration workflows.',
    imgSrc: '/portfolio/hrms-home.png',
    link: '/case-study/hospital-hrms',
    linkText: 'View Case Study',
  },
  {
    title: 'Velorian Luxury Watch E-Commerce',
    description: 'Premium e-commerce storefront for luxury timepieces with sleek UI, cart management, and seamless checkout flow.',
    imgSrc: '/portfolio/velorian-home.png',
    link: '/case-study/velorian-watches',
    linkText: 'View Case Study',
  },
  {
    title: 'MarbleMart Custom CRM',
    description: 'Bespoke internal operations dashboard managing multi-million dollar inventory and logistics across international warehouses.',
    imgSrc: '/portfolio/marblemart-home.png',
    link: '/case-study/marblemart-crm',
    linkText: 'View Case Study',
  },
  {
    title: 'MarbleMart Corporate Catalog',
    description: 'A luxurious B2B catalog featuring high-resolution 3D models and edge-cached imagery for lightning-fast performance.',
    imgSrc: '/portfolio/marblemart-web-home.png',
    link: '/case-study/marblemart-web',
    linkText: 'View Case Study',
  },
  {
    title: 'EduNexus School ERP',
    description: 'Comprehensive educational resource planning system with multi-campus support and parent portals.',
    imgSrc: '/portfolio/edunexus-home.png',
    link: '/case-study/edunexus-erp',
    linkText: 'View Case Study',
  },
  {
    title: 'Atelier Boutique E-Commerce',
    description: 'Premium luxury fashion and streetwear e-commerce platform with an immersive shopping experience.',
    imgSrc: '/portfolio/atelier-home.png',
    link: '/case-study/atelier-clothing',
    linkText: 'View Case Study',
  },
  {
    title: 'Realist CRM',
    description: 'Sleek property management and CRM solution for high-end real estate agencies, with advanced filtering and listings.',
    imgSrc: '/portfolio/realist-home.png',
    link: '/case-study/realist-crm',
    linkText: 'View Case Study',
  },
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
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="portfolio" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#0f172a' }}>
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge icon={FolderKanban} label="Portfolio" color="#0066ff" className="mx-auto" />
          <h2 className="text-3xl md:text-5xl font-extrabold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Work That <span className="gradient-text">Speaks</span>
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: '#94a3b8' }}>
            150+ projects delivered across fintech, healthcare, e-commerce, and beyond.
          </p>
        </motion.div>

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
          <p style={{ color: '#94a3b8', marginBottom: 24, fontSize: 15 }}>
            These are just a few highlights — let&apos;s build your next success story.
          </p>
          <MovingBorderButton href="/contact">
            Discuss Your Project
          </MovingBorderButton>
        </motion.div>
      </div>
    </section>
  );
}
