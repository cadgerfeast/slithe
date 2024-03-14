<script setup>
	import Preview from '../../components/preview.vue';
</script>

# Flash

A `sl-flash` component is an element that informing the user about resulting async actions.

<Preview>
  <sl-flash>Everything works perfectly.</sl-flash>
</Preview>

``` html
<sl-flash>Everything works perfectly.</sl-flash>
```

## Attributes

### Type

Modifies the flash style, defaults to `info`.

<Preview>
  <sl-flash type="info">Info</sl-flash>
  <sl-flash type="success">Success</sl-flash>
  <sl-flash type="warn">Warning</sl-flash>
  <sl-flash type="error">Error</sl-flash>
</Preview>

``` html
<sl-flash type="info">Info</sl-flash>
<sl-flash type="success">Success</sl-flash>
<sl-flash type="warn">Warning</sl-flash>
<sl-flash type="error">Error</sl-flash>
```

### Icon

Modifies the flash icon, defaults to `none`.

<Preview>
  <sl-flash>No icon</sl-flash>
  <sl-flash type="warn" icon="alert">Alert Icon</sl-flash>
  <sl-flash type="error" icon="bug">Bug icon</sl-flash>
</Preview>

``` html
<sl-flash>No icon</sl-flash>
<sl-flash type="warn" icon="alert">Alert Icon</sl-flash>
<sl-flash type="error" icon="bug">Bug icon</sl-flash>
```
