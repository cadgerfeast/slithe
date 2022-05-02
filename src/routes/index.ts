// Helpers
import type { SvelteComponent } from 'svelte';
import { readable } from 'svelte/store';
import { recentSearches } from '../store';
import { deepFind } from '../utils/object';
// Pages
import * as Index from './index.svelte';
import * as Accessibility from './accessibility.svelte';
import * as Button from '../components/button/button.svx';
// Constants
const _pushState = history.pushState;

type Headings6 = string[];
type Headings5 = Record<string, Headings6>;
type Headings4 = Record<string, Headings5>;
type Headings3 = Record<string, Headings4>;
type Headings2 = Record<string, Headings3>;
type Headings1 = Record<string, Headings2>;
export interface Page {
  path: string;
  metadata: Record<string, string>;
  component: typeof SvelteComponent;
  match?: string;
  content?: string;
  toc?: Headings1;
}

export const pages: Page[] = [
  { path: '/', metadata: Index.metadata, component: Index.default },
  { path: '/accessibility', metadata: Accessibility.metadata, component: Accessibility.default },
  { path: '/components/button', metadata: Button.metadata, component: Button.default }
];

const computePageContent = (page: Page) => {
  const target = document.createElement('div');
  target.innerHTML = '';
  new page.component({ target });
  page.content = target.innerText.toLowerCase();
  page.toc = {};
  const headings = [...target.querySelectorAll('h1, h2, h3, h4, h5, h6')];
  for (const heading of headings) {
    switch (heading.tagName) {
      case 'H1': {
        page.toc[heading.textContent] = {};
        break;
      }
    }
  }
};
const getPage = (path = `/${location.href.split('/')[3]}`) => {
  const page = pages.reverse().find((p) => path.startsWith(p.path));
  if (page) {
    if (!page.content) {
      computePageContent(page);
    }
  }
  return {
    path,
    page
  };
};
export const page = readable(getPage(), (set) => {
  // Route Change
  history.pushState = function () {
    _pushState.apply(history, arguments);
    set(getPage());
  };
  // Hash Change
  const handler = () => {
    set(getPage());
  };
  window.addEventListener('hashchange', handler);
	return () => {
		window.removeEventListener('hashchange', handler);
	};
});

export async function fullTextSearch (_query: string) {
  const query = _query.trim().toLowerCase();
  for (const page of pages) {
    if (!page.content) {
      computePageContent(page);
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
