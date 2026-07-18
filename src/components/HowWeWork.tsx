/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Tell us what you need',
    desc: "Share your requirements — whether it's a website, web app, or internal tool.",
  },
  {
    n: '02',
    title: 'We scope it clearly',
    desc: 'We give you a clear scope, timeline, and cost with no hidden surprises.',
  },
  {
    n: '03',
    title: 'We build and share progress',
    desc: 'We work in short cycles and keep you updated throughout the development.',
  },
  {
    n: '04',
    title: 'We test and deliver',
    desc: 'We thoroughly test everything and deliver production-ready software.',
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work-section"
      className="py-16 sm:py-20 relative overflow-hidden bg-[#070b14] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            How we work
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A simple and transparent process.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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
