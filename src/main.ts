// Helpers
import { registerElements } from '../components/index.es';
// Partials
import App from './app.svelte';
// Style
import { components } from '../themes/svelte/svelte';

registerElements({ components });

export default new App({
  target: document.getElementById('app')
});
