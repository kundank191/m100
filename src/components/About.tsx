/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
// Server Component (no hooks)
import { Zap, Bot, Database, CheckCircle2, Plane, Shield } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about-section"
      data-section="why-mach100"
      className="py-16 sm:py-20 relative overflow-hidden bg-[#070b14] border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] ambient-glow-cyan opacity-20 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about-headline" className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="section-chip mb-4">
            <Plane className="w-3.5 h-3.5 rotate-45 transform shrink-0" />
            <span>Why Mach100</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Ship on time. Stay reliable.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Product engineering from Bengaluru. Websites, data systems, fleet and PG tools, and practical AI with clear timelines and no theater.
          </p>
        </div>

        <div
          id="about-bento-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12"
        >
          <div className="md:col-span-2 rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-950/40 border border-white/5 text-teal-400 mb-6">
                <Zap className="w-5 h-5 text-teal-400 fill-teal-400/20" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                We Ship in Weeks, Not Quarters
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Most agencies take months to deliver a working product. We use proven architectures, reusable modules, and focused execution so your website, data pipeline, or automation can go live in weeks without cutting corners.
              </p>
            </div>
            <div className="flex items-center space-x-2 border-t border-white/5 pt-4">
              <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                Typical MVP delivery: 4-6 weeks
              </span>
            </div>
          </div>

          <div className="rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950/40 border border-white/5 text-blue-400 mb-6">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Agentic AI That Works
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We build agentic systems that handle support, documents, and decisions with human oversight. Real automation, not hype.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold border-t border-white/5 pt-4">
              Guardrails first
            </span>
          </div>

          <div className="rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950/40 border border-white/5 text-blue-400 mb-6">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Production-Grade Reliability
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Systems built for uptime: APIs, real-time sync, payments, and workflows tested under real load before they reach your users.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold border-t border-white/5 pt-4">
              Uptime-focused design
            </span>
          </div>

          <div className="md:col-span-2 rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-950/40 border border-white/5 text-teal-400 mb-6">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Data Engineering You Can Trust
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ingestion, warehouses, and analytics that stay accurate and maintainable. Your decisions are only as good as your data.
              </p>
            </div>
            <div className="flex items-center space-x-2 border-t border-white/5 pt-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                ETL, warehousing, streaming &amp; analytics
              </span>
            </div>
          </div>
        </div>

        <div
          id="about-trust-bar"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <div className="section-chip section-chip-muted py-2.5 px-5">
            <Plane className="w-4 h-4 rotate-45 transform shrink-0" />
            <span className="uppercase tracking-widest font-bold">
              Built in Bengaluru. Trusted by operators.
            </span>
          </div>
          <div className="section-chip section-chip-muted py-2.5 px-5">
            <Shield className="w-3.5 h-3.5 shrink-0 text-teal-400" />
            <span className="uppercase tracking-widest font-bold">
              Privacy-first. Zero-PII where it matters.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
