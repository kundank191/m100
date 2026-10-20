/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const BLOCKS = [
  {
    title: 'Mylo (Consumer E-Commerce & Community)',
    points: [
      '20 -> 1,000+ daily orders scaled in production (50x growth).',
      '100K -> 250K Daily Active Users (DAU) reached.',
      'Built the recommendation engines, user personalization pipelines, and rapid A/B testing infrastructure that drove repeat transactions.',
    ],
  },
  {
    title: 'DoorDash (Enterprise Logistics & Food Delivery)',
    points: [
      'Enabled AI-driven automated workflows.',
      'Engineered mission-critical financial data pipelines handling high transaction volume.',
    ],
  },
  {
    title: 'Mach100 Systems (Production AI Deployments)',
    points: [
      'Built and shipped production agentic systems handling automated ledgers, tenant workflows, and anomaly alerts with minimal human intervention.',
    ],
  },
];

export default function Proof() {
  return (
    <section id="proof" className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Engineered for production scale
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {BLOCKS.map((block) => (
            <article key={block.title} className="rounded-2xl glass-panel p-6 sm:p-8">
              <h3 className="text-lg font-bold font-display text-white mb-4">{block.title}</h3>
              <ul className="space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="text-sm text-slate-300 leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
