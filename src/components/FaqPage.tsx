/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/faqData';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="section-chip mb-4">
        <span>FAQ</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-3">
        Frequently asked questions
      </h1>
      <p className="text-slate-400 text-base mb-8 sm:mb-10 leading-relaxed">
        Practical answers about websites, web apps, internal tools, our process, examples like PGPulse and
        MFleet, pricing, and how to reach Mach100 in Bengaluru. Still stuck? Email{' '}
        <a href="mailto:contact@mach100.in" className="text-teal-400 hover:underline">
          contact@mach100.in
        </a>
        .
      </p>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question} className="rounded-xl glass-panel overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                aria-expanded={open}
              >
                <span className="text-sm font-semibold text-white pr-2">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 text-teal-400 transition-transform ${open ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {open && (
                <div className="px-5 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center space-y-4">
        <Link
          href="/#contact-section"
          className="inline-flex px-6 py-3 rounded-full bg-white text-slate-950 text-xs font-bold hover:bg-teal-50"
        >
          Still have questions? Contact us
        </Link>
        <p className="text-xs text-slate-500">
          Prefer examples first?{' '}
          <Link href="/blog" className="text-teal-400 hover:underline">
            Read the blog
          </Link>{' '}
          or{' '}
          <Link href="/#products-section" className="text-teal-400 hover:underline">
            see what we can build
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
