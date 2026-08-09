/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Building2, Home, Truck } from 'lucide-react';

const AUDIENCES = [
  {
    icon: Home,
    title: 'PG & co-living operators',
    desc: 'Teams that want rent, vacancies, and tenant communication to run with far less manual work.',
  },
  {
    icon: Truck,
    title: 'Fleet & logistics businesses',
    desc: 'Cab operators and logistics teams ready for ledgers, payouts, routes, and anomaly detection that act.',
  },
  {
    icon: Building2,
    title: 'SMEs automating internal ops',
    desc: 'Indian and international businesses that need practical agentic tools for custom workflows.',
  },
];

export default function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with-section"
      className="py-16 sm:py-20 relative overflow-hidden bg-[#070b14] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Who we work with
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We primarily work with Indian SMEs and growing businesses that need operational systems - and with
            international clients who want production-ready agentic tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8">
          {AUDIENCES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-950/40 border border-white/5 text-teal-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
          If manual work still dominates your operations, an agentic approach may be a fit - we&apos;ll tell you
          honestly either way.
        </p>
      </div>
    </section>
  );
}
