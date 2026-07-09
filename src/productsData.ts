/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductDetail } from './types';

export const PRODUCTS: ProductDetail[] = [
  {
    id: 'mfleet',
    name: 'MFleet',
    tagline: 'Fleet Management & Driver Operations Platform',
    description:
      'A live fleet operations product for cab operators and logistics teams — rental ledgers, fuel costs, driver payouts, rides, invoices, and role-based access. Request a demo or pilot access for your organisation.',
    icon: 'Truck',
    accentColor: '#818cf8',
    bgGradient: 'from-indigo-950/40 to-slate-950/40',
    access: 'request-access',
    statusLabel: 'Live Product',
    features: [
      {
        title: 'Automated Rental Ledgers',
        desc: 'Calculate driver rents, daily balances, fuel allocations, and toll reimbursements without manual registers.',
      },
      {
        title: 'Instant Driver Payouts',
        desc: 'UPI-ready payout flows with itemized SMS and WhatsApp-style receipt patterns after every shift.',
      },
      {
        title: 'AI Route Optimization',
        desc: 'Route suggestions and idle-time flags designed to cut fuel waste on multi-stop schedules.',
      },
    ],
    benefits: [
      'Multi-user access: Owner, manager, and employee roles for real team workflows.',
      'Production ops: Vehicles, drivers, rides, invoices, and payments in one system.',
      'Pilot-ready: We onboard your org with secure access — no public open signup.',
    ],
    metrics: [
      { label: 'Access model', value: 'Invite-only' },
      { label: 'Rental ledger automation', value: 'Built-in' },
      { label: 'Driver payout flow', value: 'UPI-ready' },
      { label: 'Team roles', value: 'RBAC' },
    ],
    techStack: ['React + TypeScript', 'Supabase Auth', 'Tailwind CSS', 'Role-based dashboards'],
  },
  {
    id: 'pgpulse',
    name: 'PGPulse',
    tagline: 'PG & Co-living Property Management',
    description:
      'An interactive product demo for PG and hostel operators. Walk through rent collection, vacancy tracking, tenant onboarding, and WhatsApp-style communication — try the live demo freely in your browser.',
    icon: 'Home',
    accentColor: '#60a5fa',
    bgGradient: 'from-blue-950/40 to-slate-950/40',
    access: 'public-demo',
    demoUrl: 'https://pg.mach100.in/',
    statusLabel: 'Interactive Demo',
    features: [
      {
        title: 'Automated Rent Collection',
        desc: 'Auto-generated rent invoices with UPI payment link patterns. Track partial and full payments with full transparency.',
      },
      {
        title: 'Vacancy Management',
        desc: 'Room allocation board showing filled, vacant, and notice-period spaces for faster bookings.',
      },
      {
        title: 'WhatsApp Automation',
        desc: 'Rent reminders, payment receipts, and check-in notification flows modeled for tenant messaging.',
      },
      {
        title: 'Digital Tenant Onboarding',
        desc: 'e-KYC-style verification and digital agreement templates that shrink onboarding from days to minutes.',
      },
    ],
    benefits: [
      'Direct settlement patterns: Payment flows designed for owner accounts with clear ledger lines.',
      'Auto ledger reconciliation: Deposits, utilities, maintenance, and advances categorized in the demo.',
      'Fast booking UX: Confirm stays and complete onboarding steps in minutes, not days.',
    ],
    metrics: [
      { label: 'Rent invoice flow', value: 'Demo' },
      { label: 'Vacancy board', value: 'Live UI' },
      { label: 'WhatsApp-style alerts', value: 'Modeled' },
      { label: 'Stack', value: 'React + TS' },
    ],
    techStack: ['React + TypeScript', 'Vite', 'Tailwind CSS', 'Vitest + Playwright'],
  },
  {
    id: 'glucare',
    name: 'GluCare',
    tagline: 'AI-Powered Glucose Monitoring Companion',
    description:
      'A live health-tech product for meal logging, glucose trends, and vision-assisted capture. Access is invite-only for pilots and evaluation — not a public open demo. Not a medical device; not for clinical diagnosis.',
    icon: 'Activity',
    accentColor: '#2dd4bf',
    bgGradient: 'from-teal-950/40 to-slate-950/40',
    access: 'request-access',
    statusLabel: 'Live Product',
    features: [
      {
        title: 'AI Meal Recognition',
        desc: 'Point a camera at a meal to explore carb and glycemic-context estimates powered by a vision model API.',
      },
      {
        title: 'CGM-Style Data Views',
        desc: 'Dashboard patterns designed for continuous glucose style charts and traditional glucometer logs.',
      },
      {
        title: 'Trend Insights',
        desc: 'Exploratory prediction-style insights that show how an AI companion product can surface forward-looking cues.',
      },
      {
        title: 'Report Export',
        desc: 'Generate shareable PDF-style reports for conversations with clinicians (product scope).',
      },
    ],
    benefits: [
      'Secure access: Auth-backed accounts for pilot users and caregivers you invite.',
      'Vision + logging: Meal and meter capture workflows designed for daily use.',
      'Not medical advice: Insights support self-management conversations — not clinical diagnoses.',
    ],
    metrics: [
      { label: 'Access model', value: 'Invite-only' },
      { label: 'Internal sample accuracy*', value: '~94%' },
      { label: 'Meal logging UX', value: 'Fast' },
      { label: 'Clinical use', value: 'Not for diagnosis' },
    ],
    techStack: ['React + TypeScript', 'Express API', 'Vision Model', 'Auth-backed sync'],
  },
];
