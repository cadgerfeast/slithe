// Helpers
import { registerElements } from '../components/index.es';
import { globalTheme } from './store';
// Partials
import App from './app.svelte';
// Style
import { components } from '../themes/svelte/svelte';

registerElements({
  theme: {
    components
  }
});
globalTheme.initialize();

export default new App({
  target: document.getElementById('app')
});
