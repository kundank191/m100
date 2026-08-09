/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Bot, CheckCircle2, Layers, MessageSquare, Plane, Shield, Target } from 'lucide-react';

const POINTS = [
  {
    icon: Bot,
    title: 'Real agentic systems',
    desc: 'Not chatbots bolted onto old tools - agents that plan, act, and complete multi-step operational work.',
  },
  {
    icon: Target,
    title: 'Operational domain focus',
    desc: 'Deep focus on PG & co-living, fleet & logistics, and custom internal workflows where manual work still dominates.',
  },
  {
    icon: Layers,
    title: 'Production quality',
    desc: 'Clean, maintainable architecture with systems built for real day-to-day use - not demos that fall over.',
  },
  {
    icon: CheckCircle2,
    title: 'Practical delivery',
    desc: 'Transparent process from first conversation to live deployment. Systems your team will actually use every day.',
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
            <span>About Mach100</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            About Mach100
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">
            Mach100 builds agentic AI systems and intelligent operational tools for real businesses.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            We focus on domains where manual work still dominates - PG &amp; co-living management, fleet &amp;
            logistics, and custom internal operations. Our systems don&apos;t just store information. They act:
            collecting rent, talking to tenants, optimizing routes, processing payouts, detecting issues, and
            keeping ledgers clean.
          </p>
          <p className="text-slate-300 text-sm font-medium mt-5 leading-relaxed">
            Clean architecture. Clear process. Production systems that actually run day-to-day operations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
            Why Mach100
          </h3>
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
            <span className="uppercase tracking-widest font-bold">Agents that act, not just chat</span>
          </div>
          <div className="section-chip section-chip-muted py-2.5 px-5">
            <MessageSquare className="w-3.5 h-3.5 shrink-0 text-teal-400" />
            <span className="uppercase tracking-widest font-bold">Clear process end-to-end</span>
          </div>
        </div>
      </div>
    </section>
  );
}
