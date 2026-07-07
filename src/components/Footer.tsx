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
}

export default function Footer({ onViewChange, onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    onViewChange('home');
    setTimeout(() => {
      onScrollTo(sectionId);
    }, 100);
  };

  return (
    <footer
      id="main-footer"
      className="bg-slate-950 border-t border-white/5 py-16 text-slate-400 text-sm relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-2 space-y-4">
            <Logo variant="footer" />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Fast, reliable software for businesses — custom websites, data engineering pipelines, and agentic AI automation. Engineered in India, deployed worldwide.
            </p>
            <div className="flex items-center space-x-2.5 text-[11px] font-mono text-slate-600">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Data Engineering</span>
              <span>•</span>
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>Agentic AI Automation</span>
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Core Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNavClick('products-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  MFleet Engine
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  PGPulse Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('products-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  GluCare Edge App
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Corporate
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNavClick('about-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  About Mach100
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services-section')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Our Services
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Base Row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© {currentYear} Mach100 Tech Solutions Private Limited. All rights reserved.</span>
          </div>
          <div className="text-xs text-slate-500">
            <span>India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
