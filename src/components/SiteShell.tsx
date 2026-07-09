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
      className="min-h-screen font-sans selection:bg-teal-500/25 selection:text-teal-700 relative overflow-hidden"
    >
      <a
        href="#main-content-flow"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-teal-500 focus:text-slate-950 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      <div
        className="fixed top-[-10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/12 to-indigo-500/8 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/8 to-teal-500/10 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed top-[40%] right-[-5%] w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"
        aria-hidden="true"
      />

      <Navbar />
      <main id="main-content-flow">{children}</main>
      <Footer />
    </div>
  );
}
