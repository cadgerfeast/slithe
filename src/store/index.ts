// Helpers
import { writable, get } from 'svelte/store';
import { updateTheme } from '../../components/index.es';
// Style
import { components } from '../../themes/svelte/svelte';

export const recentSearches = (() => {
  const { subscribe, update } = writable((localStorage?.getItem('slithe.recent-searches') || '').split(',').filter(s => s));
	return {
		subscribe,
    get value (): string {
      return get(this);
    },
    add: (path: string) => {
      return update((value) => {
        if (!value.includes(path)) {
          value.push(path);
        }
        if (value.length > 5) {
          value.shift();
        }
        localStorage?.setItem('slithe.recent-searches', value.join(','));
        return value;
      });
    }
	};
})();

const preferredShade = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';

export const theme = (() => {
  const { subscribe, set } = writable((localStorage?.getItem('slithe.theme') || `svelte-${preferredShade}`));
	return {
    subscribe,
    get value (): string {
      return get(this);
    },
    set: (value: string) => {
      updateTheme({ components });
      document.documentElement.setAttribute('sl-theme', value);
      localStorage?.setItem('slithe.theme', value);
      set(value);
    },
    initialize () {
      updateTheme({ components });
      document.documentElement.setAttribute('sl-theme', get(this));
    }
	};
})();
