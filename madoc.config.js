import { defineConfig } from '@madoc/core/config';

export default defineConfig({
  title: 'Slithe',
  description: 'Snaky web components that moults',
  theme: 'auto',
  favicon: '/icons/slithe.svg',
  docsDir: './docs',
  addonsDir: './addons',
  publicDir: './public',
  distDir: './.docs',
  isCustomElement: (tag) => tag.startsWith('sl-')
});
