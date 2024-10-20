<script setup>
	import { notify } from '../../../../api';
	import Preview from '../../../../components/preview.vue';
</script>

# Number Input

A `sl-input-number` component is an interactive element that allows the user to input some number.

This component reflects and extends the behavior of the standard `input` element, with `number` type.

<Preview>
  <sl-input-number placeholder="21"/>
</Preview>

``` html
<sl-input-number placeholder="21"/>
```

## Modifiers

Adding those `boolean` attributes allows to modify the input styling.

Size defaults to `medium`.

<Preview title="Sizes">
  <sl-input-number label="Small" placeholder="Small" small/>
  <sl-input-number label="Medium" placeholder="Medium" medium/>
</Preview>

``` html
<!-- Size -->
<sl-input-number label="Small" placeholder="Small" small/>
<sl-input-number label="Medium" placeholder="Medium" medium/>
```

## Attributes

### Disabled

Makes the input non-interactable.

<Preview>
  <sl-input-number placeholder="21" disabled @click="notify('disabled')"/>
</Preview>

``` html
<sl-input-number placeholder="21" disabled/>
```

### Min

Makes the input minimum value.

<Preview>
  <sl-input-number placeholder="18+" value="18" min="18"/>
</Preview>

``` html
<sl-input-number placeholder="18+" value="18" min="18"/>
```

### Max

Makes the input maximum value.

<Preview>
  <sl-input-number placeholder="25+" value="25" min="25"/>
</Preview>

``` html
<sl-input-number placeholder="25+" value="25" min="25"/>
```

### Step

Makes the input step when incrementing or decrementing.

<Preview>
  <sl-input-number label="Rating" placeholder="10" step="0.5"/>
</Preview>

``` html
<sl-input-number label="Rating" placeholder="10" step="0.5"/>
```

### Options

The component can have a list of options.

<Preview>
  <sl-input-number
    label="Number"
    placeholder="Pick a number..."
    :options="[{ value: 7 }, { value: 13 }, { value: 100 }]"
  />
</Preview>

``` html
<sl-input-number
  label="Number"
  placeholder="Pick a number..."
  :options="[{ value: 7 }, { value: 13 }, { value: 100 }]"
/>
```

## Events

### Input

Triggered when the user updates the value.

<Preview>
  <sl-input-number placeholder="21" @input="notify(`value: ${$event.target.value}`)"/>
</Preview>

``` html
<sl-input-number placeholder="21"/>
```

### Change

Triggered when the user is done with updating the value.

<Preview>
  <sl-input-number placeholder="21" @change="notify(`value: ${$event.target.value}`)"/>
</Preview>

``` html
<sl-input-number placeholder="21"/>
```
