<script setup>
  import { defineClientComponent } from 'vitepress';
	import Preview from '../../components/preview.vue';

  const PlaygroundLayout = defineClientComponent(() => {
    return import('../../components/playground/layout.vue')
  });
</script>

# Layout

A `sl-layout` component provides a way to create a fully customizable app layout.

## Slots

The component includes multiple slots to cover various layouts.

<Preview title="Playground">
  <PlaygroundLayout/>
</Preview>

``` typescript
// Initial Model - Then Saved to localStorage
const model = {
  type: 'splitter',
  direction: 'horizontal',
  blueSize: 30,
  minBlue: 20,
  items: [
    {
      type: 'tabs',
      splittable: false,
      droppable: false,
      items: [
        {
          name: 'View 0',
          viewSlot: 'view0',
          closable: true
        }
      ]
    },
    {
      type: 'splitter',
      direction: 'vertical',
      items: [
        {
          type: 'tabs',
          items: [
            {
              name: 'View 1',
              viewSlot: 'view1'
            },
            {
              name: 'View 2',
              viewSlot: 'view2'
            }
          ]
        },
        {
          type: 'tabs',
          items: [
            {
              name: 'Iframe',
              viewSlot: 'iframe',
              draggable: false
            },
            {
              name: 'View 3',
              viewSlot: 'view3',
              active: true,
              closable: true
            },
            {
              name: 'View 4',
              viewSlot: 'view4',
              closable: true
            }
          ]
        }
      ]
    }
  ]
};
```

``` html
<sl-layout>
  <div slot="iframe">
    <iframe src="https://bing.com"/>
  </div>
  <div slot="view0">View 0 (Content)</div>
  <div slot="view1">View 1 (Content)</div>
  <div slot="view2">View 2 (Content)</div>
  <div slot="view3">View 3 (Content)</div>
  <div slot="view4">View 4 (Content)</div>
</sl-layout>
```
