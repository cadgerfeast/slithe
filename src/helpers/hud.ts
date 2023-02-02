let hud;
function createHud () {
  const element = document.createElement('sl-hud');
  document.body.appendChild(element);
  return element;
}

export interface Notification {
  type: 'info'|'success'|'warning'|'error';
  message: string;
}
export function addNotification (notification: Notification) {
  if (!hud) {
    hud = createHud();
  }
  hud.addNotification(notification);
}
