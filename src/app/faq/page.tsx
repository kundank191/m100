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
    'FAQ for Mach100 in Bengaluru: websites, web apps with login, internal tools, process, pricing, PGPulse demo, MFleet access, and how to start a project.',
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
