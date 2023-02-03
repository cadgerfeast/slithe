---
title: Slithe - Components - Form - Input - Checkbox
---
# Checkbox Input

A `sl-input-checkbox` component is an interactive element that allows the user to pick an option.

This component reflects and extends the behavior of the standard `input` element, with `checkbox` type.

<Preview>
  <sl-form>
    <sl-form-control label="I want to receive marketing emails.">
      <sl-input-checkbox/>
    </sl-form-control>
  </sl-form>
</Preview>

``` html
<sl-form>
  <sl-form-control label="I want to receive marketing emails.">
    <sl-input-checkbox/>
  </sl-form-control>
</sl-form>
```

## Attributes

### Disabled

Makes the checkbox non-interactable.

<Preview>
  <sl-form-control label="I want to receive marketing emails.">
    <sl-input-checkbox disabled @click="$notify('disabled')"/>
  </sl-form-control>
</Preview>

``` html
<sl-input-checkbox disabled/>
```

## Events

### Change

Triggered when the user toggles the value.

<Preview>
  <sl-form-control label="I want to receive marketing emails.">
    <sl-input-checkbox @input="$notify(`value: ${$event.target.value}`)"/>
  </sl-form-control>
</Preview>

``` html
<sl-input-checkbox/>
```
