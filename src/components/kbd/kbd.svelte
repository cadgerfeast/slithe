<!-- Metadata -->
<script context="module">
  export const tag = 'kbd';
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<kbd class="sl-kbd">
  <slot/>
</kbd>
<!-- Style -->
<style lang="scss">
  kbd.sl-kbd {
    background-color: var(--sl-kbd-background-color, #EEEEEE);
    color: var(--sl-kbd-color, #666666);
    border-width: var(--sl-kbd-border-width, 1px);
    border-style: var(--sl-kbd-border-style, solid);
    border-color: var(--sl-kbd-border-color, #DDDDDD);
    padding-top: var(--sl-kbd-padding-top, 1px);
    padding-right: var(--sl-kbd-padding-right, 2px);
    padding-bottom: var(--sl-kbd-padding-bottom, 1px);
    padding-left: var(--sl-kbd-padding-left, 2px);
    font-size: var(--sl-kbd-font-size, 12px);
    font-family: var(--sl-kbd-font-family, monospace);
    border-radius: var(--sl-kbd-border-radius, 2px);
    text-transform: uppercase;
  }
</style>
