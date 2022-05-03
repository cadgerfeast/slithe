// Partials
import App from './app.svelte';
// Components
import { registerElements } from '../components/index.es';
// Style
import { components, body } from '../themes/svelte/svelte';

registerElements({ components, body });

export default new App({
  target: document.getElementById('app')
});
