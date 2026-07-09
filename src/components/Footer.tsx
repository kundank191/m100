/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Shield, Globe } from 'lucide-react';
import Logo from '@/components/Logo';
import { scrollToSection } from '@/lib/scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const goSection = (sectionId: string) => {
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

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
              Fast, reliable software for businesses, custom websites, data engineering pipelines, and agentic AI automation. Engineered in India, deployed worldwide.
            </p>
            <div className="flex items-center space-x-2.5 text-[11px] font-mono text-slate-400">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>Data Engineering</span>
              <span>•</span>
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>Agentic AI Automation</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Core Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://fleet.mach100.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  MFleet Engine
                  <span className="text-slate-400"> (Request access)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pg.mach100.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  PGPulse Portal
                  <span className="text-slate-400"> (Open demo)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://glucare.mach100.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  GluCare Edge App
                  <span className="text-slate-400"> (Request access)</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Resources
            </h4>
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
                <Link href="/keywords" className="hover:text-teal-400 transition-colors">
                  Keyword tools
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goSection('about-section')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  About Mach100
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goSection('contact-section')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
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
          <div className="text-xs text-slate-500">
            <span>Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
