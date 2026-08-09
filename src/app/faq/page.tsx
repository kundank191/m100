/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import FaqPage from '@/components/FaqPage';
import { faqJsonLd } from '@/data/faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'FAQ - Agentic AI Systems & Operational Tools | Mach100',
  },
  description:
    'FAQ for Mach100: what agentic AI is, PGPulse and MFleet, custom agent systems, process, pricing, Excel/WhatsApp migrations, and how to start a project.',
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
