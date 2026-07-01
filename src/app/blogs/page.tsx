'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import Newsletter from '@/components/blog/Newsletter';
import { blogPosts, categories, getFeaturedBlog, getTrendingBlogs } from '@/lib/blog-data';

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featured = getFeaturedBlog();
  const trending = getTrendingBlogs(4);

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ─── SEO / Meta is handled in layout, inject JSON-LD here ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'ERYON AI Insights',
            description: 'Latest articles on AI, Software Engineering, Cloud Infrastructure and Emerging Technologies.',
            url: 'https://www.eryonai.com/blogs',
            publisher: {
              '@type': 'Organization',
              name: 'ERYON AI',
              logo: { '@type': 'ImageObject', url: 'https://www.eryonai.com/logo.png' },
            },
          }),
        }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* ═══ HERO ═══ */}
        <section
          className="relative overflow-hidden pt-36 pb-24"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0066ff 150%)' }}
        >
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,180,216,0.3), transparent)' }}
          />
          <motion.div
            animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent)' }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-blue-300 border border-blue-500/30 bg-blue-500/10 mb-6"
            >
              ✦ ERYON AI PUBLICATION
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Insights, Technology
              <br />
              <span style={{ background: 'linear-gradient(90deg, #0066ff, #00b4d8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                &amp; Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Latest articles on AI, Software Engineering, Product Development, Startups, Automation, Cloud Infrastructure and Emerging Technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center max-w-lg mx-auto gap-3"
            >
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/60">🔍</span>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-400 transition-all"
                />
              </div>
              <motion.a
                href="#articles"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-3.5 rounded-xl font-bold text-sm text-white whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)' }}
              >
                Explore →
              </motion.a>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* ═══ FEATURED ═══ */}
          {!searchQuery && activeCategory === 'All' && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #0066ff, #00b4d8)' }} />
                <h2 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Featured Article
                </h2>
                <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded-full">Editor&apos;s Pick</span>
              </div>
              <BlogCard post={featured} featured />
            </section>
          )}

          {/* ═══ TRENDING SIDEBAR + CONTENT ═══ */}
          <div className="flex flex-col lg:flex-row gap-10" id="articles">

            {/* ── Main Content ── */}
            <div className="flex-1 min-w-0">
              {/* Category Filters */}
              <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                      activeCategory === cat
                        ? 'text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                    }`}
                    style={activeCategory === cat ? { background: 'linear-gradient(135deg, #0066ff, #00b4d8)' } : {}}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>

              {/* Results count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-500">
                  {filtered.length} article{filtered.length !== 1 ? 's' : ''}
                  {searchQuery && <span> for &quot;<strong>{searchQuery}</strong>&quot;</span>}
                  {activeCategory !== 'All' && <span> in <strong>{activeCategory}</strong></span>}
                </p>
              </div>

              {/* Articles Grid */}
              <AnimatePresence mode="wait">
                {filtered.length > 0 ? (
                  <motion.div
                    key={`${activeCategory}-${searchQuery}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    {filtered.map((post, i) => (
                      <BlogCard key={post.slug} post={post} index={i} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="text-5xl mb-4">🔭</div>
                    <h3 className="text-xl font-bold text-slate-700 mb-2">No articles found</h3>
                    <p className="text-slate-400 mb-6">Try a different search term or category.</p>
                    <button
                      onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 transition-colors"
                    >
                      Clear filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:w-72 xl:w-80 shrink-0">
              {/* Trending */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6 sticky top-28">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-orange-500 text-lg">🔥</span>
                  <h3 className="text-base font-extrabold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Trending Tech Articles
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {trending.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link href={`/blogs/${post.slug}`} className="flex gap-3 group items-start">
                        <span className="text-2xl font-extrabold text-slate-100 shrink-0 leading-tight w-8">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-slate-400">{post.readTime} min read · {post.category}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h3 className="text-base font-extrabold text-slate-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Browse Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.filter((c) => c !== 'All').map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat); document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-200 transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* ═══ NEWSLETTER ═══ */}
          <div className="mt-16">
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
}
