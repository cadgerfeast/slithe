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
    this.theme = manifest.theme;
  }
}();
