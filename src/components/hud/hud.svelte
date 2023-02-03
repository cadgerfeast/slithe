<!-- Metadata -->
<script context="module">
  export const tag = 'hud';
  export const style = {};
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { delay } from '../../helpers/time';
  // Types
  import type { Notification } from '../../helpers/hud';
  // Data
  let notifications: Notification[] = [];
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
      <li class={`notification ${notification.type}`}>
        <div class="icon">
          <sl-icon name={notification.icon.name} size={notification.icon.size}/>
        </div>
        <div class="content">
          <span>{notification.message}</span>
        </div>
      </li>
    {/each}
  </ul>
</div>
