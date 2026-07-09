/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

      {/* One soft ambient blob only — cheaper than three animated blurs */}
      <div
        className="fixed top-[-15%] left-[20%] w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Navbar />
      <main id="main-content-flow">{children}</main>
      <Footer />
    </div>
  );
}
