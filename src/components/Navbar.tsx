/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  onScrollTo: (elementId: string) => void;
  onGoHomeSection: (sectionId?: string) => void;
}

export default function Navbar({
  currentView,
  onViewChange,
  onScrollTo,
  onGoHomeSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionItems = [
    { label: 'Products', id: 'products-section' },
    { label: 'Services', id: 'services-section' },
    { label: 'About', id: 'about-section' },
  ];

  const pageItems: { label: string; view: ViewState }[] = [
    { label: 'Blog', view: 'blog' },
    { label: 'FAQ', view: 'faq' },
  ];

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    if (currentView === 'home') {
      onScrollTo(sectionId);
    } else {
      onGoHomeSection(sectionId);
    }
  };

  const handlePageClick = (view: ViewState) => {
    setIsOpen(false);
    onViewChange(view);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/65 backdrop-blur-md border-b border-white/5 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            type="button"
            id="nav-logo"
            onClick={() => {
              setIsOpen(false);
              onGoHomeSection();
            }}
            className="flex items-center cursor-pointer group bg-transparent border-0 p-0 text-left"
            aria-label="Mach100 Tech Solutions home"
          >
            <Logo className="group-hover:opacity-90 transition-opacity duration-300" />
          </button>

          <div id="desktop-menu" className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-5">
              {sectionItems.map((item) => (
                <button
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  onClick={() => handleSectionClick(item.id)}
                  className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-200 cursor-pointer relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              {pageItems.map((item) => (
                <button
                  key={item.label}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  onClick={() => handlePageClick(item.view)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer relative py-1 group ${
                    currentView === item.view ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3 border-l border-slate-800/80 pl-5">
              <ThemeToggle />
              <button
                id="nav-cta-button"
                onClick={() => handleSectionClick('contact-section')}
                className="px-5 py-2 rounded-full bg-white text-slate-950 text-xs font-bold hover:bg-teal-50 hover:scale-[1.02] transition-all duration-300 shadow-md shadow-white/5 cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-xl border-b border-slate-900 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-4">
          <div className="flex flex-col space-y-3">
            {sectionItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleSectionClick(item.id)}
                className="text-left py-2 text-base font-medium text-slate-300 hover:text-teal-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            {pageItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handlePageClick(item.view)}
                className="text-left py-2 text-base font-medium text-slate-300 hover:text-teal-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-900 flex flex-col space-y-3">
            <button
              id="mobile-nav-cta-button"
              onClick={() => handleSectionClick('contact-section')}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-teal-700 text-slate-950 text-sm font-semibold text-center hover:from-teal-400 hover:to-teal-600 transition-colors"
            >
              Build With Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
