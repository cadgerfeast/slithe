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
      <sl-form-control label="Header">
        <sl-input-checkbox v-model="showHeaderSlot"/>
      </sl-form-control>
      <sl-form-control label="Default">
        <sl-input-checkbox v-model="showDefaultSlot"/>
      </sl-form-control>
      <sl-form-control label="Footer">
        <sl-input-checkbox v-model="showFooterSlot"/>
      </sl-form-control>
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
    }
    > sl-form {
      width: 40%;
      padding-left: 2em;
    }
  }
</style>
