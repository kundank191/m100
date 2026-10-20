/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Link from 'next/link';
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
              Mach100 builds agentic AI operational systems and data-driven growth engines for real businesses.
              Built by Ex-DoorDash &amp; Mylo engineering leadership.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
              <Shield className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
              <span>Agents that act. Marketing that converts. Production systems that last.</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/#growth" className="hover:text-teal-400 transition-colors">
                  Growth Marketing &amp; CRO
                </a>
              </li>
              <li>
                <a href="/#growth" className="hover:text-teal-400 transition-colors">
                  AI Lead Conversion Agents
                </a>
              </li>
              <li>
                <a
                  href="https://pg.mach100.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  PGPulse (Open Demo)
                </a>
              </li>
              <li>
                <a href="/?topic=mfleet#contact" className="hover:text-teal-400 transition-colors">
                  MFleet (Request Access)
                </a>
              </li>
              <li>
                <a
                  href="https://glucare.mach100.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  GluCare (Invite-Only)
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/#proof" className="hover:text-teal-400 transition-colors">
                  Track Record
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-teal-400 transition-colors">
                  Why Mach100
                </a>
              </li>
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
                <a href="mailto:contact@mach100.in" className="hover:text-teal-400 transition-colors">
                  Contact: contact@mach100.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>
              (c) {currentYear} Mach100 Tech Solutions Private Limited. All rights reserved. | Bengaluru, India |
              Serving clients across the UK, US &amp; India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
