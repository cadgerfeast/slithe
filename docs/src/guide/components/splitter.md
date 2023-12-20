<script setup>
	import Preview from '../../components/preview.vue';
</script>

# Splitter

A `sl-splitter` component provides a way to split the layout in two movable areas.

## Slots

The component includes a `blue`, and a `green` slot.

- **Horizontal**: `blue=left` - `green=right`
- **Vertical**: `blue=top` - `green=bottom`

<Preview title="Horizontal">
  <sl-splitter horizontal style="height:200px">
    <div slot="blue" >Blue</div>
    <div slot="green">Green</div>
  </sl-splitter>
</Preview>
<Preview title="Vertical" style="height:200px">
  <sl-splitter vertical>
    <div slot="blue">Blue</div>
    <div slot="green">Green</div>
  </sl-splitter>
</Preview>

``` html
<!-- Horizontal -->
<sl-splitter horizontal>
  <div slot="blue">Blue</div>
  <div slot="green">Green</div>
</sl-splitter>
<!-- Vertical -->
<sl-splitter vertical>
  <div slot="blue">Blue</div>
  <div slot="green">Green</div>
</sl-splitter>
```

## Attributes

### BlueSize

The initial `blue` splitter size.

BlueSize defaults to `50`.

<Preview>
  <sl-splitter blueSize="75" style="height:200px">
    <div slot="blue">Blue</div>
    <div slot="green">Green</div>
  </sl-splitter>
</Preview>

<div class="prism-last"/>

``` html
<sl-splitter blueSize="75">
  <div slot="blue">Blue</div>
  <div slot="green">Green</div>
</sl-splitter>
```

### MinBlue - MaxBlue

The minimum and maximum `blue` splitter size.

MinBlue defaults to `0`.

MaxBlue defaults to `100`.

<Preview>
  <sl-splitter minBlue="25" maxBlue="75" style="height:200px">
    <div slot="blue">Blue</div>
    <div slot="green">Green</div>
  </sl-splitter>
</Preview>

<div class="prism-last"/>

``` html
<sl-splitter minBlue="25" maxBlue="75">
  <div slot="blue">Blue</div>
  <div slot="green">Green</div>
</sl-splitter>
```

### Disabled

Makes the splitter non-interactable.

<Preview>
  <sl-splitter disabled style="height:200px">
    <div slot="blue">Blue</div>
    <div slot="green">Green</div>
  </sl-splitter>
</Preview>

<div class="prism-last"/>

``` html
<sl-splitter disabled>
  <div slot="blue">Blue</div>
  <div slot="green">Green</div>
</sl-splitter>
```
