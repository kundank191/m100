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
    description: 'A reliable SaaS platform for cab operators and logistics companies. Track vehicles in real time, manage rental ledgers, reduce fuel costs, and automate driver payouts — all on a fast, resilient architecture built to handle high-volume operations.',
    icon: 'Truck',
    accentColor: '#06b6d4',
    bgGradient: 'from-cyan-950/40 to-blue-950/40',
    features: [
      {
        title: 'Real-Time GPS Tracking',
        desc: 'Live vehicle tracking with sub-second location updates, route history, and fleet-wide visibility from a single dashboard.'
      },
      {
        title: 'Automated Rental Ledgers',
        desc: 'Automatically calculate driver rents, daily balances, fuel allocations, and toll reimbursements — no manual registers.'
      },
      {
        title: 'Instant Driver Payouts',
        desc: 'Automated UPI split payments with itemized SMS and WhatsApp receipts sent to drivers after every shift.'
      },
      {
        title: 'AI Route Optimization',
        desc: 'Machine learning models suggest efficient multi-stop routes and flag idle-time anomalies to cut fuel waste.'
      }
    ],
    benefits: [
      'Fast Sync: Fleet logs, route histories, and financial reports load in milliseconds.',
      'Offline-First: Drivers can log mileage in dead zones — data syncs automatically when connectivity returns.',
      'WhatsApp Alerts: Automated notifications in regional languages and English, delivered reliably.'
    ],
    metrics: [
      { label: 'GPS Location Accuracy', value: '99.8%' },
      { label: 'Fuel Cost Reduction', value: '32%' },
      { label: 'Driver Payout Speed', value: 'Instant' },
      { label: 'Yearly Savings per Vehicle', value: '₹48,000+' }
    ],
    techStack: ['React Native Mobile App', 'Rust Telematics Core', 'SQLite Sync Engine', 'D3 Analytics Dashboard']
  },
  {
    id: 'pgpulse',
    name: 'PGPulse',
    tagline: 'PG & Co-living Property Management',
    description: 'A fast, reliable platform for PG and hostel operators. Automate rent collection, track vacancies, onboard tenants digitally, and communicate via WhatsApp — eliminating the manual work that slows property businesses down.',
    icon: 'Home',
    accentColor: '#3b82f6',
    bgGradient: 'from-blue-950/40 to-indigo-950/40',
    features: [
      {
        title: 'Automated Rent Collection',
        desc: 'Auto-generated rent invoices with UPI payment links. Track partial and full payments with full transparency.'
      },
      {
        title: 'Vacancy Management',
        desc: 'Real-time room allocation showing filled, vacant, and notice-period spaces for faster bookings.'
      },
      {
        title: 'WhatsApp Automation',
        desc: 'Automated rent reminders, payment receipts, and check-in notifications sent directly to tenants.'
      },
      {
        title: 'Digital Tenant Onboarding',
        desc: 'e-KYC verification and digital agreement templates that cut onboarding time from days to minutes.'
      }
    ],
    benefits: [
      'Direct UPI Settlements: Payments go straight to the owner\'s account with no holding periods.',
      'Auto Ledger Reconciliation: Deposits, utilities, maintenance, and advance returns categorized instantly.',
      'Fast Booking: Confirm tenant stays and complete onboarding in under 5 minutes.'
    ],
    metrics: [
      { label: 'Average Payment Collection', value: '<2.4 Hours' },
      { label: 'WhatsApp Delivery Rate', value: '100%' },
      { label: 'Overdue Disputes Reduced', value: '85%' },
      { label: 'Tenant Retention Rate', value: '94%' }
    ],
    techStack: ['Next.js Web App', 'UPI Payment Webhooks', 'Cloud Database', 'WhatsApp Business API']
  },
  {
    id: 'glucare',
    name: 'GluCare',
    tagline: 'AI-Powered Glucose Monitoring Companion',
    description: 'An intelligent health app for continuous glucose monitoring and meal logging. Uses on-device computer vision to estimate meal impact, syncs with CGM sensors, and predicts glucose trends — helping users manage diabetes with reliable, real-time insights.',
    icon: 'Activity',
    accentColor: '#06b6d4',
    bgGradient: 'from-cyan-950/40 to-indigo-950/40',
    features: [
      {
        title: 'AI Meal Recognition',
        desc: 'Point your camera at a meal to estimate carbs, glycemic index, and projected blood sugar impact instantly.'
      },
      {
        title: 'CGM Sensor Integration',
        desc: 'Bluetooth sync with popular Continuous Glucose Monitors and traditional glucometers for seamless data flow.'
      },
      {
        title: 'Glucose Predictions',
        desc: 'On-device neural networks predict glycemic spikes up to 2 hours ahead, giving users time to act.'
      },
      {
        title: 'Clinical Report Export',
        desc: 'Generate medical-grade PDF reports to share with doctors during clinical visits.'
      }
    ],
    benefits: [
      'On-Device AI: Meal identification and predictions run locally in under 100 milliseconds.',
      'Battery Efficient: High-accuracy models optimized to run without draining device resources.',
      'Works Offline: Core tracking, logging, and visual estimation available anytime, anywhere.'
    ],
    metrics: [
      { label: 'AI Prediction Accuracy', value: '94.2%' },
      { label: 'Avg HbA1c Reduction', value: '1.4%' },
      { label: 'Meal Logging Speed', value: '1.2s' },
      { label: 'AI Response Time', value: '<100ms' }
    ],
    techStack: ['React Native App', 'TensorFlow Lite Models', 'WebBluetooth API', 'SQLite Database']
  }
];