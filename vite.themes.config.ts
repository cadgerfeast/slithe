// Helpers
import { defineConfig } from 'vite';
import fs from 'fs-extra';
import * as path from 'path';

/**
 * Vite Configuration
 * https://vitejs.dev/config/
 */
const config = defineConfig({
  plugins: [
    {
      name: 'copy',
      generateBundle () {
        fs.copySync(path.resolve(__dirname, './src/themes/primer/global.css'), path.resolve(__dirname, './themes/primer/global.css'));
        fs.copySync(path.resolve(__dirname, './src/themes/primer/variables.css'), path.resolve(__dirname, './themes/primer/variables.css'));
        fs.copySync(path.resolve(__dirname, './src/themes/primer/fonts'), path.resolve(__dirname, './themes/primer/fonts'));
      }
    }
  ],
  publicDir: false,
  build: {
    lib: {
      entry: './src/themes/primer/primer.ts',
      name: 'Primer',
      formats: ['es'],
      fileName: () => 'index.js'
    },
    emptyOutDir: false,
    outDir: './themes/primer'
  }
});
export default config;
