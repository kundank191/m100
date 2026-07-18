/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, CheckCircle2, MessageSquare, MapPin, Plane, Shield } from 'lucide-react';

const POINTS = [
  {
    icon: Zap,
    title: 'Fast & Practical Delivery',
    desc: 'We focus on building things that work well in real use.',
  },
  {
    icon: CheckCircle2,
    title: 'Clean Code & Quality',
    desc: 'We write reliable code and test properly before delivery.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    desc: 'We keep the process simple and transparent.',
  },
  {
    icon: MapPin,
    title: 'Based in Bengaluru',
    desc: 'A development team focused on building useful websites and web tools.',
  },
];

export default function About() {
  return (
    <section
      id="about-section"
      data-section="why-mach100"
      className="py-16 sm:py-20 relative overflow-hidden bg-[#070b14] border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] ambient-glow-cyan opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about-headline" className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="section-chip mb-4">
            <Plane className="w-3.5 h-3.5 rotate-45 transform shrink-0" />
            <span>Why Mach100</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Why Mach100
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Practical websites and web tools — delivered with care from Bengaluru.
          </p>
        </div>

        <div
          id="about-bento-grid"
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-12"
        >
          {POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-950/40 border border-white/5 text-teal-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>

        <div
          id="about-trust-bar"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <div className="section-chip section-chip-muted py-2.5 px-5">
            <Plane className="w-4 h-4 rotate-45 transform shrink-0" />
            <span className="uppercase tracking-widest font-bold">Built in Bengaluru</span>
          </div>
          <div className="section-chip section-chip-muted py-2.5 px-5">
            <Shield className="w-3.5 h-3.5 shrink-0 text-teal-400" />
            <span className="uppercase tracking-widest font-bold">Privacy-first. Clear process.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
