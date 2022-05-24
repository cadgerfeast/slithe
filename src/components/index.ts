// Helpers
import { conf, ConfigurationManifest, Theme } from '../utils/conf';
import { removeElement } from '../utils/element';
// Components
import * as Button from './button/button.svelte';
import * as Card from './card/card.svelte';
import * as Hud from './hud/hud.svelte';
import * as Icon from './icon/icon.svelte';
import * as InputText from './input/text.svelte';
import * as KBD from './kbd/kbd.svelte';
import * as Rel from './rel/rel.svelte';
import * as Tooltip from './tooltip/tooltip.svelte';
import * as Tree from './tree/tree.svelte';
import * as TreeItem from './tree/tree-item.svelte';
// Style
import vanillaStyle from '../style/vanilla.scss';

const components = [
  Button,
  Card,
  Hud,
  Icon,
  InputText,
  KBD,
  Rel,
  Tooltip,
  Tree,
  TreeItem
];

interface SlitheElementStyle {
  tag: string;
  style?: HTMLStyleElement;
}
const elements = new Set();
export function registerElements (_config: ConfigurationManifest) {
  const globalStyle = document.createElement('style');
  globalStyle.innerHTML = vanillaStyle;
  document.head.insertAdjacentElement('beforeend', globalStyle);
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
      public updateTheme (theme: Theme) {
        this.setAttribute('sl-theme', theme.key);
        if (this._slithe.style) {
          removeElement(this._slithe.style);
          delete this._slithe.style;
        }
        if (theme.components?.[this._slithe.tag]) {
          this._slithe.style = document.createElement('style');
          this._slithe.style.innerHTML = conf.theme.components[this._slithe.tag];
          this.shadowRoot.appendChild(this._slithe.style);
        }
      }
      addEventListener (event: string, handler: Function, options: boolean) {
        super.addEventListener(event, (...args) => {
          if (!this.disabled) {
            handler(...args);
          }
        }, options);
      }
    }
    customElements.define(`sl-${component.tag}`, _constructor as unknown as CustomElementConstructor);
  }
}

export function updateTheme (theme: Theme) {
  conf.update({ theme });
  for (const element of elements) {
    element.updateTheme(theme);
  }
}

let hud;
function createHud () {
  const element = document.createElement('sl-hud');
  document.body.appendChild(element);
  return element;
}

export interface Notification {
  type: 'info'|'success'|'warning'|'error';
  message: string;
}
export function addNotification (notification: Notification) {
  if (!hud) {
    hud = createHud();
  }
  hud.addNotification(notification);
}
