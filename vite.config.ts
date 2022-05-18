// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import * as fs from 'fs';
import * as path from 'path';
// Constants
const target = process.env.npm_lifecycle_event.substring(process.env.npm_lifecycle_event.indexOf(':') + 1);
// Components
const components = {};
fs.readdirSync('./src/components').forEach((c) => {
  const componentPath = path.resolve('./src/components', c);
  if (fs.statSync(componentPath).isDirectory()) {
    fs.readdirSync(componentPath).forEach((f) => {
      if (f.slice(-6) === 'svelte') {
        const name = f.slice(0, -7);
        if (c === name) {
          components[name] = path.resolve(componentPath, f);
        } else {
          components[`${c}/${name}`] = path.resolve(componentPath, f);
        }
      }
    });
  }
});

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
        input: components,
        output: {
          format: 'es',
          entryFileNames: '[name].js'
        }
      }
    }
  })
});
export default config;
