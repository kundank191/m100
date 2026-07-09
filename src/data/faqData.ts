/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How long does an MVP typically take?',
    answer:
      'Most focused MVPs ship in 4–6 weeks after scope is locked. Timeline depends on integrations (payments, WhatsApp, auth) and how quickly stakeholders give feedback.',
  },
  {
    question: 'What is the difference between PGPulse, MFleet, and GluCare access?',
    answer:
      'PGPulse has a public interactive demo at pg.mach100.in (no login; data stays in your browser). MFleet and GluCare are live invite-only products — use the contact form to request a demo or pilot access.',
  },
  {
    question: 'Do you only build products, or also custom client software?',
    answer:
      'Both. We ship our own products and take on custom websites, web apps, data engineering pipelines, and agentic AI automation for businesses across India and beyond.',
  },
  {
    question: 'Where is Mach100 based?',
    answer:
      'We are engineered in India with a Bengaluru base. We work with startups, SMEs, logistics operators, PG businesses, and health-tech teams.',
  },
  {
    question: 'How do I request a project or product access?',
    answer:
      'Use the contact form on mach100.in or email contact@mach100.in. Choose the MFleet or GluCare topic if you need product access; describe timeline and goals for custom builds.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'Custom work is scoped per project (fixed phases or weekly delivery). Product pilots are discussed case by case. We share a clear estimate after a short discovery call — no surprise scope creep by default.',
  },
  {
    question: 'Is GluCare a medical device?',
    answer:
      'No. GluCare is a product for evaluation and self-management support only. It is not a medical device, does not provide clinical diagnoses, and is not a substitute for professional medical advice.',
  },
  {
    question: 'What tech stacks do you use?',
    answer:
      'Typically React/TypeScript, modern Node APIs, Tailwind, and cloud auth/databases (e.g. Supabase) where needed. We match stack to the problem rather than forcing a single framework.',
  },
];

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
