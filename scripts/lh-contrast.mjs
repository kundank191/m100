import { readFileSync } from 'fs';
const r = JSON.parse(readFileSync('./lighthouse-report.json', 'utf8'));
const a = r.audits['color-contrast'];
console.log(JSON.stringify(a.details?.items?.slice(0, 20), null, 2));
for (const ref of r.categories['best-practices'].auditRefs) {
  const audit = r.audits[ref.id];
  if (audit && audit.score !== null && audit.score < 1) {
    console.log('BP', ref.id, audit.score, audit.title);
  }
}
