# Set Config
 
This method allows to change `Slithe` configuration dynamically.

``` typescript
import { setConfig } from 'slithe';

setConfig({
	closeIcon: 'x', // Icon name to use as a close icon (in tabs or modals for example)
	checkIcon: 'check', // Icon name to use as a close icon (in tabs or modals for example)
	alertIcon: 'alert-fill', // Icon name to use as a alert icon (in validation for example)
	successIcon: 'check-circle-fill' // Icon name to use as a close icon (in validation for example)
});
```
