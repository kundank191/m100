/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/** Server Component shell — Navbar/Footer stay client islands. */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="app-wrapper"
      className="min-h-screen font-sans selection:bg-teal-500/25 selection:text-teal-700 relative overflow-x-hidden"
    >
      <a
        href="#main-content-flow"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-teal-500 focus:text-slate-950 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      {/* Single soft blob; reduced blur cost vs large animated layers */}
      <div
        className="fixed top-[-10%] left-[15%] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-teal-500/6 rounded-full blur-[80px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Navbar />
      <main id="main-content-flow">{children}</main>
      <Footer />
    </div>
  );
}
