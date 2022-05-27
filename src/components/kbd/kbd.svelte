<!-- Metadata -->
<script context="module">
  export const tag = 'kbd';
  export const style = {
    'display': 'inline-flex'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<kbd>
  <slot/>
</kbd>
<!-- Style -->
<style lang="scss">
  :host([sl-theme=vanilla-light]) {
    --sl-kbd-background-color: #EFEFEF;
    --sl-kbd-color: #666666;
    --sl-kbd-border-color: #DDDDDD;
  }
  :host([sl-theme=vanilla-dark]) {
    --sl-kbd-background-color: #EFEFEF;
    --sl-kbd-color: #666666;
    --sl-kbd-border-color: #DDDDDD;
  }
  kbd {
    font-family: monospace;
    font-size: 12px;
    border-radius: 2px;
    background-color: var(--sl-kbd-background-color);
    color: var(--sl-kbd-color);
    border: 1px solid var(--sl-kbd-border-color);
    padding: 1px 2px;
    text-transform: uppercase;
  }
</style>
