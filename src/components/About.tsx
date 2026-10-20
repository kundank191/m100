/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PEDIGREE = [
  'Ex-DoorDash (Data & AI Engineering): Enabled AI capabilities and engineered scalable finance data pipelines for one of the world\'s largest on-demand technology platforms.',
  'Scaled Mylo 50x (20 -> 1,000+ Daily Orders | 100K -> 250K DAU): Built the recommendation engines, experimentation (A/B testing) frameworks, and data analytics pipelines that drove a 50x surge in daily transactions and added 150,000+ Daily Active Users.',
  'GenAI & Agentic Systems Architect: Experienced in constructing production GenAI validation systems, automated CI/CD software architectures, and full-stack conversion tracking (heatmaps, behavioral analytics, and automated funnels). BIT Mesra alumnus.',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-white/5"
    >
      <div id="about-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] ambient-glow-cyan opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about-headline" className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            About Mach100
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Enterprise AI Engineering Meets Revenue-First Growth
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">
            Mach100 Tech Solutions builds agentic AI systems, intelligent operational platforms, and data-driven
            growth engines for real businesses.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            We started Mach100 with a simple belief: software and marketing should directly move revenue and
            eliminate manual work. Our systems don&apos;t just display dashboards or generate vanity clicks - they
            bring in high-intent customers, convert leads on WhatsApp in seconds, collect rent, reconcile fleet
            ledgers, and run complex workflows autonomously.
          </p>
        </div>

        <article className="rounded-2xl glass-panel p-6 sm:p-8 max-w-4xl">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-1">
            Leadership Pedigree - Kundan Kumar
          </h3>
          <p className="text-sm text-teal-300 mb-5">Founder &amp; Director, Mach100 Tech Solutions</p>
          <ul className="space-y-4">
            {PEDIGREE.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
