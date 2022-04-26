// Helpers
import { useFocus } from 'svelte-navigator';

export function registerFocus () {
  try {
    return useFocus();
  } catch {
    return () => { return {}; };
  }
}
