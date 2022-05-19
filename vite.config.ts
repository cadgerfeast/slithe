// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/**
 * Vite Configuration
 * https://vitejs.dev/config/
 * https://github.com/sveltejs/svelte-preprocess
 */
const config = defineConfig({
  // Common
  plugins: [
    svelte({
      extensions: ['.svelte', '.svx'],
      preprocess: [mdsvex(), sveltePreprocess()]
    })
  ]
});
export default config;
