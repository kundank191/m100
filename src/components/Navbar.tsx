/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { scrollToSection } from '@/lib/scroll';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    // Initial check without waiting for scroll
    setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sectionItems = [
    { label: 'Examples', id: 'products-section' },
    { label: 'Services', id: 'services-section' },
    { label: 'About', id: 'about-section' },
  ];

  const pageItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ];

  const handleSectionClick = useCallback(
    (sectionId: string) => {
      setIsOpen(false);
      if (isHome) {
        scrollToSection(sectionId);
      } else {
        router.push(`/#${sectionId}`);
      }
    },
    [isHome, router],
  );

  return (
    <nav
      id="main-navbar"
      data-scrolled={scrolled ? 'true' : 'false'}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'nav-scrolled border-b py-3' : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            id="nav-logo"
            onClick={() => setIsOpen(false)}
            className="flex items-center cursor-pointer group"
            aria-label="Mach100 Tech Solutions home"
          >
            <Logo className="group-hover:opacity-90 transition-opacity duration-200" />
          </Link>

          <div id="desktop-menu" className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-5">
              {sectionItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSectionClick(item.id)}
                  className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-150 cursor-pointer relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
              {pageItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-150 relative py-1 group ${
                    pathname.startsWith(item.href)
                      ? 'text-teal-400'
                      : 'text-slate-300 hover:text-teal-400'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3 border-l border-slate-800/80 pl-5">
              <ThemeToggle id="theme-toggle-desktop" />
              <button
                type="button"
                id="nav-cta-button"
                onClick={() => handleSectionClick('contact-section')}
                className="px-5 py-2 rounded-full bg-white text-slate-950 text-xs font-bold hover:bg-teal-50 transition-colors duration-150 shadow-md shadow-white/5 cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle id="theme-toggle-mobile" />
            <button
              id="mobile-menu-toggle"
              type="button"
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
        className={`lg:hidden absolute top-full left-0 right-0 bg-slate-950/98 border-b border-slate-900 transition-all duration-200 overflow-hidden ${
          isOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-4">
          <div className="flex flex-col space-y-3">
            {sectionItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSectionClick(item.id)}
                className="text-left py-2 text-base font-medium text-slate-300 hover:text-teal-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            {pageItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-left py-2 text-base font-medium text-slate-300 hover:text-teal-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-900">
            <button
              type="button"
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
