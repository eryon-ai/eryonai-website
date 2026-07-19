'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServicePage } from '@/lib/service-page-data';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Activity, Cpu, 
  Globe, Shield, Sparkles, Layout, ListTodo, PhoneCall, Search
} from 'lucide-react';

interface ServicePageTemplateProps {
  data: ServicePage;
}

// Section 5: Standard Project Gallery Items
const GALLERY_PROJECTS = [
  {
    id: 'gym-platform',
    title: 'FitFlow Enterprise',
    category: 'Gym Management Platform',
    metrics: '28% Churn Reduction • 4.9★ Member Rating',
    description: 'A complete multi-tenant fitness club platform with real-time class booking, automated subscription billing, biometric turnstile integration, and a companion iOS/Android member app.',
    highlights: ['Multi-location scheduler', 'RFID entry gate integration', 'Stripe recurring billing', 'Custom workout tracking'],
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    desktopBg: 'bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20',
  },
  {
    id: 'hrms',
    title: 'PeopleSphere HRMS',
    category: 'Enterprise HR Portal',
    metrics: '60% Faster Onboarding • 100% Audit Trail',
    description: 'An advanced human resource management system featuring drag-and-drop org charts, digital employee records, compliance document tracking, and automated payroll pipelines.',
    highlights: ['Automated KYC validation', 'Leave approval workflow', 'SLA-tracked reviews', 'Okta SSO & MDM support'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    desktopBg: 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
  },
  {
    id: 'crm',
    title: 'DealFlow CRM',
    category: 'Sales Pipeline Hub',
    metrics: '2.5× Deal Velocity • 40% More Closed Deals',
    description: 'A customized next-generation sales platform featuring interactive pipeline boards, automated email sequences, rich lead scoring models, and built-in sales team performance analytics.',
    highlights: ['Interactive pipeline kanban', 'AI-assisted lead scoring', 'Outlook/Gmail bi-directional sync', 'Sales commission calculator'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    desktopBg: 'bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20',
  },
  {
    id: 'real-estate',
    title: 'PropView Pro',
    category: 'Map-Integrated Portal',
    metrics: '3.5 Days Saved Per Closing • MLS Ready',
    description: 'An enterprise real estate application integrating Google Maps polygon search, MLS listing database sync, and a digitized transaction checklist with legal e-signatures.',
    highlights: ['Interactive polygon search', 'Matterport 3D virtual tour embed', 'Real-time MLS database link', 'DocuSign integration API'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    desktopBg: 'bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-blue-500/20',
  },
  {
    id: 'inventory-software',
    title: 'StockSync Logistics',
    category: 'Multi-Warehouse Inventory',
    metrics: '30% Lower Carrying Costs • 0 Mispicks',
    description: 'A robust inventory management and order fulfillment system featuring real-time tracking across 12 warehouses, automatic reorder point formulas, and driver route planning.',
    highlights: ['Multi-warehouse inventory map', 'Auto PO generation rules', 'Barcode/RFID scanner support', 'Optimized dispatch list'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    desktopBg: 'bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20',
  },
  {
    id: 'saas-dashboard',
    title: 'MetricsKit SaaS Console',
    category: 'Subscription Analytics',
    metrics: '100% Billing Accuracy • Real-Time MRR',
    description: 'A clean, multi-tenant billing and analytics dashboard showing SaaS founders their live subscription metrics, monthly recurring revenue growth, churn indicators, and custom reports.',
    highlights: ['Real-time MRR & LTV tracker', 'Automated dunning queue', 'Configurable billing tiers', 'Natural-language analytics query'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    desktopBg: 'bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-cyan-500/20',
  },
];

// Section 6: Standard Development Process Steps
const TIMELINE_STEPS = [
  {
    step: 1,
    title: 'Discovery & Alignment',
    duration: 'Week 1-2',
    icon: Search,
    description: 'We audit your current systems, map operational bottlenecks, define detailed business goals, and align stakeholder requirements before design or development.',
    details: 'Deliverables: System Architecture Diagrams, Detailed Product Requirements Document (PRD), Project Scope and Budget Roadmap.',
  },
  {
    step: 2,
    title: 'Strategic Planning',
    duration: 'Week 2-3',
    icon: ListTodo,
    description: 'Our architects select the technology stack, establish data schemas, outline API boundaries, and organize the development timeline into bi-weekly sprints.',
    details: 'Deliverables: Entity Relationship Diagrams (ERDs), API specification docs, detailed sprint plans in Jira/Linear.',
  },
  {
    step: 3,
    title: 'UI/UX Design',
    duration: 'Week 3-5',
    icon: Layout,
    description: 'We build comprehensive design systems and interactive high-fidelity Figma prototypes. Every screen layout goes through user testing prior to coding.',
    details: 'Deliverables: Production Figma design files, component-based design system, clickable interactive user flows.',
  },
  {
    step: 4,
    title: 'Core Engineering',
    duration: 'Week 5-10',
    icon: Cpu,
    description: 'Our senior developers write clean, modular code following strict security guidelines. We hold weekly reviews and provide staging environments for constant tracking.',
    details: 'Deliverables: Functional staging environment, bi-weekly demo calls, production-ready codebase branches.',
  },
  {
    step: 5,
    title: 'Rigorous QA Testing',
    duration: 'Week 10-11',
    icon: CheckCircle2,
    description: 'Our dedicated QA team conducts end-to-end integration testing, visual regression testing, API performance tests, and automated vulnerability scanning.',
    details: 'Deliverables: QA verification sign-off, load testing reports, OWASP security audit certificate.',
  },
  {
    step: 6,
    title: 'CI/CD Deployment',
    duration: 'Week 12',
    icon: Globe,
    description: 'We set up zero-downtime containerized production releases on AWS or GCP, configuring real-time application monitors, alerts, and access logs.',
    details: 'Deliverables: Live production release, monitoring alerts, failover protocols, database backup systems.',
  },
  {
    step: 7,
    title: 'SLA Maintenance',
    duration: 'Ongoing',
    icon: Shield,
    description: 'We provide ongoing technical support, security patches, library upgrades, database optimization, and strategic iterations based on user analytics.',
    details: 'Deliverables: 24/7 emergency response, monthly performance reports, regular system package updates.',
  },
];

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProject, setActiveProject] = useState(GALLERY_PROJECTS[0].id);
  const [projectViewMode, setProjectViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTimelineStep, setActiveTimelineStep] = useState(1);
  const [activeTechCategory, setActiveTechCategory] = useState(data.techGroups[0]?.category || 'Frontend');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const currentProject = GALLERY_PROJECTS.find(p => p.id === activeProject) || GALLERY_PROJECTS[0];

  return (
    <div className="w-full bg-[#0f172a] text-slate-100 font-sans selection:bg-brand-blue selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION (Dark & Glossy) */}
      <section className="relative overflow-hidden pt-32 lg:pt-44 pb-20 lg:pb-36 bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#0f172a] border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/15 via-transparent to-transparent opacity-70 pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-sm font-semibold tracking-wide mb-6 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-brand-blue animate-pulse" />
                {data.hero.badge}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold leading-[1.1] mb-6 text-white tracking-tight">
                {data.hero.headline} <br />
                <span className="gradient-text bg-gradient-to-r from-brand-blue via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  {data.hero.headlineGrad}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-350 mb-10 leading-relaxed font-inter">
                {data.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="btn-primary text-center flex items-center justify-center gap-2 group py-4 px-8 rounded-xl bg-brand-blue text-white hover:bg-brand-blue/90 shadow-[0_4px_20px_rgba(0,102,255,0.4)] transition-all duration-300 hover:translate-y-[-2px]">
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="#gallery" className="btn-secondary text-center text-white border-white/10 hover:bg-white/5 py-4 px-8 rounded-xl border hover:border-white/20 transition-all duration-300">
                  Explore Project Gallery
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-900 backdrop-blur-sm">
                {data.hero.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-space font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-slate-400 font-inter font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Right: Graphic Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Decorative Orbs */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
              
              {/* Chrome Mockup Window */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 shadow-[0_15px_40px_rgba(0,0,0,0.6)] aspect-[4/3] backdrop-blur-xl">
                {/* Window header */}
                <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  <div className="w-48 h-5 rounded bg-slate-950/80 ml-4 flex items-center px-2 text-[10px] text-slate-500 font-mono overflow-hidden">
                    eryon.ai/solutions/{data.slug}
                  </div>
                </div>
                
                {/* Inner Mockup Image */}
                <div className="relative w-full h-[calc(100%-40px)] group">
                  <Image src={data.hero.heroImage} alt={data.hero.headline} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-slate-950/30 to-transparent"></div>
                  
                  {/* Floating Metric Tag */}
                  <div className="absolute bottom-6 left-6 p-4 rounded-xl border border-slate-800 bg-slate-900/90 backdrop-blur-md shadow-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium font-inter">Average ROI Delivered</div>
                      <div className="text-base font-space font-bold text-white">40% Efficiency Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD (Cards Grid) */}
      <section className="py-24 bg-[#0f172a] border-b border-slate-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">{data.buildLabel}</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white mt-6 mb-6 leading-tight">
              {data.buildTitle} <span className="gradient-text bg-gradient-to-r from-brand-blue to-cyan-400 bg-clip-text text-transparent">{data.buildTitleGrad}</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-inter">
              {data.buildSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.buildItems.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="bg-slate-900/40 p-7 rounded-2xl border border-slate-800/80 hover:border-brand-blue/40 shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col group"
              >
                <div 
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center shadow-inner"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Image src={item.icon} alt={item.title} width={32} height={32} className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-space group-hover:text-brand-blue transition-colors duration-200">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-inter flex-grow">
                  {item.description}
                </p>
                <ul className="space-y-2 mt-auto pt-4 border-t border-slate-800">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs font-semibold text-slate-300">
                      <svg className="w-4 h-4 mr-2 text-brand-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE (With Dynamic Glows) */}
      <section className="py-24 bg-[#0f172a] border-b border-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">{data.industryLabel}</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white mt-6 mb-4">
              {data.industryTitle}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-inter text-sm md:text-base">
              Tailored software strategies that understand and solve sector-specific complexities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.industries.map((ind, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                key={i}
                className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Glowing border top */}
                <div className="absolute top-0 left-0 w-full h-1 opacity-40 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: ind.color }}></div>
                
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-950 border border-slate-800">
                    <Image src={ind.icon} alt={ind.name} width={28} height={28} className="object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-space">{ind.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">The Obstacle</p>
                    <p className="text-xs text-slate-400 leading-relaxed font-inter">{ind.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: ind.color }}>Our Resolution</p>
                    <p className="text-xs text-slate-200 font-medium leading-relaxed font-inter">{ind.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURE SHOWCASE (Alternating Detailed Demos) */}
      <section className="py-24 bg-[#0f172a] border-b border-slate-900">
        <div className="container-custom">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">{data.featureLabel}</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white mt-6">Features Built for Execution</h2>
          </div>

          <div className="space-y-28 lg:space-y-36">
            {data.features.map((feat, i) => (
              <div key={i} className={`flex flex-col ${feat.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: feat.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 space-y-6 text-left"
                >
                  <div className="inline-block px-3 py-1 bg-brand-blue/15 text-brand-blue border border-brand-blue/25 font-bold text-xs rounded-full uppercase tracking-wider">
                    {feat.eyebrow}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-space font-bold text-white leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-350 font-inter leading-relaxed">
                    {feat.description}
                  </p>
                  <ul className="space-y-3 pt-4">
                    {feat.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center text-slate-300 font-semibold font-inter text-sm">
                        <div className="w-5.5 h-5.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                        </div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Simulated Premium Browser Graphic */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 w-full"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/60 aspect-[4/3] group backdrop-blur-xl">
                    <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                    {/* Simulated Header */}
                    <div className="h-9 bg-slate-900/90 border-b border-slate-800 flex items-center px-4 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    </div>
                    <Image src={feat.image} alt={feat.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-103 transition-transform duration-700" />
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECT GALLERY (Section 5 - Interactive Showcase) */}
      <section id="gallery" className="py-24 bg-[#0f172a] border-b border-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">Section 05 — Project Gallery</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white mt-6 mb-4">Enterprise Case Studies & Demos</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-inter text-sm md:text-base">
              Explore concrete examples of modern web systems, SaaS platforms, and enterprise dashboards built by our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Tab Selector List */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {GALLERY_PROJECTS.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveProject(proj.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    activeProject === proj.id 
                      ? 'bg-slate-900 border-brand-blue shadow-[0_4px_20px_rgba(0,102,255,0.15)]' 
                      : 'bg-slate-950 border-slate-900 hover:border-slate-800 hover:bg-slate-900/30'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue mb-1">{proj.category}</span>
                    <span className="text-base font-bold text-white font-space">{proj.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeProject === proj.id ? 'translate-x-1 text-brand-blue' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Right: Premium Interactive Showcase Display */}
            <div className="lg:col-span-8">
              <div className="w-full h-full rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden">
                
                {/* Ambient glow behind preview */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold font-space text-white mb-1">{currentProject.title}</h3>
                      <p className="text-sm font-semibold text-cyan-400">{currentProject.metrics}</p>
                    </div>

                    {/* Viewport Toggles (Desktop, Tablet, Mobile) */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
                      {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setProjectViewMode(mode)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                            projectViewMode === mode 
                              ? 'bg-brand-blue text-white shadow-md' 
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-inter max-w-3xl">
                    {currentProject.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {currentProject.highlights.map((hl, index) => (
                      <div key={index} className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup Display */}
                <div className={`relative w-full overflow-hidden transition-all duration-500 rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl flex flex-col ${
                  projectViewMode === 'desktop' ? 'aspect-[16/9]' : projectViewMode === 'tablet' ? 'aspect-[4/3] max-w-xl mx-auto' : 'aspect-[9/16] max-w-xs mx-auto'
                }`}>
                  {/* Browser Bar / Status Bar */}
                  {projectViewMode === 'desktop' && (
                    <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      <div className="w-40 h-4.5 rounded bg-slate-900 ml-4 flex items-center px-2 text-[9px] text-slate-500 overflow-hidden font-mono">
                        fitflow.eryon.ai/dashboard
                      </div>
                    </div>
                  )}
                  {projectViewMode === 'mobile' && (
                    <div className="h-6 bg-slate-900 flex items-center justify-between px-6 flex-shrink-0 text-[10px] text-slate-400 font-mono">
                      <span>9:41</span>
                      <div className="w-16 h-3.5 rounded-full bg-slate-950 border border-slate-800 mx-auto"></div>
                      <div className="flex gap-1">🔋</div>
                    </div>
                  )}

                  {/* Inside mockup content */}
                  <div className="w-full h-full relative overflow-hidden group">
                    <Image 
                      src={currentProject.image} 
                      alt={currentProject.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover opacity-80" 
                    />
                    
                    {/* Glassmorphic Simulated Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex flex-col justify-end p-6 md:p-8">
                      <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md shadow-2xl max-w-sm">
                        <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">{currentProject.category}</span>
                        <h4 className="text-base font-bold font-space text-white mt-1 mb-2">{currentProject.title} Demo Screen</h4>
                        <p className="text-xs text-slate-400 leading-normal font-inter">Simulated live dashboard views demonstrating modern typography, glassmorphism templates, and deep responsive layout design.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS (Section 6 - Timeline) */}
      <section className="py-24 bg-[#0f172a] border-b border-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">Section 06 — Development Process</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white mt-6 mb-4">Our Collaborative Execution Timeline</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-inter text-sm md:text-base">
              From discovery to production support, we run structured agile sprints with full transparency.
            </p>
          </div>

          {/* Interactive Stepper Layout */}
          <div className="flex flex-col gap-10">
            {/* Timeline Stepper Dots */}
            <div className="w-full relative flex items-center justify-between overflow-x-auto pb-4 max-w-5xl mx-auto border-b border-slate-900">
              {/* Horizontal connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0 hidden md:block"></div>
              
              {TIMELINE_STEPS.map((step) => {
                const IconComponent = step.icon;
                const isSelected = activeTimelineStep === step.step;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveTimelineStep(step.step)}
                    className="relative z-10 flex flex-col items-center group flex-shrink-0 px-4 focus:outline-none"
                  >
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isSelected 
                        ? 'bg-brand-blue border-brand-blue shadow-[0_0_15px_rgba(0,102,255,0.4)] text-white scale-110' 
                        : 'bg-slate-950 border-slate-800 text-slate-400 group-hover:border-slate-700'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-bold font-space mt-3 transition-colors ${isSelected ? 'text-brand-blue' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      Phase 0{step.step}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Stepper Content Details */}
            <AnimatePresence mode="wait">
              {TIMELINE_STEPS.map((step) => {
                if (step.step !== activeTimelineStep) return null;
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl mx-auto w-full bg-slate-900/35 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-start backdrop-blur-xl"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center flex-shrink-0 text-brand-blue">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-grow text-left space-y-4">
                      <div className="flex flex-wrap justify-between items-center gap-3">
                        <h3 className="text-2xl font-bold font-space text-white">
                          Phase 0{step.step}: {step.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full border border-slate-800 text-xs font-semibold font-mono bg-slate-950 text-slate-400">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-slate-350 text-base leading-relaxed font-inter">
                        {step.description}
                      </p>
                      <div className="pt-4 border-t border-slate-800/80">
                        <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">Process Highlights & Artifacts</h4>
                        <p className="text-xs text-cyan-400 font-semibold font-inter leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY STACK (Section 7 - Interactive Presentation) */}
      <section className="py-24 bg-[#0f172a] border-b border-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">Section 07 — Technology Stack</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white mt-6 mb-4">Enterprise Architecture Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-inter text-sm md:text-base">
              We leverage production-grade platforms and languages to ensure high scalability, speed, and cloud-native safety.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tech Category Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 max-w-3xl mx-auto">
              {data.techGroups.map((group) => (
                <button
                  key={group.category}
                  onClick={() => setActiveTechCategory(group.category)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold font-space transition-all ${
                    activeTechCategory === group.category 
                      ? 'bg-brand-blue text-white shadow-lg' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {group.category}
                </button>
              ))}
            </div>

            {/* Display Category Stack Details */}
            <div className="grid md:grid-cols-3 gap-6">
              {data.techGroups.find(g => g.category === activeTechCategory)?.items.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={item.name}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-brand-blue/30 text-center flex flex-col items-center justify-center shadow-lg group transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl mb-4 bg-slate-950 border border-slate-800 flex items-center justify-center p-2 group-hover:scale-108 transition-transform duration-350">
                    <Image src={item.icon} alt={item.name} width={48} height={48} className="object-contain" />
                  </div>
                  <h3 className="text-lg font-bold font-space text-white mb-2">{item.name}</h3>
                  <span className="text-xs font-semibold text-slate-500 font-inter">Production Ready</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. BUSINESS BENEFITS (Measurable Outcomes) */}
      <section className="py-24 bg-[#0f172a] border-b border-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">Section 08 — Business Benefits</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white mt-6 mb-4">Measurable Business Outcomes</h2>
            <p className="text-slate-400 text-base md:text-lg font-inter">
              We focus on solving bottom-line operational problems, driving direct ROI, and improving workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.map((ben, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-slate-900/35 border border-slate-800 p-8 rounded-2xl hover:border-slate-700/80 transition-all flex flex-col text-left group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-space font-extrabold tracking-tight group-hover:translate-x-1 transition-transform" style={{ color: ben.color }}>
                    {ben.metric}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                    <Image src={ben.icon} alt={ben.label} width={24} height={24} className="object-contain opacity-80" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-space">{ben.label}</h3>
                <p className="text-slate-400 font-inter text-sm leading-relaxed">{ben.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ (Accordion) */}
      <section className="py-24 bg-[#0f172a] border-b border-slate-900">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">Section 09 — FAQ</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-white mt-6 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 font-inter text-sm max-w-xl mx-auto">
              Get detailed answers to deployment requirements, timeline scoping, integrations, and post-launch maintenance.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-900/30 border border-slate-800 hover:border-slate-800 rounded-2xl overflow-hidden shadow-sm backdrop-blur-xl"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-white pr-8 font-space text-base md:text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === index ? 'bg-brand-blue text-white' : 'bg-slate-950 border border-slate-800 text-slate-400'}`}>
                    <svg 
                      className={`w-4.5 h-4.5 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-white' : 'text-slate-400'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-slate-400 font-inter border-t border-slate-800 pt-4 leading-relaxed text-sm md:text-base text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA (Close strategic session banner) */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="p-8 md:p-14 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-[#0f172a] text-center max-w-4xl mx-auto shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-cyan-400"></div>
            
            <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-6 tracking-tight">
              {data.ctaTitle}
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-10 font-inter max-w-2xl mx-auto leading-relaxed">
              {data.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 group py-4 px-8 rounded-xl bg-brand-blue text-white hover:bg-brand-blue/90 shadow-[0_4px_20px_rgba(0,102,255,0.4)] transition-all duration-300">
                Book a Free Consultation
                <PhoneCall className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary py-4 px-8 rounded-xl border border-slate-800 hover:bg-slate-900 text-white transition-all duration-300">
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
