/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  tags: string[];
  /** Simple paragraphs; last item can be a CTA line */
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'fleet-mvp-in-5-weeks',
    title: 'How we ship a production-ready fleet dashboard in 5 weeks',
    excerpt:
      'A practical timeline for cab and logistics operators who need rental ledgers, payouts, and role-based access — without a year-long ERP project.',
    date: '2026-06-15',
    readMinutes: 6,
    tags: ['MFleet', 'MVP', 'Fleet'],
    body: [
      'Most fleet software projects stall on scope: GPS, accounting, HR, and reporting all land in the same backlog. We start narrower — day-to-day ops that lose money when they stay in spreadsheets.',
      'Week 1 is discovery and data model: vehicles, drivers, rides, invoices, payments, and roles (owner / manager / employee). Week 2–3 is core workflows and UI. Week 4 is payments and reporting. Week 5 is pilot hardening and access setup.',
      'MFleet is invite-only because production fleets need real accounts, not a public sandbox. If you want a walkthrough, request access on the contact form and mention your fleet size and current tools.',
      'Keywords this approach serves: fleet management software India, cab fleet management with GST invoicing, and MVP delivery in weeks — not quarters.',
    ],
  },
  {
    slug: 'pg-rent-collection-whatsapp',
    title: 'Why most PG management software fails at rent collection',
    excerpt:
      'Rent is a workflow problem: reminders, partial payments, and owner trust. Here is what actually moves the needle for co-living operators.',
    date: '2026-06-22',
    readMinutes: 5,
    tags: ['PGPulse', 'PG', 'Rent'],
    body: [
      'PG operators lose hours every month reconciling UPI screenshots and WhatsApp threads. Tools that only store tenant names without a clear dues board fail under real occupancy churn.',
      'What works: auto rent invoices, a simple paid / pending / overdue board, and reminder patterns that match how tenants already communicate. PGPulse demos this end-to-end in the browser — no login, data stays local for evaluation.',
      'Try the open demo at pg.mach100.in, then talk to us if you want a production deployment with multi-user access and real payment webhooks.',
      'Target phrases: PG management software, paying guest management software Bengaluru, and WhatsApp rent reminders for hostels.',
    ],
  },
  {
    slug: 'privacy-first-ai-health-demo',
    title: 'Building privacy-aware AI health tools for India',
    excerpt:
      'GluCare is invite-only for a reason: health data is sensitive. How we think about demos, disclaimers, and pilot access.',
    date: '2026-07-01',
    readMinutes: 5,
    tags: ['GluCare', 'AI', 'Health'],
    body: [
      'Health-tech demos that claim clinical accuracy without methodology destroy trust. GluCare is positioned as an evaluation product: meal logging, vision-assisted capture, and trend-style insights — not a medical device and not for diagnosis.',
      'Access is invite-only so pilots run with accounts you control. Internal sample accuracy metrics are labeled as such; we do not present them as peer-reviewed clinical results.',
      'If you are evaluating AI companions for wellness or diabetes self-management support, request GluCare access and tell us your pilot constraints (users, devices, compliance needs).',
      'Related search intent: AI glucose monitoring app India, privacy-first health logging, and custom AI software development India.',
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
