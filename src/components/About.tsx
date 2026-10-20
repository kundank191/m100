/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-white/5"
    >
      <div id="about-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] ambient-glow-cyan opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about-headline">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Silicon Valley engineering discipline meets revenue growth
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            Most marketing agencies can&apos;t write code, and most dev shops don&apos;t understand customer
            acquisition. Mach100 was founded to bridge both.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Led by an Ex-DoorDash Data &amp; AI Engineer who scaled e-commerce operations from 20 to 1,000+ daily
            orders, we build technical acquisition funnels that acquire customers, and autonomous AI agents that
            run backend operations. Production code only. No endless meetings, no slide decks.
          </p>
        </div>
      </div>
    </section>
  );
}
