/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';

/** Self-hosted via next/font — no render-blocking Google CSS. */
export const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
});

export const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
  preload: true,
});

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jbmono',
  display: 'swap',
  preload: false,
});
