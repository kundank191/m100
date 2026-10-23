/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import { scrollToSection } from '@/lib/scroll';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '/#services' },
    { label: 'Products', href: '/products' },
    { label: 'Case Studies', href: '/#proof' },
    { label: 'About', href: '/about' },
  ] as const;

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setIsOpen(false);
      const hash = href.startsWith('/#') ? href.slice(2) : '';
      if (!hash || pathname !== '/') return;
      event.preventDefault();
      scrollToSection(hash);
      window.history.pushState(null, '', `/#${hash}`);
    },
    [pathname],
  );

  return (
    <nav
      id="main-navbar"
      className="fixed inset-x-0 top-0 z-50 border-b py-4"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
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
              {navItems.map((item) => {
                const current = item.href.startsWith('/#')
                  ? false
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    aria-current={current ? 'page' : undefined}
                    className={`text-sm font-medium transition-colors duration-150 relative py-1 group whitespace-nowrap ${
                      current ? 'text-teal-400' : 'text-slate-300 hover:text-teal-400'
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-200 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-3 border-l border-slate-800/80 pl-5">
              <ThemeToggle id="theme-toggle-desktop" />
              <Link
                id="nav-cta-button"
                href="/#contact"
                onClick={(event) => handleNavClick(event, '/#contact')}
                className="px-5 py-2 rounded-full bg-white text-slate-950 text-xs font-bold hover:bg-teal-50 transition-colors duration-150 shadow-md shadow-white/5"
              >
                Book an audit
              </Link>
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
        className={`lg:hidden absolute top-full left-0 right-0 border-b border-slate-900 transition-all duration-200 overflow-hidden ${
          isOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="py-2 text-base font-medium text-slate-300 hover:text-teal-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-900">
            <Link
              id="mobile-nav-cta-button"
              href="/#contact"
              onClick={(event) => handleNavClick(event, '/#contact')}
              className="block w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-teal-700 text-slate-950 text-sm font-semibold text-center hover:from-teal-400 hover:to-teal-600 transition-colors"
            >
              Book an audit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
