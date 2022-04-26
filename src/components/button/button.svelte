<svelte:options tag="sl-button"/>

<button>
  <slot/>
</button>

<style lang="scss">
  button {
    background-color: var(--sl-button-background-color);
    color: var(--sl-button-text-color);
  }
</style>
