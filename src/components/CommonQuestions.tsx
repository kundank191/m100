/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { HOME_QUESTIONS } from '@/data/faqData';

export default function CommonQuestions() {
  return (
    <section id="common-questions" className="relative py-16 sm:py-24 overflow-hidden bg-[#070b14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
              Common questions
            </h2>
          </div>

          <div className="border-b border-white/10">
            {HOME_QUESTIONS.map((item) => (
              <details key={item.question} className="group border-t border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span
                    className="shrink-0 text-xl leading-none text-slate-400 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-5">
                  {item.blocks.map((block) => (
                    <div key={block.label} className="border-t border-white/10 py-4">
                      <h3 className="text-sm font-mono font-bold uppercase tracking-[0.14em] text-white">
                        {block.label}
                      </h3>
                      <p className="mt-2 text-base text-slate-300 leading-relaxed">{block.text}</p>
                    </div>
                  ))}
                  {item.note ? <p className="pt-2 text-base text-slate-300 leading-relaxed">{item.note}</p> : null}
                </div>
              </details>
            ))}
            <p className="py-5 text-base text-slate-400">
              More on pricing, products, and where we work is on the{' '}
              <Link href="/faq" className="font-semibold text-teal-400 hover:text-teal-300">
                full FAQ
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
