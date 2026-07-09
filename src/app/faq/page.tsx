/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import FaqPage from '@/components/FaqPage';
import { faqJsonLd } from '@/data/faqData';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Mach100 timelines, MFleet, PGPulse, GluCare access, pricing, and custom software in India.',
  alternates: { canonical: '/faq' },
};

export default function FaqRoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <FaqPage />
    </>
  );
}
