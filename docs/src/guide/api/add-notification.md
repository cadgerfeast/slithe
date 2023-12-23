# Add Notification

This method allows to add a notification.

It does not require to add any markup to your `HTML` as a `sl-hud` element will be added to DOM automatically if needed.

## Usage

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
