/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROOF_ITEMS } from '@/data/proofData';

function columnClass(index: number) {
  const classes = ['py-8 md:px-6 xl:px-7 border-white/10'];
  if (index > 0) classes.push('max-md:border-t');
  if (index % 2 === 1) classes.push('md:max-xl:border-l');
  if (index >= 2) classes.push('md:max-xl:border-t');
  if (index > 0) classes.push('xl:border-l');
  return classes.join(' ');
}

function Sparkline({ values, label }: { values: number[]; label: string }) {
  const width = 320;
  const height = 78;
  const pad = 6;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const coords = values.map((value, index) => {
    const x = values.length === 1 ? width / 2 : (index / (values.length - 1)) * (width - 2) + 1;
    const y = pad + (1 - (value - min) / span) * (height - pad * 2);
    return { x, y };
  });
  const line = coords
    .map((point, index) => `${index === 0 ? 'M' : 'L'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(' ');
  const area = `${line} L${width} ${height} L0 ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mt-8 h-16 w-full text-teal-300"
      role="img"
      aria-label={label}
    >
      {coords.map((point, index) => (
        <line
          key={index}
          x1={point.x}
          y1={point.y}
          x2={point.x}
          y2={height}
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
      ))}
      <path d={area} fill="currentColor" fillOpacity="0.08" />
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Proof() {
  return (
    <section id="proof" className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Proof, not just theory
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Measured results from production systems and client ad accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {PROOF_ITEMS.map((item, index) => (
            <article key={item.id} className={columnClass(index)}>
              <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-300">
                {item.kicker}
              </span>
              <p className="mt-8 text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-teal-300 leading-none">
                {item.stat}
              </p>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">{item.detail}</p>
              <Sparkline values={item.series} label={item.seriesLabel} />
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-500 leading-relaxed max-w-3xl">
          Lead, ROAS, and click figures are calculated from exported daily ad reports. A blank purchase ROAS counts as
          zero return. Mylo is the published production record, shown as its two endpoints.
        </p>
      </div>
    </section>
  );
}
