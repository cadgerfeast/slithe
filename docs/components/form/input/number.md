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

### Min

Makes the input minimum value.

<Preview>
  <sl-input-number label="Age" placeholder="18+" value="18" min="18"/>
</Preview>

``` html
<sl-input-number label="Age" placeholder="18+" value="18" min="18"/>
```

### Max

Makes the input maximum value.

<Preview>
  <sl-input-number label="Age" placeholder="25+" value="25" min="25"/>
</Preview>

``` html
<sl-input-number label="Age" placeholder="25+" value="25" min="25"/>
```

### Step

Makes the input step when incrementing or decrementing.

<Preview>
  <sl-input-number label="Rating" placeholder="10" step="0.5"/>
</Preview>

``` html
<sl-input-number label="Rating" placeholder="10" step="0.5"/>
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
