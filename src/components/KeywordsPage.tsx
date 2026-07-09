/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { FREE_SEO_TOOLS, KEYWORD_MAP } from '../data/keywordData';

interface KeywordsPageProps {
  onOpenBlog: () => void;
  onContact: () => void;
}

export default function KeywordsPage({ onOpenBlog, onContact }: KeywordsPageProps) {
  const [query, setQuery] = useState('');
  const [checkText, setCheckText] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('custom software development India');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return KEYWORD_MAP;
    return KEYWORD_MAP.filter(
      (row) =>
        row.keyword.toLowerCase().includes(q) ||
        row.intent.toLowerCase().includes(q) ||
        row.target.toLowerCase().includes(q),
    );
  }, [query]);

  const density = useMemo(() => {
    const text = checkText.trim();
    const kw = focusKeyword.trim().toLowerCase();
    if (!text || !kw) return null;
    const words = text.toLowerCase().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const phrase = kw;
    const hay = text.toLowerCase();
    let occurrences = 0;
    let idx = 0;
    while (idx < hay.length) {
      const found = hay.indexOf(phrase, idx);
      if (found === -1) break;
      occurrences += 1;
      idx = found + phrase.length;
    }
    const phraseWords = phrase.split(/\s+/).filter(Boolean).length;
    const densityPct = wordCount > 0 ? ((occurrences * phraseWords) / wordCount) * 100 : 0;
    return { wordCount, occurrences, densityPct };
  }, [checkText, focusKeyword]);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="section-chip mb-4">
        <span>SEO</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-3">
        Keyword map &amp; tools
      </h1>
      <p className="text-slate-400 text-base max-w-2xl mb-10 leading-relaxed">
        Target keywords for Mach100.in mapped to pages, plus free research tools and a simple on-page density checker for drafts.
      </p>

      {/* Search map */}
      <div className="mb-6 relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter keywords…"
          className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="rounded-2xl glass-panel overflow-hidden mb-14">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-white/5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3 font-semibold">Keyword</th>
                <th className="px-4 py-3 font-semibold">Intent</th>
                <th className="px-4 py-3 font-semibold">Target</th>
                <th className="px-4 py-3 font-semibold">Priority</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr key={row.keyword} className="border-b border-white/5 last:border-0">
                  <td className="px-4 py-3 text-white font-medium">{row.keyword}</td>
                  <td className="px-4 py-3 text-slate-400">{row.intent}</td>
                  <td className="px-4 py-3 text-slate-400">{row.target}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                        row.priority === 'P0'
                          ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10'
                          : row.priority === 'P1'
                            ? 'text-amber-300 border-amber-500/30 bg-amber-500/10'
                            : 'text-slate-400 border-white/10 bg-white/5'
                      }`}
                    >
                      {row.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Free tools */}
      <h2 className="text-xl font-bold font-display text-white mb-4">Free SEO &amp; keyword tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {FREE_SEO_TOOLS.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl glass-panel glass-panel-hover p-5 block group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                {tool.name}
              </h3>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{tool.useFor}</p>
          </a>
        ))}
      </div>

      {/* Density checker */}
      <h2 className="text-xl font-bold font-display text-white mb-2">Draft density checker</h2>
      <p className="text-xs text-slate-500 mb-4">
        Client-side only — paste a draft and a focus phrase. Aim roughly 0.5–2% for natural language (not a hard rule).
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-1">
          <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5 font-bold">
            Focus keyword
          </label>
          <input
            type="text"
            value={focusKeyword}
            onChange={(e) => setFocusKeyword(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="lg:col-span-2">
          <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5 font-bold">
            Draft text
          </label>
          <textarea
            rows={5}
            value={checkText}
            onChange={(e) => setCheckText(e.target.value)}
            placeholder="Paste blog intro or service copy…"
            className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>
      {density && (
        <div className="rounded-xl glass-panel p-4 flex flex-wrap gap-6 text-sm mb-10">
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Words</span>
            <span className="text-white font-bold text-lg">{density.wordCount}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Occurrences</span>
            <span className="text-white font-bold text-lg">{density.occurrences}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Approx. density</span>
            <span className="text-teal-400 font-bold text-lg">{density.densityPct.toFixed(2)}%</span>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onOpenBlog}
          className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-semibold text-slate-300 hover:text-teal-400 hover:border-teal-500/30 cursor-pointer"
        >
          Write from blog topics
        </button>
        <button
          type="button"
          onClick={onContact}
          className="px-5 py-2.5 rounded-full bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 cursor-pointer"
        >
          Need SEO-ready content shipped?
        </button>
      </div>
    </section>
  );
}
