/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Metadata } from 'next';
import FaqPage from '@/components/FaqPage';
import { faqJsonLd } from '@/data/faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Common questions | Mach100',
  },
  description:
    'How a Mach100 project runs, what is included, and when an audit, lead agent, or operational system goes live.',
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
