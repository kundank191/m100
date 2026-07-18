/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FaqItem {
  question: string;
  answer: string;
}

/** Aligned with homepage positioning: websites, web apps, internal tools, clear process. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What does Mach100 build?',
    answer:
      'We build fast, clean websites and custom web tools: business websites and web apps (including login, SEO, and payments), internal tools and dashboards, workflow automation, and operational systems such as PG or fleet tools. Based in Bengaluru, India.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Mainly Indian SMEs, businesses that need custom internal tools or dashboards, and growing companies that want practical web tools built properly. We also work with international clients who need clean, functional web development at reasonable cost.',
  },
  {
    question: 'How does your process work?',
    answer:
      'Four steps: (1) you tell us what you need, (2) we scope timeline and cost clearly, (3) we build in short cycles and share progress, (4) we test thoroughly and deliver production-ready software. No hidden surprises by default.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'It depends on scope, integrations (login, payments, WhatsApp, etc.), and how quickly you give feedback. We aim for fast delivery with proper quality — not endless meetings. After a short discovery, we give a clear timeline before work starts.',
  },
  {
    question: 'What are PGPulse and MFleet?',
    answer:
      'They are real examples of tools we have built. PGPulse is a PG and co-living operations demo at pg.mach100.in (no login required; demo data stays in your browser). MFleet is a fleet and logistics operations product — live, invite-only; request a demo via the contact form. We also build fully custom tools for your workflows.',
  },
  {
    question: 'Do you only sell products, or can you build something custom for us?',
    answer:
      'Both. Our products show the kind of operational web tools we ship. Most client work is custom: websites, web apps, admin dashboards, client portals, reporting tools, and workflow automation tailored to your team.',
  },
  {
    question: 'Can you build a website with login, payments, or a client portal?',
    answer:
      'Yes. That is core work for us — secure login, role-based access, dashboards, invoices/payments patterns, and mobile-friendly UX. We plan who logs in and what they do after login before we build.',
  },
  {
    question: 'We run everything on Excel / WhatsApp. Can you help?',
    answer:
      'Yes. Many teams start there. We help replace messy spreadsheets and manual follow-ups with simple internal tools, dashboards, and automated workflows — starting with one painful process, then expanding.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'Custom work is scoped per project (fixed phases or weekly delivery). Product demos and pilots are discussed case by case. We share a clear estimate after discovery — scope and cost up front, not open-ended billing by default.',
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'Typically React and TypeScript, modern web APIs, Tailwind, and proven auth/database options (for example Supabase) when needed. We choose the stack to fit the problem rather than forcing one framework on every project.',
  },
  {
    question: 'Where is Mach100 based?',
    answer:
      'Bengaluru, India. We work with clients across India and internationally, with English (and Hindi when useful) on sales contact.',
  },
  {
    question: 'How do I start a project or request a demo?',
    answer:
      'Use the contact form on mach100.in or email contact@mach100.in. Choose Website, Web App, Internal Tool, Custom Tool, or a product topic (MFleet / PGPulse). We usually reply within 24 hours.',
  },
  {
    question: 'Is GluCare a medical device?',
    answer:
      'No. GluCare is an invite-only health companion product for evaluation and self-management support only. It is not a medical device, does not provide clinical diagnoses, and is not a substitute for professional medical advice.',
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
