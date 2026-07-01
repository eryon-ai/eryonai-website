'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogPost } from '@/lib/blog-data';
import BlogCard from '@/components/blog/BlogCard';
import Newsletter from '@/components/blog/Newsletter';

interface BlogDetailClientProps {
  post: BlogPost;
  related: BlogPost[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Extract headings from markdown for TOC
function extractHeadings(content: string) {
  const regex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { level: number; text: string; id: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({ level: match[1].length, text, id });
  }
  return headings;
}

export default function BlogDetailClient({ post, related }: BlogDetailClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: contentRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const headings = extractHeadings(post.content);

  // Track active heading for TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHeading(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    document.querySelectorAll('h2[id], h3[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://eryonai.com/blogs/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Reading Progress Bar ─── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[9000] origin-left"
        style={{ scaleX, background: 'linear-gradient(90deg, #0066ff, #00b4d8, #6366f1)' }}
      />

      {/* ─── Hero ─── */}
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-14 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Link href="/blogs" className="text-blue-300 text-sm hover:text-white transition-colors">
                  ← Back to Blog
                </Link>
                <span className="text-white/30">/</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #0066ff, #00b4d8)' }}>
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {post.title}
              </h1>
              <p className="text-blue-200/80 text-lg mb-6 max-w-2xl">{post.description}</p>
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3">
                  <img src={post.author.avatar} alt={post.author.name}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                  <div>
                    <p className="text-white font-semibold text-sm">{post.author.name}</p>
                    <p className="text-blue-300/70 text-xs">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span>📅 {formatDate(post.date)}</span>
                  <span>⏱ {post.readTime} min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Content + Sidebar ─── */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── Article Body ── */}
          <article className="flex-1 min-w-0">
            {/* Social Share */}
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-500 mr-1">Share:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-bold bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-bold bg-black text-white hover:opacity-90 transition-opacity"
              >
                𝕏 Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-bold bg-[#1877f2] text-white hover:opacity-90 transition-opacity"
              >
                Facebook
              </a>
              <button
                onClick={copyLink}
                className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${
                  copied ? 'border-green-400 text-green-600 bg-green-50' : 'border-slate-200 text-slate-600 hover:border-blue-300'
                }`}
              >
                {copied ? '✓ Copied!' : '🔗 Copy Link'}
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Markdown Content */}
            <div className="prose prose-lg max-w-none blog-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-extrabold text-slate-900 mt-10 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{children}</h1>,
                  h2: ({ children }) => {
                    const text = String(children);
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return <h2 id={id} className="text-2xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-24" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{children}</h2>;
                  },
                  h3: ({ children }) => {
                    const text = String(children);
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return <h3 id={id} className="text-xl font-bold text-slate-800 mt-8 mb-3 scroll-mt-24">{children}</h3>;
                  },
                  h4: ({ children }) => <h4 className="text-lg font-semibold text-slate-700 mt-6 mb-2">{children}</h4>,
                  p: ({ children }) => <p className="text-slate-700 leading-relaxed mb-5 text-base">{children}</p>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl px-6 py-4 my-6 italic text-blue-900">
                      {children}
                    </blockquote>
                  ),
                  code: (props) => {
                    const { children, className } = props;
                    const isBlock = className?.includes('language-');
                    return isBlock ? (
                      <pre className="bg-slate-900 text-slate-100 rounded-xl p-5 my-6 overflow-x-auto text-sm font-mono leading-relaxed">
                        <code className={className}>{children}</code>
                      </pre>
                    ) : (
                      <code className="px-1.5 py-0.5 rounded bg-slate-100 text-blue-600 text-sm font-mono">{children}</code>
                    );
                  },
                  ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-1.5 text-slate-700">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-1.5 text-slate-700">{children}</ol>,
                  li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                      <table className="w-full text-sm">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-slate-50 text-slate-600 font-semibold">{children}</thead>,
                  th: ({ children }) => <th className="px-4 py-3 text-left border-b border-slate-200">{children}</th>,
                  td: ({ children }) => <td className="px-4 py-3 border-b border-slate-100">{children}</td>,
                  a: ({ href, children }) => (
                    <a href={href} className="text-blue-600 underline decoration-blue-300 hover:decoration-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
                  hr: () => <hr className="my-8 border-slate-200" />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Author Card */}
            <div className="mt-12 p-6 rounded-2xl border border-slate-100 bg-slate-50 flex gap-4 items-center">
              <img src={post.author.avatar} alt={post.author.name}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shrink-0" />
              <div>
                <p className="font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{post.author.name}</p>
                <p className="text-sm text-blue-600 font-semibold mb-1">{post.author.role} at ERYON AI</p>
                <p className="text-sm text-slate-500">Expert in cutting-edge technology, AI systems, and enterprise software development.</p>
              </div>
            </div>
          </article>

          {/* ── Sidebar TOC ── */}
          {headings.length > 0 && (
            <aside className="hidden lg:block lg:w-64 xl:w-72 shrink-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Table of Contents</h3>
                  <nav className="flex flex-col gap-1">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className={`text-sm transition-all duration-200 rounded-lg px-3 py-1.5 ${
                          h.level === 3 ? 'ml-3' : ''
                        } ${
                          activeHeading === h.id
                            ? 'text-blue-600 bg-blue-50 font-semibold'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Share sidebar */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mt-4">
                  <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Share Article</h3>
                  <div className="flex flex-col gap-2">
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#0077b5] text-white hover:opacity-90 transition-opacity">
                      🔗 LinkedIn
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold bg-black text-white hover:opacity-90 transition-opacity">
                      𝕏 Twitter
                    </a>
                    <button onClick={copyLink}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
                      {copied ? '✓ Copied!' : '🔗 Copy Link'}
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>

        {/* ─── Related Articles ─── */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #0066ff, #00b4d8)' }} />
              <h2 className="text-2xl font-extrabold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Related Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => <BlogCard key={p.slug} post={p} index={i} />)}
            </div>
          </section>
        )}

        {/* ─── Newsletter ─── */}
        <div className="mt-14">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
