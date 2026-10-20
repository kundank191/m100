/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield } from 'lucide-react';
import Logo from '@/components/Logo';

/** Server Component - no hydration cost on the homepage shell. */
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
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              More customers. Zero manual operations.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
              <Shield className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
              <a href="mailto:contact@mach100.in" className="hover:text-teal-400 transition-colors">
                contact@mach100.in
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Links</h4>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
              <li>
                <a href="/#services" className="hover:text-teal-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-teal-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/#proof" className="hover:text-teal-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-teal-400 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-xs text-slate-400">
          <span>(c) {currentYear} Mach100 Tech Solutions Private Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
