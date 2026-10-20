/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProductDetail } from '@/types';
import { Truck, Home, ArrowRight, ExternalLink } from 'lucide-react';

interface ProductsProps {
  products: ProductDetail[];
}

/** Server Component. Contact prefill via query string: /?topic=mfleet#contact */
export default function Products({ products }: ProductsProps) {
  const pgpulse = products.find((p) => p.id === 'pgpulse');
  const mfleet = products.find((p) => p.id === 'mfleet');

  return (
    <section id="products" className="relative py-16 sm:py-20 overflow-hidden bg-[#070b14]">
      <div id="products-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] ambient-glow-cyan opacity-30 -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="products-header" className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Live Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Software shipping today
          </h2>
        </div>

        <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {pgpulse && (
            <article
              id="product-card-pgpulse"
              className="flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
            >
              <div>
                <Home className="w-7 h-7 text-blue-400 mb-5" aria-hidden="true" />
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400 mb-3">
                  Property, Co-Living &amp; HMOs
                </p>
                <h3 className="text-xl font-bold font-display text-white mb-3">PGPulse</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Autonomous rent collection, tenant onboarding on WhatsApp, vacancy optimization, and digital
                  ledgers.
                </p>
              </div>
              {pgpulse.demoUrl && (
                <a
                  id="product-demo-btn-pgpulse"
                  href={pgpulse.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300"
                >
                  Try live demo (No login required)
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </article>
          )}

          {mfleet && (
            <article
              id="product-card-mfleet"
              className="flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
            >
              <div>
                <Truck className="w-7 h-7 text-indigo-400 mb-5" aria-hidden="true" />
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400 mb-3">
                  Fleet, Private Hire &amp; Logistics
                </p>
                <h3 className="text-xl font-bold font-display text-white mb-3">MFleet</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Automated driver rental ledgers, instant payouts, route intelligence, and idle-time anomaly
                  detection.
                </p>
              </div>
              <a
                id="product-access-btn-mfleet"
                href="/?topic=mfleet#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300"
              >
                Request access
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
