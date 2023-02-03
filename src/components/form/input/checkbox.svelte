<!-- Metadata -->
<script context="module">
  export const tag = 'input-checkbox';
  export const style = {};
  export let uuid = 0;
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { closest } from '../../../helpers/dom';
  // Props
  export let value = false;
  export let disabled = false;
  // Data
  let root: HTMLElement;
  let input: HTMLInputElement;
  let label = '';
  // Methods
  function onInput () {
    value = !value;
  }
  function onLabelClick () {
    input.click();
  }
  // Lifecycle
  uuid++;
  onMount(() => {
    const control = closest(root, 'sl-form-control');
    if (control) {
      label = control.label;
    }
  });
</script>
<!-- Template -->
<div class='sl-input-checkbox' class:disabled bind:this={root}>
  <input bind:this={input} type="checkbox" name={uuid.toString()} checked={value} {disabled} on:input={onInput}/>
  <label for={uuid.toString()} on:click={onLabelClick}>{label}</label>
</div>
