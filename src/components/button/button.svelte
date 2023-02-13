<!-- Metadata -->
<script lang="ts" context="module">
  export const tag = 'button';
  export const style = {
    'display': 'inline-block'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Helpers
  import { tooltip, closest } from '../../helpers/dom';
  // Props
  export let type: 'button'|'submit' = 'button';
  export let title = undefined;
  export let disabled = false;
  // Data
  let root: HTMLButtonElement;
  // Methods
  function onClick () {
    if (type === 'submit') {
      const form = closest(root, 'sl-form');
      if (form) {
        form.submit();
      } else {
        throw new Error('<sl-button> does not have a proper <sl-form> ancestor.');
      }
    }
  }
</script>
<!-- Template -->
<button class="sl-button" bind:this={root} {type} {disabled} on:click={onClick} use:tooltip={title}>
  <slot/>
</button>
