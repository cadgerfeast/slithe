<template>
  <div class="playground-card">
    <div class="content">
      <sl-card>
        <span v-if="showHeaderSlot" slot="header">Header Slot</span>
        <span v-if="showDefaultSlot">Default Slot</span>
        <span v-if="showFooterSlot" slot="footer">Footer Slot</span>
      </sl-card>
    </div>
    <sl-form>
      <sl-input-checkbox v-model="showHeaderSlot" label="Header"/>
      <sl-input-checkbox v-model="showDefaultSlot" label="Default"/>
      <sl-input-checkbox v-model="showFooterSlot" label="Footer"/>
    </sl-form>
  </div>
</template>

<script lang="ts">
  // Helpers
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'PlaygroundCard',
    data () {
      return {
        showHeaderSlot: true,
        showDefaultSlot: true,
        showFooterSlot: true
      };
    }
  });
</script>

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
