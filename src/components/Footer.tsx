/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Globe } from 'lucide-react';
import Logo from './Logo';
import { ViewState } from '../types';

interface FooterProps {
  onViewChange: (view: ViewState) => void;
  onScrollTo: (elementId: string) => void;
  onGoHomeSection: (sectionId?: string) => void;
}

export default function Footer({ onViewChange, onGoHomeSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-[#070b14] border-t border-white/5 py-16 text-slate-400 text-sm relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Fast, reliable software for businesses — custom websites, data engineering pipelines, and agentic AI automation. Engineered in India, deployed worldwide.
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
                <button
                  type="button"
                  onClick={() => onViewChange('blog')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onViewChange('faq')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onViewChange('keywords')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Keyword tools
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onGoHomeSection('about-section')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  About Mach100
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onGoHomeSection('contact-section')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="mailto:contact@mach100.in"
                  className="hover:text-teal-400 transition-colors"
                >
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
