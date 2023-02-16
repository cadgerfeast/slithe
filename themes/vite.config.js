import { defineConfig } from 'vite';
import * as path from 'path';
import * as fs from 'fs';

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
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, './primer/index.ts'),
      name: 'Primer',
      formats: ['es'],
      fileName: () => 'index.js'
    },
    emptyOutDir: false,
    outDir: path.resolve(__dirname, '../primer')
  },
  plugins: [
    {
      name: 'copy',
      generateBundle () {
        copySync(path.resolve(__dirname, './primer/index.d.ts'), path.resolve(__dirname, '../primer/index.d.ts'));
        copySync(path.resolve(__dirname, './primer/global.css'), path.resolve(__dirname, '../primer/global.css'));
        copySync(path.resolve(__dirname, './primer/variables.css'), path.resolve(__dirname, '../primer/variables.css'));
        copySync(path.resolve(__dirname, './primer/fonts'), path.resolve(__dirname, '../primer/fonts'));
      }
    }
  ]
});
