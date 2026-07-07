/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ArrowRight, AlertCircle } from 'lucide-react';

const CONTACT_EMAIL = 'kundank191@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Business Website Development',
    message: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    setError('');

    const subject = encodeURIComponent(`[Mach100 Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.subject}\n\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact-section"
      className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900"
    >
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ambient-glow-blue opacity-25 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="contact-header" className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight mb-4">
            Let's Build Your Next Product
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Tell us about your project — whether you need a business website, a data engineering pipeline, or an agentic AI automation system. Send us an inquiry and we'll get back to you with a clear timeline.
          </p>
        </div>

        <div 
          id="contact-grid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          <div className="lg:col-span-5">
            <div className="rounded-2xl glass-panel glass-panel-hover p-8 space-y-6">
              <h3 className="text-lg font-bold font-display text-white">Direct Contact</h3>
              
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-950/40 border border-white/5 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Email Us</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-cyan-400 hover:underline mt-1 block">
                    {CONTACT_EMAIL}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">We typically respond within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl glass-panel p-8 relative">
            <h3 className="text-lg font-bold font-display text-white mb-6">Inquire About a Project</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-3 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 font-sans"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 font-sans"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">Topic of Consultation</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-cyan-500 font-sans"
                >
                  <option value="Business Website Development">Business Website Development</option>
                  <option value="Data Engineering">Data Engineering & Analytics</option>
                  <option value="Agentic AI Automation">Agentic AI & Automation</option>
                  <option value="Custom Web/Mobile Platform">Custom Web / Mobile App</option>
                  <option value="General Technical Partnership">General Partnership / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">Message Details *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 font-sans"
                  placeholder="Describe your project, timeline, or software needs..."
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full py-4 rounded-full bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-cyan-50 hover:scale-[1.01] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-white/5"
              >
                <span>Send Your Inquiry</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <p className="text-[10px] text-slate-500 text-center">
                Submitting opens your email app with your message pre-filled.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}