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
  import { theme } from '../../helpers/style';
  import { tooltip } from '../../helpers/dom';
  // Style
  import globalCss from './icon.scss';
  // Props
  export let name: string = undefined;
  export let size: string = '16px';
  export let title: string = undefined;
  let svg = '';
  onMount(() => {
    svg = $theme.icons[name] || $theme.fallbackIcon;
  });
</script>
<!-- Template -->
<i class='sl-icon' style:width={size} style:height={size} use:tooltip={title}>
  {@html svg}
</i>
<!-- Style -->
<svelte:element this="style">{@html globalCss}</svelte:element>
<style lang="scss">
  i.sl-icon {
    display: inline-flex;
  }
</style>
