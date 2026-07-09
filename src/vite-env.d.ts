/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  /** Microsoft Clarity project ID from clarity.microsoft.com */
  readonly VITE_CLARITY_PROJECT_ID?: string;
  /** Google Analytics 4 Measurement ID, e.g. G-XXXXXXXXXX */
  readonly VITE_GA4_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
