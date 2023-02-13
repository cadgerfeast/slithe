<script lang="ts" context="module">
  // Helpers
  import { closest } from '../../helpers/dom';
  // Context
  export const tag = 'tab';
  export const style = {
    'display': 'inline-flex'
  };
  export function initialize (el: HTMLElement) {
    const tabs = closest(el, 'sl-tabs');
    if (tabs) {
      el.setAttribute('small', tabs.getAttribute('small'));
    }
  }
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  export let active = false;
</script>
<!-- Template -->
<li class='sl-tab' class:active={active}>
  <button>
    <slot/>
  </button>
</li>
