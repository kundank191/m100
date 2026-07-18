/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'mach100-theme';
/** Must match SSR default on <html data-theme="..."> */
const DEFAULT_THEME: Theme = 'light';

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  /** False until after mount — avoid theme-dependent UI during hydration */
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
}

function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always the same on server + first client render. Reading localStorage/document
  // here causes hydration mismatches when the FOUC script already set data-theme.
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = readStoredTheme();
    setThemeState(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      mounted,
      setTheme,
      toggleTheme,
    }),
    [theme, mounted, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
