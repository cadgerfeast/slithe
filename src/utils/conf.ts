export interface Theme {
  key: string;
  components?: Record<string, string>;
}

export interface ConfigurationManifest {
  theme?: Theme;
}

export const conf = new class Configuration {
  public theme?: Theme;
  public update (manifest: ConfigurationManifest) {
    const preferredShade = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    this.theme = manifest.theme || {
      key: `vanilla-${preferredShade}`
    };
  }
}();
