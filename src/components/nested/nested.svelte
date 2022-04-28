<script context="module">
  export const tag = 'nested';
</script>

<svelte:options tag={null}/>

<div>
  <sl-button>
    <slot/>
  </sl-button>
  <sl-counter/>
</div>
