/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import Script from 'next/script';

/** Clarity project ID (public in page source). */
const CLARITY_ID = (
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_VITE_CLARITY_PROJECT_ID ||
  'xjvfg8abh3'
).trim();

/**
 * Official Microsoft Clarity snippet via next/script.
 * Uses afterInteractive so the tag installs on real visits (setup can verify).
 */
export default function MicrosoftClarity() {
  if (!CLARITY_ID) return null;

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", ${JSON.stringify(CLARITY_ID)});
        `.trim(),
      }}
    />
  );
}
