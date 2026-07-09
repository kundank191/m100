/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/components/GoogleAnalytics';

export default function AnalyticsPageViews() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
