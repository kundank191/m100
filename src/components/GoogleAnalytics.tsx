/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

/** GA4 Measurement ID, e.g. G-XXXXXXXXXX — set VITE_GA4_MEASUREMENT_ID */
const GA_ID = (import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined)?.trim() || '';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Loads Google Analytics 4 (gtag) when VITE_GA4_MEASUREMENT_ID is set.
 * Also sends a page_view on client-side route changes via trackPageView().
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined') return;
    if (document.getElementById('ga4-gtag')) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      send_page_view: true,
      anonymize_ip: true,
    });

    const script = document.createElement('script');
    script.async = true;
    script.id = 'ga4-gtag';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
}

/** Call on SPA navigations so GA4 records virtual page views. */
export function trackPageView(path: string, title?: string) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.origin + path,
  });
}

/** Optional conversion helpers */
export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

export function isGaConfigured(): boolean {
  return Boolean(GA_ID);
}
