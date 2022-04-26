<script context="module">
  export const tag = 'sl-nested';
</script>

<svelte:options tag={null}/>

<div>
  <sl-button>
    <slot/>
  </sl-button>
  <sl-counter/>
</div>
