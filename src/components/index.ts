// Helpers
import { Configuration, updateConfig } from '../utils/conf';
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
    customElements.define(component.tag, component.default as unknown as CustomElementConstructor);
  }
}
