/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProductDetail } from '@/types';
import { Activity, ArrowRight, ExternalLink, Home, Truck } from 'lucide-react';

interface ProductsProps {
  products: ProductDetail[];
}

const CARDS: Record<
  string,
  { category: string; summary: string; cta: string; href?: string }
> = {
  pgpulse: {
    category: 'Property, Co-Living & HMOs',
    summary:
      'Autonomous rent collection, tenant onboarding on WhatsApp, vacancy optimization, and digital ledgers.',
    cta: 'Try live demo (No login required)',
  },
  mfleet: {
    category: 'Fleet, Private Hire & Logistics',
    summary:
      'Automated driver rental ledgers, instant payouts, route intelligence, and idle-time anomaly detection.',
    cta: 'Request access',
    href: '/?topic=mfleet#contact',
  },
  glucare: {
    category: 'Health companion',
    summary:
      'Meal logging, glucose trends, and vision-assisted capture. Invite-only. Not a medical device and not for clinical diagnosis.',
    cta: 'Request access',
    href: '/?topic=glucare#contact',
  },
};

const ICONS = {
  Home,
  Truck,
  Activity,
} as const;

/** Server Component. Contact prefill via query string: /?topic=mfleet#contact */
export default function Products({ products }: ProductsProps) {
  const ordered = ['pgpulse', 'mfleet', 'glucare']
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is ProductDetail => Boolean(product));

  return (
    <section id="products" className="relative py-20 sm:py-24 overflow-hidden bg-[#070b14]">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] ambient-glow-cyan opacity-30 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="products-header" className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Live Products
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Software shipping today
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            PGPulse and MFleet run rent collection, driver ledgers, and payouts in production. GluCare is an
            invite-only glucose companion. It is not a medical device.
          </p>
        </div>

        <div id="products-grid" className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {ordered.map((product) => {
            const card = CARDS[product.id];
            const Icon = ICONS[product.icon as keyof typeof ICONS] ?? Activity;
            const href = product.demoUrl ?? card?.href ?? `/products/${product.id}`;
            const external = Boolean(product.demoUrl);
            return (
              <article
                key={product.id}
                id={`product-card-${product.id}`}
                className="flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
              >
                <div>
                  <Icon className="w-7 h-7 text-teal-400 mb-5" aria-hidden="true" />
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400 mb-3">
                    {card?.category ?? product.statusLabel}
                  </p>
                  <h2 className="text-xl font-bold font-display text-white mb-3">
                    <a href={`/products/${product.id}`} className="hover:text-teal-300">
                      {product.name}
                    </a>
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {card?.summary ?? product.tagline}
                  </p>
                </div>
                <a
                  id={external ? `product-demo-btn-${product.id}` : `product-access-btn-${product.id}`}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300"
                >
                  {card?.cta ?? 'View product'}
                  {external ? (
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  )}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
