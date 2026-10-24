/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Homepage proof figures. Rounded for display. Sources are the exported
 * ad-account reports in support_data/ plus the existing Mylo production record.
 *
 * AstroCoach (Key-Spend-Report, Meta leads):
 *   Spend starts 6 Jun 2026 (April and May rows are zero) and runs through 23 Oct 2026.
 *   June leads 385. August leads 7,596. 7,596 / 385 = 19.7, shown as 20x.
 *   The chart is weekly lead volume through the August peak. Later weeks are omitted.
 *
 * Valkyre (Final report, Meta purchase ROAS), 22 Sep 2023 through 22 Oct 2026:
 *   A blank daily ROAS is treated as zero return.
 *   March 2025 = 1,293,790 / 207,182 = 6.24, shown as 6.2x, on Rs 2.1 lakh spend.
 *   First 30 days (22 Sep-21 Oct 2023) returned 0.83x on the same rule.
 *   The account did not stay at 6.2x. The chart stops at August 2026 (5.4x).
 *   September 2026 was 1.9x and October 2026 was 2.3x, left off the line.
 *
 * Arnav and Hetu Clinic (Untitled Google Ads export), 10 Apr-23 Oct 2026:
 *   April CPC Rs 103.61 with 0 tracked conversions.
 *   August CPC Rs 19.05 with 31 tracked conversions.
 *   103.61 / 19.05 = 5.44, shown as 5.4x.
 *   October CPC rose again to about Rs 63. That partial month is left off the line.
 *   "All conv." is not used. It mixes in secondary actions.
 *
 * Mylo has no daily series in these files. The line starts at 20 and ends above 1,000.
 * It is an illustration of that ramp, with the pullbacks of a live scale-up, not an export.
 */

export interface ProofItem {
  id: string;
  kicker: string;
  stat: string;
  unit: string;
  detail: string;
  /** Chart values. Higher means the series improved, except where the label says otherwise. */
  series: number[];
  seriesLabel: string;
}

export const PROOF_ITEMS: ProofItem[] = [
  {
    id: 'mylo',
    kicker: 'In production',
    stat: '50x',
    unit: 'daily orders',
    detail: 'Mylo went from 20 to 1,000+ orders a day. Daily active users rose from 100K to 250K.',
    series: [
      20, 26, 23, 34, 30, 48, 42, 67, 58, 92, 78, 120, 104, 165, 142, 220, 186, 280, 245, 360, 310, 450, 390, 560,
      470, 680, 590, 810, 700, 920, 800, 1000, 890, 1060,
    ],
    seriesLabel:
      'Illustrated daily-order ramp for Mylo, from 20 to more than 1,000, with pullbacks along the way. The published figures are the endpoints, not a daily export.',
  },
  {
    id: 'astrocoach',
    kicker: 'Client engagement',
    stat: '20x',
    unit: 'more leads',
    detail: 'AstroCoach: 385 leads in June -> 7,596 in August.',
    series: [9, 18, 16, 79, 859, 503, 898, 1025, 1318, 1315, 1203, 2738],
    seriesLabel:
      'Weekly lead count for AstroCoach from June through the August 2026 peak. Later weeks are not on this line.',
  },
  {
    id: 'valkyre',
    kicker: 'Client engagement',
    stat: '6.2x',
    unit: 'purchase ROAS',
    detail: 'Valkyre (D2C clothing). Started at 0.83x, hit 6.2x.',
    series: [
      0.64, 0.99, 2.08, 2.69, 1.56, 2.06, 1.67, 1.19, 1.02, 1.71, 1.45, 1.79, 2.32, 3.51, 5.17, 4.43, 4.95, 2.68,
      6.24, 3.56, 5.13, 5.06, 2.71, 3.02, 1.81, 3.86, 3.96, 4.33, 3.29, 3.74, 3.83, 2.49, 2.22, 5.1, 3.32, 5.4,
    ],
    seriesLabel:
      'Monthly purchase ROAS for Valkyre from September 2023 through August 2026. The latest two months are not on this line.',
  },
  {
    id: 'clinic',
    kicker: 'Client engagement',
    stat: '5.4x',
    unit: 'lower cost per click',
    detail: 'Hetu Clinic: zero tracked conversions in April -> 31 in August.',
    series: [0.97, 1.28, 1.87, 5.25, 5.16],
    seriesLabel:
      'Click efficiency by month for Hetu Clinic, April through September 2026. October is not on this line. June had no spend in the export.',
  },
];
