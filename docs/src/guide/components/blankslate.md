<script setup>
  import { defineClientComponent } from 'vitepress';
	import Preview from '../../components/preview.vue';

  const PlaygroundBlankslate = defineClientComponent(() => {
    return import('../../components/playground/blankslate.vue')
  });
</script>

# Blankslate

A `sl-blankslate` component is a placeholder element that should be displayed when there is nothing else to be shown.

<Preview>
  <sl-blankslate>
    <span>Nothing to see here...</span>
  </sl-blankslate>
</Preview>

``` html
<sl-blankslate>
  <span>Nothing to see here...</span>
</sl-blankslate>
```

## Slots

The component includes multiple slots to cover various layouts.

<Preview title="Playground">
  <PlaygroundBlankslate/>
</Preview>

``` html
<sl-blankslate>
  <span slot="graphic">Graphic</span>
  <span slot="heading">Heading</span>
  <span>Nothing to see here...</span>
  <span slot="actions">Actions</span>
</sl-blankslate>
```

## Attributes

### Heading

Modifies the heading element, defaults to `h3`, helps with `SEO`.

<Preview>
  <sl-blankslate heading="h1">
    <span slot="heading">I'm an h1</span>
  </sl-blankslate>
  <br/>
  <sl-blankslate heading="h2">
    <span slot="heading">I'm an h2</span>
  </sl-blankslate>
  <br/>
  <sl-blankslate heading="h3">
    <span slot="heading">I'm an h3</span>
  </sl-blankslate>
  <br/>
  <sl-blankslate heading="h4">
    <span slot="heading">I'm an h4</span>
  </sl-blankslate>
  <br/>
  <sl-blankslate heading="h5">
    <span slot="heading">I'm an h5</span>
  </sl-blankslate>
  <br/>
  <sl-blankslate heading="h6">
    <span slot="heading">I'm an h6</span>
  </sl-blankslate>
</Preview>

``` html
<sl-blankslate heading="h1">...</sl-blankslate>
<sl-blankslate heading="h2">...</sl-blankslate>
<sl-blankslate heading="h3">...</sl-blankslate>
<sl-blankslate heading="h4">...</sl-blankslate>
<sl-blankslate heading="h5">...</sl-blankslate>
<sl-blankslate heading="h6">...</sl-blankslate>
```
