/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import BlogBody from '@/components/BlogBody';
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from '@/data/blogData';
import { SITE_NAME, SITE_URL } from '@/lib/site';

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
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.coverImage.src, alt: post.coverImage.alt }],
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage.src],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: [post.coverImage.src],
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.jpeg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <article className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
      <div className="flex items-center gap-4 text-xs text-slate-500 mb-8">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {post.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {post.readMinutes} min read
        </span>
      </div>

      <figure className="mb-10 overflow-hidden rounded-2xl border border-white/5">
        <div className="relative aspect-[16/9] w-full bg-slate-900/40">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
        {(post.coverImage.credit || post.coverImage.alt) && (
          <figcaption className="px-3 py-2 text-[11px] text-slate-500 font-mono flex flex-wrap gap-x-2 gap-y-1">
            <span className="sr-only">{post.coverImage.alt}</span>
            {post.coverImage.credit ? (
              <span>
                Photo:{' '}
                {post.coverImage.creditUrl ? (
                  <a
                    href={post.coverImage.creditUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500/90 hover:underline"
                  >
                    {post.coverImage.credit}
                  </a>
                ) : (
                  post.coverImage.credit
                )}{' '}
                on Unsplash
              </span>
            ) : null}
          </figcaption>
        )}
      </figure>

      <BlogBody body={post.body} />

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

      {related.length > 0 && (
        <section className="mt-14 pt-10 border-t border-white/5" aria-labelledby="read-next-heading">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-400 mb-2">
                Keep reading
              </p>
              <h2
                id="read-next-heading"
                className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight"
              >
                Read next
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300"
            >
              All posts
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group rounded-2xl glass-panel glass-panel-hover overflow-hidden block"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-900/40 overflow-hidden">
                  <Image
                    src={item.coverImage.src}
                    alt={item.coverImage.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-teal-400/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-bold font-display text-white group-hover:text-teal-300 transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-400">
                    Read
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
