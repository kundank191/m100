/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import Logo from '@/components/Logo';
import { getPostsSorted } from '@/data/blogData';

const PRODUCTS = [
  { href: '/products/pgpulse', label: 'PGPulse' },
  { href: '/products/mfleet', label: 'MFleet' },
  { href: '/products/glucare', label: 'GluCare' },
];

/** Server Component - no hydration cost on the homepage shell. */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const posts = getPostsSorted().slice(0, 3);

  return (
    <footer
      id="main-footer"
      className="bg-[#070b14] border-t border-white/5 py-12 sm:py-14 text-slate-400 text-sm relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              More customers. Zero manual operations.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
              <Shield className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
              <a href="mailto:contact@mach100.in" className="hover:text-teal-400 transition-colors">
                contact@mach100.in
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#services" className="hover:text-teal-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#proof" className="hover:text-teal-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <a href="/#audit" className="hover:text-teal-400 transition-colors">
                  The Audit
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Live products</h2>
            <ul className="space-y-2 text-sm">
              {PRODUCTS.map((product) => (
                <li key={product.href}>
                  <Link href={product.href} className="hover:text-teal-400 transition-colors">
                    {product.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="hover:text-teal-400 transition-colors">
                  All products
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Blog</h2>
            <ul className="space-y-2 text-sm">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="hover:text-teal-400 transition-colors leading-relaxed">
                    {post.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-teal-400 hover:text-teal-300 transition-colors">
                  All posts
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-xs text-slate-400">
          <span>(c) {currentYear} Mach100 Tech Solutions Private Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
