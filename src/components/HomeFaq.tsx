/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Link from 'next/link';
import { FAQ_ITEMS } from '@/data/faqData';

/** First four items are the homepage FAQ from task.md. Static HTML, no client JS. */
export default function HomeFaq() {
  const items = FAQ_ITEMS.slice(0, 4);

  return (
    <section id="faq" className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <article key={item.question} className="rounded-2xl glass-panel p-6 sm:p-7">
              <h3 className="text-base font-bold font-display text-white mb-2 leading-snug">{item.question}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-400">
          More answers on process, pricing, and products are on the{' '}
          <Link href="/faq" className="text-teal-400 font-semibold hover:text-teal-300">
            full FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
