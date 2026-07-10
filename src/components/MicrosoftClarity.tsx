/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect } from 'react';

/** Clarity project ID (public in page source). */
const CLARITY_ID = (
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_VITE_CLARITY_PROJECT_ID ||
  'xjvfg8abh3'
).trim();

/**
 * Official Clarity install — delayed until after load so LCP is not blocked.
 * collect XHR 204 still works; setup may take a few minutes to show data.
 */
export default function MicrosoftClarity() {
  useEffect(() => {
    if (!CLARITY_ID || typeof window === 'undefined') return;
    if (document.getElementById('microsoft-clarity')) return;

    const inject = () => {
      if (document.getElementById('microsoft-clarity')) return;

      // Official Microsoft Clarity bootstrap
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (function (c: any, l: Document, a: string, r: string, i: string) {
        c[a] =
          c[a] ||
          function () {
            // eslint-disable-next-line prefer-rest-params
            (c[a].q = c[a].q || []).push(arguments);
          };
        const t = l.createElement(r) as HTMLScriptElement;
        t.async = true;
        t.id = 'microsoft-clarity';
        t.src = 'https://www.clarity.ms/tag/' + i;
        const y = l.getElementsByTagName(r)[0];
        y.parentNode?.insertBefore(t, y);
      })(window, document, 'clarity', 'script', CLARITY_ID);
    };

    const start = () => {
      window.setTimeout(inject, 4500);
    };

    if (document.readyState === 'complete') {
      start();
    } else {
      window.addEventListener('load', start, { once: true });
    }
  }, []);

  return null;
}
