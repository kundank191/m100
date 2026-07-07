/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Plane } from 'lucide-react';

interface LogoProps {
  variant?: 'nav' | 'footer';
  className?: string;
}

export default function Logo({ variant = 'nav', className }: LogoProps) {
  const isFooter = variant === 'footer';

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/20">
        <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 rotate-45" strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <span
          className={`text-base sm:text-lg font-bold font-display tracking-tight ${
            isFooter ? 'text-white' : 'text-white'
          }`}
        >
          Mach100
        </span>
        <span className="text-[10px] sm:text-xs block font-mono text-cyan-400 font-semibold tracking-widest uppercase">
          Tech Solutions
        </span>
      </div>
    </div>
  );
}