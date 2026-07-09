/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect } from 'react';

const CLARITY_ID = (
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_VITE_CLARITY_PROJECT_ID ||
  'xjvfg8abh3'
).trim();

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
