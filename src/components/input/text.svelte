<!-- Metadata -->
<script context="module">
  export const tag = 'input-text';
</script>
<!-- Script -->
<script lang="ts">
  // Props
  export let value: string = '';
  // Data
  let input: HTMLInputElement;
  let focused = false;
  // Events
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
<div class="sl-input-text" class:focused={focused} on:mousedown={onMouseDown}>
  <div class="input-pre">
    <slot name="pre"/>
  </div>
  <div class="input-container">
    <input bind:this={input} bind:value={value} on:focus={onInputFocus} on:blur={onInputBlur}/>
    <div class="placeholder" class:visible={value.length === 0}>
      <slot name="placeholder"/>
    </div>
  </div>
</div>
<!-- Style -->
<style lang="scss">
  div.sl-input-text {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border-width: var(--sl-input-text-border-width, 1px);
    border-style: var(--sl-input-text-border-style, solid);
    border-color: var(--sl-input-text-border-color, #3B3B3B);
    border-radius: var(--sl-input-text-border-radius, 2px);
    padding-top: 0px;
    padding-right: var(--sl-input-text-padding-right, 2px);
    padding-bottom: 0px;
    padding-left: var(--sl-input-text-padding-left, 2px);
    font-size: var(--sl-input-text-font-size, 13px);
    cursor: text;
    > div.input-pre {
      display: inline-flex;
      flex-direction: row;
      align-self: center;
      color: var(--sl-input-text-pre-color, #777777);
    }
    > div.input-container {
      position: relative;
      z-index: 0;
      background-color: transparent;
      > input {
        font-family: var(--sl-input-text-font-family, Arial);
        box-sizing: border-box;
        height: 100%;
        background-color: transparent;
        border: none;
        padding-top: var(--sl-input-text-padding-top, 1px);
        padding-bottom: var(--sl-input-text-padding-bottom, 1px);
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
        color: var(--sl-input-text-placeholder-color, #777777);
        font-size: var(--sl-input-text-placeholder-font-size, 13px);
        margin-left: 2px;
        &.visible {
          visibility: visible;
        }
      }
    }
    // Focused
    &.focused {
      border-color: var(--sl-input-text-focused-border-color, #111111);
    }
  }
</style>
