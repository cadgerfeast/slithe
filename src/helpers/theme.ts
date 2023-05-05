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

export const hostStylesheets: Map<string, CSSStyleSheet> = new Map();

export function syncWithTheme (element: HTMLElement, style?: Record<string, string>) {
  if (style && !hostStylesheets.has(element.tagName)) {
    const hostStylesheet = new CSSStyleSheet();
    hostStylesheet.replaceSync(`:host { ${Object.entries(style).map(([key, value]) => `${key}: ${value};`).join(' ')} }`);
    hostStylesheets.set(element.tagName, hostStylesheet);
  }
  // Initialize
  element.setAttribute('sl-theme', state.key);
  const tagName = element.tagName.toLowerCase().slice(3);
  let stylesheet = state.model.components[tagName];
  if (stylesheet) {
    element.shadowRoot.adoptedStyleSheets = [stylesheet];
    if (hostStylesheets.has(element.tagName)) {
      element.shadowRoot.adoptedStyleSheets.push(hostStylesheets.get(element.tagName));
    }
  }
  // Reactive
  onChange('key', (newKey) => {
    for (const key in style) {
      element.style[key] = style[key];
    }
    element.setAttribute('sl-theme', newKey);
    const newStylesheet = state.model.components[tagName];
    if (newStylesheet && (stylesheet !== newStylesheet)) {
      stylesheet = newStylesheet;
      element.shadowRoot.adoptedStyleSheets = [stylesheet];
    }
  });
}
