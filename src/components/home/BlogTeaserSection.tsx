'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

const posts = blogPosts.slice(0, 3);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function BlogTeaserSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: '#0f172a' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold tracking-wider uppercase"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#fbbf24' }}>
              📰 Latest Insights
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Thinking About{' '}
              <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                the Future
              </span>
            </h2>
          </div>
          <Link href="/blogs" className="flex-shrink-0 group flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: '#64748b' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#f8fafc'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748b'}
          >
            Read all articles
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/blogs/${post.slug}`} className="group block h-full rounded-2xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,102,255,0.3)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,102,255,0.12)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(7,12,26,0.85) 100%)' }} />
                  {/* Category */}
                  <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold"
                    style={{ background: 'rgba(0,102,255,0.3)', border: '1px solid rgba(0,102,255,0.5)', color: '#93c5fd', backdropFilter: 'blur(8px)' }}>
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3 text-xs" style={{ color: '#475569' }}>
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime} min read</span>
                  </div>

                  <h3 className="text-base font-bold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300"
                    style={{ color: '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.4 }}>
                    {post.title}
                  </h3>

                  <p className="text-sm line-clamp-2 mb-4" style={{ color: '#64748b', lineHeight: 1.6 }}>
                    {post.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2.5 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <img src={post.author.avatar} alt={post.author.name} className="w-7 h-7 rounded-full" />
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#cbd5e1' }}>{post.author.name}</p>
                      <p className="text-[10px]" style={{ color: '#475569' }}>{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
