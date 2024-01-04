<script setup>
  import { ref } from 'vue';
	import Preview from '../../components/preview.vue';

  const popover = ref();
  const target = ref();
</script>

# Popover

A `sl-popover` component is an element that displays a view that relates to another element.

It's often used as a way to display action menus for buttons.

<Preview>
  <sl-button>
    <sl-icon name="kebab-horizontal"/>
  </sl-button>
  <sl-popover ref="popover">
    <div>Hello There!</div>
    <sl-button primary @click="popover.close()">Close</sl-button>
  </sl-popover>
</Preview>

``` html
<sl-button>
  <sl-icon name="kebab-horizontal"/>
</sl-button>
<sl-popover>
  <div>Hello There!</div>
  <sl-button primary>Close</sl-button>
</sl-popover>
```

## Attributes

### Target

Modifies the popover target. Popover will open itself when clicking on this element, and will position itself relatively.

Target defaults to previous sibling.

<Preview>
  <span>I'm a cool text, and <sl-keyboard ref="target">this element</sl-keyboard> as a popover!</span>
  <sl-popover :target="target">
    <span>That'w awesome</span>
  </sl-popover>
</Preview>

``` html
<span>I'm a cool text, and <sl-keyboard ref="target">this element</sl-keyboard> as a popover!</span>
<sl-popover :target="target">
  <span>That'w awesome</span>
</sl-popover>
```

### Position

Modifies the popover position relative to target.

Position defaults to `bottom`.

<Preview>
  <!-- Top -->
  <sl-button>Top</sl-button>
  <sl-popover position="top">I'm on top!</sl-popover>
  <!-- Right -->
  <sl-button>Right</sl-button>
  <sl-popover position="right">I'm on the right!</sl-popover>
  <!-- Bottom -->
  <sl-button>Bottom</sl-button>
  <sl-popover position="bottom">I'm at bottom!</sl-popover>
  <!-- Left -->
  <sl-button>Left</sl-button>
  <sl-popover position="left">I'm on the left!</sl-popover>
</Preview>

``` html
<!-- Top -->
<sl-button>Top</sl-button>
<sl-popover position="top">I'm on top!</sl-popover>
<!-- Right -->
<sl-button>Right</sl-button>
<sl-popover position="right">I'm on the right!</sl-popover>
<!-- Bottom -->
<sl-button>Bottom</sl-button>
<sl-popover position="bottom">I'm at bottom!</sl-popover>
<!-- Left -->
<sl-button>Left</sl-button>
<sl-popover position="left">I'm on the left!</sl-popover>
```

### Alignment

Modifies the popover alignment relative to target.

Alignment defaults to `start`.

<Preview>
  <!-- Start -->
  <sl-button>Start</sl-button>
  <sl-popover align="start">I'm at start!</sl-popover>
  <!-- Center -->
  <sl-button>Center</sl-button>
  <sl-popover align="center">I'm centered!</sl-popover>
  <!-- End -->
  <sl-button>End</sl-button>
  <sl-popover align="end">I'm at the end!</sl-popover>
  <!-- Justify -->
  <sl-button>Justify</sl-button>
  <sl-popover align="justify">I'm justified!</sl-popover>
</Preview>

``` html
<!-- Start -->
<sl-button>Start</sl-button>
<sl-popover align="start">I'm at start!</sl-popover>
<!-- Center -->
<sl-button>Center</sl-button>
<sl-popover align="center">I'm centered!</sl-popover>
<!-- End -->
<sl-button>End</sl-button>
<sl-popover align="end">I'm at the end!</sl-popover>
<!-- Justify -->
<sl-button>Justify</sl-button>
<sl-popover align="justify">I'm justified!</sl-popover>
```
