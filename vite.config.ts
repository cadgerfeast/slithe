/// <reference types="vitest"/>
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
  plugins: [
    svelte({
      extensions: ['.svelte', '.svx'],
      preprocess: [mdsvex(), sveltePreprocess()]
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      reporter: ['lcov', 'text'],
      extensions: ['.ts', '.svelte'],
      include: ['src/**/*'],
      exclude: ['src/themes/**/*', 'src/**/*.d.ts']
    }
  }
});
export default config;
