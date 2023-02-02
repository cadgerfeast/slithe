<!-- Metadata -->
<script context="module">
  export const tag = 'tooltip';
  export const style = {
    'position': 'fixed',
    'z-index': '5'
  };
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { getRootElement } from '../../helpers/dom';
  // Props
  let root: HTMLDivElement;
  let wrapper: HTMLElement;
  export let pos = [Infinity, Infinity];
  // Methods
  function updateTooltipPosition () {
    const top = pos[1] + 15;
    const left = pos[0] + 15;
    const rect = root.getBoundingClientRect();
    if ((top + rect.height) >= window.innerHeight) {
      wrapper.style.bottom = `${8}px`;
    } else {
      wrapper.style.top = `${top}px`;
    }
    if ((left + rect.width) >= window.innerWidth) {
      wrapper.style.right = `${8}px`;
    } else {
      wrapper.style.left = `${left}px`;
    }
  }
  // Lifecycle
  onMount(() => {
    wrapper = getRootElement(root);
    updateTooltipPosition();
  });
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<div class="sl-tooltip" bind:this={root}>
  <slot/>
</div>
<!-- Style -->
<style lang="scss">
  :host([sl-theme=light]) {
    --sl-tooltip-background-color: #4F4F4F;
    --sl-tooltip-color: #FFFFFF;
    --sl-tooltip-border-color: #FFFFFF;
  }
  :host([sl-theme=dark]) {
    --sl-tooltip-background-color: #EFEFEF;
    --sl-tooltip-color: #000000;
    --sl-tooltip-border-color: #000000;
  }
  div.sl-tooltip {
    padding: 4px;
    display: inline-block;
    background-color: var(--sl-tooltip-background-color);
    color: var(--sl-tooltip-color);
    border: 1px solid var(--sl-tooltip-border-color);
  }
</style>
