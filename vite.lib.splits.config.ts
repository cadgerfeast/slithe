// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import * as fs from 'fs';
import * as path from 'path';
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
    rollupOptions: {
      input: components,
      output: {
        format: 'es',
        entryFileNames: '[name].js'
      }
    }
  }
});
export default config;
