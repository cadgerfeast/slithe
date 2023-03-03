// Helpers
import { createStore } from '@stencil/store';

interface Config {
  closeIcon: string;
}

const { state } = createStore({
  closeIcon: 'x'
});

export { state as config };

export function setConfig (newConfig: Config) {
  state.closeIcon = newConfig.closeIcon;
}
