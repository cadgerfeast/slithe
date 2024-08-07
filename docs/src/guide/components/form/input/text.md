<script setup>
	import { notify } from '../../../../api';
	import Preview from '../../../../components/preview.vue';
</script>

# Text Input

A `sl-input-text` component is an interactive element that allows the user to input some text.

This component reflects and extends the behavior of the standard `input` element, with `text` type.

<Preview>
  <sl-input-text placeholder="John Doe"/>
</Preview>

``` html
<sl-input-text placeholder="John Doe"/>
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

Makes the input non-interactable.

<Preview>
  <sl-input-text placeholder="John Doe" disabled @click="notify('disabled')"/>
</Preview>

``` html
<sl-input-text placeholder="John Doe" disabled/>
```

### Options

The component can have a list of options.

<Preview>
  <sl-input-text
    label="Gender"
    placeholder="Pick a gender..."
    :options="[{ value: 'Male' }, { value: 'Female' }]"
  />
</Preview>

``` html
<sl-input-text
  label="Gender"
  placeholder="Pick a gender..."
  :options="[{ value: 'Male' }, { value: 'Female' }]"
/>
```

## Events

### Input

Triggered when the user updates the value.

<Preview>
  <sl-input-text placeholder="John Doe" @input="notify(`value: ${$event.target.value}`)"/>
</Preview>

``` html
<sl-input-text placeholder="John Doe"/>
```

### Change

Triggered when the user is done with updating the value.

<Preview>
  <sl-input-text placeholder="John Doe" @change="notify(`value: ${$event.target.value}`)"/>
</Preview>

``` html
<sl-input-text placeholder="John Doe"/>
```
