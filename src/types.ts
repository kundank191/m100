/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductMetric {
  label: string;
  value: string;
}

/** public-demo = open try-it URL; request-access = live product, contact for access */
export type ProductAccess = 'public-demo' | 'request-access';

export interface ProductDetail {
  id: 'mfleet' | 'pgpulse' | 'glucare';
  name: string;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  bgGradient: string;
  access: ProductAccess;
  /** Public demo URL when access === 'public-demo' */
  demoUrl?: string;
  statusLabel: string;
  features: { title: string; desc: string }[];
  benefits: string[];
  metrics: ProductMetric[];
  techStack: string[];
}

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  product: string;
  notes: string;
  timestamp: string;
  status: 'Pending' | 'Approved' | 'Contacted';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export type ViewState = 'home' | 'mfleet' | 'pgpulse' | 'glucare' | 'dashboard';
