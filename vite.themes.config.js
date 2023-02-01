// Helpers
import { defineConfig } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

function copySync (src, dest) {
  if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copySync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

export default defineConfig({
  plugins: [
    {
      name: 'copy',
      generateBundle () {
        copySync(path.resolve(__dirname, './src/themes/primer/global.css'), path.resolve(__dirname, './themes/primer/global.css'));
        copySync(path.resolve(__dirname, './src/themes/primer/variables.css'), path.resolve(__dirname, './themes/primer/variables.css'));
        copySync(path.resolve(__dirname, './src/themes/primer/fonts'), path.resolve(__dirname, './themes/primer/fonts'));
      }
    }
  ],
  publicDir: false,
  build: {
    lib: {
      entry: './src/themes/primer/index.ts',
      name: 'Primer',
      formats: ['es'],
      fileName: () => 'index.js'
    },
    emptyOutDir: false,
    outDir: './themes/primer'
  }
});
