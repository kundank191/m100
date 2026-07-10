/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus_Jakarta_Sans } from 'next/font/google';

/**
 * Single family on the critical path for LCP.
 * Display / mono fall back to the same family or system fonts in CSS.
 */
export const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});
