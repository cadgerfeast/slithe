<!-- Metadata -->
<script context="module">
  export const tag = 'icon';
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { onMount } from 'svelte';
  import { fetchSVG } from '../../utils/fetch';
  // Props
  export let src: string = undefined;
  export let from: string = '';
  export let name: string = undefined;
  export let size: number = 0;
  // Data
  let root: HTMLElement;
  let svg: SVGSVGElement|HTMLElement;
  // Lifecycle
  onMount(async () => {
    if (name) {
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', size.toString());
      svg.setAttribute('height', size.toString());
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `${from}#${name}`);
      svg.appendChild(use);
      root.appendChild(svg);
    } else if (src) {
      svg = await fetchSVG(src);
      if (size) {
        svg.style.display = 'inline-block';
        svg.style['vertical-align'] = 'bottom';
        svg.style['height'] = `${size}px`;
        svg.style['width'] = `${size}px`;
      }
      root.appendChild(svg);
    } else {
      console.warn('Icon should have "src" or "from"/"name" attributes.');
    }
  });
</script>
<!-- Template -->
<i class='sl-icon' bind:this={root}/>
