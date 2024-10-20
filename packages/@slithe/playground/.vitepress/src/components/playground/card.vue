<script lang="ts" setup>
  // Helpers
  import { ref } from 'vue';
  import { SlInputCheckbox, SlForm, SlCard } from '@slithe/vue';
  // State
  const showHeaderSlot = ref(true);
  const showDefaultSlot = ref(true);
  const showFooterSlot = ref(true);
</script>

<template>
  <div class="playground-card">
    <div class="content">
      <SlCard>
        <span v-if="showHeaderSlot" slot="header">Header Slot</span>
        <span v-if="showDefaultSlot">Default Slot</span>
        <span v-if="showFooterSlot" slot="footer">Footer Slot</span>
      </SlCard>
    </div>
    <SlForm>
      <SlInputCheckbox v-model:value="showHeaderSlot" label="Header"/>
      <SlInputCheckbox v-model:value="showDefaultSlot" label="Default"/>
      <SlInputCheckbox v-model:value="showFooterSlot" label="Footer"/>
    </SlForm>
  </div>
</template>

<style lang="scss" scoped>
  div.playground-card {
    display: flex;
    flex-direction: row;
    > div.content {
      width: 60%;
      > sl-card {
        width: 100%;
      }
    }
    > sl-form {
      width: 40%;
      padding-left: 2em;
      > sl-input-checkbox {
        display: flex;
      }
    }
  }
</style>
