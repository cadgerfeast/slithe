<script context="module">
  export const tag = 'keyboard';
  export const style = {
    'display': 'inline-flex'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<kbd class='sl-keyboard'>
  <slot/>
</kbd>
<!-- Style -->
<style lang="scss">
  :host([sl-theme=light]) {
    --sl-keyboard-background-color: #EFEFEF;
    --sl-keyboard-color: #666666;
    --sl-keyboard-border-color: #DDDDDD;
  }
  :host([sl-theme=dark]) {
    --sl-keyboard-background-color: #EFEFEF;
    --sl-keyboard-color: #666666;
    --sl-keyboard-border-color: #DDDDDD;
  }
  kbd.sl-keyboard {
    font-family: monospace;
    font-size: 12px;
    border-radius: 2px;
    background-color: var(--sl-keyboard-background-color);
    color: var(--sl-keyboard-color);
    border: 1px solid var(--sl-keyboard-border-color);
    padding: 1px 2px;
    text-transform: uppercase;
  }
</style>
