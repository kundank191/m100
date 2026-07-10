/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronRight, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const enable = () => setShowCanvas(true);
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof w.requestIdleCallback === 'function') {
      idleId = w.requestIdleCallback(enable, { timeout: 5000 });
    } else {
      timeoutId = setTimeout(enable, 4000);
    }

    return () => {
      if (idleId !== undefined && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

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
      {showCanvas ? (
        <HeroCanvas />
      ) : (
        <>
          <div className="absolute inset-0 cyber-grid opacity-25 -z-10 pointer-events-none" aria-hidden="true" />
          <div
            className="absolute top-1/4 left-1/4 w-[280px] h-[280px] ambient-glow-cyan opacity-70 -z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-[320px] h-[320px] ambient-glow-blue opacity-60 -z-10 pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <p
          id="hero-eyebrow"
          className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-teal-400/90 mb-5"
        >
          Mach100 Tech
        </p>

        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-sans tracking-tight text-white leading-[1.12] mb-5"
        >
          Fast, reliable software that actually ships.
        </h1>

        <p
          id="hero-subheadline"
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          We build production-ready websites, data platforms, fleet and PG systems, and agentic AI in{' '}
          <strong className="text-white font-semibold">4-6 weeks</strong>.
        </p>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-9 leading-relaxed">
          No endless scoping. No fluff. Just software that works.
        </p>

        <div id="hero-cta-group" className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <button
            id="hero-cta-explore"
            type="button"
            onClick={() => scrollToSection('products-section')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-white/5 hover:bg-teal-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>See Our Products</span>
            <ArrowRight className="w-4 h-4 text-slate-950" aria-hidden="true" />
          </button>

          <button
            id="hero-cta-build"
            type="button"
            onClick={() => scrollToSection('contact-section')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all duration-200 font-semibold text-sm cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Start Your Project</span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div
          id="hero-highlights"
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 border-t border-white/5 pt-8 text-left max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-md bg-teal-950/40 border border-teal-500/20 text-teal-400 shrink-0">
              <Zap className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-100 font-display mb-1">Fast Delivery</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Production-ready websites and apps in weeks, not months.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-md bg-blue-950/40 border border-blue-500/20 text-blue-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-100 font-display mb-1">Built to Last</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Reliable architecture and systems designed to scale with you.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-md bg-teal-950/40 border border-teal-500/20 text-teal-400 shrink-0">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-100 font-display mb-1">Agentic AI &amp; Data</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Data pipelines and AI agents that automate real business workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
