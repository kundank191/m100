/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 overflow-hidden bg-[#070b14]">
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] ambient-glow-cyan opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
          About
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
          Silicon Valley engineering discipline meets revenue growth
        </h1>
        <p className="text-slate-300 text-base leading-relaxed mb-4">
          Most marketing agencies can&apos;t write code, and most dev shops don&apos;t understand customer
          acquisition. Mach100 was founded to bridge both.
        </p>
        <p className="text-slate-400 text-base leading-relaxed mb-10">
          Led by an Ex-DoorDash Data &amp; AI Engineer who scaled e-commerce operations from 20 to 1,000+ daily
          orders, we build technical acquisition funnels that acquire customers, and autonomous AI agents that
          run backend operations. Production code only. No endless meetings, no slide decks.
        </p>

        <h2 className="text-xl font-bold font-display text-white mb-4">Where the engineering comes from</h2>
        <ul className="space-y-3 mb-10">
          <li className="text-sm text-slate-300 leading-relaxed">
            DoorDash: AI-driven automated workflows on enterprise logistics and food delivery.
          </li>
          <li className="text-sm text-slate-300 leading-relaxed">
            DoorDash: mission-critical financial data pipelines handling high transaction volume.
          </li>
          <li className="text-sm text-slate-300 leading-relaxed">
            Mylo: recommendation engines, personalization pipelines, and the A/B testing setup behind the move
            from 20 to 1,000+ daily orders and from 100K to 250K daily active users.
          </li>
        </ul>

        <Link
          href="/#contact"
          className="inline-flex items-center text-sm font-semibold text-teal-400 hover:text-teal-300"
        >
          Book an audit
        </Link>
      </div>
    </section>
  );
}
