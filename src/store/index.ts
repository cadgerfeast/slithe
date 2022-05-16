// Helpers
import { writable, get } from 'svelte/store';
import { updateTheme } from '../../components/index.es';
// Style
import { components } from '../../themes/svelte/svelte';
// Constants
const themes = {
  'vanilla-light': {
    'icon': components['icon']
  },
  'vanilla-dark': {
    'icon': components['icon']
  },
  'svelte-light': components,
  'svelte-dark': components
};

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

export const globalTheme = (() => {
  const { subscribe, set } = writable((localStorage?.getItem('slithe.global-theme') || `svelte-${preferredShade}`));
	return {
    subscribe,
    get value (): string {
      return get(this);
    },
    set: (value: string) => {
      updateTheme({ key: value, components: themes[value] });
      document.documentElement.setAttribute('sl-theme', value);
      localStorage?.setItem('slithe.global-theme', value);
      set(value);
    },
    initialize () {
      updateTheme({ key: get(this), components: themes[get(this) as string] });
      document.documentElement.setAttribute('sl-theme', get(this));
    }
	};
})();

export const previewTheme = (() => {
  const { subscribe, set } = writable((localStorage?.getItem('slithe.local-theme') || `svelte-${preferredShade}`));
	return {
    subscribe,
    get value (): string {
      return get(this);
    },
    set: (value: string) => {
      localStorage?.setItem('slithe.local-theme', value);
      set(value);
    }
	};
})();
