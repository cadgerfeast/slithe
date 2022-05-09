<!-- Metadata -->
<script context="module">
  export const tag = 'button';
</script>
<!-- Script -->
<script lang="ts">
  // Props
  export let type = 'button';
  export let disabled = false;
  // TODO class
  // TODO style
  // TODO title
  // Events
  // TODO blur
  // TODO contextmenu
  // TODO focus
  // TODO click
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
<button {type} {disabled}>
  <slot/>
</button>
<!-- Style -->
<style lang="scss">
  button {
    background-color: #EFEFEF;
    color: #000000;
    border: 1px solid #000000;
    border-radius: 2px;
    &[disabled] {
      pointer-events: none;
      opacity: 0.5;
    }
  }
</style>
