<script setup>
	import { ref, onMounted, onUnmounted } from 'vue';
  import { getTheme } from 'slithe';
  import Preview from '../../components/preview.vue';
  // State
  const icons = ref(getTheme().theme.icons);
  // Handlers
  function handleThemeChange ({ detail: { theme } }) {
    icons.value = theme.icons;
  }
  // Lifecycle
  onMounted(() => {
    window.addEventListener('slithethemechange', handleThemeChange);
  });
  onUnmounted(() => {
    window.removeEventListener('slithethemechange', handleThemeChange);
  });
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

## List

Here's the list of current theme icons:

<Preview>
  <ul class="icon-list">
    <li class="icon-list-item" v-for="(svg, key) in icons" :key="key">
      <sl-icon :name="key" size="2em"/>
      <div>{{ key }}</div>
    </li>
  </ul>
</Preview>

<style lang="scss" scoped>
  ul.icon-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    > li.icon-list-item {
      margin: 0;
      width: 100px;
      height: 100px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
