/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from 'react';
import Image from 'next/image';

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // **bold** or [label](https://url)
  const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[1];
    if (token.startsWith('**') && token.endsWith('**')) {
      nodes.push(
        <strong key={`b-${key++}`} className="font-semibold text-slate-100">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        const safe =
          href.startsWith('https://') || href.startsWith('http://') ? href : undefined;
        if (safe) {
          nodes.push(
            <a
              key={`a-${key++}`}
              href={safe}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 underline underline-offset-2 hover:text-teal-300 break-words"
            >
              {label}
            </a>,
          );
        } else {
          nodes.push(label);
        }
      }
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

const MD_IMAGE = /^!\[([^\]]*)\]\(([^)]+)\)$/;
const ITALIC_CAPTION = /^\*(.+)\*$/;

type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'image'; alt: string; src: string }
  | { type: 'caption'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

function parseBody(lines: string[]): Block[] {
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line === 'TABLE:') {
      i += 1;
      const tableLines: string[] = [];
      while (i < lines.length && lines[i] !== 'ENDTABLE') {
        tableLines.push(lines[i]);
        i += 1;
      }
      if (i < lines.length && lines[i] === 'ENDTABLE') i += 1;
      if (tableLines.length > 0) {
        const headers = tableLines[0].split('|').map((c) => c.trim());
        const rows = tableLines.slice(1).map((r) => r.split('|').map((c) => c.trim()));
        blocks.push({ type: 'table', headers, rows });
      }
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.slice(4) });
      i += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3) });
      i += 1;
      continue;
    }
    if (line.startsWith('> ')) {
      blocks.push({ type: 'quote', text: line.slice(2) });
      i += 1;
      continue;
    }

    const img = line.match(MD_IMAGE);
    if (img) {
      blocks.push({ type: 'image', alt: img[1], src: img[2].trim() });
      i += 1;
      continue;
    }

    if (ITALIC_CAPTION.test(line) && !line.startsWith('**')) {
      const cap = line.match(ITALIC_CAPTION);
      if (cap) {
        blocks.push({ type: 'caption', text: cap[1] });
        i += 1;
        continue;
      }
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i += 1;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i += 1;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    blocks.push({ type: 'p', text: line });
    i += 1;
  }

  return blocks;
}

export default function BlogBody({ body }: { body: string[] }) {
  const blocks = parseBody(body);

  return (
    <div className="space-y-5 text-slate-300 leading-relaxed text-base">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={idx}
                className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight pt-6 border-t border-white/5 !mt-8 first:border-0 first:pt-0 first:!mt-0"
              >
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3
                key={idx}
                className="text-lg font-bold font-display text-white tracking-tight pt-4 !mb-0"
              >
                {block.text}
              </h3>
            );
          case 'quote':
            return (
              <blockquote
                key={idx}
                className="border-l-4 border-teal-500/50 pl-4 py-1 text-slate-200 italic bg-teal-950/20 rounded-r-lg"
              >
                {renderInline(block.text)}
              </blockquote>
            );
          case 'image':
            return (
              <figure key={idx} className="my-6 overflow-hidden rounded-2xl border border-white/5">
                <div className="relative aspect-[16/9] w-full bg-slate-900/40">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 720px"
                  />
                </div>
                {block.alt ? (
                  <figcaption className="px-3 py-2 text-[11px] text-slate-500 font-mono">
                    {block.alt}
                  </figcaption>
                ) : null}
              </figure>
            );
          case 'caption':
            return (
              <p key={idx} className="text-sm text-slate-500 italic -mt-2">
                {block.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-300">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={idx} className="list-decimal pl-5 space-y-2 text-slate-300">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case 'table':
            return (
              <div key={idx} className="overflow-x-auto rounded-xl border border-white/5">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="bg-slate-950/50 border-b border-white/5">
                      {block.headers.map((h) => (
                        <th
                          key={h}
                          className="px-3 py-2.5 font-mono text-[11px] uppercase tracking-wider text-teal-400 font-bold"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-white/5 last:border-0">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-3 py-2.5 text-slate-300 align-top">
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'p':
          default:
            return (
              <p key={idx} className="text-slate-300">
                {renderInline(block.text)}
              </p>
            );
        }
      })}
    </div>
  );
}
