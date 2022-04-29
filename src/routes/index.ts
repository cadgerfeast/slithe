// Helpers
import type { SvelteComponent } from 'svelte';
import { recentSearches } from '../store';
// pages
import * as Index from './index.svelte';
import * as About from './about.svelte';
import * as Button from '../components/button/button.svx';

export interface Page {
  path: string;
  metadata: Record<string, string>;
  component: typeof SvelteComponent;
  match?: string;
  content?: string;
}

export const pages: Page[] = [
  { path: '/', metadata: Index.metadata, component: Index.default },
  { path: '/about', metadata: About.metadata, component: About.default },
  { path: '/components/button', metadata: Button.metadata, component: Button.default }
];

export async function fullTextSearch (_query: string) {
  const query = _query.trim().toLowerCase();
  const target = document.createElement('div');
  for (const page of pages) {
    if (!page.content) {
      target.innerHTML = '';
      new page.component({ target });
      page.content = target.innerText.toLowerCase();
    }
  }
  if (!query) {
    return pages.filter((page) => {
      delete page.match;
      return recentSearches.value.includes(page.path);
    });
  } else {
    const splits = query.split(' ');
    const results = pages.filter((page) => {
      page.match = '';
      return splits.every((split) => {
        const matches = page.content.includes(split);
        if (matches) {
          const index = page.content.indexOf(split);
          page.match += '...' + page.content.substring(index - 20, index + 20);
          return matches;
        }
      });
    });
    for (const result of results) {
      for (const split of splits) {
        result.match = result.match.replace(split, `<mark>${split}</mark>`);
      }
    }
    return results;
  }
};
