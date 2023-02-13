<!-- Metadata -->
<script context="module">
  export const tag = 'rel';
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onDestroy } from 'svelte';
  import { getRootElement, observeRect } from '../../helpers/dom';
  // Props
  export let _for = undefined;
  export { _for as for };
  // Data
  let root: HTMLElement;
  let wrapper: HTMLElement;
  let observer;
  // Reactive
  $: {
    if (root) {
      if (observer) {
        observer.dispose();
      }
      wrapper = getRootElement(root);
      wrapper.style.position = 'fixed';
      wrapper.style.pointerEvents = 'none';
      wrapper.style.zIndex = '2';
      if (_for) {
        observer = observeRect(_for, onRectChange);
        onRectChange(_for.getBoundingClientRect());
      }
    }
  }
  // Events
  function onRectChange (rect: DOMRect) {
    if (_for.offsetParent) {
      wrapper.style.display = 'block';
      wrapper.style.top = `${rect.top}px`;
      wrapper.style.left = `${rect.left}px`;
      wrapper.style.height = `${rect.height}px`;
      wrapper.style.width = `${rect.width}px`;
    } else {
      wrapper.style.display = 'none';
    }
  }
  // Lifecycle
  onDestroy(() => {
    observer.dispose();
  });
</script>
<!-- Template -->
<div bind:this={root} class="sl-rel">
  <slot/>
</div>
