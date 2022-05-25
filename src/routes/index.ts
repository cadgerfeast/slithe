// Helpers
import type { SvelteComponent } from 'svelte';
import { readable } from 'svelte/store';
import { recentSearches } from '../store';
// Pages
import * as Index from './index.svx';
import * as Accessibility from './accessibility.svx';
import * as Button from '../components/button/button.svx';
import * as Keyboard from '../components/kbd/kbd.svx';
// Constants
const _pushState = history.pushState;

type Headings6 = string[];
type Headings5 = Record<string, Headings6>;
type Headings4 = Record<string, Headings5>;
type Headings3 = Record<string, Headings4>;
type Headings2 = Record<string, Headings3>;
export type TocModel = Record<string, Headings2>;
export interface Page {
  path: string;
  metadata: Record<string, string>;
  component: typeof SvelteComponent;
  match?: string;
  content?: string;
  toc?: TocModel;
}

export const pages: Page[] = [
  { path: '/', metadata: Index.metadata, component: Index.default },
  { path: '/accessibility', metadata: Accessibility.metadata, component: Accessibility.default },
  { path: '/components/button', metadata: Button.metadata, component: Button.default },
  { path: '/components/keyboard', metadata: Keyboard.metadata, component: Keyboard.default }
];

const computePageContent = (page: Page) => {
  const target = document.createElement('div');
  target.innerHTML = '';
  const instance = new page.component({ target });
  page.content = target.innerText.toLowerCase();
  page.toc = {};
  const headings = target.querySelectorAll('h1,h2,h3,h4,h5,h6');
  const memory = [];
  for (let i = 0; i < headings.length; i++) {
    switch (headings[i].tagName) {
      case 'H1': {
        const content = {};
        memory[0] = content;
        page.toc[headings[i].textContent] = content;
        break;
      }
      case 'H2': {
        if (memory[0]) {
          const content = {};
          memory[1] = content;
          memory[0][headings[i].textContent] = content;
        } else {
          memory.splice(0, memory.length);
        }
        break;
      }
      case 'H3': {
        if (memory[1]) {
          const content = {};
          memory[2] = content;
          memory[1][headings[i].textContent] = content;
        } else {
          memory.splice(0, memory.length);
        }
        break;
      }
      case 'H4': {
        if (memory[2]) {
          const content = {};
          memory[3] = content;
          memory[2][headings[i].textContent] = content;
        } else {
          memory.splice(0, memory.length);
        }
        break;
      }
      case 'H5': {
        if (memory[3]) {
          const content = {};
          memory[4] = content;
          memory[3][headings[i].textContent] = content;
        } else {
          memory.splice(0, memory.length);
        }
        break;
      }
      case 'H6': {
        if (memory[4]) {
          const content = {};
          memory[5] = content;
          memory[4][headings[i].textContent] = content;
        } else {
          memory.splice(0, memory.length);
        }
        break;
      }
    }
  }
  instance.$destroy();
};
const getPage = (path = location.href.replace(location.origin, '')) => {
  const page = [...pages].reverse().find((p) => path.startsWith(p.path));
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
    if (recentSearches.value.length) {
      return pages.filter((page) => {
        delete page.match;
        return recentSearches.value.includes(page.path);
      });
    } else {
      return pages.slice(0, 5);
    }
  } else {
    const splits = query.split(' ');
    const results = pages.filter((page) => {
      page.match = '';
      return splits.every((split) => {
        const matches = page.content.includes(split);
        if (matches) {
          const index = page.content.indexOf(split);
          page.match += '...' + page.content.substring(index - 10, index + 50);
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
