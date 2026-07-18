/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Static backdrop only — no canvas / rAF (saves TBT on mid-range phones).
 * Visual interest comes from CSS grid + one soft glow.
 */
export default function HeroDecor() {
  return (
    <>
      <div className="absolute inset-0 cyber-grid opacity-20 -z-10 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/4 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] ambient-glow-cyan opacity-45 -z-10 pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
