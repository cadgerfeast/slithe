<!-- Metadata -->
<script context="module">
  export const tag = 'sl-rel';
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { getRootElement, styleToString } from '../../utils/element';
  // Data
  let root: HTMLElement;
  let style = {};
  onMount(() => {
    const target = getRootElement(root).previousElementSibling;
    const rect = target.getBoundingClientRect();
    style = {
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      height: `${rect.height}px`,
      width: `${rect.width}px`
    };
  });
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<div bind:this={root} class="sl-rel" style={styleToString(style)}>
  <slot/>
</div>
<!-- Style -->
<style lang="scss">
  div.sl-rel {
    position: fixed;
  }
</style>
