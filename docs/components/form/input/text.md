---
title: Slithe - Components - Form - Input - Text
---
# Text Input

A `sl-input-text` component is an interactive element that allows the user to input some text.

This component reflects and extends the behavior of the standard `input` element, with `text` type.

<Preview>
  <sl-form>
    <sl-input-text label="Fullname" placeholder="John Doe"/>
  </sl-form>
</Preview>

``` html
<sl-form>
  <sl-input-text label="Fullname" placeholder="John Doe"/>
</sl-form>
```

## Modifiers

Adding those `boolean` attributes allows to modify the input styling.

Size defaults to `medium`.

<Preview title="Variants">
  <sl-input-text label="Default" placeholder="Will show input..."/>
  <sl-input-text type="password" label="Password" placeholder="Will hide input..."/>
</Preview>
<Preview title="Sizes">
  <sl-input-text label="Small" placeholder="Small" small/>
  <sl-input-text label="Medium" placeholder="Medium" medium/>
</Preview>

``` html
<!-- Variants -->
<sl-input-text label="Default" placeholder="Will show input..."/>
<sl-input-text type="password" label="Password" placeholder="Will hide input..."/>
<!-- Size -->
<sl-input-text label="Small" placeholder="Small" small/>
<sl-input-text label="Medium" placeholder="Medium" medium/>
```

## Attributes

### Disabled

Makes the text non-interactable.

<Preview>
  <sl-input-text label="Fullname" placeholder="John Doe" disabled @click="$notify('disabled')"/>
</Preview>

``` html
<sl-input-text label="Fullname" placeholder="John Doe" disabled/>
```

## Events

### Change

Triggered when the user toggles the value.

<Preview>
  <sl-input-text label="Fullname" placeholder="John Doe" @input="$notify(`value: ${$event.target.value}`)"/>
</Preview>

``` html
<sl-input-text label="Fullname" placeholder="John Doe"/>
```
