/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false });
const AnalyticsPageViews = dynamic(() => import('@/components/AnalyticsPageViews'), { ssr: false });

/** Load GA after idle so it does not compete with LCP. Clarity is loaded separately. */
export default function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let onLoad: (() => void) | undefined;

    const schedule = () => {
      if (typeof w.requestIdleCallback === 'function') {
        idleId = w.requestIdleCallback(enable, { timeout: 4000 });
      } else {
        timeoutId = setTimeout(enable, 3000);
      }
    };

    if (document.readyState === 'complete') {
      schedule();
    } else {
      onLoad = () => schedule();
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => {
      if (onLoad) window.removeEventListener('load', onLoad);
      if (idleId !== undefined && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <GoogleAnalytics />
      <AnalyticsPageViews />
    </>
  );
}
