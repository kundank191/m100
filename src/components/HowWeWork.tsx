/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Growth & Operations Diagnostic',
    desc: 'Share the customer acquisition goals you want to hit or the manual workflows you want automated. We audit your current funnel, website conversion leaks, and operational bottlenecks.',
  },
  {
    n: '02',
    title: 'Clear System Architecture & Scope',
    desc: 'Whether we are launching a high-converting ad + CRO engine or building a custom operational AI agent, you get a fixed scope, clear ROI milestones, and transparent timeline - no hidden surprises.',
  },
  {
    n: '03',
    title: 'Rapid Weekly Sprints & Live Demos',
    desc: 'We build and launch in short weekly cycles. You see live campaigns, A/B test data, and working AI agents in your browser every week.',
  },
  {
    n: '04',
    title: 'Production Scale & Optimization',
    desc: 'We monitor conversion metrics, optimize Customer Acquisition Cost (CAC), and refine agent accuracy so your revenue scales while your manual workload drops.',
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-white/5"
    >
      <div id="how-we-work-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            A Transparent Path From Audit to Autonomous Scale
          </h2>
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
