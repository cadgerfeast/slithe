<!-- Metadata -->
<script context="module">
  export const tag = 'input-text';
  export const style = {};
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { dispatchHostEvent } from '../../../utils/element';
  // Props
  export let value = '';
  export let password = false;
  // Data
  let root: HTMLElement;
  let input: HTMLInputElement;
  let focused = false;
  // Computed
  $: type = password ? 'password' : 'text';
  // Events
  function onInputInput () {
    value = input.value;
    dispatchHostEvent(root, 'update', value);
  }
  function onInputFocus () {
    focused = true;
  }
  function onInputBlur () {
    focused = false;
  }
  function onMouseDown (e: MouseEvent) {
    if (e.target !== input) {
      e.preventDefault();
      input.focus();
    }
  }
  // Methods
  export function focus () {
    input.focus();
  }
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<div bind:this={root} class='sl-input-text' class:focused={focused} on:mousedown={onMouseDown}>
  <div class="input-pre">
    <slot name="pre"/>
  </div>
  <div class="input-container">
    <input bind:this={input} {value} {type} on:input={onInputInput} on:focus={onInputFocus} on:blur={onInputBlur}/>
    <div class="placeholder" class:visible={value.length === 0}>
      <slot name="placeholder"/>
    </div>
  </div>
</div>
<!-- Style -->
<style lang="scss">
  :host([sl-theme=vanilla-light]) {
    --sl-input-text-background-color: #FFFFFF;
    --sl-input-text-color: #000000;
    --sl-input-text-border-color: #3B3B3B;
    --sl-input-text-pre-color: #777777;
    --sl-input-text-placeholder-color: #777777;
    --sl-input-text-focus-border-color: #111111;
  }
  :host([sl-theme=vanilla-dark]) {
    --sl-input-text-background-color: #FFFFFF;
    --sl-input-text-color: #000000;
    --sl-input-text-border-color: #3B3B3B;
    --sl-input-text-pre-color: #777777;
    --sl-input-text-placeholder-color: #777777;
    --sl-input-text-focus-border-color: #111111;
  }
  div.sl-input-text {
    background-color: var(--sl-input-text-background-color);
    display: inline-flex;
    flex-direction: row;
    align-items: stretch;
    border: 1px solid var(--sl-input-text-border-color);
    border-radius: 2px;
    padding: 0 2px;
    font-size: 13px;
    box-sizing: border-box;
    cursor: text;
    &.focused {
      outline: 2px solid #000000;
      outline-offset: -2px;
      box-shadow: 0 0 0 2px #FFFFFF;
    }
    > div.input-pre {
      display: inline-flex;
      flex-direction: row;
      align-self: center;
      color: var(--sl-input-text-pre-color);
    }
    > div.input-container {
      position: relative;
      z-index: 0;
      background-color: transparent;
      > input {
        font-family: var(--va-font-family);
        color: var(--sl-input-text-color);
        height: 100%;
        background-color: transparent;
        border: none;
        padding: 1px 0;
        font-size: inherit;
        box-sizing: border-box;
        &:focus {
          outline: none;
        }
      }
      > div.placeholder {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: flex;
        flex-direction: row;
        align-items: center;
        visibility: hidden;
        color: var(--sl-input-text-placeholder-color);
        margin-left: 2px;
        &.visible {
          visibility: visible;
        }
      }
    }
  }
</style>
