---
title: Slithe - Components - Splitter
---
# Splitter

A `sl-splitter` component provides a way to split the layout in two movable areas.

## Slots

The component includes a `blue`, and a `green` slot.

- **Horizontal**: `blue=left` - `green=right`
- **Vertical**: `blue=top` - `green=bottom`

<Preview title="Horizontal">
  <sl-splitter horizontal>
    <div slot="blue" style="height:200px">Blue</div>
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
