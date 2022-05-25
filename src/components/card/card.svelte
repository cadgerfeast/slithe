<!-- Metadata -->
<script context="module">
  export const tag = 'card';
  export const style = {};
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<div class="sl-card">
  <slot/>
</div>
<!-- Style -->
<style lang="scss">
  div.sl-card {
    background-color: var(--sl-card-background-color, #FFFFFF);
    border-width: var(--sl-card-border-width, 1px);
    border-style: var(--sl-card-border-style, solid);
    border-color: var(--sl-card-border-color, #3B3B3B);
    border-radius: var(--sl-card-border-radius, 2px);
  }
</style>
