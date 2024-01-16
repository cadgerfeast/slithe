import { Plugin } from 'vue';
import { defineCustomElements } from 'slithe';

export * from './components.js';

export const SlithePlugin: Plugin = {
  async install() {
    defineCustomElements();
  }
};
