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
import * as Tree from './tree/tree.svelte';
import * as TreeItem from './tree/tree-item.svelte';

const components = [
  Button,
  Counter,
  Nested,
  Icon,
  InputText,
  KBD,
  Rel,
  Card,
  Tree,
  TreeItem
];

export function registerElements (_config: Configuration) {
  updateConfig(_config);
  for (const component of components) {
    const _constructor = class SlitheElement extends component.default {
      constructor () {
        super();
        if (config.components?.[component.tag]) {
          const style = document.createElement('style');
          style.innerHTML = config.components[component.tag];
          (this as any).shadowRoot.appendChild(style);
        }
      }
      connectedCallback () {
        super.connectedCallback();
        if (component.style) {
          for (const property in component.style) {
            this.style[property] = component.style[property];
          }
        }
      }
      disconnectedCallback () {
        super.disconnectedCallback();
        this.$destroy();
      }
    }
    customElements.define(`sl-${component.tag}`, _constructor as unknown as CustomElementConstructor);
  }
}
