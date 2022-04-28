export interface Configuration {
  theme?: Record<string, string>;
}

export let config: Configuration = {
};

export function updateConfig (_config: Configuration) {
  config = {
    ...config,
    ..._config
  };
}
