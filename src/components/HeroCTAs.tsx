/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, ChevronRight } from 'lucide-react';

/** Server-rendered links. Topic query is applied by the contact form. */
export default function HeroCTAs() {
  return (
    <div id="hero-cta-group" className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
      <a
        id="hero-cta-build"
        href="#contact"
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-white/5 hover:bg-teal-50 transition-colors duration-150 flex items-center justify-center space-x-2"
      >
        <span>Book an audit</span>
        <ArrowRight className="w-4 h-4 text-slate-950" aria-hidden="true" />
      </a>

      <a
        id="hero-cta-examples"
        href="#services"
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all duration-200 font-semibold text-sm flex items-center justify-center space-x-2"
      >
        <span>See how it works</span>
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}
