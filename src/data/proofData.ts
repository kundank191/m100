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
 *   August CPL = 621,025 / 7,596 = Rs 81.8, shown as Rs 82.
 *   Blended CPL = 1,681,257 / 18,382 = Rs 91.5, shown as Rs 91.
 *   Later months were higher: September Rs 112, October Rs 100. Rs 82 is August, not the current week.
 *
 * Valkyre (Final report, Meta purchase ROAS), 22 Sep 2023 through 22 Oct 2026:
 *   A blank daily ROAS is treated as zero return.
 *   March 2025 = 1,293,790 / 207,182 = 6.24, shown as 6.2x, on Rs 2.1 lakh spend.
 *   First 30 days (22 Sep-21 Oct 2023) returned 0.83x on the same rule.
 *   The account did not stay at 6.2x. September 2026 was 1.9x and October 2026 was 2.3x.
 *
 * Arnav and Hetu Clinic (Untitled Google Ads export), 10 Apr-23 Oct 2026:
 *   April CPC Rs 103.61 with 0 tracked conversions.
 *   August CPC Rs 19.05 with 31 tracked conversions.
 *   103.61 / 19.05 = 5.44, shown as 5.4x.
 *   October CPC rose again to about Rs 63. Rs 19 is August, and October is a partial month.
 *   "All conv." is not used. It mixes in secondary actions.
 *
 * Mylo has no daily series in these files. The sparkline is the two published endpoints only.
 */

export interface ProofItem {
  id: string;
  kicker: string;
  stat: string;
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
    detail:
      'daily orders for Mylo, a consumer commerce product (20 to 1,000+ orders a day). Recommendation systems took daily active users from 100K to 250K.',
    series: [20, 1000],
    seriesLabel: 'Daily orders at the two reported endpoints, 20 and more than 1,000. This is not a daily time series.',
  },
  {
    id: 'astrocoach',
    kicker: 'Client engagement',
    stat: 'Rs 82',
    detail:
      'cost per lead in August 2026 for AstroCoach, an astrology brand, across 7,596 leads. From June to October the account booked 18,382 leads at a Rs 91 blended cost per lead.',
    series: [9, 18, 16, 79, 859, 503, 898, 1025, 1318, 1315, 1203, 2738, 1656, 1699, 659, 479, 535, 810, 906, 984, 673],
    seriesLabel:
      'Weekly lead count for AstroCoach from June to October 2026. The line is lead volume, not cost per lead.',
  },
  {
    id: 'valkyre',
    kicker: 'Client engagement',
    stat: '6.2x',
    detail:
      'purchase ROAS in March 2025 for Valkyre, a D2C clothing brand, on Rs 2.1 lakh of spend. The first 30 days of the account returned 0.83x.',
    series: [
      0.64, 0.99, 2.08, 2.69, 1.56, 2.06, 1.67, 1.19, 1.02, 1.71, 1.45, 1.79, 2.32, 3.51, 5.17, 4.43, 4.95, 2.68,
      6.24, 3.56, 5.13, 5.06, 2.71, 3.02, 1.81, 3.86, 3.96, 4.33, 3.29, 3.74, 3.83, 2.49, 2.22, 5.1, 3.32, 5.4,
      1.93, 2.3,
    ],
    seriesLabel:
      'Monthly purchase ROAS for Valkyre from September 2023 to October 2026. Days with no reported ROAS count as zero return.',
  },
  {
    id: 'clinic',
    kicker: 'Client engagement',
    stat: '5.4x',
    detail:
      'lower cost per click for Arnav and Hetu Clinic, an ultrasound clinic. April 2026 was Rs 104 a click with no tracked conversions. August 2026 was Rs 19 a click, with 31 tracked conversions.',
    series: [0.97, 1.28, 1.87, 5.25, 5.16, 1.59],
    seriesLabel:
      'Clicks bought per Rs 100 by month for the clinic: April, May, then July through October 2026. June had no spend in the export. The line is click efficiency.',
  },
];
