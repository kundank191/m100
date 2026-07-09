/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, faqJsonLd } from '../data/faqData';

interface FaqPageProps {
  onContact: () => void;
}

export default function FaqPage({ onContact }: FaqPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const scriptId = 'faq-jsonld';
    let el = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.id = scriptId;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(faqJsonLd());
    return () => {
      el?.remove();
    };
  }, []);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="section-chip mb-4">
        <span>FAQ</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-3">
        Frequently asked questions
      </h1>
      <p className="text-slate-400 text-base mb-12 leading-relaxed">
        Timelines, products, pricing model, and how to get access. Still stuck? Email{' '}
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

      <div className="mt-12 text-center">
        <button
          type="button"
          onClick={onContact}
          className="px-6 py-3 rounded-full bg-white text-slate-950 text-xs font-bold hover:bg-teal-50 cursor-pointer"
        >
          Still have questions? Contact us
        </button>
      </div>
    </section>
  );
}
