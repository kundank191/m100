/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProductDetail } from '../types';
import { Truck, Home, Activity, ArrowRight, Zap, Plane, MessageSquare, Cpu } from 'lucide-react';

interface ProductsProps {
  products: ProductDetail[];
  onSelectProduct: (productId: 'mfleet' | 'pgpulse' | 'glucare') => void;
  onScrollTo: (elementId: string) => void;
}

export default function Products({ products, onSelectProduct, onScrollTo }: ProductsProps) {
  // Mapping of icon string to actual Lucide component
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
        return ['SaaS Logistics', 'Edge Telematics', 'UPI payouts'];
      case 'pgpulse':
        return ['Co-living Operations', 'WhatsApp SDK', 'Escrow Ledger'];
      case 'glucare':
        return ['Computer Vision', 'On-Device ML', 'Continuous Sync'];
      default:
        return ['AI System'];
    }
  };

  return (
    <section
      id="products-section"
      className="py-24 relative overflow-hidden bg-slate-950"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ambient-glow-cyan opacity-40 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="products-header" className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Plane className="w-3.5 h-3.5 rotate-45 transform" />
            <span>Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Products We Have Built &amp; Shipped
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real software running in production today — fleet management, property operations, and health tech. Each product was delivered fast, built for reliability, and designed to scale with the businesses using them.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div 
          id="products-grid"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {products.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group relative flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8 cursor-pointer"
              onClick={() => onSelectProduct(product.id)}
            >
              <div>
                {/* Glowing border hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"></div>

                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
                    {getIcon(product.icon, product.accentColor)}
                  </div>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-950/40 text-[10px] font-mono text-slate-400 border border-white/5">
                    <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
                    <span>Live in Production</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-y-1 mb-4 text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
                  {getBadges(product.id).map((badge, idx) => (
                    <span key={badge} className="flex items-center">
                      {idx > 0 && <span className="text-slate-600 mx-2">•</span>}
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>

                {/* Name & Tagline */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-400 transition-colors duration-200 mb-2">
                  {product.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4 font-semibold uppercase tracking-wider">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-200">
                  {product.description}
                </p>

                {/* Metrics Teaser */}
                <div className="border-t border-white/5 pt-4 mb-6">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-2 font-semibold">Key Outcome Metric</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors duration-200">
                      {product.metrics[0].value}
                    </span>
                    <span className="text-xs text-slate-400">
                      {product.metrics[0].label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  id={`product-explore-btn-${product.id}`}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-full bg-slate-950/60 border border-white/5 text-xs font-semibold text-slate-300 group-hover:bg-slate-900/60 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all duration-200"
                >
                  <span>Deep-Dive Technical Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Callout */}
        <div 
          id="products-custom-cta"
          className="mt-16 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-cyan-950/30 text-cyan-400 border border-cyan-500/10">
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
            className="w-full md:w-auto shrink-0 px-6 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-cyan-50 hover:scale-[1.02] transition-all cursor-pointer shadow-md shadow-white/5"
          >
            Discuss Your Project
          </button>
        </div>

      </div>
    </section>
  );
}
