export interface Configuration {
}

export let config: Configuration = {
};

export function updateConfig (_config: Configuration) {
  config = {
    ...config,
    ..._config
  };
}
