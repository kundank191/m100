/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS, getPostBySlug } from '@/data/blogData';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-teal-400 hover:text-teal-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Blog
      </Link>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded bg-teal-950/40 border border-teal-500/20 text-[10px] font-mono text-teal-400"
          >
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
        {post.body.map((para, i) => {
          if (para.startsWith('### ')) {
            return (
              <h3
                key={i}
                className="text-lg font-bold font-display text-white tracking-tight pt-4 !mb-0"
              >
                {para.slice(4)}
              </h3>
            );
          }
          if (para.startsWith('## ')) {
            return (
              <h2
                key={i}
                className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight pt-6 border-t border-white/5 !mt-8 first:border-0 first:pt-0 first:!mt-0"
              >
                {para.slice(3)}
              </h2>
            );
          }
          if (/^\d+\.\s/.test(para)) {
            return (
              <p key={i} className="pl-1 text-slate-300">
                {para}
              </p>
            );
          }
          return <p key={i}>{para}</p>;
        })}
      </div>
      <div className="mt-12 p-6 rounded-2xl glass-panel">
        <p className="text-sm text-slate-400 mb-4">Want this built for your team?</p>
        <Link
          href="/#contact-section"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400"
        >
          Contact Mach100
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
