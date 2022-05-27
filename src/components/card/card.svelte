<!-- Metadata -->
<script context="module">
  export const tag = 'card';
  export const style = {};
</script>
<!-- Options -->
<svelte:options tag={null}/>
<script lang="ts">
  // Helpers
  import { onMount, onDestroy } from 'svelte';
  import { SlotManager } from '../../utils/element';
  // Data
  let root: HTMLElement;
  const slotManager = new SlotManager();
  // Computed
  const slots = slotManager.slots;
  // Lifecycle
  onMount(() => {
    slotManager.initialize(root);
  });
  onDestroy(() => {
    slotManager.dispose();
  });
</script>
<!-- Template -->
<div bind:this={root} class:has-header={$slots.header} class:has-default={$slots.default} class:has-footer={$slots.footer}>
  <header>
    <slot name="header"/>
  </header>
  <section>
    <slot/>
  </section>
  <footer>
    <slot name="footer"/>
  </footer>
</div>
<!-- Style -->
<style lang="scss">
  :host([sl-theme=vanilla-light]) {
    --sl-card-background-color: #FFFFFF;
    --sl-card-color: #000000;
    --sl-card-border-color: #7E7E7E;
    --sl-card-header-background-color: #EFEFEF;
  }
  :host([sl-theme=vanilla-dark]) {
    --sl-card-background-color: #FFFFFF;
    --sl-card-color: #000000;
    --sl-card-border-color: #7E7E7E;
    --sl-card-header-background-color: #EFEFEF;
  }
  div {
    font-family: var(--va-font-family);
    background-color: var(--sl-card-background-color);
    color: var(--sl-card-color);
    &.has-header {
      &.has-default {
        > header {
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          border-bottom: none;
        }
        > section {
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
      }
      &:not(.has-default).has-footer {
        > header {
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          border-bottom: none;
        }
        > footer {
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
        }
      }
      > header {
        display: block;
      }
    }
    &.has-default {
      > section {
        display: block;
      }
    }
    &.has-footer {
      &.has-default {
        > section {
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }
        > footer {
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-top: none;
        }
      }
      > footer {
        display: block;
      }
    }
    > header {
      display: none;
      background-color: var(--sl-card-header-background-color);
      border-radius: 3px;
      border: 1px solid var(--sl-card-border-color);
    }
    > section {
      display: none;
      border-radius: 3px;
      border: 1px solid var(--sl-card-border-color);
    }
    > footer {
      display: none;
      border-radius: 3px;
      border: 1px solid var(--sl-card-border-color);
    }
  }
</style>
