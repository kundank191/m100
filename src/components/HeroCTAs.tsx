/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { ArrowRight, ChevronRight } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

/** Small client island — only the interactive CTAs. */
export default function HeroCTAs() {
  return (
    <div id="hero-cta-group" className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
      <button
        id="hero-cta-build"
        type="button"
        onClick={() => scrollToSection('contact-section')}
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-white/5 hover:bg-teal-50 transition-colors duration-150 cursor-pointer flex items-center justify-center space-x-2"
      >
        <span>Start a Project</span>
        <ArrowRight className="w-4 h-4 text-slate-950" aria-hidden="true" />
      </button>

      <button
        id="hero-cta-examples"
        type="button"
        onClick={() => scrollToSection('products-section')}
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all duration-200 font-semibold text-sm cursor-pointer flex items-center justify-center space-x-2"
      >
        <span>See Examples</span>
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
