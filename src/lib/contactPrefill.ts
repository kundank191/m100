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

export const PRODUCT_CONTACT_SUBJECT: Record<string, string> = {
  mfleet: 'MFleet Demo / Access',
  pgpulse: 'PGPulse Demo / Access',
  glucare: 'GluCare Demo / Access',
  custom: 'Custom Tool',
};

export function prefillForProduct(productId: string): ContactPrefill {
  const subject = PRODUCT_CONTACT_SUBJECT[productId] ?? 'Other';
  if (productId === 'custom') {
    return {
      subject,
      message:
        'Hi, I would like to discuss a custom web tool or internal application.\n\nWhat we need:\nWho will use it:\n',
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
