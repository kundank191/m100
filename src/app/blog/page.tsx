/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { getPostsSorted } from '@/data/blogData';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog - Practical Guides for Indian Businesses | Mach100',
  },
  description:
    'Practical guides for Indian businesses: websites that convert, web apps with login, internal tools, Excel replacement, and workflow automation.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  const posts = getPostsSorted();

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="section-chip mb-4">
        <span>Resources</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-3">
        Blog
      </h1>
      <p className="text-slate-400 text-base max-w-2xl mb-8 sm:mb-10 leading-relaxed">
        Practical notes on websites that convert, fleet software, PG operations, AI health tools, and shipping
        MVPs in India.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((item) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className="text-left rounded-2xl glass-panel glass-panel-hover overflow-hidden group block"
          >
            <div className="relative aspect-[16/9] w-full bg-slate-900/40 overflow-hidden">
              <Image
                src={item.coverImage.src}
                alt={item.coverImage.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
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
                <span className="inline-flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    {item.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {item.readMinutes} min
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 text-teal-400 font-semibold">
                  Read
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
