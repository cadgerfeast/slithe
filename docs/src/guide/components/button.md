<script setup>
	import { notify } from '../../api';
	import Preview from '../../components/preview.vue';
</script>

# Button

A `sl-button` component is an interactive element that performs a programmable action when activated.

This component reflects and extends the behavior of the standard `button` element.

<Preview>
  <sl-button>Button</sl-button>
</Preview>

``` html
<sl-button>Button</sl-button>
```

## Modifiers

Adding those `boolean` attributes allows to modify the button styling.

Size defaults to `medium`.

<Preview title="Variants">
  <sl-button>Default</sl-button>
  <sl-button primary>Primary</sl-button>
  <sl-button outline>Outline</sl-button>
  <sl-button danger>Danger</sl-button>
  <sl-button borderless>Borderless</sl-button>
  <sl-button link>Link</sl-button>
</Preview>
<Preview title="Sizes">
  <sl-button small>Small</sl-button>
  <sl-button medium>Medium</sl-button>
  <sl-button large>Large</sl-button>
</Preview>

``` html
<!-- Variants -->
<sl-button>Default</sl-button>
<sl-button primary>Primary</sl-button>
<sl-button outline>Outline</sl-button>
<sl-button danger>Danger</sl-button>
<sl-button borderless>Borderless</sl-button>
<!-- Size -->
<sl-button small>Small</sl-button>
<sl-button medium>Medium</sl-button>
<sl-button large>Large</sl-button>
```

## Attributes

### Type

Modifies the button behavior, defaults to `button`.

When the button is inside a `<form>` element, use `type="submit"` in order to submit the form.

<Preview>
  <sl-button type="button">Button</sl-button>
  <sl-form @submit="notify('submit')">
    <sl-button type="submit">Submit</sl-button>
  </sl-form>
</Preview>

``` html
<sl-button type="button">Button</sl-button>
<sl-form>
  <sl-button type="submit">Submit</sl-button>
</sl-form>
```

### Tooltip

Adds extra information about the element, displayed as a `tooltip` when being hovered.

<Preview>
  <sl-button tooltip="Great Tooltip">Hover me!</sl-button>
</Preview>

``` html
<sl-button tooltip="Great Tooltip">Hover me!</sl-button>
```

### Disabled

Makes the button non-interactable.

<Preview>
  <sl-button disabled @click="notify('disabled')">Disabled</sl-button>
</Preview>

``` html
<sl-button disabled>Disabled</sl-button>
```

## Events

### Click

Triggered when the user clicks on the element.

<Preview>
  <sl-button type="button" @click="notify('click')">Click me!</sl-button>
</Preview>

``` html
<sl-button type="button">Click me!</sl-button>
```
