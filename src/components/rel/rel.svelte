<!-- Metadata -->
<script context="module">
  export const tag = 'rel';
  export const style = {};
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount, onDestroy } from 'svelte';
  import { getRootElement, observeRect } from '../../utils/element';
  // Props
  export let _for = undefined;
  export { _for as for };
  // Data
  let root: HTMLElement;
  let wrapper: HTMLElement;
  let observer;
  // Events
  function onRectChange (rect: DOMRect) {
    wrapper.style.top = `${rect.top}px`;
    wrapper.style.left = `${rect.left}px`;
    wrapper.style.height = `${rect.height}px`;
    wrapper.style.width = `${rect.width}px`;
  }
  // Lifecycle
  onMount(() => {
    wrapper = getRootElement(root);
    _for = _for || wrapper.previousElementSibling;
    wrapper.style.position = 'fixed';
    wrapper.style.pointerEvents = 'none';
    wrapper.style.zIndex = '2';
    observer = observeRect(_for, onRectChange);
    onRectChange(_for.getBoundingClientRect());
  });
  onDestroy(() => {
    observer.dispose();
  });
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<div bind:this={root} class="sl-rel">
  <slot/>
</div>
<!-- Style -->
<style lang="scss">
  div.sl-rel > * {
    pointer-events: all;
  }
</style>
