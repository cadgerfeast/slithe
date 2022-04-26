<script lang="ts">
  export let value: string = '';
</script>

<svelte:options tag="sl-input-text"/>

<div class="sl-input-text">
  <slot name="pre"/>
  <input bind:value={value}/>
  <slot name="placeholder"/>
</div>

<style lang="scss">
  div.sl-input-text {
    border-width: var(--sl-input-text-border-width, 1px);
    border-style: var(--sl-input-text-border-style, solid);
    border-color: var(--sl-input-text-border-color, #3B3B3B);
    border-radius: 2px;
    > input {
      border: none;
    }
  }
</style>
