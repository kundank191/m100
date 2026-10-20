/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { ProductDetail } from '@/types';
import { Truck, Home, ArrowRight, ExternalLink, Zap, Lock, ChartLine } from 'lucide-react';

interface ProductsProps {
  products: ProductDetail[];
}

/**
 * Server Component - zero hydration cost for the products section.
 * Contact prefill via query string: /?topic=mfleet#contact
 */
export default function Products({ products }: ProductsProps) {
  const pgpulse = products.find((p) => p.id === 'pgpulse');
  const mfleet = products.find((p) => p.id === 'mfleet');

  return (
    <section id="products" className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14]">
      <div id="products-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] ambient-glow-cyan opacity-30 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="products-header" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Live Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Agentic Systems Shipping Today - Plus Custom Growth &amp; AI Engines
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Battle-tested vertical platforms running in production today. Try our interactive demos directly in
            your browser.
          </p>
        </div>

        <div id="products-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pgpulse && (
            <article
              id="product-card-pgpulse"
              className="group relative flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between mb-6 gap-3">
                  <Home className="w-7 h-7 text-blue-400 shrink-0" aria-hidden="true" />
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-[10px] font-mono text-amber-300 border border-amber-500/25 text-right leading-tight max-w-[12rem]">
                    <Zap className="w-3 h-3 text-amber-400 fill-amber-400/20" aria-hidden="true" />
                    <span>Interactive Demo | Property &amp; Co-Living</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors mb-2">
                  PGPulse - Agentic AI for Co-Living, HMOs &amp; Property Operators
                </h3>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed">Intelligent property operational system</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  AI agents handle rent invoices, payment tracking, vacancy optimization, tenant onboarding, and
                  WhatsApp communication. Digital ledgers, automated reminders, and smart decision support so
                  property portfolios in the UK and India run with far less manual effort.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  <span className="font-semibold text-slate-300">Best for:</span> Co-living operators, UK HMO
                  landlords, student housing, and PG managers who want operations to run themselves.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                {pgpulse.demoUrl && (
                  <>
                    <a
                      id="product-demo-btn-pgpulse"
                      href={pgpulse.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-4 py-3 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors shadow-md shadow-teal-500/20"
                    >
                      <span>Try Live Demo</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                      No login required - data stays in your browser.
                    </p>
                  </>
                )}
                <Link
                  href="/products/pgpulse"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-slate-950/60 border border-white/5 text-xs font-semibold text-slate-300 hover:bg-slate-900/60 hover:border-teal-500/20 hover:text-teal-400 transition-colors"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          )}

          {mfleet && (
            <article
              id="product-card-mfleet"
              className="group relative flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between mb-6 gap-3">
                  <Truck className="w-7 h-7 text-indigo-400 shrink-0" aria-hidden="true" />
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-[10px] font-mono text-emerald-300 border border-emerald-500/25 text-right leading-tight max-w-[12rem]">
                    <Lock className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                    <span>Live Product | Fleet &amp; Logistics</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors mb-2">
                  MFleet - Agentic Fleet, Private Hire &amp; Logistics Operations
                </h3>
                <p className="text-sm text-slate-300 mb-3 leading-relaxed">AI-powered fleet operations</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Intelligent route optimization, automated weekly/daily rental ledgers, instant payouts, fuel
                  &amp; trip intelligence, idle-time detection, and role-based control. Agents surface anomalies
                  and handle routine decisions so fleet owners focus on scaling.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  <span className="font-semibold text-slate-300">Best for:</span> Commercial fleet owners, UK
                  PCO/private hire operators, and logistics teams who want lower fuel waste, automated ledgers,
                  and less manual coordination.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                <a
                  id="product-access-btn-mfleet"
                  href="/?topic=mfleet#contact"
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors shadow-md shadow-teal-500/20"
                >
                  <span>Request Demo</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link
                  href="/products/mfleet"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-slate-950/60 border border-white/5 text-xs font-semibold text-slate-300 hover:bg-slate-900/60 hover:border-teal-500/20 hover:text-teal-400 transition-colors"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          )}

          <article
            id="product-card-growth"
            className="group relative flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between mb-6 gap-3">
                <ChartLine className="w-7 h-7 text-teal-400 shrink-0" aria-hidden="true" />
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 text-[10px] font-mono text-teal-300 border border-teal-500/25 text-right leading-tight max-w-[12rem]">
                  <span>Growth SKU | Acquisition + AI Lead Agent</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors mb-2">
                Mach100 Growth Engine - Ads, CRO &amp; Autonomous Lead Conversion
              </h3>
              <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                End-to-end customer acquisition &amp; AI booking system
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                We combine targeted Google/Meta acquisition, heatmap-backed landing page optimization, and an
                autonomous AI Speed-to-Lead Agent that replies to every prospect in seconds, qualifies their
                budget, and books them straight onto your calendar.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                <span className="font-semibold text-slate-300">Best for:</span> London &amp; Global SMEs, clinics,
                property firms, and high-growth startups that want predictable customer pipelines without hiring a
                5-person marketing team.
              </p>
            </div>
            <div className="pt-2 space-y-2">
              <a
                href="/?topic=growth#contact"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors shadow-md shadow-teal-500/20"
              >
                <span>Book a Growth Audit</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#growth"
                className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-slate-950/60 border border-white/5 text-xs font-semibold text-slate-300 hover:bg-slate-900/60 hover:border-teal-500/20 hover:text-teal-400 transition-colors"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
