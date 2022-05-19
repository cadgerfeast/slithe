// Helpers
import { registerElements } from '../components/index.es';
import { globalTheme } from './store';
// Partials
import App from './app.svelte';
// Style
import '../themes/primer/global.css';
import { components } from '../themes/primer';

registerElements({
  theme: {
    key: 'primer-light',
    components
  }
});
globalTheme.initialize();

export default new App({
  target: document.getElementById('app')
});
