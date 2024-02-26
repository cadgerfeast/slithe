import { defineConfig } from 'vite';
import * as path from 'path';
import * as fs from 'fs';
import * as eta from 'eta';
import chokidar from 'chokidar';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { computeComponentWrappers } from '@shared/utils/docs';

const srcPath = path.resolve(__dirname, './src');

const componentsTemplate = fs.readFileSync(path.resolve(__dirname, './devops/npm/generate/tpl/components.eta'), 'utf8');
const wrapperTemplate = fs.readFileSync(path.resolve(__dirname, './devops/npm/generate/tpl/wrapper.eta'), 'utf8');

function generateSourceFiles () {
  const wrappers = computeComponentWrappers();
  fs.writeFileSync(path.resolve(srcPath, 'components.ts'), eta.render(componentsTemplate, { wrappers }));
  fs.mkdirSync(path.resolve(srcPath, './wrappers'), { recursive: true });
  for (const wrapper of wrappers) {
    fs.writeFileSync(path.resolve(srcPath, `./wrappers/${wrapper.name}.vue`), eta.render(wrapperTemplate, { wrapper }));
  }
}

let isWatching = false;
export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js'
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue', 'slithe']
    }
  },
  resolve: {
    dedupe: ['vue', 'slithe']
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.toLowerCase().startsWith('sl-');
          }
        }
      }
    }),
    dts(),
    {
      name: 'wrapper-generator',
      configResolved: ({ build }) => {
        isWatching = !!build.watch;
        if (isWatching) {
          chokidar.watch('../../slithe/dist/components.json').on('all', () => {
            generateSourceFiles();
          });
        }
      },
      buildStart () {
        if (!isWatching) {
          generateSourceFiles();
        }
      }
    }
  ]
});
