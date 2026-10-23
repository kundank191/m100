/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';

const SECTIONS = [
  {
    title: 'Who we are',
    body: [
      'Mach100 Tech Solutions Private Limited runs mach100.in and the products linked from it. We are based at Hosa Road, Bengaluru, Karnataka 560100, India.',
      'Questions about this page go to contact@mach100.in.',
    ],
  },
  {
    title: 'The audit form',
    body: [
      'When you book an audit we ask for your name, a work email or WhatsApp number, an optional website URL, a primary goal, and an optional note.',
      'The form is delivered by Formspree to contact@mach100.in. We use it to reply and to scope the work. We do not sell these details, and we do not add you to an advertising list.',
    ],
  },
  {
    title: 'The website',
    body: [
      'Your light or dark theme choice is stored in this browser.',
      'We use Google Analytics to see which pages are visited, and Microsoft Clarity to see scrolls and clicks. Those tools set cookies. You can block them in your browser. We use the reports to improve the site.',
    ],
  },
  {
    title: 'Products',
    body: [
      'PGPulse, MFleet, and GluCare keep the account data needed to run that product, such as rent records, fleet ledgers, or glucose notes you enter. Those accounts are separate from the audit form on this site.',
      'GluCare is not a medical device. It does not diagnose you, and it is not a substitute for a clinician.',
    ],
  },
  {
    title: 'Sharing and retention',
    body: [
      'We share information with the services that host the site, deliver the form, and measure visits, and with the infrastructure that runs a product you use. We do not sell personal information.',
      'We keep audit emails for as long as we need them to reply and to run the engagement. Email contact@mach100.in to ask for a copy, a correction, or deletion of an inquiry. Account deletion for a product is handled in that product, or by the same email.',
    ],
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#070b14]">
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] ambient-glow-cyan opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-mono font-bold text-teal-400 uppercase tracking-widest block mb-4">
            Privacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-[1.1]">
            How we handle your information
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-relaxed">
            This page covers mach100.in, the audit form, and the products we operate. It was last updated on 23
            October 2026.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 max-w-3xl border-b border-white/10">
          {SECTIONS.map((section) => (
            <section key={section.title} className="border-t border-white/10 py-8">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-white/5 hover:bg-teal-50 transition-colors"
          >
            Book an audit
          </Link>
        </div>
      </div>
    </section>
  );
}
