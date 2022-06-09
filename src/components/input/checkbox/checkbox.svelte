<!-- Metadata -->
<script context="module">
  export const tag = 'input-checkbox';
  export const style = {};
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { v4 } from '@lukeed/uuid';
  import { closest, dispatchHostEvent } from '../../../utils/element';
  // Props
  export let value = false;
  // Data
  const uuid = v4();
  let root: HTMLElement;
  let input: HTMLInputElement;
  let label = '';
  // Events
  function onChange () {
    dispatchHostEvent(root, 'update', value);
  }
  // Methods
  function onLabelClick () {
    input.click();
  }
  // Lifecycle
  onMount(() => {
    const control = closest(root, 'sl-form-control');
    if (control) {
      label = control.label;
      control.label = null;
    }
  });
</script>
<!-- Template -->
<div class='sl-input-checkbox' bind:this={root}>
  <input bind:this={input} type="checkbox" name={uuid} bind:checked={value} on:change={onChange}/>
  <label for={uuid} on:click={onLabelClick}>{label}</label>
</div>
<!-- Style -->
<style lang="scss">
  div.sl-input-checkbox {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    user-select: none;
    > input {
      margin: 3px 0;
    }
    > label {
      font-weight: 600;
      font-size: 14px;
      padding-left: 8px;
      cursor: pointer;
    }
  }
</style>
