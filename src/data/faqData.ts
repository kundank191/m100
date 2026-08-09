/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FaqItem {
  question: string;
  answer: string;
}

/** Aligned with Agentic AI positioning (see task.md). */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What does Mach100 build?',
    answer:
      'We build agentic AI systems and intelligent operational tools. This includes AI agents that run multi-step workflows for PG & co-living management, fleet & logistics operations, and custom business processes - with minimal human intervention. We also build AI-native web applications, dashboards, and internal tools that actually act on data instead of just displaying it.',
  },
  {
    question: 'What is agentic AI?',
    answer:
      'Agentic AI goes beyond regular chatbots or generative tools. These systems can plan, use tools, make decisions, and complete multi-step work on their own - for example, generating rent invoices, sending WhatsApp reminders, optimizing routes, processing payouts, detecting anomalies, or updating ledgers without constant human input.',
  },
  {
    question: 'What are PGPulse and MFleet?',
    answer:
      'PGPulse is an agentic system for PG and co-living operators. AI agents handle rent collection, payment tracking, vacancy management, tenant onboarding, and WhatsApp communication. MFleet is an agentic system for cab and logistics fleets. It includes intelligent route optimization, automated ledgers, instant UPI payouts, fuel & trip intelligence, and anomaly detection. Both are live products you can explore or request a demo for.',
  },
  {
    question: 'Do you only sell products, or can you build custom systems?',
    answer:
      'Both. We have ready products (PGPulse and MFleet) and we also design fully custom agentic systems and intelligent tools tailored to your specific operations and workflows.',
  },
  {
    question: 'We currently run everything on Excel and WhatsApp. Can you help?',
    answer:
      'Yes. This is one of the most common situations we work with. We help businesses move from spreadsheets and scattered WhatsApp chats into intelligent systems where agents handle the repetitive work (reminders, tracking, reconciliation, notifications) while giving you clean visibility and control.',
  },
  {
    question: 'Can you build systems with login, payments, client portals, or WhatsApp automation?',
    answer:
      'Yes. Most of our systems include secure login, role-based access, UPI/payment flows, client or tenant portals, and WhatsApp automation as standard capabilities when needed.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'We primarily work with Indian SMEs and growing businesses that need operational systems - especially in property/PG management, fleet & logistics, and teams looking to automate internal workflows. We also work with international clients who want practical, production-ready agentic tools.',
  },
  {
    question: 'How does your process work?',
    answer:
      '1. You tell us the operations or workflows you want automated. 2. We scope the agentic system clearly (timeline, approach, and cost). 3. We build in short cycles and show you live progress. 4. We thoroughly test and deliver production-ready systems.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'It depends on complexity. Smaller custom tools or enhancements can take a few weeks. Full agentic systems or significant custom builds typically take 4-10 weeks. We always give a clear timeline during scoping.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We work on clear project-based pricing after understanding the scope. No hidden costs. We provide a transparent quote once requirements are clear. For product demos or pilots, we discuss options case by case.',
  },
  {
    question: 'What tech approach do you use?',
    answer:
      'We build modern, maintainable systems with clean architecture. For agentic capabilities we use reliable orchestration, AI agents, and integration patterns that work well with real business tools (WhatsApp, payments, existing data sources). The focus is always on systems that work reliably in production.',
  },
  {
    question: 'Where is Mach100 based?',
    answer: 'Bengaluru, India.',
  },
  {
    question: 'How do I start a project or request a demo?',
    answer:
      'Use the contact form on the website and select the relevant topic (General, PGPulse, MFleet, or Custom). You can also email us at contact@mach100.in. We usually reply within 24 hours.',
  },
  {
    question: 'Still have questions?',
    answer:
      'Email us at contact@mach100.in or use the contact form. We are happy to discuss your specific operations and whether an agentic approach makes sense.',
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
