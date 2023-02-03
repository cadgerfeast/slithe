<!-- Metadata -->
<script context="module">
  export const tag = 'tooltip';
  export const style = {
    'position': 'fixed',
    'z-index': '5'
  };
</script>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount,onDestroy, tick } from 'svelte';
  import { contains, getRootElement, removeElement } from '../../helpers/dom';
  import { delay } from '../../helpers/time';
  // Props
  let root: HTMLDivElement;
  let wrapper: HTMLElement;
  export let target: HTMLElement;
  export let pos = [Infinity, Infinity];
  export let debounce = 0.25;
  let opacity = 0;
  $: transition = `opacity ${debounce}s ease-in-out`;
  // Methods
  async function updateTooltipPosition () {
    const top = pos[1] + 15;
    const left = pos[0] + 15;
    const rect = root.getBoundingClientRect();
    if ((top + rect.height) >= window.innerHeight) {
      wrapper.style.bottom = `${8}px`;
    } else {
      wrapper.style.top = `${top}px`;
    }
    wrapper.style.left = `${left}px`;
    if ((left + rect.width) >= window.innerWidth) {
      wrapper.style.right = `${8}px`;
    } else {
      wrapper.style.left = `${left}px`;
    }
  }
  export async function hide () {
    opacity = 0;
    await delay(debounce * 1000);
    removeElement(wrapper);
  }
  // Handlers
  function onWindowMouseMove (e: MouseEvent) {
    if (contains(e.target as Element, target)) {
      pos = [e.clientX, e.clientY];
      updateTooltipPosition();
    }
  }
  // Lifecycle
  onMount(async () => {
    wrapper = getRootElement(root);
    window.addEventListener('mousemove', onWindowMouseMove);
    await tick();
    updateTooltipPosition();
    opacity = 1;
  });
  onDestroy(() => {
    window.removeEventListener('mousemove', onWindowMouseMove);
  });
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<div class="sl-tooltip" bind:this={root} style:opacity={opacity} style:transition={transition}>
  <slot/>
</div>
