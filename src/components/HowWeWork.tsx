/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    title: 'Before',
    desc: 'We look at your ads, site, and current workflow.',
  },
  {
    n: '02',
    title: 'On the call (15 mins)',
    desc: 'We show you the exact leaks.',
  },
  {
    n: '03',
    title: 'After',
    desc: 'If it makes sense, you get a clear scope. No obligation.',
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
              Find where you&apos;re losing customers or wasting hours
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
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-slate-950 shadow-xl shadow-white/5 hover:bg-teal-50 transition-colors"
            >
              Book an audit
              <ArrowRight className="w-4 h-4 text-slate-950" aria-hidden="true" />
            </a>
            <p className="mt-4 max-w-md text-base text-slate-400 leading-relaxed">
              Tell us what you want to grow or automate. We reply within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
