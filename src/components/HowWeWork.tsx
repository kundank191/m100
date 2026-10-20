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
    <section id="audit" className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-white/5">
      <div id="process" className="absolute top-0 left-0" aria-hidden="true" />
      <div id="how-we-work-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            The Audit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Find your growth leaks and operational bottlenecks
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7">
              <span className="text-[11px] font-mono font-bold text-teal-400 tracking-widest block mb-4">
                {step.n}
              </span>
              <h3 className="text-base font-bold font-display text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
