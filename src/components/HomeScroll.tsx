/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useEffect } from 'react';

/** Scroll to hash section after navigating from other pages (e.g. /#contact-section). */
export default function HomeScroll() {
  useEffect(() => {
    const hash = window.location.hash?.replace('#', '');
    if (!hash) return;
    const t = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 80);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
