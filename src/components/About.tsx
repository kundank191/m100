/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { PROOF_ITEMS } from '@/data/proofData';

const ENGINEERING = [
  {
    label: 'DoorDash',
    text: 'AI-driven automated workflows on enterprise logistics and food delivery, and financial data pipelines handling high transaction volume.',
  },
  {
    label: 'Mylo',
    text: 'Recommendation engines, personalization pipelines, and the A/B testing setup behind the move from 20 to 1,000+ daily orders and from 100K to 250K daily active users.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#070b14]">
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] ambient-glow-cyan opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            About
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
            Silicon Valley engineering discipline meets revenue growth
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-relaxed">
            Most marketing agencies can&apos;t write code, and most dev shops don&apos;t understand customer
            acquisition. Mach100 was founded to bridge both.
          </p>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Led by an Ex-DoorDash Data &amp; AI Engineer who scaled e-commerce operations from 20 to 1,000+ daily
            orders, we build technical acquisition funnels that acquire customers, and autonomous AI agents that
            run backend operations. Production code only. No endless meetings, no slide decks.
          </p>
        </div>

        <div className="mt-14 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">Achievements</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 border-b border-white/10">
            {PROOF_ITEMS.map((item) => (
              <article key={item.id} className="border-t border-white/10 py-6 sm:px-6 sm:odd:pl-0 sm:even:pr-0">
                <p className="text-sm font-mono font-bold uppercase tracking-[0.14em] text-slate-400">{item.kicker}</p>
                <p className="mt-3 text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-none">
                  {item.stat}
                </p>
                <p className="mt-3 text-base text-slate-300 leading-relaxed">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 sm:mt-16 max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
            Where the engineering comes from
          </h2>
          <div className="mt-4 border-b border-white/10">
            {ENGINEERING.map((item) => (
              <div key={item.label} className="border-t border-white/10 py-5">
                <h3 className="text-sm font-mono font-bold uppercase tracking-[0.14em] text-white">{item.label}</h3>
                <p className="mt-2 text-base text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-white/5 hover:bg-teal-50 transition-colors"
          >
            Book an audit
          </Link>
        </div>
      </div>
    </section>
  );
}
