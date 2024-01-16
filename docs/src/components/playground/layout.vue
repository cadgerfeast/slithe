<script lang="ts" setup>
  // Helpers
  import { ref } from 'vue';
  import { SlButton, SlIcon, SlLayout } from '@slithe/vue';
  // Constants
  const storedModel = localStorage?.getItem('slithe.playground.layout.model');
  const defaultModel = {
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
  // State
  const render = ref(0);
  const model = ref(storedModel ? JSON.parse(storedModel) : defaultModel);
  // Methods
  function reset () {
    localStorage.removeItem('slithe.playground.layout.model');
    model.value = defaultModel;
    render.value++;
  }
  function onUpdate (e: CustomEvent) {
    if (localStorage) {
      localStorage.setItem('slithe.playground.layout.model', JSON.stringify(e.detail));
    }
  }
</script>

<template>
  <div class="playground-layout">
    <SlButton class="reset" small borderless @click="reset">
      <SlIcon name="sync"/>
    </SlButton>
    <SlLayout :key="render" :model.prop="model" @update="onUpdate">
      <div class="slot-content" slot="iframe">
        <iframe src="/iframe.html"/>
      </div>
      <div class="slot-content" slot="view0">View 0 (Content)</div>
      <div class="slot-content" slot="view1">View 1 (Content)</div>
      <div class="slot-content" slot="view2">View 2 (Content)</div>
      <div class="slot-content" slot="view3">View 3 (Content)</div>
      <div class="slot-content" slot="view4">View 4 (Content)</div>
    </SlLayout>
  </div>
</template>

<style lang="scss" scoped>
  div.playground-layout {
    position: relative;
    height: 400px;
    padding-top: 15px;
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
