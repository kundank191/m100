/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewState } from '../types';

export type RouteState = {
  view: ViewState;
  blogSlug?: string;
};

export function pathForRoute(route: RouteState): string {
  switch (route.view) {
    case 'blog':
      return route.blogSlug ? `/blog/${route.blogSlug}` : '/blog';
    case 'faq':
      return '/faq';
    case 'keywords':
      return '/keywords';
    case 'mfleet':
      return '/products/mfleet';
    case 'pgpulse':
      return '/products/pgpulse';
    case 'glucare':
      return '/products/glucare';
    case 'home':
    default:
      return '/';
  }
}

export function parsePath(pathname: string): RouteState {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/blog') return { view: 'blog' };
  if (path.startsWith('/blog/')) {
    const slug = path.slice('/blog/'.length).split('/')[0];
    return { view: 'blog', blogSlug: slug || undefined };
  }
  if (path === '/faq') return { view: 'faq' };
  if (path === '/keywords') return { view: 'keywords' };
  if (path === '/products/mfleet') return { view: 'mfleet' };
  if (path === '/products/pgpulse') return { view: 'pgpulse' };
  if (path === '/products/glucare') return { view: 'glucare' };

  return { view: 'home' };
}

export function navigatePath(path: string, replace = false) {
  if (replace) {
    window.history.replaceState({}, '', path);
  } else {
    window.history.pushState({}, '', path);
  }
}
