/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroCTAs from '@/components/HeroCTAs';

const STATS = [
  {
    stat: '50x',
    label: 'Daily order scale (20 -> 1,000+ orders/day)',
  },
  {
    stat: '250K',
    label: 'Daily active users scaled via recommendation systems',
  },
  {
    stat: 'Enterprise',
    label: 'AI automation & finance data infrastructure at DoorDash',
  },
  {
    stat: 'Autonomous',
    label: 'Live production agents shipping today',
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
          For Growing Businesses
        </p>

        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-white leading-[1.08] mb-5"
        >
          More Customers.
          <span className="block">Zero Manual Operations.</span>
        </h1>

        <p
          id="hero-subheadline"
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-9 leading-relaxed font-normal"
        >
          We engineer high-converting acquisition funnels to bring in customers, and deploy autonomous AI agents to
          qualify leads, collect payments, and run your daily workflows.
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
