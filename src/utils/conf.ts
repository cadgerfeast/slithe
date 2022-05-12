export interface Theme {
  components?: Record<string, string>;
}

export interface ConfigurationManifest {
  theme?: Theme;
}

export const conf = new class Configuration {
  public theme: Theme;
  constructor () {
    this.theme = {};
  }
  public update (manifest: ConfigurationManifest) {
    this.theme = manifest.theme || {};
  }
}();
