/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Mail, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '@/components/GoogleAnalytics';
import {
  clearContactPrefill,
  CONTACT_PREFILL_EVENT,
  CONTACT_TOPICS,
  DEFAULT_CONTACT_SUBJECT,
  prefillFromUrlTopic,
  readContactPrefill,
  type ContactPrefill,
} from '@/lib/contactPrefill';

const CONTACT_EMAIL = 'contact@mach100.in';

/** Set NEXT_PUBLIC_FORMSPREE_ENDPOINT (or legacy VITE_FORMSPREE_ENDPOINT) */
const FORMSPREE_ENDPOINT =
  (process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_VITE_FORMSPREE_ENDPOINT || '').trim();

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: ContactFormState = {
  name: '',
  email: '',
  company: '',
  subject: DEFAULT_CONTACT_SUBJECT,
  message: '',
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isEmailOrPhone(value: string) {
  const v = value.trim();
  if (isEmail(v)) return true;
  const digits = v.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15 && /^[+\d\s().-]+$/.test(v);
}

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [prefillNote, setPrefillNote] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [toastOn, setToastOn] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  useEffect(() => {
    const applyPrefill = (prefill: ContactPrefill) => {
      setFormData((prev) => ({
        ...prev,
        subject: prefill.subject,
        message: prefill.message?.trim() ? prefill.message : prev.message,
      }));
      setPrefillNote(`Topic set to "${prefill.subject}". Edit anything below before sending.`);
      clearContactPrefill();
    };

    // Prefer URL topic from server-rendered CTAs: /?topic=growth#contact
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl = prefillFromUrlTopic(params.get('topic'));
      if (fromUrl) {
        applyPrefill(fromUrl);
      } else {
        const stored = readContactPrefill();
        if (stored) applyPrefill(stored);
      }
    } catch {
      const stored = readContactPrefill();
      if (stored) applyPrefill(stored);
    }

    const onPrefill = (e: Event) => {
      const detail = (e as CustomEvent<ContactPrefill>).detail;
      if (detail?.subject) applyPrefill(detail);
    };
    window.addEventListener(CONTACT_PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(CONTACT_PREFILL_EVENT, onPrefill);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in all mandatory fields.');
      return;
    }
    if (!isEmailOrPhone(formData.email)) {
      setError('Enter a work email or a WhatsApp number.');
      return;
    }

    setError('');

    if (!FORMSPREE_ENDPOINT) {
      setError(
        `Form is not configured yet. Email us directly at ${CONTACT_EMAIL} or set NEXT_PUBLIC_FORMSPREE_ENDPOINT.`
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
          email: isEmail(formData.email) ? formData.email.trim() : CONTACT_EMAIL,
          _replyto: isEmail(formData.email) ? formData.email.trim() : undefined,
          contact: formData.email.trim(),
          company: formData.company.trim(),
          subject: formData.subject,
          message: formData.message,
          _subject: `[Mach100 Inquiry] ${formData.subject}`,
        }),
      });

      if (!res.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitState('success');
      setToastOn(true);
      trackEvent('generate_lead', {
        method: 'contact_form',
        topic: formData.subject,
      });
      setFormData(EMPTY_FORM);
      setPrefillNote(null);
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [
        window.setTimeout(() => setSubmitState('idle'), 2800),
        window.setTimeout(() => setToastOn(false), 4200),
      ];
    } catch {
      setSubmitState('error');
      setError(`Something went wrong. Please email us at ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 relative overflow-hidden bg-[#070b14] border-t border-slate-900"
    >
      <div id="contact-section" className="absolute top-0 left-0" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] ambient-glow-blue opacity-25 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="contact-header" className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4">
            Book an audit
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Tell us what you want to grow or automate. We reply within 24 hours.
          </p>
        </div>

        <div
          id="contact-grid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          <div className="lg:col-span-5">
            <div className="rounded-2xl glass-panel glass-panel-hover p-8 space-y-6">
              <h3 className="text-lg font-bold font-display text-white">Direct Contact</h3>

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-950/40 border border-white/5 text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-200">Email Us</h4>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-base text-teal-400 hover:underline mt-1 block"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="text-sm text-slate-500 mt-1">We usually reply within 24 hours.</p>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-slate-950/40 p-4 space-y-2">
                <p className="text-base font-semibold text-slate-200">What to include</p>
                <ul className="text-base text-slate-400 space-y-1.5 list-disc list-inside leading-relaxed">
                  <li>Whether you want Customer Growth/Marketing, Operational AI Agents, or Both</li>
                  <li>Your current website or workflow bottleneck</li>
                  <li>Your rough timeline</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl glass-panel p-8 relative">
            <h3 className="text-lg font-bold font-display text-white mb-2">Send a message</h3>
            <p className="text-base text-slate-400 mb-6">
              Example CTAs above can pre-fill the topic. You can edit everything before sending.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                {prefillNote && (
                  <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/25 text-teal-200 text-xs leading-relaxed">
                    {prefillNote}
                  </div>
                )}

                {error && (
                  <div className="p-3 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold"
                    >
                      Your Name *
                    </label>
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
                    <label
                      htmlFor="contact-email"
                      className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold"
                    >
                      Work Email / WhatsApp Number *
                    </label>
                    <input
                      id="contact-email"
                      type="text"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 font-sans"
                      placeholder="you@company.com or +44..."
                      disabled={submitState === 'loading'}
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold"
                  >
                    Website URL
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="website"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 font-sans"
                    placeholder="https://"
                    disabled={submitState === 'loading'}
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold"
                  >
                    Primary Goal
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      setPrefillNote(null);
                    }}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-teal-500 font-sans"
                    disabled={submitState === 'loading'}
                  >
                    {CONTACT_TOPICS.map((topicOption) => (
                      <option key={topicOption} value={topicOption}>
                        {topicOption}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold"
                  >
                    Message / Brief Notes
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 font-sans"
                    placeholder="Tell us about your business, current monthly orders/leads, or the manual workflows you want to automate..."
                    disabled={submitState === 'loading'}
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={submitState === 'loading' || submitState === 'success'}
                  aria-label={submitState === 'success' ? 'Response recorded' : 'Book an audit'}
                  className={`w-full py-4 rounded-full bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-teal-50 hover:scale-[1.01] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-white/5 disabled:hover:scale-100 ${
                    submitState === 'loading' ? 'opacity-60 cursor-wait' : 'disabled:opacity-100 disabled:cursor-default'
                  }`}
                >
                  {submitState === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitState === 'success' ? (
                    <svg
                      className="audit-check h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12.5 9.5 17 19 7.5"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <>
                      <span>Book an audit</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                  Submissions go directly to {CONTACT_EMAIL}. We do not sell your details.{' '}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-teal-400">
                    Privacy page
                  </a>
                  .
                </p>
              </form>
            {toastOn
              ? createPortal(
                  <div id="contact-toast" className="site-toast" role="status">
                    Response recorded.
                  </div>,
                  document.body,
                )
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
