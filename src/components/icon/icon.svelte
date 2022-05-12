<!-- Metadata -->
<script context="module">
  export const tag = 'icon';
  export const style = {
    'display': 'inline-flex',
    'align-items': 'center'
  };
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
  export let name: string = undefined;
  export let size: number = 16;
  // Data
  let root: HTMLElement;
  let svg: SVGSVGElement|HTMLElement;
  // Lifecycle
  onMount(async () => {
    if (src) {
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
<!-- Template -->
<i class='sl-icon' name={name} bind:this={root} style:font-size={`${size}px`}/>
<!-- Style -->
<style lang="scss">
  i.sl-icon {
    display: inline-flex;
  }
</style>