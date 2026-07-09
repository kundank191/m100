/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function scrollToSection(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top, behavior: 'smooth' });
}
