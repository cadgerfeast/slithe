<script setup>
	import { notify } from '../../../../api';
	import Preview from '../../../../components/preview.vue';
</script>

# Checkbox Input

A `sl-input-checkbox` component is an interactive element that allows the user to pick an option.

This component reflects and extends the behavior of the standard `input` element, with `checkbox` type.

<Preview>
  <sl-form>
    <sl-input-checkbox label="I want to receive marketing emails."/>
  </sl-form>
</Preview>

``` html
<sl-form>
  <sl-input-checkbox label="I want to receive marketing emails."/>
</sl-form>
```

## Attributes

### Disabled

Makes the checkbox non-interactable.

<Preview>
  <sl-input-checkbox label="I want to receive marketing emails." disabled @click="notify('disabled')"/>
</Preview>

``` html
<sl-input-checkbox label="I want to receive marketing emails." disabled/>
```

## Events

### Change

Triggered when the user toggles the value.

<Preview>
  <sl-input-checkbox label="I want to receive marketing emails." @input="notify(`value: ${$event.target.value}`)"/>
</Preview>

``` html
<sl-input-checkbox label="I want to receive marketing emails."/>
```
