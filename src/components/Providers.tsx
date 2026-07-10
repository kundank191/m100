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
      {/* Both analytics load after window load so LCP stays clean */}
      <MicrosoftClarity />
      <DeferredAnalytics />
      {children}
    </ThemeProvider>
  );
}
