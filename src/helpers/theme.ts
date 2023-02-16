// Helpers
import { createStore } from '@stencil/store';

interface Theme {
  components: Record<string, CSSStyleSheet>;
  icons: Record<string, string>;
  fallbackIcon: string;
}

const { state, onChange } = createStore({
  key: 'light',
  model: {
    components: {},
    icons: {},
    fallbackIcon: ''
  }
});

export { state as theme };

export function setTheme (newTheme: string, newModel?: Theme) {
  if (newModel) {
    state.model = newModel;
  }
  state.key = newTheme;
}

export function syncWithTheme (element: HTMLElement) {
  // Initialize
  element.setAttribute('sl-theme', state.key);
  const tagName = element.tagName.toLowerCase().slice(3);
  let stylesheet = state.model.components[tagName];
  if (stylesheet) {
    element.shadowRoot.adoptedStyleSheets = [stylesheet];
  }
  // Reactive
  onChange('key', (newKey) => {
    element.setAttribute('sl-theme', newKey);
    const newStylesheet = state.model.components[tagName];
    if (newStylesheet && (stylesheet !== newStylesheet)) {
      stylesheet = newStylesheet;
      element.shadowRoot.adoptedStyleSheets = [stylesheet];
    }
  });
}
