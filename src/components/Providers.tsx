/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import AnalyticsPageViews from '@/components/AnalyticsPageViews';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <AnalyticsPageViews />
      {children}
    </ThemeProvider>
  );
}
