/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import KeywordsPage from '@/components/KeywordsPage';

export const metadata: Metadata = {
  title: 'Keyword map & SEO tools',
  description:
    'Mach100 target keyword map, free SEO research tools, and a simple draft density checker.',
  alternates: { canonical: '/keywords' },
  robots: { index: false, follow: true },
};

export default function KeywordsRoutePage() {
  return <KeywordsPage />;
}
