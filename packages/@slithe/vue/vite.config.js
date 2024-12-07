import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  publicDir: false,
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
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
    dts()
  ]
});
