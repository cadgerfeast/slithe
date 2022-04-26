<svelte:options tag="sl-kbd"/>

<kbd>
  <slot/>
</kbd>

<style lang="scss">
  kbd {
    background: #eee;
    border: 1px solid #ddd;
    padding: .2rem .2rem 0rem;
    color: #666;
    font-size: 12px;
    font-family: 'Fira Mono';
    border-radius: 2px;
    text-transform: uppercase;
  }
</style>
