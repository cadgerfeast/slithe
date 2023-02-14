<template>
  <div class="playground-layout">
    <sl-layout :model.prop="model" @change="onChange">
      <div class="slot-content" slot="iframe">
        <iframe src="/pages/iframe.html"/>
      </div>
      <div class="slot-content" slot="view0">View 0 (Content)</div>
      <div class="slot-content" slot="view1">View 1 (Content)</div>
      <div class="slot-content" slot="view2">View 2 (Content)</div>
      <div class="slot-content" slot="view3">View 3 (Content)</div>
      <div class="slot-content" slot="view4">View 4 (Content)</div>
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
                  viewSlot: 'view0'
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
                      viewSlot: 'iframe'
                    },
                    {
                      name: 'View 3',
                      viewSlot: 'view3',
                      active: true
                    },
                    {
                      name: 'View 4',
                      viewSlot: 'view4'
                    }
                  ]
                }
              ]
            }
          ]
        }
      };
    },
    methods: {
      onChange (e: CustomEvent) {
        // TODO keep in localStorage and load
      }
    }
  });
</script>

<style lang="scss" scoped>
  div.playground-layout {
    height: 400px;
    > sl-layout {
      height: 400px;
      > div.slot-content {
        height: 100%;
        > iframe {
          display: block;
          height: 100%;
          width: 100%;
          border: none;
        }
      }
    }
  }
</style>
