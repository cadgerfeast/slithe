<!-- Metadata -->
<script context="module">
  export const tag = 'form';
  export const style = {};
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // Methods
  function onSubmit (e: SubmitEvent) {
    e.preventDefault();
  }
</script>
<!-- Template -->
<form class="sl-form" on:submit={onSubmit}>
  <slot/>
</form>
