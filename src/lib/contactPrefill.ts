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
  'Growth (ads & conversion)',
  'Operations (AI agents)',
  'Both',
] as const;

export const DEFAULT_CONTACT_SUBJECT = CONTACT_TOPICS[0];

export const PRODUCT_CONTACT_SUBJECT: Record<string, string> = {
  growth: CONTACT_TOPICS[0],
  'growth-agent': CONTACT_TOPICS[1],
  custom: CONTACT_TOPICS[1],
  pgpulse: CONTACT_TOPICS[1],
  mfleet: CONTACT_TOPICS[1],
  internal: CONTACT_TOPICS[1],
  glucare: CONTACT_TOPICS[2],
  other: CONTACT_TOPICS[2],
};

export function prefillForProduct(productId: string): ContactPrefill {
  const subject = PRODUCT_CONTACT_SUBJECT[productId] ?? CONTACT_TOPICS[2];
  if (productId === 'growth' || productId === 'growth-agent') {
    return {
      subject,
      message:
        'Hi, I would like to book an audit.\n\nWebsite:\nWhat you want to grow or automate:\nRough timeline:\n',
    };
  }
  if (productId === 'custom' || productId === 'internal') {
    return {
      subject,
      message:
        'Hi, I would like to book an audit.\n\nWorkflow that takes the most time:\nRough timeline:\n',
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
    message: `Hi, I would like access to ${name}.\n\nWebsite or company:\nRough timeline:\n`,
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
