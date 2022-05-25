<!-- Metadata -->
<script context="module">
  export const tag = 'tree';
  export const style = {};
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<ul class="sl-tree">
  <slot/>
</ul>
<!-- Style -->
<style lang="scss">
  ul.sl-tree {
    list-style: none;
    margin: 0;
    padding-left: 10px;
  }
</style>
