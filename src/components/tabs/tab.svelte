<script context="module">
  export const tag = 'tab';
  export const style = {
    'display': 'inline-flex'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Template -->
<li class='sl-tab'>
  <button>
    <slot/>
  </button>
</li>
