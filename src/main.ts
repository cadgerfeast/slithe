// Helpers
import { registerElements } from '../components/index.es';
import { theme } from './store';
// Partials
import App from './app.svelte';
// Style
import { components } from '../themes/svelte/svelte';

registerElements({
  theme: {
    components
  }
});
theme.initialize();

export default new App({
  target: document.getElementById('app')
});
