// Helpers
import type { SvelteComponent } from 'svelte';
// Routes
import * as Index from './index.svelte';
import * as About from './about.svelte';
import * as Button from '../components/button/button.svx';

interface Route {
  path: string;
  metadata: Record<string, string>;
  component: typeof SvelteComponent;
  match?: string;
  content?: string;
}

export const routes: Route[] = [
  { path: '/', metadata: Index.metadata, component: Index.default },
  { path: '/about', metadata: About.metadata, component: About.default },
  { path: '/components/button', metadata: Button.metadata, component: Button.default }
];

export async function fullTextSearch (_query: string) {
  const query = _query.trim().toLowerCase();
  const target = document.createElement('div');
  for (const route of routes) {
    if (!route.content) {
      target.innerHTML = '';
      new route.component({ target });
      route.content = target.innerText.toLowerCase();
    }
  }
  if (!query) {
    return [];
  } else {
    const splits = query.split(' ');
    const results = routes.filter((route) => {
      route.match = '';
      return splits.every((split) => {
        const matches = route.content.includes(split);
        if (matches) {
          const index = route.content.indexOf(split);
          route.match += '...' + route.content.substring(index - 20, index + 20);
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
