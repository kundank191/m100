/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Proof from '@/components/Proof';
import CommonQuestions from '@/components/CommonQuestions';
import HowWeWork from '@/components/HowWeWork';
import HomeScroll from '@/components/HomeScroll';
import { SITE_DESCRIPTION, SITE_TITLE_HOME, SITE_URL } from '@/lib/site';

/** Explicit homepage meta for SERP (title + description). */
export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE_HOME,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_TITLE_HOME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    title: SITE_TITLE_HOME,
    description: SITE_DESCRIPTION,
  },
};

/**
 * Contact is the only heavy client section - load after first paint.
 * Everything above is Server Components (no hydration).
 */
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => (
    <section className="py-16 sm:py-20 border-t border-slate-900" aria-hidden="true">
      <div className="max-w-7xl mx-auto px-4 h-40" />
    </section>
  ),
});

export default function HomePage() {
  return (
    <div id="homepage-flow">
      <HomeScroll />
      <Hero />
      <Services />
      <Proof />
      <CommonQuestions />
      <HowWeWork />
      <Contact />
    </div>
  );
}
