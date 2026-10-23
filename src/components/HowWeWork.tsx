/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Before',
    desc: 'We review your website, ad funnels, and current operational workflow.',
  },
  {
    n: '02',
    title: 'On the call (15 mins)',
    desc: 'We identify the exact points where you are losing customer leads or wasting hours on manual tasks.',
  },
  {
    n: '03',
    title: 'After',
    desc: 'If there is a clear fit, we provide a concrete scope to fix acquisition and deploy autonomous AI agents. No obligation.',
  },
];

export default function HowWeWork() {
  return (
    <section id="audit" className="relative py-16 sm:py-24 overflow-hidden bg-[#070b14] border-t border-white/5">
      <div id="process" className="absolute top-0 left-0" aria-hidden="true" />
      <div id="how-we-work-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="max-w-md">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
              The Audit
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
              Find your growth leaks and operational bottlenecks
            </h2>
          </div>

          <div>
            <ol>
              {STEPS.map((step) => (
                <li key={step.n} className="grid grid-cols-[2.75rem_1fr] gap-2 border-t border-white/10 py-6">
                  <span className="pt-0.5 text-sm font-mono font-semibold text-slate-400">{step.n}</span>
                  <div>
                    <h3 className="text-sm font-mono font-bold uppercase tracking-[0.14em] text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
