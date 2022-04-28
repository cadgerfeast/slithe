<script context="module">
  export const tag = 'button';
</script>

<svelte:options tag={null}/>

<button>
  <slot/>
</button>

<style lang="scss">
  button {
    background-color: var(--sl-button-background-color);
    color: var(--sl-button-text-color);
  }
</style>
