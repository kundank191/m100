/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

/** Project ID from Clarity (public in page source). Override with VITE_CLARITY_PROJECT_ID if needed. */
const CLARITY_ID =
  (import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined)?.trim() || 'xjvfg8abh3';

/** Loads Microsoft Clarity when VITE_CLARITY_PROJECT_ID is set. */
export default function MicrosoftClarity() {
  useEffect(() => {
    if (!CLARITY_ID || typeof window === 'undefined') return;
    if (document.getElementById('ms-clarity-script')) return;

    const w = window as Window & { clarity?: (...args: unknown[]) => void; clarityq?: unknown[][] };
    w.clarity =
      w.clarity ||
      function (...args: unknown[]) {
        (w.clarityq = w.clarityq || []).push(args);
      };

    const script = document.createElement('script');
    script.async = true;
    script.id = 'ms-clarity-script';
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
