/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { ProductDetail } from '@/types';
import { Truck, Home, ArrowRight, ExternalLink, Zap, Plane, MessageSquare, Bot, Lock } from 'lucide-react';

interface ProductsProps {
  products: ProductDetail[];
}

/**
 * Server Component - zero hydration cost for the products section.
 * Contact prefill via query string: /?topic=mfleet#contact-section
 */
export default function Products({ products }: ProductsProps) {
  const pgpulse = products.find((p) => p.id === 'pgpulse');
  const mfleet = products.find((p) => p.id === 'mfleet');

  return (
    <section id="products-section" className="py-16 sm:py-20 relative overflow-hidden bg-[#070b14]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] ambient-glow-cyan opacity-30 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="products-header" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="section-chip mb-4">
            <Plane className="w-3.5 h-3.5 rotate-45 transform shrink-0" />
            <span>Live Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Live Products
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Agentic systems shipping today - plus custom AI agents tailored to your operations.
          </p>
        </div>

        <div id="products-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pgpulse && (
            <article
              id="product-card-pgpulse"
              className="group relative flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Home className="w-7 h-7 text-blue-400" aria-hidden="true" />
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-[10px] font-mono text-amber-300 border border-amber-500/25">
                    <Zap className="w-3 h-3 text-amber-400 fill-amber-400/20" aria-hidden="true" />
                    <span>Interactive Demo</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors mb-2">
                  PGPulse - Agentic AI for PG &amp; Co-living
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4 font-semibold uppercase tracking-wider">
                  Intelligent operational system
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  AI agents handle rent invoices, payment tracking, vacancy optimization, tenant onboarding, and
                  WhatsApp communication. Digital ledgers, automated reminders, and smart decision support so
                  operations run with far less manual effort.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  <span className="font-semibold text-slate-400">Best for:</span> PG and co-living operators who
                  want their operations to run themselves.
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
                <div className="flex items-center justify-between mb-6">
                  <Truck className="w-7 h-7 text-indigo-400" aria-hidden="true" />
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-[10px] font-mono text-emerald-300 border border-emerald-500/25">
                    <Lock className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                    <span>Live Product</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors mb-2">
                  MFleet - Agentic Fleet &amp; Logistics
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4 font-semibold uppercase tracking-wider">
                  AI-powered fleet operations
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Intelligent route optimization, automated rental ledgers, instant UPI payouts, fuel &amp; trip
                  intelligence, idle-time detection, and role-based control. Agents surface anomalies and handle
                  routine decisions so your team focuses on growth.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  <span className="font-semibold text-slate-400">Best for:</span> Fleet owners who want lower fuel
                  waste, faster payouts, and less manual coordination.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                <a
                  id="product-access-btn-mfleet"
                  href="/?topic=mfleet#contact-section"
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
            id="product-card-custom"
            className="group relative flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <Bot className="w-7 h-7 text-teal-400" aria-hidden="true" />
                <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 text-[10px] font-mono text-teal-300 border border-teal-500/25">
                  <span>Custom build</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors mb-2">
                Custom Agentic Systems
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-4 font-semibold uppercase tracking-wider">
                Tailored AI agents for your workflows
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                We build tailored AI agents and intelligent tools for your specific workflows - admin dashboards,
                client portals, internal automation, and domain-specific operational systems.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 list-disc list-inside leading-relaxed mb-6">
                <li>Domain-specific AI agents</li>
                <li>Admin dashboards &amp; client portals</li>
                <li>Internal workflow automation</li>
                <li>Operational decision support</li>
              </ul>
            </div>
            <div className="pt-2">
              <a
                href="/?topic=custom#contact-section"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors shadow-md shadow-teal-500/20"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>

        <div
          id="products-custom-cta"
          className="mt-10 sm:mt-12 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-teal-950/30 text-teal-400 border border-teal-500/10">
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">Need something different?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Tell us the operations you want agents to run - we will scope an agentic system clearly and build
                it for production use.
              </p>
            </div>
          </div>
          <a
            id="products-custom-cta-btn"
            href="/#contact-section"
            className="w-full md:w-auto shrink-0 px-6 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-teal-50 transition-colors text-center shadow-md shadow-white/5"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
