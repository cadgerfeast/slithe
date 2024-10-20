// Helpers
import { createStore } from '@stencil/store';

export type Theme = {
  components: Record<string, CSSStyleSheet[]>;
  icons: Record<string, string>;
  fallbackIcon: string;
}

type ThemeStore = {
  key: string;
  theme: Theme;
};

const themeStore = createStore<ThemeStore>({
  key: 'light',
  theme: {
    components: {},
    icons: {},
    fallbackIcon: ''
  }
});

function dispatchThemeUpdate () {
  window.dispatchEvent(new CustomEvent('slithethemechange', { detail: getTheme() }));
}

themeStore.onChange('key', dispatchThemeUpdate);
themeStore.onChange('theme', dispatchThemeUpdate);

export const theme = themeStore.state;

export function getTheme (): ThemeStore {
  return {
    key: themeStore.get('key'),
    theme: themeStore.get('theme')
  };
}

export function setTheme (newKey: string, newTheme?: Theme) {
  if (newTheme) {
    themeStore.state.theme = newTheme;
  }
  themeStore.state.key = newKey;
  document.documentElement.setAttribute('sl-theme', newKey);
}

const styleStore = createStore({
  stylesheets: new Map<HTMLElement, CSSStyleSheet>()
});

export function syncWithTheme (element: HTMLElement) {
  const tagName = element.tagName.toLowerCase().slice(3);
  // Initialize
  let stylesheets = themeStore.state.theme.components[tagName];
  if (stylesheets) {
    element.shadowRoot.adoptedStyleSheets = stylesheets;
    if (styleStore.get('stylesheets').has(element)) {
      element.shadowRoot.adoptedStyleSheets.push(styleStore.get('stylesheets').get(element));
    }
  }
  // Reactive
  function onThemeUpdate () {
    const newStylesheets = themeStore.state.theme.components[tagName];
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
  themeStore.onChange('theme', onThemeUpdate);
  styleStore.onChange('stylesheets', onStyleUpdate);
}

export function updateStyle (element: HTMLElement, style: Record<string, string>) {
  const hostStylesheets = new Map(styleStore.get('stylesheets'));
  const hostStylesheet = new CSSStyleSheet();
  hostStylesheet.replaceSync(`:host { ${Object.entries(style).map(([key, value]) => `${key}: ${value};`).join(' ')} }`);
  hostStylesheets.set(element, hostStylesheet);
  styleStore.set('stylesheets', hostStylesheets);
}
