<!-- Metadata -->
<script context="module">
  export const tag = 'form';
  export const style = {};
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { getRootElement } from '../../helpers/dom';
  // Props
  let root: HTMLFormElement;
  let wrapper: HTMLElement;
  // Methods
  export function submit () {
    wrapper.dispatchEvent(new SubmitEvent('submit'));
  }
  // Handlers
  function onSubmit (e: SubmitEvent) {
    e.preventDefault();
    e.stopPropagation();
    submit();
  }
  // Lifecycle
  onMount(() => {
    wrapper = getRootElement(root);
  });
</script>
<!-- Template -->
<form class="sl-form" bind:this={root} on:submit={onSubmit}>
  <slot/>
</form>
