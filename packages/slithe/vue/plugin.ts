import { Plugin } from 'vue';
import { defineCustomElements } from 'slithe';

export const SlithePlugin: Plugin = {
  async install() {
    defineCustomElements();
  }
};
