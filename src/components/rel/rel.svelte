<!-- Metadata -->
<script context="module">
  export const tag = 'sl-rel';
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { getRootElement, observeRect } from '../../utils/element';
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
    wrapper.style.position = 'fixed';
    wrapper.style.pointerEvents = 'none';
    observer = observeRect(wrapper.previousElementSibling, onRectChange);
    return () => {
      observer.dispose();
    }
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
  div.sl-rel {
    pointer-events: all;
  }
</style>
