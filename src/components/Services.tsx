/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

const WAYS = [
  {
    id: 'growth',
    n: '01',
    title: 'Customer Acquisition & Conversion (CRO)',
    summary: 'Scale customer acquisition without wasting spend on broken funnels.',
    build:
      'High-ROAS Google and Meta ad campaigns, interactive web calculators, search visibility, and heatmap-driven A/B tests to lift checkout conversions.',
    bestFor: 'Businesses looking to scale leads and orders predictably.',
    cta: 'Explore growth systems',
    href: '/?topic=growth#contact',
  },
  {
    id: 'operations',
    n: '02',
    title: '24/7 AI Lead & Speed-to-Lead Agents',
    summary: 'Engage every prospect the second they show interest.',
    build:
      'Autonomous Web and WhatsApp agents that answer questions within 15 seconds, qualify buyer budgets, and book meetings directly into your calendar.',
    bestFor: 'High-ticket services, clinics, and B2B teams losing leads to slow follow-ups.',
    cta: 'Explore AI agents',
    href: '/?topic=growth-agent#contact',
  },
  {
    id: 'live-ops',
    n: '03',
    title: 'Autonomous Operational Systems',
    summary: 'Stop running core operations on manual spreadsheets and chat threads.',
    build:
      'Autonomous platforms like PGPulse (for property/co-living) and MFleet (for driver ledgers & payouts), plus custom agents for repetitive workflows.',
    bestFor: 'Operators who want rent runs, driver ledgers, and billing to run themselves.',
    cta: 'Explore operational systems',
    href: '/products',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-slate-900"
    >
      <div id="services-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] ambient-glow-blue opacity-35 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="services-header" className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            3 ways to work together
          </h2>
        </div>

        <div id="services-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {WAYS.map((way) => (
            <article
              key={way.id}
              id={way.id === 'live-ops' ? undefined : way.id}
              className="rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7 flex flex-col"
            >
              <span className="text-[11px] font-mono font-bold text-teal-400 tracking-widest block mb-4">
                {way.n}
              </span>
              <h3 className="text-lg font-bold font-display text-white mb-3">{way.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">{way.summary}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                <span className="font-semibold text-slate-200">What we build: </span>
                {way.build}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                <span className="font-semibold text-slate-200">Best for: </span>
                {way.bestFor}
              </p>
              <a
                href={way.href}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300"
              >
                {way.cta}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
