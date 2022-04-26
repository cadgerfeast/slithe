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
  content?: string;
}

export const routes: Route[] = [
  { path: '/', metadata: Index.metadata, component: Index.default },
  { path: '/about', metadata: About.metadata, component: About.default },
  { path: '/components/button', metadata: Button.metadata, component: Button.default }
];

export async function fullTextSearch (query: string) {
  const target = document.createElement('div');
  for (const route of routes) {
    if (!route.content) {
      target.innerHTML = '';
      new route.component({ target });
      route.content = target.innerText;
    }
  }
  const splits = query.split(' ');
  return routes.filter((route) => {
    return splits.every((split) => {
      return route.content.includes(split);
    });
  });
};
