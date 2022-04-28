// Helpers
import { config, Configuration, updateConfig } from '../utils/conf';
// Components
import * as Button from './button/button.svelte';
import * as Counter from './counter/counter.svelte';
import * as Nested from './nested/nested.svelte';
import * as Icon from './icon/icon.svelte';
import * as InputText from './input/text.svelte';
import * as KBD from './kbd/kbd.svelte';
import * as Rel from './rel/rel.svelte';
import * as Card from './card/card.svelte';

const components = [
  Button,
  Counter,
  Nested,
  Icon,
  InputText,
  KBD,
  Rel,
  Card
];

export function registerElements (_config: Configuration) {
  updateConfig(_config);
  for (const component of components) {
    const _constructor = class SlitheElement extends component.default {
      constructor () {
        super();
        if (config.theme?.[component.tag]) {
          const style = document.createElement('style');
          style.innerHTML = config.theme[component.tag];
          (this as any).shadowRoot.appendChild(style);
        }
      }
    }
    customElements.define(`sl-${component.tag}`, _constructor as unknown as CustomElementConstructor);
  }
}
