/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import FaqPage from '@/components/FaqPage';
import { faqJsonLd } from '@/data/faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'FAQ - Growth Marketing & Agentic AI | Mach100',
  },
  description:
    'FAQ for Mach100: how growth marketing differs from a typical agency, UK and India clients, agentic AI vs chatbots, and how fast audits and pilots start.',
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
