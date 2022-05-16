// Helpers
import { conf, ConfigurationManifest, Theme } from '../utils/conf';
import { removeElement } from '../utils/element';
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

interface SlitheElementStyle {
  tag: string;
  style?: HTMLStyleElement;
}
const elements = new Set();
export function registerElements (_config: ConfigurationManifest) {
  conf.update(_config);
  for (const component of components) {
    const _constructor = class SlitheElement extends component.default {
      private _slithe: SlitheElementStyle;
      constructor () {
        super();
        this._slithe = {
          tag: component.tag
        };
        if (conf.theme?.components?.[component.tag]) {
          this._slithe.style = document.createElement('style');
          this._slithe.style.innerHTML = conf.theme.components[component.tag];
          (this as any).shadowRoot.appendChild(this._slithe.style);
        }
      }
      connectedCallback () {
        super.connectedCallback();
        if (conf.theme) {
          this.setAttribute('sl-theme', conf.theme.key);
        }
        if (component.style) {
          for (const property in component.style) {
            this.style[property] = component.style[property];
          }
        }
        elements.add(this);
      }
      disconnectedCallback () {
        super.disconnectedCallback();
        this.$destroy();
        elements.delete(this);
      }
    }
    customElements.define(`sl-${component.tag}`, _constructor as unknown as CustomElementConstructor);
  }
}

export function updateTheme (theme: Theme) {
  conf.update({ theme });
  for (const element of elements) {
    element.setAttribute('sl-theme', theme.key);
    if (element._slithe.style) {
      removeElement(element._slithe.style);
      delete element._slithe.style;
    }
    if (conf.theme?.components?.[element._slithe.tag]) {
      element._slithe.style = document.createElement('style');
      element._slithe.style.innerHTML = conf.theme.components[element._slithe.tag];
      element.shadowRoot.appendChild(element._slithe.style);
    }
  }
}
