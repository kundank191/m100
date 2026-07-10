/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import DeferredAnalytics from '@/components/DeferredAnalytics';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* Clarity loads immediately after interactive (setup verification + recordings) */}
      <MicrosoftClarity />
      {/* GA stays deferred for PageSpeed */}
      <DeferredAnalytics />
      {children}
    </ThemeProvider>
  );
}
