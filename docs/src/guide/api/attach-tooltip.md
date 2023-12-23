<script setup>
  import { defineClientComponent } from 'vitepress';
	import Preview from '../../components/preview.vue';

  const PlaygroundTooltip = defineClientComponent(() => {
    return import('../../components/playground/tooltip.vue')
  });
</script>

# Attach Tooltip

This method allows to attach a dynamic tooltip to any DOM element.

You just have to add a `tooltip` attribute to an element, and call `attachTooltip` method with this element as a parameter.

> This API is used internally to add tooltips.

Here's an example that adds a tooltip to a **bold** text:

<Preview>
  <PlaygroundTooltip/>
</Preview>

``` html
<p>
	I'm a super cool text.
	But even more cool, this <b id="super-hint" tooltip="Wow that's powerful">bold text</b> is getting a tooltip for free!
</p>
```

``` typescript
import { attachTooltip } from 'slithe';

const element = document.getElementById('super-hint');
attachTooltip(element);
```
