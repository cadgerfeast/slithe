<script setup>
  import { defineClientComponent } from 'vitepress';
	import Preview from '../../components/preview.vue';

  const PlaygroundTooltip = defineClientComponent(() => {
    return import('../../components/playground/tooltip.vue')
  });
</script>

# Tooltip

A `sl-tooltip` component adds additional context to elements. 

> It does not require to add any markup to your `HTML` as it's added to supported elements via `tooltip` attribute, or via `attachTooltip` API method.

## Methods

### Attach Tooltip

This method allows to attach a dynamic tooltip to any DOM element.

You just have to add a `tooltip` attribute to an element, and call `attachTooltip` method with this element as a parameter.

> This API is used internally to add tooltips.

Here's an example that adds a tooltip to a that highlighted text below:

<Preview>
  <PlaygroundTooltip/>
</Preview>

``` html
<p>
	I'm a super cool text.
	But even more cool, this <code id="super-hint" tooltip="Wow that's powerful">text</code> is getting a tooltip for free!
</p>
```

``` typescript
import { attachTooltip } from 'slithe';

const element = document.getElementById('super-hint');
attachTooltip(element);
```
