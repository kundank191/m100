/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ProductDetail, DemoRequest } from '../types';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ProductDetailProps {
  product: ProductDetail;
  onBack: () => void;
}

export default function ProductDetailComponent({ product, onBack }: ProductDetailProps) {
  // Demo modal state
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Auto scroll to top when mounting
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  // Form handle
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const request: DemoRequest = {
      id: Math.random().toString(36).substring(2, 9),
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Self-Employed',
      product: product.name,
      notes: formData.notes,
      timestamp: new Date().toLocaleString(),
      status: 'Pending'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('mach100_demos') || '[]');
      localStorage.setItem('mach100_demos', JSON.stringify([...existing, request]));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowDemoForm(false);
      setFormData({ name: '', email: '', company: '', notes: '' });
    }, 2500);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 min-h-screen">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] ambient-glow-cyan opacity-25 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Back Link */}
        <button
          id="product-back-btn"
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 mb-10 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>

        {/* Product Pitch Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-3">
              FLAGSHIP SYSTEMS DEEP-DIVE
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

            {/* Core Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider mb-3">
                Engineered Core Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded bg-slate-900/60 border border-white/5 text-xs text-cyan-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits Bullet List */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider">
                Core Strategic Advantages
              </h4>
              {product.benefits.map((benefit, idx) => {
                const [title, desc] = benefit.split(':');
                return (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">{title}:</strong> {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Metric Showcase Card */}
          <div className="rounded-2xl glass-panel p-6 sm:p-8">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                Validated Performance
              </span>
              <span className="px-2.5 py-1 rounded bg-cyan-950/40 text-cyan-400 text-[10px] font-mono border border-white/5">
                Production Audited
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

            <button
              id="product-request-demo-btn"
              onClick={() => setShowDemoForm(true)}
              className="w-full py-4 rounded-full bg-white text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-white/5 hover:bg-cyan-50 hover:scale-[1.01] transition-all duration-200 cursor-pointer"
            >
              Request Live Sandbox Demo
            </button>
          </div>

        </div>

      </div>

      {/* Demo Modal overlay */}
      {showDemoForm && (
        <div id="demo-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 relative">
            <h3 className="text-xl font-bold font-display text-white mb-2">Request Sandbox Access</h3>
            <p className="text-xs text-slate-400 mb-6">
              Get access to the testing sandbox environment for <strong>{product.name}</strong>, complete with full diagnostic logs.
            </p>

            {submitted ? (
              <div id="demo-submit-success" className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <p className="text-sm font-medium text-white">Request Authenticated & Logged!</p>
                <p className="text-xs text-slate-400">Your mock credentials are saved in the simulation ledger.</p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1 font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Arun Kumar"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1 font-bold">Business Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="arun@startup.in"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1 font-bold">Company / Project</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="e.g. Metro Cabs, Cozy PG Co."
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1 font-bold">Special Notes (Optional)</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={2}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Any specific feature requirements?"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowDemoForm(false)}
                    className="flex-1 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold"
                  >
                    Generate Credentials
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
