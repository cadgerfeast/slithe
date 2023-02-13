<!-- Metadata -->
<script lang="ts" context="module">
  export const tag = 'card';
</script>
<!-- Options -->
<svelte:options tag={null}/>
<script lang="ts">
  // Helpers
  import { onMount, onDestroy } from 'svelte';
  import { SlotManager } from '../../helpers/dom';
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
<div bind:this={root} class="sl-card" class:has-header={$slots.header} class:has-default={$slots.default} class:has-footer={$slots.footer}>
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
