/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ProductDetail } from '../types';
import { ArrowLeft, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

interface ProductDetailProps {
  product: ProductDetail;
  onBack: () => void;
  onRequestAccess: () => void;
}

export default function ProductDetailComponent({ product, onBack, onRequestAccess }: ProductDetailProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  const isHealth = product.id === 'glucare';
  const isPublicDemo = product.access === 'public-demo';

  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14] min-h-screen">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] ambient-glow-cyan opacity-25 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <button
          id="product-back-btn"
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-teal-400 hover:text-teal-300 mb-10 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          
          <div>
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-3">
              {isPublicDemo ? 'Interactive Product Demo' : 'Live Product'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg font-mono text-slate-300 font-semibold mb-6">
              {product.tagline}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              {product.description}
            </p>

            {isHealth && (
              <div className="mb-8 space-y-3">
                <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-300">Disclaimer:</strong> GluCare is a health-tech product for evaluation and self-management support. It is not a medical device, does not provide clinical diagnoses, and should not be used as a substitute for professional medical advice.
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  *~94% accuracy refers to internal testing on sample meals/meter photos with a vision model — not a published clinical study or guaranteed real-world performance.
                </p>
              </div>
            )}

            <div className="mb-8">
              <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider mb-3">
                Engineered Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded bg-slate-900/60 border border-white/5 text-xs text-teal-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider">
                {isPublicDemo ? 'What You Can Explore' : 'What You Get'}
              </h4>
              {product.benefits.map((benefit, idx) => {
                const [title, desc] = benefit.split(':');
                return (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">{title}:</strong> {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl glass-panel p-6 sm:p-8">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                {isPublicDemo ? 'Demo Highlights' : 'Product Highlights'}
              </span>
              <span
                className={`px-2.5 py-1 rounded text-[10px] font-mono border ${
                  isPublicDemo
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/25'
                    : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25'
                }`}
              >
                {product.statusLabel}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {product.metrics.map((m, index) => (
                <div key={index} className="border-l border-white/5 pl-4 py-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-semibold">
                    {m.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {isPublicDemo && product.demoUrl ? (
              <>
                <a
                  id="product-open-demo-btn"
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-white text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-white/5 hover:bg-teal-50 hover:scale-[1.01] transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-[10px] text-slate-500 text-center mt-3">
                  Opens {product.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')} in a new tab
                </p>
              </>
            ) : (
              <>
                <button
                  id="product-request-access-btn"
                  type="button"
                  onClick={onRequestAccess}
                  className="w-full py-4 rounded-full bg-white text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-white/5 hover:bg-teal-50 hover:scale-[1.01] transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Request Demo / Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-slate-500 text-center mt-3">
                  Tell us about your team — we&apos;ll share a walkthrough and invite access.
                </p>
              </>
            )}
          </div>

        </div>

        <div className="border-t border-white/5 pt-12">
          <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-8">
            Core Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl glass-panel p-6"
              >
                <h4 className="text-base font-bold font-display text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
