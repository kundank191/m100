/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS, getPostBySlug } from '../data/blogData';

interface BlogPageProps {
  slug?: string;
  onOpenPost: (slug: string) => void;
  onBackToList: () => void;
  onContact: () => void;
}

export default function BlogPage({ slug, onOpenPost, onBackToList, onContact }: BlogPageProps) {
  const post = slug ? getPostBySlug(slug) : undefined;

  if (slug && !post) {
    return (
      <section className="py-28 px-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
        <button type="button" onClick={onBackToList} className="text-teal-400 text-sm font-semibold hover:underline cursor-pointer">
          ← Back to Blog
        </button>
      </section>
    );
  }

  if (post) {
    return (
      <article className="py-28 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <button
          type="button"
          onClick={onBackToList}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-teal-400 hover:text-teal-300 mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Blog
        </button>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded bg-teal-950/40 border border-teal-500/20 text-[10px] font-mono text-teal-400">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-10">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readMinutes} min read
          </span>
        </div>
        <div className="space-y-5 text-slate-300 leading-relaxed text-base">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-2xl glass-panel">
          <p className="text-sm text-slate-400 mb-4">Want this built for your team?</p>
          <button
            type="button"
            onClick={onContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 cursor-pointer"
          >
            Contact Mach100
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </article>
    );
  }

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="section-chip mb-4">
        <span>Resources</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-3">
        Blog
      </h1>
      <p className="text-slate-400 text-base max-w-2xl mb-12 leading-relaxed">
        Practical notes on fleet software, PG operations, AI health tools, and shipping MVPs in India.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOG_POSTS.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => onOpenPost(item.slug)}
            className="text-left rounded-2xl glass-panel glass-panel-hover p-6 cursor-pointer group"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-teal-400/90">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-bold font-display text-white group-hover:text-teal-300 transition-colors mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.excerpt}</p>
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span>{item.date}</span>
              <span className="inline-flex items-center gap-1 text-teal-400 font-semibold">
                Read
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
