<!-- Metadata -->
<script lang="ts" context="module">
  export const tag = 'form-control';
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Props
  export let label = undefined;
</script>
<!-- Template -->
<div class="sl-form-control">
  <slot/>
</div>
<!-- Style -->
<style lang="scss">
  div {
    margin-bottom: 8px;
  }
</style>
