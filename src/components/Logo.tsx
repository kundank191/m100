/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <img
        src="/favicon.svg"
        alt="Mach100 Tech Solutions logo"
        className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-lg shadow-lg shadow-teal-500/20"
        draggable={false}
        width={40}
        height={40}
      />
      <div className="leading-tight">
        <span className="text-base sm:text-lg font-bold font-display tracking-tight text-white">
          Mach100
        </span>
        <span className="text-[10px] sm:text-xs block font-mono text-teal-400 font-semibold tracking-widest uppercase">
          Tech Solutions
        </span>
      </div>
    </div>
  );
}