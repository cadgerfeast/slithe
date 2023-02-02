<!-- Metadata -->
<script context="module">
  export const tag = 'button';
  export const style = {
    'display': 'inline-block'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { dispatchEvent, tooltip, closest } from '../../helpers/dom';
  // Props
  export let type: 'button'|'submit' = 'button';
  export let title = undefined;
  export let disabled = false;
  // Data
  let root: HTMLButtonElement;
  // Methods
  function onClick (e: MouseEvent) {
    if (type === 'submit') {
      const form = closest(root, 'sl-form');
      if (form) {
        dispatchEvent(form, 'submit');
      } else {
        console.warn('<sl-button> does not have a proper <sl-form> ancestor.');
      }
    }
  }
</script>
<!-- Template -->
<button class="sl-button" bind:this={root} {type} {disabled} on:click={onClick} use:tooltip={title}>
  <slot/>
</button>
<!-- Style -->
<style lang="scss">
  :host([sl-theme=light]) {
    --sl-button-background-color: #EFEFEF;
    --sl-button-color: #000000;
    --sl-button-border-color: #7E7E7E;
    --sl-button-hover-background-color: #E5E5E5;
    --sl-button-hover-border-color: #4F4F4F;
    --sl-button-active-background-color: #EFEFEF;
    --sl-button-active-border-color: #7E7E7E;
  }
  :host([sl-theme=dark]) {
    --sl-button-background-color: #EFEFEF;
    --sl-button-color: #000000;
    --sl-button-border-color: #7E7E7E;
    --sl-button-hover-background-color: #E5E5E5;
    --sl-button-hover-border-color: #4F4F4F;
    --sl-button-active-background-color: #EFEFEF;
    --sl-button-active-border-color: #7E7E7E;
  }
  button.sl-button {
    font-family: var(--va-font-family);
    position: relative;
    width: 100%;
    background-color: var(--sl-button-background-color);
    color: var(--sl-button-color);
    border: 1px solid var(--sl-button-border-color);
    border-radius: 3px;
    padding: var(--sl-button-padding, 2px 7px);
    font-size: var(--sl-button-font-size, 14px);
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