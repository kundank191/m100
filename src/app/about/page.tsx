/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import About from '@/components/About';
import { breadcrumbJsonLd } from '@/lib/site';

const TITLE = 'About Mach100';
const DESCRIPTION =
  'We bring in more customers and handle the daily work. Led by an Ex-DoorDash engineer who took Mylo from 20 to 1,000+ orders a day.';

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Mach100` },
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/about',
  },
};

export default function AboutPage() {
  const crumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <About />
    </>
  );
}
