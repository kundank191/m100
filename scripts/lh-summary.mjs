import { readFileSync } from 'fs';

const r = JSON.parse(readFileSync('./lighthouse-report.json', 'utf8'));
const scores = Object.fromEntries(
  Object.entries(r.categories).map(([k, v]) => [k, Math.round(v.score * 100)]),
);
console.log('SCORES', scores);

const ids = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'total-blocking-time',
  'cumulative-layout-shift',
  'speed-index',
  'interactive',
  'unused-javascript',
  'unused-css-rules',
  'render-blocking-resources',
  'bootup-time',
  'color-contrast',
  'tap-targets',
  'button-name',
  'label',
  'link-name',
  'font-display',
  'third-party-summary',
  'legacy-javascript',
  'dom-size',
  'total-byte-weight',
];

for (const id of ids) {
  const a = r.audits[id];
  if (!a) continue;
  console.log(`${id}: score=${a.score} ${a.displayValue || ''} | ${a.title}`);
}
