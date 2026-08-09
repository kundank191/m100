import fs from 'fs';
import path from 'path';

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(tsx?|jsx?|mjs|css|md|json|txt|xml|html)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

const roots = ['src', 'public', 'scripts', 'README.md', 'task.md', 'blog.md', 'metadata.json'].filter(
  (p) => fs.existsSync(p),
);
const files = [];
for (const r of roots) {
  if (fs.statSync(r).isDirectory()) walk(r, files);
  else files.push(r);
}

const replacements = [
  [/\u2014/g, '-'], // em dash
  [/\u2013/g, '-'], // en dash
  [/\u2018/g, "'"],
  [/\u2019/g, "'"],
  [/\u201C/g, '"'],
  [/\u201D/g, '"'],
  [/\u2026/g, '...'],
  [/\u00B7/g, '|'], // middle dot
  [/\u2192/g, '->'],
  [/\u00A9/g, '(c)'],
  [/\u00A0/g, ' '], // nbsp
  [/\u2022/g, '*'],
  [/\u2010/g, '-'],
  [/\u2011/g, '-'],
  [/\u2012/g, '-'],
  [/\u2212/g, '-'],
];

let totalFiles = 0;
let totalRepl = 0;

for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  const orig = s;
  let count = 0;
  for (const [re, to] of replacements) {
    const matches = s.match(re);
    if (matches) {
      count += matches.length;
      s = s.replace(re, to);
    }
  }
  const remaining = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c > 127) remaining.push(`U+${c.toString(16).toUpperCase()} ${JSON.stringify(s[i])}`);
  }
  if (s !== orig) {
    fs.writeFileSync(f, s, 'utf8');
    totalFiles++;
    totalRepl += count;
    console.log(
      'fixed',
      f,
      'replacements',
      count,
      remaining.length ? `remaining: ${[...new Set(remaining)].slice(0, 8).join(', ')}` : 'ok',
    );
  } else if (remaining.length) {
    console.log('still non-ascii', f, [...new Set(remaining)].slice(0, 8).join(', '));
  }
}

console.log('DONE files', totalFiles, 'replacements', totalRepl);
