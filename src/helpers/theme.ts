// Helpers
import { createStore } from '@stencil/store';

interface Theme {
  components: Record<string, CSSStyleSheet>;
  icons: Record<string, string>;
  fallbackIcon: string;
}

let model: Theme = {
  components: {},
  icons: {},
  fallbackIcon: ''
};
const { state } = createStore({
  key: 'light'
});

export { state as theme };

export function setTheme (newTheme: string, newModel?: Theme) {
  state.key = newTheme;
  if (newModel) {
    model = newModel;
  }
}

export function addElementStylesheet (element: HTMLElement) {
  console.info('SNETCH');
  console.info(element);
  console.info(model);
  // element.shadowRoot.adoptedStyleSheets = [];
  // if (_theme.components[component.tag]) {
  //   element.shadowRoot.adoptedStyleSheets.push(_theme.components[component.tag]);
  // }
}
