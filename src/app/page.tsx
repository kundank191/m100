/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import HowWeWork from '@/components/HowWeWork';
import About from '@/components/About';
import { PRODUCTS } from '@/productsData';
import { getPostsSorted } from '@/data/blogData';
import HomeScroll from '@/components/HomeScroll';
import { SITE_DESCRIPTION, SITE_TITLE_HOME, SITE_URL } from '@/lib/site';

/** Explicit homepage meta for SERP (title + description). */
export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE_HOME,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_TITLE_HOME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    title: SITE_TITLE_HOME,
    description: SITE_DESCRIPTION,
  },
};

/**
 * Contact is the only heavy client section — load after first paint.
 * Everything above is Server Components (no hydration).
 */
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => (
    <section className="py-16 sm:py-20 border-t border-slate-900" aria-hidden="true">
      <div className="max-w-7xl mx-auto px-4 h-40" />
    </section>
  ),
});

export default function HomePage() {
  const latestPosts = getPostsSorted().slice(0, 3);

  return (
    <div id="homepage-flow">
      <HomeScroll />
      <Hero />
      <Products products={PRODUCTS} />
      <Services />
      <WhoWeWorkWith />
      <HowWeWork />
      <About />

      {/* Internal links for SEO — latest guides */}
      <section
        id="home-blog-teaser"
        className="py-14 sm:py-16 border-t border-white/5 bg-[#070b14]"
        aria-labelledby="home-blog-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-3">
                From the blog
              </span>
              <h2
                id="home-blog-heading"
                className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight"
              >
                Guides for Indian businesses
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-teal-400 hover:text-teal-300 shrink-0"
            >
              View all posts →
            </Link>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block h-full rounded-2xl glass-panel glass-panel-hover p-5 sm:p-6"
                >
                  <p className="text-[10px] font-mono text-teal-400 mb-2">
                    {post.tags.slice(0, 2).join(' · ')}
                  </p>
                  <h3 className="text-base font-bold font-display text-white mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  );
}
