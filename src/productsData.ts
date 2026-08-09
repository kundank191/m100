/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductDetail } from './types';

export const PRODUCTS: ProductDetail[] = [
  {
    id: 'mfleet',
    name: 'MFleet',
    tagline: 'Agentic Fleet & Logistics',
    description:
      'AI-powered system for cab operators and logistics teams. Intelligent route optimization, automated rental ledgers, instant UPI payouts, fuel & trip intelligence, idle-time detection, and role-based control. Agents surface anomalies and handle routine decisions so your team focuses on growth.',
    icon: 'Truck',
    accentColor: '#818cf8',
    bgGradient: 'from-indigo-950/40 to-slate-950/40',
    access: 'request-access',
    statusLabel: 'Live Product',
    features: [
      {
        title: 'Automated Rental Ledgers',
        desc: 'Agents calculate driver rents, daily balances, fuel allocations, and toll reimbursements without manual registers.',
      },
      {
        title: 'Instant Driver Payouts',
        desc: 'UPI-ready payout flows with itemized SMS and WhatsApp-style receipt patterns after every shift.',
      },
      {
        title: 'Intelligent Route Optimization',
        desc: 'Route suggestions and idle-time flags designed to cut fuel waste on multi-stop schedules.',
      },
      {
        title: 'Anomaly Detection',
        desc: 'Agents surface unusual trips, fuel patterns, and ledger issues so managers intervene only when needed.',
      },
    ],
    benefits: [
      'Agentic ops: Routine fleet decisions handled with less manual coordination.',
      'Multi-user access: Owner, manager, and employee roles for real team workflows.',
      'Pilot-ready: We onboard your org with secure access, no public open signup.',
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
    tagline: 'Agentic AI for PG & Co-living',
    description:
      'Intelligent operational system for PG owners and hostel operators. AI agents handle rent invoices, payment tracking, vacancy optimization, tenant onboarding, and WhatsApp communication. Digital ledgers, automated reminders, and smart decision support so operations run with far less manual effort.',
    icon: 'Home',
    accentColor: '#60a5fa',
    bgGradient: 'from-blue-950/40 to-slate-950/40',
    access: 'public-demo',
    demoUrl: 'https://pg.mach100.in/',
    statusLabel: 'Interactive Demo',
    features: [
      {
        title: 'Autonomous Rent Collection',
        desc: 'Agents generate rent invoices with UPI payment link patterns and track partial and full payments.',
      },
      {
        title: 'Vacancy Optimization',
        desc: 'Room allocation board showing filled, vacant, and notice-period spaces - with decision support for faster bookings.',
      },
      {
        title: 'WhatsApp Communication Agents',
        desc: 'Rent reminders, payment receipts, and check-in notification flows modeled for tenant messaging.',
      },
      {
        title: 'Digital Tenant Onboarding',
        desc: 'e-KYC-style verification and digital agreement templates that shrink onboarding from days to minutes.',
      },
    ],
    benefits: [
      'Operations that act: Reminders, tracking, and ledgers with far less manual effort.',
      'Direct settlement patterns: Payment flows designed for owner accounts with clear ledger lines.',
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
      'A live health-tech product for meal logging, glucose trends, and vision-assisted capture. Access is invite-only for pilots and evaluation, not a public open demo. Not a medical device; not for clinical diagnosis.',
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
      'Not medical advice: Insights support self-management conversations, not clinical diagnoses.',
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
