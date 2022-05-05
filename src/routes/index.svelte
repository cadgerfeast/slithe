<script context="module">
  export const metadata = {
    title: 'toto'
  };
</script>

<script lang="ts">
  // Helpers
  import { registerFocus } from '../utils/a11y';
  // Assets
  import svelte from '../assets/svelte.svg';
  // Constants
  const autofocus = registerFocus();
</script>

<h1>Test1</h1>

<sl-button use:autofocus>aaaaa</sl-button>
<sl-nested>bbbbb</sl-nested>

<span>Texte de taille normale</span>

<sl-icon from="/themes/svelte/icons/icons.svg" name="download" size="19"/>
<sl-icon from="/themes/svelte/icons/icons.svg" name="arrow-left" size="19"/>
<sl-icon from="/themes/svelte/icons/icons.svg" name="edit" size="19"/>
<sl-icon from="/themes/svelte/icons/icons.svg" name="chevron" size="19"/>

<h2>Test11</h2>
<h2>Test12</h2>
<h1>Test2</h1>
<h2>Super Test</h2>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

<h3>Test211</h3>
<h4>Test2111</h4>
<h5>Test21111</h5>
<h6>Test211111</h6>
<h6>Test211112</h6>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis praesentium, velit ab corporis quia explicabo quam suscipit corrupti harum, cupiditate accusamus sit nihil tempore repellat doloribus, reprehenderit porro possimus ad.
