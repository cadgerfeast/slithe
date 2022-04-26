// Partials
import App from './app.svelte';
// Components
import { registerElements } from '../components/index.es';

registerElements();

export default new App({
  target: document.getElementById('app')
});
