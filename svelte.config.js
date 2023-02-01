import { vitePreprocess } from '@sveltejs/kit/vite';

/**
 * Svelte Configuration
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	preprocess: vitePreprocess(),
	alias: {
		'@/*': './src/*'
	},
	kit: {
		outDir: '.sync',
		files: {
			lib: 'src'
		}
	},
	package: {
		dir: './dist'
	}
};

export default config;
