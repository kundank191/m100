/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, CheckCircle2, Workflow } from 'lucide-react';
import HeroCTAs from '@/components/HeroCTAs';

/**
 * Server Component - H1 and copy ship in initial HTML for fast LCP.
 * Only CTAs are a tiny client island (no canvas / no rAF).
 */
export default function Hero() {
  return (
    <header
      id="hero-header"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      <div
        className="absolute inset-0 -z-20 bg-[#070b14]"
        aria-hidden="true"
        style={{ backgroundColor: 'var(--page-bg, #070b14)' }}
      />
      {/* Static CSS backdrop - server-rendered, zero JS */}
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/4 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] ambient-glow-cyan opacity-45 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <p
          id="hero-eyebrow"
          className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-teal-400/90 mb-5"
        >
          Agentic AI | Operational Systems | Bengaluru, India
        </p>

        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sans tracking-tight text-white leading-[1.12] mb-5"
        >
          Agentic AI for Real Business Operations
        </h1>

        <p
          id="hero-subheadline"
          className="text-base sm:text-lg text-slate-300 max-w-2xl xl:max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          We build intelligent systems and AI agents that run PG management, fleet operations, and custom
          workflows - autonomously.
        </p>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl xl:max-w-2xl mx-auto mb-9 leading-relaxed">
          No endless meetings. No fluff. Just working agents.
        </p>

        <HeroCTAs />

        <div
          id="hero-highlights"
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 border-t border-white/5 pt-8 text-left max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto"
        >
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-md bg-teal-950/40 border border-teal-500/20 text-teal-400 shrink-0">
              <Bot className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-100 font-display mb-1">
                Real Agentic Systems
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Not chatbots bolted onto old tools - agents that plan, act, and complete multi-step work.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-md bg-blue-950/40 border border-blue-500/20 text-blue-400 shrink-0">
              <Workflow className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-100 font-display mb-1">
                Built for Operations
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                PG, fleet, and internal workflows where manual work still dominates day-to-day work.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-md bg-teal-950/40 border border-teal-500/20 text-teal-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-100 font-display mb-1">
                Production-Ready Delivery
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear process, clean architecture, and systems your team will actually use every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
