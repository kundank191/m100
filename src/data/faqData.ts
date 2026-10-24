/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AnswerBlock {
  label: string;
  text: string;
}

export interface HomeQuestion {
  question: string;
  blocks: AnswerBlock[];
  note?: string;
}

/** The five questions shown on the homepage. The FAQ page includes these too. */
export const HOME_QUESTIONS: HomeQuestion[] = [
  {
    question: 'How do your projects work?',
    blocks: [
      {
        label: 'Week 1: Align',
        text: 'We pick one number that matters: leads, paid orders, or hours saved.',
      },
      {
        label: 'Weeks 2-3: Diagnose',
        text: 'We review your ads, site, and current workflow. We name the few fixes worth doing first.',
      },
      {
        label: 'Weeks 3-6: Build',
        text: 'We ship the funnel, lead agent, or operational system. Live in production, not a slide deck.',
      },
      {
        label: 'After launch: Compound',
        text: "We track that number every week and improve what's already running.",
      },
    ],
  },
  {
    question: 'How long until we see results?',
    blocks: [
      {
        label: '3-5 days',
        text: 'The audit shows where leads or hours are leaking.',
      },
      {
        label: '7-14 days',
        text: 'Ad funnels and website/WhatsApp lead agents go live.',
      },
      {
        label: '3-6 weeks',
        text: 'A custom system for rent, fleet, or your workflow is in production.',
      },
    ],
  },
  {
    question: 'What does my team need to provide?',
    blocks: [
      {
        label: 'An owner',
        text: 'One person who can pick the number that matters and approve the scope.',
      },
      {
        label: 'Access',
        text: 'Ad accounts, the website, and the calendar or WhatsApp where leads currently go quiet.',
      },
      {
        label: 'The current workflow',
        text: 'The sheet, ledger, or chat thread the new system will replace.',
      },
    ],
    note: 'With those three, we can scope the work. We handle the build.',
  },
  {
    question: 'What is included?',
    blocks: [
      {
        label: 'Acquisition',
        text: 'Google and Meta ads, landing pages, calculators, and tests that turn more visitors into customers.',
      },
      {
        label: 'Speed-to-lead',
        text: 'Website and WhatsApp agents that answer, qualify the lead, and book a meeting.',
      },
      {
        label: 'Operations',
        text: 'PGPulse for property, MFleet for fleet ledgers and payouts, or a custom agent for a repetitive task.',
      },
      {
        label: 'Measurement',
        text: 'Tracking tied to the number we agreed on: leads, orders, or hours saved.',
      },
    ],
  },
  {
    question: 'What is not included?',
    blocks: [
      {
        label: 'Content calendars',
        text: "We don't run daily social or blog posts.",
      },
      {
        label: 'FAQ-only chatbots',
        text: "If it can't qualify, book, or update a record, it's out of scope.",
      },
      {
        label: 'Clinical claims',
        text: 'GluCare is not a medical device and does not diagnose.',
      },
      {
        label: 'A full company rebuild',
        text: "We don't replace everything you run. We build the system that moves the number.",
      },
    ],
  },
];

/** Longer answers. Shown on /faq and in FAQPage JSON-LD. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question:
      "How is Mach100's Marketing & Growth service different from a normal digital marketing agency?",
    answer:
      'Traditional agencies hand you generic social media posts or PDF audits and expect your developers to fix your website. Because Mach100 is led by an Ex-DoorDash Data/AI Engineer who scaled Mylo from 20 to 1,000+ daily orders, we combine Growth Marketing (Ads, SEO, CRO) with Production Engineering. We build the high-converting landing pages, interactive calculators, heatmap tracking, A/B tests, and AI WhatsApp lead-conversion agents ourselves.',
  },
  {
    question: 'Do you work with small businesses in London / the UK as well as India?',
    answer:
      'Yes. We work with UK and global SMEs - helping them scale customer acquisition and automate operations at a fraction of the cost of hiring an in-house UK tech and marketing team - as well as ambitious Indian SMEs and startups.',
  },
  {
    question: 'What is the difference between a normal chatbot and your Agentic AI systems?',
    answer:
      'A basic chatbot just answers FAQs. Our Agentic AI systems (like PGPulse, MFleet, and our Speed-to-Lead Agents) connect to your actual tools - they qualify leads, book calendar appointments, generate invoices, track payments, detect anomalies in spreadsheets, and trigger multi-step actions autonomously.',
  },
  {
    question: 'How quickly can we start seeing results?',
    answer:
      'The audit shows where leads or hours are leaking in 3-5 days. Ad funnels and website or WhatsApp lead agents go live in 7-14 days. You can try the PGPulse demo today.',
  },
  {
    question: 'What does Mach100 build?',
    answer:
      'We build two engines: data-driven growth systems (ads, SEO, conversion, and AI speed-to-lead) and agentic operational systems. That includes AI agents for property and co-living, fleet and logistics, and custom workflows, plus AI-native web apps that act on data instead of only displaying it.',
  },
  {
    question: 'What are PGPulse and MFleet?',
    answer:
      'PGPulse is an agentic system for co-living, HMO, and PG operators. AI agents handle rent collection, payment tracking, vacancy management, tenant onboarding, and WhatsApp communication. Open demo: https://pg.mach100.in/. MFleet is an agentic system for fleet, private hire, and logistics operators, with route intelligence, automated ledgers, payouts, and anomaly detection. MFleet is live and invite-only - request a demo via the contact form.',
  },
  {
    question: 'Do you only sell products, or can you build custom systems?',
    answer:
      'Both. We run live products (PGPulse and MFleet) and a Growth Engine for acquisition and lead conversion. We also design custom agentic systems and intelligent tools for your specific operations.',
  },
  {
    question: 'We currently run everything on Excel and WhatsApp. Can you help?',
    answer:
      'Yes. This is one of the most common situations we work with. We help businesses move from spreadsheets and scattered WhatsApp chats into intelligent systems where agents handle the repetitive work (reminders, tracking, reconciliation, notifications) while giving you clean visibility and control.',
  },
  {
    question: 'Can you build systems with login, payments, client portals, or WhatsApp automation?',
    answer:
      'Yes. Most of our systems include secure login, role-based access, payment flows (Stripe, Open Banking, or UPI), client or tenant portals, and WhatsApp automation when those capabilities are needed.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Ambitious SMEs in London, the UK, and globally, plus fast-growing Indian businesses. Typical partners are service businesses scaling acquisition, property and co-living operators, fleet and logistics teams, and founders replacing Excel and WhatsApp with agents.',
  },
  {
    question: 'How does your process work?',
    answer:
      '1. We diagnose acquisition goals or operational bottlenecks. 2. You get a fixed scope, ROI milestones, and a clear timeline. 3. We build in weekly sprints with live demos. 4. We optimize conversion, customer acquisition cost, and agent accuracy in production.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'The audit shows where leads or hours are leaking in 3-5 days. Ad funnels and lead agents go live in 7-14 days. A custom system for rent, fleet, or your workflow is in production in 3-6 weeks. We give a clear timeline during scoping.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We work on clear project-based pricing after understanding the scope. No hidden costs. We provide a transparent quote once requirements are clear. For product demos or pilots, we discuss options case by case.',
  },
  {
    question: 'What tech approach do you use?',
    answer:
      'We build modern, maintainable systems with clean architecture. Growth work uses experimentation, heatmaps, and conversion tracking. Agentic work uses reliable orchestration and integrations with real business tools (WhatsApp, payments, existing data). The focus is systems that work in production.',
  },
  {
    question: 'Where is Mach100 based?',
    answer: 'Bengaluru, India. We serve clients across the UK, US, and India.',
  },
  {
    question: 'How do I start a project or request a demo?',
    answer:
      'Use the contact form and select a topic (growth marketing, a full-funnel AI lead agent, a custom agentic system, PGPulse, MFleet, or an internal tool). You can also email contact@mach100.in. We usually reply within 24 hours.',
  },
  {
    question: 'Is GluCare a medical device?',
    answer:
      'No. GluCare is an invite-only health companion product for evaluation and self-management support only. It is not a medical device, does not provide clinical diagnoses, and is not a substitute for professional medical advice.',
  },
];

function homeAnswer(item: HomeQuestion) {
  return [...item.blocks.map((block) => `${block.label}: ${block.text}`), item.note]
    .filter(Boolean)
    .join(' ');
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      ...HOME_QUESTIONS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: homeAnswer(item) },
      })),
      ...FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    ],
  };
}
