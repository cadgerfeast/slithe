// Helpers
import { createStore } from '@stencil/store';

interface Config {
  closeIcon: string;
  checkIcon: string;
  alertIcon: string;
  successIcon: string;
}

const { state } = createStore<Config>({
  closeIcon: 'x',
  checkIcon: 'check',
  alertIcon: 'alert-fill',
  successIcon: 'check-circle-fill'
});

export { state as config };

export function setConfig (newConfig: Config) {
  state.closeIcon = newConfig.closeIcon;
  state.checkIcon = newConfig.checkIcon;
  state.alertIcon = newConfig.alertIcon;
  state.successIcon = newConfig.successIcon;
}
