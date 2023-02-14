<template>
  <div class="playground-layout">
    <sl-button class="reset" small borderless @click="reset">
      <sl-icon name="sync"/>
    </sl-button>
    <sl-layout :key="render" :model.prop="model" @change="onChange">
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
  // Constants
  const defaultModel = {
    id: window.crypto.randomUUID(),
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
  };

  export default defineComponent({
    name: 'PlaygroundLayout',
    data () {
      const saved = localStorage?.getItem('slithe.playground.layout.model');
      return {
        render: 0,
        model: saved ? JSON.parse(saved) : defaultModel
      };
    },
    methods: {
      reset () {
        localStorage.removeItem('slithe.playground.layout.model');
        this.model = defaultModel;
        this.render++;
      },
      onChange (e: CustomEvent) {
        if (localStorage) {
          localStorage.setItem('slithe.playground.layout.model', JSON.stringify(e.detail));
        }
      }
    }
  });
</script>

<style lang="scss" scoped>
  div.playground-layout {
    position: relative;
    height: 400px;
    > sl-button.reset {
      position: absolute;
      top: -1.5em;
      right: -1.5em;
    }
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
