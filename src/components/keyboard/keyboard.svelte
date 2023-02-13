<script lang="ts" context="module">
  export const tag = 'keyboard';
  export const style = {
    'display': 'inline-flex'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<kbd class='sl-keyboard'>
  <slot/>
</kbd>
