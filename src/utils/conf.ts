export interface Configuration {
  components?: Record<string, string>;
  body?: string[];
}

export let config: Configuration = {
};

export function updateConfig (_config: Configuration) {
  config = {
    ...config,
    ..._config
  };
}
