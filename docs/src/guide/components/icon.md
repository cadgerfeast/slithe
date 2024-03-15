<script setup>
	import Preview from '../../components/preview.vue';
</script>

# Icon

A `sl-icon` component provides a large set of glyphs to provide context for various use-cases.

<Preview>
  <sl-icon name="bug"/>
  <sl-icon name="law" size="24px"/>
  <sl-icon name="copilot" size="48px"/>
</Preview>

``` html
<sl-icon name="bug"/>
<sl-icon name="law" size="24px"/>
<sl-icon name="copilot" size="48px"/>
```

## Attributes

### Name

The icon name, should be part of icon list from current theme.

> If icon cannot be found, it uses a fallback icon.

<Preview>
  <sl-icon name="bug"/>
  <sl-icon name="does-not-exist"/>
</Preview>

``` html
<sl-icon name="bug"/>
<sl-icon name="does-not-exist"/>
```

### Size

Modifies the icon size, defaults to `1em`, that represents the current font-size.

<Preview>
  <sl-icon name="bug" size="2em"/>
</Preview>

``` html
<sl-icon name="bug" size="2em"/>
```

### Tooltip

Adds a tooltip text to provide more information.

<Preview>
  <sl-icon name="gift" tooltip="Something awesome hides inside!"/>
</Preview>

``` html
<sl-icon name="gift" tooltip="Something awesome hides inside!"/>
```
