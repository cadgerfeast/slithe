<script lang="ts" setup>
  // Props
  const props = defineProps<{
    title?: string;
  }>();
</script>

<template>
  <div class="preview">
    <slot/>
    <div v-if="props.title" class="label title">
      <span>{{ props.title }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  div.preview {
    position: relative;
    padding: 2em;
    background-color: var(--vp-c-bg-alt);
    border-radius: 8px;
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