<!-- Metadata -->
<script context="module">
  export const tag = 'tooltip';
</script>
<!-- Script -->
<script lang="ts">
  // Props
  export let _for = undefined;
  export { _for as for };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<sl-rel class="sl-tooltip" for={_for}>
  <span class="text-content">
    <slot/>
  </span>
</sl-rel>
<!-- Style -->
<style lang="scss">
  sl-rel.sl-tooltip {
    > span.text-content {
      position: absolute;
      top: 100%;
    }
  }
</style>
