/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect } from 'react';

/** Scroll to hash section after navigating from other pages (e.g. /?topic=growth#contact). */
export default function HomeScroll() {
  useEffect(() => {
    const hash = window.location.hash?.replace('#', '');
    if (!hash) return;
    let tries = 0;
    const tick = window.setInterval(() => {
      const el = document.getElementById(hash);
      tries += 1;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.clearInterval(tick);
      } else if (tries > 10) {
        window.clearInterval(tick);
      }
    }, 80);
    return () => window.clearInterval(tick);
  }, []);

  return null;
}
