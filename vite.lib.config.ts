// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/**
 * Vite Configuration
 * https://vitejs.dev/config/
 * https://github.com/sveltejs/svelte-preprocess
 */
const config = defineConfig({
  plugins: [
    svelte({
      extensions: ['.svelte', '.svx'],
      preprocess: [sveltePreprocess()],
      include: [
        './src/components/**/*.svelte'
      ],
      compilerOptions: {
        customElement: true
      }
    })
  ],
  publicDir: false,
  build: {
    emptyOutDir: false,
    outDir: './components',
    lib: {
      entry: './src/components/index.ts',
      formats: ['cjs', 'es', 'umd'],
      fileName: 'index',
      name: 'slithe'
    }
  }
});
export default config;
