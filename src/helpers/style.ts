// Helpers
import { writable } from 'svelte/store';

export interface Theme {
  components: Record<string, CSSStyleSheet>;
  icons: Record<string, string>;
  fallbackIcon: string;
}

export const themeKey = writable('light');
export const theme = writable<Theme>({
  components: {},
  icons: {},
  fallbackIcon: ''
});

export function setTheme (_key: string, _theme?: Theme) {
  themeKey.set(_key);
  if (_theme) {
    theme.set(_theme);
  }
}

export class StyleObject {
  private _attrs: Record<string, string>;
  constructor (attrs: Record<string, string> = {}) {
    this._attrs = attrs;
  }
  public toString () {
    return Object.entries(this._attrs).map(([key, value]) => `${key}: ${value}`).join(';');
  }
}
