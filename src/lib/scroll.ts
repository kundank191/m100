/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function scrollToSection(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
