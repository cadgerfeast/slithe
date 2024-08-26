// Helpers
import { createStore } from '@stencil/store';

export type Theme = {
  components: Record<string, CSSStyleSheet[]>;
  icons: Record<string, string>;
  fallbackIcon: string;
}

type ThemeStore = {
  key: string;
  model: Theme;
};

const themeStore = createStore<ThemeStore>({
  key: 'light',
  model: {
    components: {},
    icons: {},
    fallbackIcon: ''
  }
});

export const theme = themeStore.state;

export function setTheme (newTheme: string, newModel?: Theme) {
  if (newModel) {
    themeStore.state.model = newModel;
  }
  themeStore.state.key = newTheme;
}

const styleStore = createStore({
  stylesheets: new Map<HTMLElement, CSSStyleSheet>()
});

export function syncWithTheme (element: HTMLElement) {
  const tagName = element.tagName.toLowerCase().slice(3);
  // Initialize
  element.setAttribute('sl-theme', themeStore.state.key);
  let stylesheets = themeStore.state.model.components[tagName];
  if (stylesheets) {
    element.shadowRoot.adoptedStyleSheets = stylesheets;
    if (styleStore.get('stylesheets').has(element)) {
      element.shadowRoot.adoptedStyleSheets.push(styleStore.get('stylesheets').get(element));
    }
  }
  // Reactive
  function onThemeUpdate () {
    element.setAttribute('sl-theme', themeStore.state.key);
    const newStylesheets = themeStore.state.model.components[tagName];
    if (newStylesheets && (stylesheets !== newStylesheets)) {
      stylesheets = newStylesheets;
      element.shadowRoot.adoptedStyleSheets = stylesheets;
      if (styleStore.get('stylesheets').has(element)) {
        element.shadowRoot.adoptedStyleSheets.push(styleStore.get('stylesheets').get(element));
      }
    }
  }
  function onStyleUpdate () {
    element.shadowRoot.adoptedStyleSheets = stylesheets ? stylesheets : [];
    if (styleStore.get('stylesheets').has(element)) {
      element.shadowRoot.adoptedStyleSheets.push(styleStore.get('stylesheets').get(element));
    }
  }
  themeStore.onChange('key', onThemeUpdate);
  themeStore.onChange('model', onThemeUpdate);
  styleStore.onChange('stylesheets', onStyleUpdate);
}

export function updateStyle (element: HTMLElement, style: Record<string, string>) {
  const hostStylesheets = new Map(styleStore.get('stylesheets'));
  const hostStylesheet = new CSSStyleSheet();
  hostStylesheet.replaceSync(`:host { ${Object.entries(style).map(([key, value]) => `${key}: ${value};`).join(' ')} }`);
  hostStylesheets.set(element, hostStylesheet);
  styleStore.set('stylesheets', hostStylesheets);
}
