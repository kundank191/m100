/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Session key for contact form topic / message pre-fill from product CTAs. */
export const CONTACT_PREFILL_KEY = 'mach100-contact-prefill';
export const CONTACT_PREFILL_EVENT = 'mach100-contact-prefill';

export type ContactPrefill = {
  subject: string;
  message?: string;
};

export function setContactPrefill(prefill: ContactPrefill): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(CONTACT_PREFILL_KEY, JSON.stringify(prefill));
  } catch {
    /* ignore quota / private mode */
  }
  window.dispatchEvent(new CustomEvent(CONTACT_PREFILL_EVENT, { detail: prefill }));
}

export function readContactPrefill(): ContactPrefill | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CONTACT_PREFILL_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ContactPrefill;
    if (!parsed?.subject || typeof parsed.subject !== 'string') return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearContactPrefill(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(CONTACT_PREFILL_KEY);
  } catch {
    /* ignore */
  }
}

export const CONTACT_TOPICS = [
  'Growth Marketing, Ads, SEO & Conversion (Scale Leads/Orders)',
  'Growth + AI Lead Conversion Agent (Full Funnel Bundle)',
  'Custom Agentic AI System / Workflow Automation',
  'PGPulse: Property / HMO / Co-Living Automation Demo',
  'MFleet: Fleet & Logistics Operations Demo',
  'AI-Powered Internal Tool / Recommendation Engine',
  'Other',
] as const;

export const DEFAULT_CONTACT_SUBJECT = CONTACT_TOPICS[0];

export const PRODUCT_CONTACT_SUBJECT: Record<string, string> = {
  growth: CONTACT_TOPICS[0],
  'growth-agent': CONTACT_TOPICS[1],
  custom: CONTACT_TOPICS[2],
  pgpulse: CONTACT_TOPICS[3],
  mfleet: CONTACT_TOPICS[4],
  internal: CONTACT_TOPICS[5],
  glucare: CONTACT_TOPICS[6],
  other: CONTACT_TOPICS[6],
};

export function prefillForProduct(productId: string): ContactPrefill {
  const subject = PRODUCT_CONTACT_SUBJECT[productId] ?? CONTACT_TOPICS[6];
  if (productId === 'growth' || productId === 'growth-agent') {
    return {
      subject,
      message:
        'Hi, I would like a growth and AI audit.\n\nWebsite:\nCurrent monthly leads or orders:\nWhat you want to scale:\n',
    };
  }
  if (productId === 'custom' || productId === 'internal') {
    return {
      subject,
      message:
        'Hi, I would like to discuss a custom agentic system or growth engine.\n\nOperations or funnel to automate:\nWho will use it:\n',
    };
  }
  const names: Record<string, string> = {
    mfleet: 'MFleet',
    pgpulse: 'PGPulse',
    glucare: 'GluCare',
  };
  const name = names[productId] ?? productId;
  return {
    subject,
    message: `Hi, I would like a demo / access for ${name}.\n\nCompany / scale:\nUse case:\nPreferred timeline:\n`,
  };
}

/** Read ?topic= from the URL (used by server-rendered product CTAs). */
export function prefillFromUrlTopic(topic: string | null): ContactPrefill | null {
  if (!topic) return null;
  const key = topic.trim().toLowerCase();
  if (key in PRODUCT_CONTACT_SUBJECT || key === 'custom') {
    return prefillForProduct(key);
  }
  return null;
}
