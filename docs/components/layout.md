---
title: Slithe - Components - Layout
---
# Layout

A `sl-layout` component provides a way to create a fully customizable app layout.

## Slots

The component includes multiple slots to cover various layouts.

<Preview title="Playground">
  <PlaygroundLayout/>
</Preview>

``` javascript
// Model
const model = {
  type: 'splitter',
  direction: 'horizontal',
  items: [
    {
      type: 'tabs',
      items: [
        {
          name: 'View 0',
          type: 'view',
          viewSlot: 'view0'
        }
      ]
    },
    {
      type: 'splitter',
      direction: 'vertical',
      items: [
        {
          type: 'view',
          viewSlot: 'view1'
        },
        {
          type: 'tabs',
          items: [
            {
              name: 'Iframe',
              type: 'view',
              viewSlot: 'iframe'
            },
            {
              name: 'View 2',
              type: 'view',
              viewSlot: 'view2',
              active: true
            },
            {
              name: 'View 3',
              type: 'view',
              viewSlot: 'view3'
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
</sl-layout>
```
