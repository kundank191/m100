/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProductDetail } from '../types';
import { Truck, Home, Activity, ArrowRight, ExternalLink, Zap, Plane, MessageSquare, Cpu, Lock } from 'lucide-react';

interface ProductsProps {
  products: ProductDetail[];
  onSelectProduct: (productId: 'mfleet' | 'pgpulse' | 'glucare') => void;
  onScrollTo: (elementId: string) => void;
}

export default function Products({ products, onSelectProduct, onScrollTo }: ProductsProps) {
  const getIcon = (iconName: string, color: string) => {
    const shadowStyle = { color, filter: `drop-shadow(0 0 10px ${color}60)` };
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-7 h-7" style={shadowStyle} />;
      case 'Home':
        return <Home className="w-7 h-7" style={shadowStyle} />;
      case 'Activity':
        return <Activity className="w-7 h-7" style={shadowStyle} />;
      default:
        return <Cpu className="w-7 h-7" style={shadowStyle} />;
    }
  };

  const getBadges = (id: string) => {
    switch (id) {
      case 'mfleet':
        return ['SaaS Logistics', 'Fleet Ops', 'UPI payouts'];
      case 'pgpulse':
        return ['Co-living Operations', 'WhatsApp SDK', 'Escrow Ledger'];
      case 'glucare':
        return ['Computer Vision', 'Health Tech', 'Invite-only'];
      default:
        return ['AI System'];
    }
  };

  return (
    <section
      id="products-section"
      className="py-24 relative overflow-hidden bg-[#070b14]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ambient-glow-cyan opacity-40 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="products-header" className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-chip mb-4">
            <Plane className="w-3.5 h-3.5 rotate-45 transform shrink-0" />
            <span>Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Products We Build &amp; Run
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            One open interactive demo (PGPulse) + two invite-only live products (MFleet &amp; GluCare). All built to the same engineering standards we deliver to clients.
          </p>
        </div>

        <div 
          id="products-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {products.map((product) => {
            const isPublicDemo = product.access === 'public-demo';
            const hoverTint =
              product.id === 'mfleet'
                ? 'from-indigo-500/12 to-transparent'
                : product.id === 'pgpulse'
                  ? 'from-blue-500/12 to-transparent'
                  : 'from-teal-500/12 to-transparent';
            const badgeTint =
              product.id === 'mfleet'
                ? 'text-indigo-300'
                : product.id === 'pgpulse'
                  ? 'text-blue-300'
                  : 'text-teal-300';

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group relative flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8"
              >
                <div>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${hoverTint} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`}></div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                      {getIcon(product.icon, product.accentColor)}
                    </div>
                    {isPublicDemo ? (
                      <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-[10px] font-mono text-amber-300 border border-amber-500/25">
                        <Zap className="w-3 h-3 text-amber-400 fill-amber-400/20" />
                        <span>{product.statusLabel}</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-[10px] font-mono text-emerald-300 border border-emerald-500/25">
                        <Lock className="w-3 h-3 text-emerald-400" />
                        <span>{product.statusLabel}</span>
                      </div>
                    )}
                  </div>

                  <div className={`flex flex-wrap items-center gap-y-1 mb-4 text-[10px] font-mono font-bold tracking-wider uppercase ${badgeTint}`}>
                    {getBadges(product.id).map((badge, idx) => (
                      <span key={badge} className="flex items-center">
                        {idx > 0 && <span className="text-slate-600 mx-2">•</span>}
                        <span>{badge}</span>
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors duration-200 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4 font-semibold uppercase tracking-wider">
                    {product.tagline}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-200">
                    {product.description}
                  </p>

                  <div className="border-t border-white/5 pt-4 mb-6">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-2 font-semibold">Highlight</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold font-display text-white group-hover:text-teal-300 transition-colors duration-200">
                        {product.metrics[0].value}
                      </span>
                      <span className="text-xs text-slate-400">
                        {product.metrics[0].label}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  {isPublicDemo && product.demoUrl ? (
                    <>
                      <a
                        id={`product-demo-btn-${product.id}`}
                        href={product.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-3 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-all duration-200 shadow-md shadow-teal-500/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Try Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                        No login required — data stays in your browser for this demo.
                      </p>
                    </>
                  ) : (
                    <button
                      id={`product-access-btn-${product.id}`}
                      type="button"
                      onClick={() => onScrollTo('contact-section')}
                      className="w-full inline-flex items-center justify-between px-4 py-3 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-all duration-200 shadow-md shadow-teal-500/20 cursor-pointer"
                    >
                      <span>Request Demo / Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    id={`product-explore-btn-${product.id}`}
                    type="button"
                    onClick={() => onSelectProduct(product.id)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-slate-950/60 border border-white/5 text-xs font-semibold text-slate-300 hover:bg-slate-900/60 hover:border-teal-500/20 hover:text-teal-400 transition-all duration-200 cursor-pointer"
                  >
                    <span>Technical Specs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div 
          id="products-custom-cta"
          className="mt-16 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-teal-950/30 text-teal-400 border border-teal-500/10">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">Need a Custom Build?</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                We build business websites, data engineering platforms, and agentic AI automation systems tailored to your workflows. Tell us what you need — we will scope it and ship it fast.
              </p>
            </div>
          </div>
          <button
            id="products-custom-cta-btn"
            onClick={() => onScrollTo('contact-section')}
            className="w-full md:w-auto shrink-0 px-6 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-teal-50 hover:scale-[1.02] transition-all cursor-pointer shadow-md shadow-white/5"
          >
            Discuss Your Project
          </button>
        </div>

      </div>
    </section>
  );
}
