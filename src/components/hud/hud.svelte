<!-- Metadata -->
<script context="module">
  export const tag = 'hud';
  export const style = {};
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import type { Notification } from '../index';
  import { delay } from '../../utils/time';
  // Data
  let notifications = [];
  // Methods
  export async function addNotification (notification: Notification) {
    notifications = [...notifications, notification];
    await delay(3000);
    removeNotification(notification);
  }
  function removeNotification (notification: Notification) {
    notifications = notifications.filter(n => n !== notification);
  }
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<div class="sl-hud">
  <!-- Notifications -->
  <ul class="notifications">
    {#each notifications as notification}
      <li class="notification">
        <sl-icon name="color-outline-palette"/>
        <span>{notification.message}</span>
      </li>
    {/each}
  </ul>
</div>
<!-- Style -->
<style lang="scss">
  div.sl-hud {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    pointer-events: none;
    > ul.notifications {
      position: fixed;
      right: 15px;
      bottom: 0;
      list-style: none;
      margin: 0;
      padding: 0;
      > li.notification {
        pointer-events: all;
        margin-bottom: 15px;
      }
    }
  }
</style>
