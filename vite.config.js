/// <reference types="vitest"/>
// Helpers
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => {
	return {
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
					customElement: mode !== 'test'
				}
			})
		],
		test: {
			environment: 'jsdom',
			coverage: {
				all: true,
				provider: 'c8',
				reporter: ['lcov', 'text'],
				extensions: ['.ts', '.svelte'],
				include: ['src'],
				exclude: ['src/themes/**/*', 'src/**/*.d.ts']
			}
		}
	};
});
