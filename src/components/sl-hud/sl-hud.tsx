// Helpers
import { Component, State, Method, Element, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { delay } from '../../helpers/time';
import { Notification } from '../../helpers/hud';

@Component({
  tag: 'sl-hud',
  shadow: true
})
export class SlitheHud {
  @Element() host!: HTMLSlHudElement;
  // State
  @State() notifications: Notification[] = [];
  // Methods
  @Method()
  async addNotification (notification: Notification) {
    this.notifications = [...this.notifications, notification];
    await delay(3000);
    this.removeNotification(notification);
  }
  @Method()
  async removeNotification (notification: Notification) {
    this.notifications = this.notifications.filter(n => n !== notification);
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
  }
  // Template
  render () {
    return (
      <div class='sl-hud'>
        <ul class='notifications'>
          {this.notifications.map((notification) => (
            <li class={`notification ${notification.type}`}>
              <div class='icon'>
                <sl-icon name={notification.icon.name} size={notification.icon.size}/>
              </div>
              <div class='content'>
                <span>{notification.message}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
