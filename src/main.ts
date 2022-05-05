// Partials
import App from './app.svelte';
// Components
import { registerElements } from '../components/index.es';
// Style
import { components } from '../themes/svelte/svelte';

registerElements({ components });

export default new App({
  target: document.getElementById('app')
});
