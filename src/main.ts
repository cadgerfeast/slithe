// Partials
import App from './app.svelte';
// Components
import { registerElements } from '../components/index.es';
// Style
import svelteTheme from '../themes/svelte/svelte';

registerElements({ theme: svelteTheme });

export default new App({
  target: document.getElementById('app')
});
