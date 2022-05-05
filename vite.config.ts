// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import * as chokidar from 'chokidar';
import * as fs from 'fs';
import * as path from 'path';
// Variables
const target = process.env.npm_lifecycle_event.substring(process.env.npm_lifecycle_event.indexOf(':') + 1);
let watcher: chokidar.FSWatcher;

/**
 * Vite Configuration
 * https://vitejs.dev/config/
 * https://github.com/sveltejs/svelte-preprocess
 */
const config = defineConfig({
  // Common
  plugins: [
    {
      name: 'copy',
      buildStart () {
        watcher = chokidar.watch('./themes/**/icons/icons.svg').on('all', (e, file) => {
          const filePath = path.resolve(__dirname, `public/${file}`);
          fs.mkdirSync(path.dirname(filePath), { recursive: true });
          fs.copyFileSync(file, filePath);
        });
      },
      buildEnd () {
        watcher.close();
      }
    },
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
