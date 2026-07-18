/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  id?: string;
}

export default function ThemeToggle({ className = '', id = 'theme-toggle' }: ThemeToggleProps) {
  const { isDark, toggleTheme, mounted } = useTheme();

  // Until mounted, render a stable placeholder that matches SSR (light → Moon).
  // After mount, show the real icon for the stored preference.
  const showDark = mounted ? isDark : false;

  return (
    <button
      id={id}
      type="button"
      onClick={toggleTheme}
      aria-label={showDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={showDark ? 'Light mode' : 'Dark mode'}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors cursor-pointer ${className}`}
      suppressHydrationWarning
    >
      {showDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
