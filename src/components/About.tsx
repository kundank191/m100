/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Zap, Bot, Database, CheckCircle2, Plane } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about-section"
      className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] ambient-glow-cyan opacity-20 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="about-headline" className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Plane className="w-3.5 h-3.5 rotate-45 transform" />
            <span>Why Mach100</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Fast Delivery. Reliable Products. No Compromises.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We are a product engineering company based in India. We believe businesses deserve software that ships on time, runs reliably in production, and actually solves the problem it was built for — whether that is a business website, a data engineering platform, or an agentic AI automation system.
          </p>
        </div>

        <div 
          id="about-bento-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          <div className="md:col-span-2 rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/40 border border-white/5 text-cyan-400 mb-6">
                <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                We Ship in Weeks, Not Quarters
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Most agencies take months to deliver a working product. We use proven architectures, reusable modules, and focused execution to get your website, data pipeline, or AI automation live in weeks. You get to market faster without cutting corners on quality.
              </p>
            </div>
            <div className="flex items-center space-x-2 border-t border-white/5 pt-4">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Average MVP delivery: 4–6 weeks</span>
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
                We build agentic automation frameworks — AI agents that handle customer support, process documents, trigger workflows, and make decisions within guardrails you define. Real automation, not demos.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold border-t border-white/5 pt-4">
              LLM-powered agentic frameworks
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
                Every system we build is engineered for uptime. High-volume APIs, real-time data sync, payment processing, and automated workflows — all tested under real-world load before they reach your users.
              </p>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold border-t border-white/5 pt-4">
              99.9% uptime SLA on managed deployments
            </span>
          </div>

          <div className="md:col-span-2 rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/40 border border-white/5 text-cyan-400 mb-6">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Data Engineering You Can Trust
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                From ingestion pipelines and data warehouses to real-time analytics dashboards — we build data infrastructure that is accurate, observable, and maintainable. Your business decisions are only as good as your data, and we make sure that data is right.
              </p>
            </div>
            <div className="flex items-center space-x-2 border-t border-white/5 pt-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">ETL, warehousing, streaming &amp; analytics</span>
            </div>
          </div>
        </div>

        <div 
          id="about-passion"
          className="border border-white/5 bg-slate-900/10 rounded-full py-3.5 px-6 max-w-xs mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-slate-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Plane className="w-4 h-4 text-cyan-400 rotate-45 transform" />
            <span>Engineered in India</span>
          </div>
        </div>

      </div>
    </section>
  );
}