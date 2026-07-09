/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '@/components/GoogleAnalytics';

const CONTACT_EMAIL = 'contact@mach100.in';

/** Set NEXT_PUBLIC_FORMSPREE_ENDPOINT (or legacy VITE_FORMSPREE_ENDPOINT) */
const FORMSPREE_ENDPOINT =
  (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_VITE_FORMSPREE_ENDPOINT || '').trim();

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Business Website Development',
    message: '',
  });

  const [error, setError] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    setError('');

    if (!FORMSPREE_ENDPOINT) {
      setError(
        `Form is not configured yet. Email us directly at ${CONTACT_EMAIL} or set VITE_FORMSPREE_ENDPOINT.`
      );
      setSubmitState('error');
      return;
    }

    setSubmitState('loading');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `[Mach100 Inquiry] ${formData.subject}`,
        }),
      });

      if (!res.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitState('success');
      trackEvent('generate_lead', {
        method: 'contact_form',
        topic: formData.subject,
      });
      setFormData({
        name: '',
        email: '',
        subject: 'Business Website Development',
        message: '',
      });
    } catch {
      setSubmitState('error');
      setError(`Something went wrong. Please email us at ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <section
      id="contact-section"
      className="py-24 relative overflow-hidden bg-[#070b14] border-t border-slate-900"
    >
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ambient-glow-blue opacity-25 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="contact-header" className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-950/40 border border-white/5 text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Email Us</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-teal-400 hover:underline mt-1 block">
                    {CONTACT_EMAIL}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">We typically respond within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl glass-panel p-8 relative">
            <h3 className="text-lg font-bold font-display text-white mb-6">Inquire About a Project</h3>

            {submitState === 'success' ? (
              <div id="contact-success" className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <p className="text-lg font-semibold text-white">Message sent</p>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Thanks for reaching out. We'll reply to your email shortly — usually within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitState('idle')}
                  className="mt-4 text-xs font-semibold text-teal-400 hover:text-teal-300 underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 font-sans"
                      placeholder="Your name"
                      disabled={submitState === 'loading'}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 font-sans"
                      placeholder="you@company.com"
                      disabled={submitState === 'loading'}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">Topic of Consultation</label>
                  <select
                    id="contact-topic"
                    name="topic"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-teal-500 font-sans"
                    disabled={submitState === 'loading'}
                  >
                    <option value="Business Website Development">Business Website Development</option>
                    <option value="MFleet Demo / Access">MFleet — Request Demo / Access</option>
                    <option value="GluCare Demo / Access">GluCare — Request Demo / Access</option>
                    <option value="Data Engineering">Data Engineering & Analytics</option>
                    <option value="Agentic AI Automation">Agentic AI & Automation</option>
                    <option value="Custom Web/Mobile Platform">Custom Web / Mobile App</option>
                    <option value="General Technical Partnership">General Partnership / Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">Message Details *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 font-sans"
                    placeholder="Describe your project, timeline, or software needs..."
                    disabled={submitState === 'loading'}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={submitState === 'loading'}
                  className="w-full py-4 rounded-full bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-teal-50 hover:scale-[1.01] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-white/5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitState === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Your Inquiry</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-500 text-center">
                  Submissions go to {CONTACT_EMAIL}. We never share your details.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
