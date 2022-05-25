<!-- Metadata -->
<script context="module">
  export const tag = 'tree-item';
  export const style = {};
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount, onDestroy } from 'svelte';
  // Data
  let root: HTMLElement;
  let slots: Record<string, boolean> = {};
  let _handlers: Record<string, () => void> = {};
  // Lifecycle
  onMount(() => {
    root.querySelectorAll('slot').forEach((slot) => {
      const slotName = slot.name || 'default';
      slots[slotName] = !!slot.assignedNodes().length;
      _handlers[slotName] = () => {
        if (slots[slotName] !== !!slot.assignedNodes().length) {
          slots = {...slots, [slotName]: !!slot.assignedNodes().length};
        }
      };
      slot.addEventListener('slotchange', _handlers[slotName]);
    });
  });
  onDestroy(() => {
    for (const slotName in slots) {
      const slot = root.querySelector(`slot${slotName === 'default' ? ':not([name])' : `[name="${slotName}"]`}`);
      slot.removeEventListener('slotchange', _handlers[slotName]);
    }
  });
</script>
<!-- Template -->
<li bind:this={root} class="sl-tree-item">
  <slot/>
  <sl-tree class:visible={slots.subtree}>
    <slot name="subtree"/>
  </sl-tree>
</li>
<!-- Style -->
<style lang="scss">
  li.sl-tree-item {
    display: block;
  }
</style>
