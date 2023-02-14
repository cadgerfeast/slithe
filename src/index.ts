// Helpers
import { themeKey, theme } from './helpers/style';
// Types
import type { SlitheComponent } from '../types';
// Constants
const components = Object.values(import.meta.glob<SlitheComponent>('./components/**/*.svelte', { eager: true }));

export function defineElements () {
  for (const component of components) {
    customElements.define(`sl-${component.tag}`, class extends component.default {
      // Constructor
      constructor () {
        super();
      }
      // Methods
      addEventListener (event: string, handler: (...args: unknown[]) => void, options: boolean) {
        super.addEventListener(event, (...args: unknown[]) => {
          if (!this.disabled) {
            handler(...args);
          }
        }, options);
      }
      
      // Lifecycle
      // attributeChangedCallback(attrName, oldValue, newValue) {
      //   attrName = attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase());
      //   super.attributeChangedCallback(attrName, oldValue, newValue);
      // }
      connectedCallback () {
        super.connectedCallback();
        if (component.initialize) {
          component.initialize(this as unknown as HTMLElement);
        }
        if (component.style) {
          for (const property in component.style) {
            this.style[property] = component.style[property];
          }
        }
        themeKey.subscribe((key) => {
          this.setAttribute('sl-theme', key);
        });
        theme.subscribe((_theme) => {
          this.shadowRoot.adoptedStyleSheets = [];
          if (_theme.components[component.tag]) {
            this.shadowRoot.adoptedStyleSheets.push(_theme.components[component.tag]);
          }
        });
      }
      disconnectedCallback () {
        super.disconnectedCallback();
        this.$destroy();
      }
      // Static
      // static get observedAttributes() {
      //   return (super.observedAttributes || []).map(attr => attr.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase());
      // }
    } as unknown as CustomElementConstructor);
  }
}

export type { Theme } from './helpers/style';
export { setTheme } from './helpers/style';
export type { Notification } from './helpers/hud';
export { addNotification } from './helpers/hud';
