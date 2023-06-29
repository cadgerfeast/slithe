---
title: Slithe - Components - Form - Input - Number
---
# Number Input

A `sl-input-number` component is an interactive element that allows the user to input some number.

This component reflects and extends the behavior of the standard `input` element, with `number` type.

<Preview>
  <sl-form>
    <sl-input-number label="Age" placeholder="21"/>
  </sl-form>
</Preview>

``` html
<sl-form>
  <sl-input-number label="Age" placeholder="21"/>
</sl-form>
```

## Attributes

### Disabled

Makes the input non-interactable.

<Preview>
  <sl-input-number label="Age" placeholder="21" disabled @click="$notify('disabled')"/>
</Preview>

``` html
<sl-input-number label="Age" placeholder="21" disabled/>
```

## Events

### Change

Triggered when the user toggles the value.

<Preview>
  <sl-input-number label="Age" placeholder="21" @input="$notify(`value: ${$event.target.value}`)"/>
</Preview>

``` html
<sl-input-number label="Age" placeholder="21"/>
```
