<script lang="ts">
  // Components
  import '../button/button.svelte';
  import '../counter/counter.svelte';
</script>

<svelte:options tag="sl-nested"/>

<div>
  <sl-button>
    <slot/>
  </sl-button>
  <sl-counter/>
</div>
