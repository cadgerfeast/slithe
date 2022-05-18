// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
// Constants
const target = process.env.npm_lifecycle_event.substring(process.env.npm_lifecycle_event.indexOf(':') + 1);

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
      preprocess: [mdsvex(), sveltePreprocess()],
      ...(target.startsWith('lib:') && {
        include: [
          './src/components/**/*.svelte'
        ],
        compilerOptions: {
          customElement: true
        }
      })
    })
  ],
  // Components Bundle
  ...(target === 'lib:bundle' && {
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
  }),
  // Components Splits
  ...(target === 'lib:split' && {
    publicDir: false,
    build: {
      emptyOutDir: false,
      outDir: './components',
      rollupOptions: {
        input: {
          'button': './src/components/button/button.svelte',
          'card': './src/components/card/card.svelte'
        },
        output: {
          format: 'es',
          entryFileNames: '[name].js'
        }
      }
    }
  })
});
export default config;
