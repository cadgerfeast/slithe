<template>
  <div :class="['preview', $madoc.theme]">
    <slot/>
    <div v-if="title" class="label title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  // Helpers
  import { defineComponent, PropType } from 'vue';
  import { setTheme } from '../../dist';
  import primer from '../../themes/primer';
  export default defineComponent({
    name: 'Preview',
    props: {
      title: {
        type: String as PropType<string>,
        default: ''
      }
    },
    watch: {
      '$madoc.theme' () {
        setTheme(this.$madoc.theme, primer);
      }
    },
    created () {
      setTheme(this.$madoc.theme, primer);
    }
  });
</script>

<style lang="scss" scoped>
  div.preview {
    position: relative;
    padding: 2em;
    border: 1px solid #DDDDDD;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    &.light {
      background-color: #FDFDFD;
      color: #22272E;
    }
    &.dark {
      background-color: #0d1117;
      color: #ADBAC7;
    }
    > div.label {
      position: absolute;
      top: 5px;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      &.title {
        left: 5px;
        font-size: 12px;
        font-weight: 500;
        font-style: italic;
      }
    }
  }
</style>