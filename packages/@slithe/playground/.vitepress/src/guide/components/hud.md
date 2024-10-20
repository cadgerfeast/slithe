<script setup>
	import { notify } from '../../api';
	import Preview from '../../components/preview.vue';
</script>

# Hud

A `sl-hud` component is an element that adds information or interactive elements on top of the main content.

It is used programmatically to display modals and notifications.

> It does not require to add any markup to your `HTML` as a `sl-hud` element will be added to DOM automatically if needed.

## Notifications

### Methods

#### Add Notification

This method allows to add a notification.

## Usage

<Preview>
  <sl-button class="trigger info" danger @click="notify('Info', 'info')">Info</sl-button>
	<sl-button class="trigger success" danger @click="notify('Success', 'success')">Success</sl-button>
	<sl-button class="trigger warn" danger @click="notify('Warn', 'warn')">Warn</sl-button>
	<sl-button class="trigger error" danger @click="notify('Error', 'error')">Error</sl-button>
</Preview>

``` typescript
import { addNotification } from 'slithe';

addNotification({
	type: 'info', // 'info'|'success'|'warn'|'error'
	icon: {
		name: 'info', // Icon name (added as a <sl-icon/> element)
		size: '16px' // Icon size
	},
	message: msg // Message displayed as a simple text
});
```

<style lang="scss" scoped>
  sl-button.trigger {
		margin-right: 5px;
		&.info {
			--slithe-primer-button-color: var(--slithe-primer-text-color-info);
			--slithe-primer-button-background-color-hover: var(--slithe-primer-background-color);
			--slithe-primer-button-border-color-hover: var(--slithe-primer-text-color-info);
			--slithe-primer-button-background-color-active: var(--slithe-primer-text-color-info);
			--slithe-primer-button-border-color-active: var(--slithe-primer-text-color-info);
		}
		&.success {
			--slithe-primer-button-color: var(--slithe-primer-text-color-success);
			--slithe-primer-button-background-color-hover: var(--slithe-primer-background-color);
			--slithe-primer-button-border-color-hover: var(--slithe-primer-text-color-success);
			--slithe-primer-button-background-color-active: var(--slithe-primer-text-color-success);
			--slithe-primer-button-border-color-active: var(--slithe-primer-text-color-success);
		}
		&.warn {
			--slithe-primer-button-color: var(--slithe-primer-text-color-warn);
			--slithe-primer-button-background-color-hover: var(--slithe-primer-background-color);
			--slithe-primer-button-border-color-hover: var(--slithe-primer-text-color-warn);
			--slithe-primer-button-background-color-active: var(--slithe-primer-text-color-warn);
			--slithe-primer-button-border-color-active: var(--slithe-primer-text-color-warn);
		}
		&.error {
			--slithe-primer-button-color: var(--slithe-primer-text-color-error);
			--slithe-primer-button-background-color-hover: var(--slithe-primer-background-color);
			--slithe-primer-button-border-color-hover: var(--slithe-primer-text-color-error);
			--slithe-primer-button-background-color-active: var(--slithe-primer-text-color-error);
			--slithe-primer-button-border-color-active: var(--slithe-primer-text-color-error);
		}
	}
</style>
