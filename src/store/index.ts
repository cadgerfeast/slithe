// Helpers
import { writable, get } from 'svelte/store';

export const recentSearches = (() => {
  const { subscribe, update } = writable((localStorage.getItem('slithe.recent-searches') || '').split(',').filter(s => s));
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
