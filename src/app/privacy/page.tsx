/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import Privacy from '@/components/Privacy';
import { breadcrumbJsonLd } from '@/lib/site';

const TITLE = 'Privacy';
const DESCRIPTION =
  'How Mach100 Tech Solutions collects and uses information from mach100.in, the audit form, and its products.';

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Mach100` },
  description: DESCRIPTION,
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/privacy',
  },
};

export default function PrivacyPage() {
  const crumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Privacy', path: '/privacy' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Privacy />
    </>
  );
}
