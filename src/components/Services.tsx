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
    title: 'Get more customers without wasting ad spend',
    body: 'We run Google and Meta ads and fix the pages so more visitors become buyers.',
    bestFor: 'Businesses that want predictable leads and orders.',
    cta: 'Explore growth systems',
    href: '/?topic=growth#contact',
  },
  {
    id: 'operations',
    n: '02',
    title: 'Reply to every lead in seconds',
    body: "AI agents on your website and WhatsApp answer instantly, check if they're a fit, and book the meeting.",
    bestFor: 'Clinics, high-ticket services, and B2B teams losing leads to slow replies.',
    cta: 'Explore AI agents',
    href: '/?topic=growth-agent#contact',
  },
  {
    id: 'live-ops',
    n: '03',
    title: 'Stop running everything in Excel and WhatsApp',
    body: 'Systems that handle rent, driver ledgers, payouts, and daily tasks for you.',
    bestFor: 'PG/co-living operators and fleet teams who want the work to run itself.',
    cta: 'Explore operational systems',
    href: '/products',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative pt-4 pb-16 sm:pt-6 sm:pb-24 overflow-hidden bg-[#070b14]"
    >
      <div id="services-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] ambient-glow-blue opacity-35 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="services-header" className="max-w-3xl mx-auto mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
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
              <span className="text-sm font-mono font-bold text-teal-400 tracking-widest block mb-4">
                {way.n}
              </span>
              <h3 className="text-lg font-bold font-display text-white mb-3">{way.title}</h3>
              <p className="text-base text-slate-300 leading-relaxed mb-5">{way.body}</p>
              <p className="text-base text-slate-400 leading-relaxed mb-6">
                <span className="font-semibold text-slate-200">Best for: </span>
                {way.bestFor}
              </p>
              <a
                href={way.href}
                className="mt-auto inline-flex items-center gap-2 text-base font-semibold text-teal-400 hover:text-teal-300"
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
