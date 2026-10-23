/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROOF_ITEMS } from '@/data/proofData';

function columnClass(index: number) {
  const classes = ['flex h-full flex-col py-8 md:px-6 xl:px-7 border-white/10'];
  if (index > 0) classes.push('max-md:border-t');
  if (index % 2 === 1) classes.push('md:max-xl:border-l');
  if (index >= 2) classes.push('md:max-xl:border-t');
  if (index > 0) classes.push('xl:border-l');
  return classes.join(' ');
}

/** Same frame for every chart: zero sits on this baseline, the peak touches the top inset. */
const CHART_WIDTH = 320;
const CHART_HEIGHT = 78;
const CHART_TOP = 6;
const CHART_BASE = CHART_HEIGHT - 1;

function toPoint(value: number, index: number, count: number, max: number) {
  const x = count === 1 ? CHART_WIDTH / 2 : (index / (count - 1)) * (CHART_WIDTH - 2) + 1;
  const y = CHART_BASE - (Math.max(0, value) / max) * (CHART_BASE - CHART_TOP);
  return { x, y };
}

/** Catmull-Rom samples so a short series still reads as a curve, clamped to the shared frame. */
function sampleCurve(points: { x: number; y: number }[]) {
  if (points.length < 3) return points;
  const sampled: { x: number; y: number }[] = [];
  const steps = 8;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    for (let step = 0; step < steps; step++) {
      const t = step / steps;
      const t2 = t * t;
      const t3 = t2 * t;
      const x =
        0.5 *
        (2 * p1.x +
          (-p0.x + p2.x) * t +
          (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
          (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
      const y =
        0.5 *
        (2 * p1.y +
          (-p0.y + p2.y) * t +
          (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
          (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);
      sampled.push({
        x,
        y: Math.min(CHART_BASE, Math.max(CHART_TOP, y)),
      });
    }
  }
  sampled.push(points[points.length - 1]);
  return sampled;
}

function Sparkline({ values, label }: { values: number[]; label: string }) {
  const max = Math.max(...values, 1);
  const anchors = values.map((value, index) => toPoint(value, index, values.length, max));
  const coords = sampleCurve(anchors);
  const line = coords
    .map((point, index) => `${index === 0 ? 'M' : 'L'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(' ');
  const area = `${line} L${CHART_WIDTH} ${CHART_BASE} L0 ${CHART_BASE} Z`;
  const tickEvery = Math.max(1, Math.round(coords.length / 28));

  return (
    <svg
      viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
      className="proof-chart mt-auto h-16 w-full shrink-0"
      role="img"
      aria-label={label}
    >
      <line
        x1="0"
        y1={CHART_BASE}
        x2={CHART_WIDTH}
        y2={CHART_BASE}
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {coords.map((point, index) =>
        index % tickEvery === 0 ? (
          <line
            key={index}
            x1={point.x}
            y1={point.y}
            x2={point.x}
            y2={CHART_BASE}
            stroke="currentColor"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        ) : null,
      )}
      <path d={area} fill="currentColor" fillOpacity="0.1" />
      <path d={line} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function Proof() {
  return (
    <section id="proof" className="proof-band relative py-16 sm:py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="proof-kicker text-xs font-mono font-bold uppercase tracking-widest block mb-4">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Proof, not just theory
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Measured results from production systems and client ad accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {PROOF_ITEMS.map((item, index) => (
            <article key={item.id} className={columnClass(index)}>
              <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-slate-300">
                {item.kicker}
              </span>
              <p className="proof-stat mt-8 text-5xl sm:text-6xl font-extrabold font-display tracking-tight leading-none">
                {item.stat}
              </p>
              <p className="mt-4 mb-6 flex-1 text-base text-slate-400 leading-relaxed">{item.detail}</p>
              <Sparkline values={item.series} label={item.seriesLabel} />
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500 leading-relaxed max-w-3xl">
          Every chart uses the same zero baseline, so the shapes can be compared. Lead, ROAS, and click series are
          calculated from exported daily ad reports. A blank purchase ROAS counts as zero return. Mylo's line
          illustrates the published ramp from 20 to 1,000+ orders a day.
        </p>
      </div>
    </section>
  );
}
