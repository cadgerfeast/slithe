<template>
  <div class="playground-layout">
    <sl-layout :model.prop="model">
      <div slot="iframe">
        <iframe src="/pages/iframe.html"/>
      </div>
      <div slot="view0">View 0 (Content)</div>
      <div slot="view1">View 1 (Content)</div>
      <div slot="view2">View 2 (Content)</div>
      <div slot="view3">View 3 (Content)</div>
    </sl-layout>
  </div>
</template>

<script lang="ts">
  // Helpers
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'PlaygroundLayout',
    data () {
      return {
        model: {
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
        }
      };
    }
  });
</script>

<style lang="scss" scoped>
  div.playground-layout {
    height: 400px;
    > sl-layout {
      height: 400px;
    }
  }
</style>
