<script context="module">
  export const metadata = {
    title: 'toto'
  };
</script>

<script lang="ts">
  // Helpers
  import { registerFocus } from '../utils/a11y';
  // Constants
  const autofocus = registerFocus();
</script>

<sl-button use:autofocus>aaaaa</sl-button>
<sl-nested>bbbbb</sl-nested>
