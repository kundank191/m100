/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { FAQ_ITEMS, HOME_QUESTIONS, type HomeQuestion } from '@/data/faqData';

function QuestionRow({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <details className="group border-t border-white/10">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span
          className="shrink-0 text-xl leading-none text-slate-400 transition-transform duration-200 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div className="pb-6">{children}</div>
    </details>
  );
}

function HomeAnswer({ item }: { item: HomeQuestion }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
        {item.blocks.map((block) => (
          <div key={block.label} className="border-t border-white/10 py-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-[0.14em] text-white">{block.label}</h3>
            <p className="mt-2 text-base text-slate-300 leading-relaxed">{block.text}</p>
          </div>
        ))}
      </div>
      {item.note ? <p className="pt-2 text-base text-slate-300 leading-relaxed">{item.note}</p> : null}
    </>
  );
}

export default function FaqPage() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
              Common questions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              How a project runs, what is included, and what your team needs to provide.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-white/5 hover:bg-teal-50 transition-colors"
          >
            Book an audit
          </Link>
        </div>

        <div className="border-b border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight pb-2">How we work</h2>
          {HOME_QUESTIONS.map((item) => (
            <QuestionRow key={item.question} question={item.question}>
              <HomeAnswer item={item} />
            </QuestionRow>
          ))}
        </div>

        <div className="mt-14 border-b border-white/10">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight pb-2">
            Products, pricing, and getting started
          </h2>
          {FAQ_ITEMS.map((item) => (
            <QuestionRow key={item.question} question={item.question}>
              <p className="max-w-4xl text-base text-slate-300 leading-relaxed">{item.answer}</p>
            </QuestionRow>
          ))}
        </div>

        <p className="mt-8 text-base text-slate-400">
          Still stuck? Email{' '}
          <a href="mailto:contact@mach100.in" className="font-semibold text-teal-400 hover:text-teal-300">
            contact@mach100.in
          </a>
          .
        </p>
      </div>
    </section>
  );
}
