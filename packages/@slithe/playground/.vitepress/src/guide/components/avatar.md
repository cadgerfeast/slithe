<script setup>
  import { ref } from 'vue';
	import Preview from '../../components/preview.vue';
  const favicon = ref(SLITHE_PLAYGROUND_FAVICON);
</script>

# Avatar

A `sl-avatar` component shows an image that usually represent a user or known entity.

<Preview>
  <sl-avatar name="John Doe"/>
  <sl-avatar name="Slithe" :src="`/${favicon}`"/>
</Preview>

``` html-vue
<sl-avatar name="John Doe"/>
<sl-avatar name="Slithe" src="/{{favicon}}"/>
```

## Modifiers

Adding those `boolean` attributes allows to modify the avatar styling.

<Preview title="Shapes">
  <sl-avatar name="John Doe"/>
  <sl-avatar name="John Doe" square/>
</Preview>

``` html
<!-- Shapes -->
<sl-avatar name="John Doe" circle/>
<sl-avatar name="John Doe" square/>
```

## Attributes

### Name

The avatar name, used as a way to display initials as default or fallback when no image can be found.

<Preview>
  <sl-avatar name="John Doe"/>
  <sl-avatar name="Melissa Forte"/>
</Preview>

``` html
<sl-avatar name="John Doe"/>
<sl-avatar name="Melissa Forte"/>
```

### Size

Modifies the avatar size, defaults to `32px`.

<Preview>
  <sl-avatar name="John Doe" size="64px"/>
</Preview>

``` html
<sl-avatar name="John Doe" size="64px"/>
```

### Tooltip

Adds a tooltip text to provide more information.

<Preview>
  <sl-avatar name="John Doe" tooltip="Is there anything in the box, darling?"/>
</Preview>

``` html
<sl-avatar name="John Doe" tooltip="Is there anything in the box, darling?"/>
```
