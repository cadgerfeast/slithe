<!-- Metadata -->
<script context="module">
  export const tag = 'button';
  export const style = {
    'display': 'inline-block'
  };
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { tooltip } from '../../utils/element';
  // Props
  export let type = 'button';
  export let size = 'medium';
  export let title = undefined;
  export let disabled = false;
  // Methods
  function onClick (e: MouseEvent) {
    if (disabled) {
      e.stopPropagation();
    }
  }
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<button class={size} {type} {disabled} on:click={onClick} use:tooltip data-title={title}>
  <slot/>
</button>
<!-- Style -->
<style lang="scss">
  :host([sl-theme=vanilla-light]) {
    --sl-button-border-radius: 3px;
    --sl-button-background-color: #EFEFEF;
    --sl-button-color: #000000;
    --sl-button-border-color: #7E7E7E;
    --sl-button-hover-background-color: #E5E5E5;
    --sl-button-hover-border-color: #4F4F4F;
    --sl-button-active-background-color: #EFEFEF;
    --sl-button-active-border-color: #7E7E7E;
  }
  :host([sl-theme=vanilla-dark]) {
    --sl-button-border-radius: 3px;
    --sl-button-background-color: #EFEFEF;
    --sl-button-color: #000000;
    --sl-button-border-color: #7E7E7E;
    --sl-button-hover-background-color: #E5E5E5;
    --sl-button-hover-border-color: #4F4F4F;
    --sl-button-active-background-color: #EFEFEF;
    --sl-button-active-border-color: #7E7E7E;
  }
  button {
    position: relative;
    background-color: var(--sl-button-background-color);
    color: var(--sl-button-color);
    border: 1px solid var(--sl-button-border-color);
    border-radius: var(--sl-button-border-radius);
    padding: 2px 7px;
    user-select: none;
    &:hover {
      background-color: var(--sl-button-hover-background-color);
      border-color: var(--sl-button-hover-border-color);
    }
    &:active {
      background-color: var(--sl-button-active-background-color);
      border-color: var(--sl-button-active-border-color);
    }
    &:focus-visible {
      outline: 2px solid #000000;
      outline-offset: -2px;
      box-shadow: 0 0 0 2px #FFFFFF;
    }
    &[disabled] {
      pointer-events: none;
      opacity: 0.5;
    }
  }
</style>
