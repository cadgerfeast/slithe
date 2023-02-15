export interface Notification {
  type: string;
  icon: {
    name: string;
    size: string;
  };
  message: string;
}
let hud: HTMLSlHudElement;
export function addNotification (notification: Notification) {
  if (!hud) {
    hud = document.createElement('sl-hud');
    document.body.appendChild(hud);
  }
  hud.addNotification(notification);
}
