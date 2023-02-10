<script context="module">
  export const tag = 'tabs';
  export const style = {
    'display': 'flex'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<nav class='sl-tabs'>
  <ul>
    <slot/>
  </ul>
</nav>
