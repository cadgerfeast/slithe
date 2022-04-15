// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
// Constants
const target = process.env.npm_lifecycle_event.slice(6);

/**
 * Vite Configuration
 * https://vitejs.dev/config/
 * https://github.com/sveltejs/svelte-preprocess
 */
const config = defineConfig({
  // Common
  plugins: [
    // Documentation
    svelte({
      preprocess: sveltePreprocess(),
      exclude: ['./src/components/**/*.svelte']
    }),
    // Components
    svelte({
      preprocess: sveltePreprocess(),
      include: ['./src/components/**/*.svelte'],
      compilerOptions: {
        customElement: true
      }
    })
  ],
  // Components Bundle
  ...(target === 'lib:bundle' && {
    publicDir: false,
    build: {
      emptyOutDir: true,
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
          'counter': './src/components/counter/counter.svelte',
          'nested': './src/components/nested/nested.svelte'
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
