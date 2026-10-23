/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroCTAs from '@/components/HeroCTAs';

/**
 * Server Component - H1 and copy ship in initial HTML for fast LCP.
 */
export default function Hero() {
  return (
    <header id="hero-header" className="relative overflow-hidden pt-32 sm:pt-40 pb-12 sm:pb-16">
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

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p
            id="hero-eyebrow"
            className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.14em] uppercase text-teal-400/90 mb-4"
          >
            For Growing Businesses
          </p>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-white leading-[1.05] mb-5"
          >
            More Customers.
            <span className="block">Zero Manual Operations.</span>
          </h1>

          <p
            id="hero-subheadline"
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal"
          >
            We engineer high-converting acquisition funnels to bring in customers, and deploy autonomous AI agents to
            qualify leads and run your daily workflows.
          </p>

          <HeroCTAs />
        </div>
      </div>
    </header>
  );
}
