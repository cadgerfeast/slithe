<script context="module">
  export const tag = 'icon';
</script>

<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { fetchSVG } from '../../utils/fetch';
  // Props
  export let src: string = undefined;
  export let size: number = 0;
  // Data
  let root: HTMLElement;
  let svg: HTMLElement;

  onMount(async () => {
    // Validate URL
    if (!src.trim()) {
      console.warn('Icon created with no valid URL.');
    } else {
      svg = await fetchSVG(src);
      if (size) {
        svg.style.display = 'inline-block';
        svg.style['vertical-align'] = 'bottom';
        svg.style['height'] = `${size}px`;
        svg.style['width'] = `${size}px`;
      }
      root.appendChild(svg);
    }
  });
</script>

<svelte:options tag={null}/>

<i class='sl-icon' bind:this={root}/>
