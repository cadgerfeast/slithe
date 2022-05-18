<!-- Metadata -->
<script context="module">
  export const tag = 'button';
  export const style = {
    'display': 'inline-block'
  };
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { tooltip } from '../../utils/element';
  // Props
  export let type = 'button';
  export let title = undefined;
  export let disabled = false;
  // Methods
  function onClick (e: MouseEvent) {
    if (disabled) {
      e.stopPropagation();
    }
  }
  // Events
  // TODO blur
  // TODO contextmenu
  // TODO focus
  // TODO dblclick
  // TODO mousedown
  // TODO mousemove
  // TODO mouseout
  // TODO mouseover
  // TODO mouseup
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<button class:disabled={disabled} {type} on:click={onClick} use:tooltip data-title={title}>
  <slot/>
</button>
<!-- Style -->
<style lang="scss">
  button {
    background-color: #EFEFEF;
    color: #000000;
    border: 1px solid #000000;
    border-radius: 2px;
    &.disabled {
      opacity: 0.5;
    }
  }
</style>
