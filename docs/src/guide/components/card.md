<script setup>
  import { defineClientComponent } from 'vitepress';
	import Preview from '../../components/preview.vue';

  const PlaygroundCard = defineClientComponent(() => {
    return import('../../components/playground/card.vue')
  });
</script>

# Card

A `sl-card` component is a simple rounded box that contains various other components.

<Preview>
  <sl-card>
    <span>Card Title</span>
  </sl-card>
</Preview>

``` html
<sl-card>
  <span>Card Title</span>
</sl-card>
```

## Slots

The component includes multiple slots to cover various layouts.

<Preview title="Playground">
  <ClientOnly>
    <PlaygroundCard/>
  </ClientOnly>
</Preview>

``` html
<sl-card>
  <span slot="header">Header Slot</span>  
  <span>Default Slot</span>
  <span slot="footer">Footer Slot</span>  
</sl-card>
```

## Modifiers

Adding those `boolean` attributes allows to modify the card styling.

<Preview title="Variants">
  <sl-card>
    <span slot="header">Header Slot</span>  
    <span>Default Slot</span>
    <span slot="footer">Footer Slot</span>  
  </sl-card>
  <br/>
  <sl-card danger>
    <span slot="header">Header Slot</span>  
    <span>Default Slot</span>
    <span slot="footer">Footer Slot</span>  
  </sl-card>
</Preview>
<Preview title="Sizes">
  <sl-card small>
    <span slot="header">Header Slot</span>  
    <span>Default Slot</span>
    <span slot="footer">Footer Slot</span>  
  </sl-card>
  <br/>
  <sl-card medium>
    <span slot="header">Header Slot</span>  
    <span>Default Slot</span>
    <span slot="footer">Footer Slot</span>  
  </sl-card>
</Preview>

``` html
<!-- Variants -->
<sl-card>...</sl-card>
<sl-card danger>...</sl-card>
<!-- Size -->
<sl-card small>...</sl-card>
<sl-card medium>...</sl-card>
```
