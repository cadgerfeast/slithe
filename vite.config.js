// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	publicDir: false,
	build: {
		outDir: './components',
		lib: {
      entry: './src/index.ts',
      name: 'Slithe',
			formats: ['cjs', 'es', 'umd']
    }
	},
	plugins: [
		svelte({
			compilerOptions: {
        customElement: true
      }
		})
	]
});
