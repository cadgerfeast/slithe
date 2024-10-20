// Helpers
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'node:path';
import { version } from './package.json';

export default defineConfig({
  plugins: [dts({ entryRoot: './src', include: ['./src'] })],
  build: {
    emptyOutDir: false,
    ssr: true,
    lib: {
      entry: [
        path.resolve(__dirname, './src/cli.ts'),
        path.resolve(__dirname, './src/index.ts')
      ],
      formats: ['es']
    }
  },
  define: {
    __VERSION__: `'${version}'`
  }
});
