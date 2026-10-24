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
    question: 'How is this different from a normal marketing agency?',
    answer:
      'A typical agency sends posts or a PDF and leaves the website to someone else. We run Google and Meta ads and fix the pages so more visitors become buyers. We also reply to leads and handle the daily work. The work is led by an Ex-DoorDash engineer who took Mylo from 20 to 1,000+ orders a day. We do not run daily social or blog posts.',
  },
  {
    question: 'Do you work with businesses in the UK and the US, or only in India?',
    answer: 'We work with growing businesses in the UK, the US, and India. We are based in Bengaluru.',
  },
  {
    question: 'What is the difference between a chatbot and your AI agents?',
    answer:
      "A chatbot only answers questions. Our agents on your website and WhatsApp answer instantly, check if the lead is a fit, and book the meeting. For daily work, they update the record: rent, driver ledgers, payouts, and the tasks still sitting in Excel or WhatsApp. If it can't qualify, book, or update a record, it is out of scope.",
  },
  {
    question: 'How quickly can we start seeing results?',
    answer:
      'The audit shows where leads or hours are leaking in 3-5 days. Ad funnels and website or WhatsApp lead agents go live in 7-14 days. A custom system for rent, fleet, or your workflow is in production in 3-6 weeks. You can try the PGPulse demo today at https://pg.mach100.in/.',
  },
  {
    question: 'What does Mach100 build?',
    answer:
      'We build systems that bring in more customers and handle the daily work. That is Google and Meta ads and pages that turn visitors into buyers; website and WhatsApp agents that answer, qualify, and book; and systems for rent, driver ledgers, payouts, and daily tasks. PGPulse is for property. MFleet is for fleet. We also build a custom agent for a repetitive task.',
  },
  {
    question: 'What are PGPulse and MFleet?',
    answer:
      'PGPulse is for PG and co-living operators. It handles rent invoices, payment tracking, vacancies, tenant onboarding, and WhatsApp reminders. Open demo: https://pg.mach100.in/. MFleet is for fleet teams. It handles driver ledgers, payouts, and the daily exceptions that used to live in a notebook or a chat thread. MFleet is live and invite-only. Request access from the contact form.',
  },
  {
    question: 'Do you only sell products, or can you build custom systems?',
    answer:
      'Both. PGPulse and MFleet are live. We also build a custom system when the workflow that takes the most time is not rent or a fleet ledger. Tell us whether you want growth (ads and conversion), operations (AI agents), or both.',
  },
  {
    question: 'We currently run everything on Excel and WhatsApp. Can you help?',
    answer:
      'Yes. We replace the sheet, ledger, or chat thread that runs the daily work. That includes rent for PG and co-living operators, driver ledgers and payouts for fleet teams, and a custom agent for another repetitive task.',
  },
  {
    question: 'Can you build systems with login, payments, client portals, or WhatsApp automation?',
    answer:
      'Yes, when the workflow needs them. PGPulse tracks rent invoices and payments. MFleet handles driver payouts. A custom system can include login, a client or tenant portal, and WhatsApp. We build the system that moves the number. We do not replace everything you run.',
  },
  {
    question: 'Who do you work with?',
    answer:
      'Growing businesses that want more customers or less daily manual work. That includes teams that want predictable leads and orders, clinics and high-ticket or B2B teams losing leads to slow replies, and PG, co-living, and fleet operators. We work in the UK, the US, and India.',
  },
  {
    question: 'How does your process work?',
    answer:
      'Before the call we look at your ads, site, and current workflow. On a 15-minute call we show you the exact leaks. If it makes sense, you get a clear scope. No obligation. Week 1 we pick one number that matters: leads, paid orders, or hours saved. In weeks 2-3 we name the few fixes worth doing first. In weeks 3-6 we ship the funnel, lead agent, or operational system, live in production. After launch we track that number every week and improve what is already running.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'The audit shows where leads or hours are leaking in 3-5 days. Ad funnels and website or WhatsApp lead agents go live in 7-14 days. A custom system for rent, fleet, or your workflow is in production in 3-6 weeks. We give a clear timeline when we scope the work.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'After the audit, if it makes sense, you get a clear scope and a project price. No obligation. No hidden costs. We reply within 24 hours.',
  },
  {
    question: 'What tech approach do you use?',
    answer:
      'We ship systems that run in production, not a slide deck. Growth work is Google and Meta ads, landing pages, calculators, and tests tied to leads, orders, or hours saved. Operations work connects to the tools you already use, including WhatsApp, and updates the record.',
  },
  {
    question: 'Where is Mach100 based?',
    answer: 'Bengaluru, India. We serve the UK, the US, and India.',
  },
  {
    question: 'How do I start a project or request a demo?',
    answer:
      'Book an audit. Tell us whether you want growth (ads and conversion), operations (AI agents), or both. Include your website or the workflow that takes the most time, and a rough timeline. You can also email contact@mach100.in. We reply within 24 hours.',
  },
  {
    question: 'Is GluCare a medical device?',
    answer:
      'No. GluCare is not a medical device and does not diagnose. It is an invite-only companion for meal logging and glucose trends. It is not a substitute for a clinician.',
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
