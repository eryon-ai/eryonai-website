'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const categoryColors: Record<string, string> = {
  'Artificial Intelligence': 'from-blue-500 to-cyan-400',
  'Software Engineering': 'from-violet-500 to-purple-400',
  'Cloud Computing': 'from-sky-500 to-blue-400',
  'Startups': 'from-orange-500 to-amber-400',
  'DevOps': 'from-emerald-500 to-teal-400',
  'Cyber Security': 'from-red-500 to-rose-400',
  'Automation': 'from-indigo-500 to-blue-400',
  'Web Development': 'from-fuchsia-500 to-pink-400',
  'Data Engineering': 'from-yellow-500 to-orange-400',
  'Product Design': 'from-pink-500 to-rose-400',
};

function getCategoryGradient(category: string) {
  return categoryColors[category] ?? 'from-blue-500 to-cyan-400';
}

export default function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        <Link href={`/blogs/${post.slug}`} className="block">
          <div className="relative h-80 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryGradient(post.category)} mb-3`}>
                {post.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 group-hover:text-blue-200 transition-colors">
                {post.title}
              </h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">{post.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={36}
                  height={36}
                  className="rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{post.author.name}</p>
                  <p className="text-xs text-slate-500">{post.author.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">{formatDate(post.date)}</p>
                <p className="text-xs text-blue-600 font-semibold">{post.readTime} min read</p>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col"
    >
      <Link href={`/blogs/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-600"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryGradient(post.category)}`}>
            {post.category}
          </span>
          {post.trending && (
            <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-orange-500/90 backdrop-blur-sm flex items-center gap-1">
              🔥 Trending
            </span>
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4 flex-1">{post.description}</p>
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={28}
                height={28}
                className="rounded-full bg-gradient-to-br from-blue-500 to-cyan-400"
              />
              <span className="text-xs font-semibold text-slate-700">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>{post.readTime} min</span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
