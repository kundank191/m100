/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroCTAs from '@/components/HeroCTAs';

const STATS = [
  {
    stat: '50x',
    label: 'Daily orders scaled (20 -> 1,000+ at Mylo)',
  },
  {
    stat: '250K',
    label: 'Daily active users scaled via recommendation engines',
  },
  {
    stat: 'Enterprise AI',
    label: 'AI workflows & finance data pipelines at DoorDash',
  },
  {
    stat: '100% Autonomous',
    label: 'Multi-step agentic systems (PGPulse & MFleet)',
  },
];

/**
 * Server Component - H1 and copy ship in initial HTML for fast LCP.
 */
export default function Hero() {
  return (
    <header
      id="hero-header"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      <div
        className="absolute inset-0 -z-20 bg-[#070b14]"
        aria-hidden="true"
        style={{ backgroundColor: 'var(--page-bg, #070b14)' }}
      />
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/4 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] ambient-glow-cyan opacity-45 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <p
          id="hero-eyebrow"
          className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.14em] uppercase text-teal-400/90 mb-5"
        >
          Growth Marketing &amp; Agentic AI Systems
        </p>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-white leading-[1.15] mb-5 max-w-4xl mx-auto"
        >
          We Engineer Customer Growth &amp; Autonomous AI Agents.
        </h1>

        <p
          id="hero-subheadline"
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-9 leading-relaxed"
        >
          We scale customer acquisition through data-driven marketing - then deploy autonomous AI agents that run
          your operations. Built by Ex-DoorDash AI engineering leadership who scaled commerce engines 50x.
        </p>

        <HeroCTAs />

        <div
          id="hero-highlights"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 border-t border-white/5 pt-8"
        >
          {STATS.map((card) => (
            <div key={card.stat} className="rounded-2xl glass-panel px-3 py-5 sm:px-4">
              <p className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-tight">
                {card.stat}
              </p>
              <p className="mt-2 text-[11px] sm:text-xs text-slate-400 leading-relaxed">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
