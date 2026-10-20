/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Building2, Home, Megaphone, Truck } from 'lucide-react';

const AUDIENCES = [
  {
    icon: Megaphone,
    title: 'UK & Global SMEs Scaling Acquisition',
    desc: 'Service businesses, clinics, contractors, and B2B companies that want high-intent leads via Google/Meta Ads, technical SEO, A/B testing, and 24/7 AI lead conversion - without bloated agency retainers.',
  },
  {
    icon: Home,
    title: 'Property, HMO & Co-Living Operators',
    desc: 'Teams in the UK and India that want tenant acquisition, rent collection, vacancy filling, and WhatsApp communication to run autonomously.',
  },
  {
    icon: Truck,
    title: 'Fleet, PCO & Logistics Businesses',
    desc: 'Cab, rental, and logistics operators ready for automated ledgers, driver payouts, route intelligence, and anomaly detection that acts on data.',
  },
  {
    icon: Building2,
    title: 'Startups & SMEs Automating Internal Ops',
    desc: 'Founders tired of teams drowning in Excel and WhatsApp who want custom AI agents, recommendation systems, and internal tools built fast.',
  },
];

export default function WhoWeWorkWith() {
  return (
    <section
      id="clients"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-white/5"
    >
      <div id="who-we-work-with-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Who We Partner With
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We work with ambitious SMEs in London, the UK, and globally, alongside fast-growing Indian businesses
            that want Silicon Valley-grade AI engineering and data-backed marketing scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {AUDIENCES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-950/40 border border-white/5 text-teal-400 mb-5">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
