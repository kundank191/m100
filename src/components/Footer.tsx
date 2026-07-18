/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import Logo from '@/components/Logo';

/** Server Component — no hydration cost on the homepage shell. */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-[#070b14] border-t border-white/5 py-12 sm:py-14 text-slate-400 text-sm relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Mach100 Tech Solutions builds fast, clean websites and custom web tools for businesses. Built in
              Bengaluru, India.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <Shield className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
              <span>Privacy-first. Zero-PII where it matters.</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://fleet.mach100.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  MFleet
                  <span className="text-slate-500"> · Request access</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pg.mach100.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  PGPulse
                  <span className="text-slate-500"> · Open demo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://glucare.mach100.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  GluCare
                  <span className="text-slate-500"> · Invite-only</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog" className="hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/#about-section" className="hover:text-teal-400 transition-colors">
                  Why Mach100
                </a>
              </li>
              <li>
                <a href="/#contact-section" className="hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:contact@mach100.in" className="hover:text-teal-400 transition-colors">
                  contact@mach100.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© {currentYear} Mach100 Tech Solutions Private Limited. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>Bengaluru, India</span>
            <Link href="/blog" className="hover:text-teal-400 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="hover:text-teal-400 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
