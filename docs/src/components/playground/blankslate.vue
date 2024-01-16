<script lang="ts" setup>
  // Helpers
  import { ref } from 'vue';
  import { SlBlankslate, SlIcon, SlButton, SlInputCheckbox, SlForm } from '@slithe/vue';
  // State
  const showGraphicSlot = ref(true);
  const showHeadingSlot = ref(true);
  const showDefaultSlot = ref(true);
  const showActionsSlot = ref(true);
</script>

<template>
  <div class="playground-blankslate">
    <div class="content">
      <SlBlankslate>
        <SlIcon v-if="showGraphicSlot" slot="graphic" name="hubot" size="4em"/>
        <span v-if="showHeadingSlot" slot="heading">
          Bip boup bip...
        </span>
        <span v-if="showDefaultSlot">
          Hubot can help you find what you need...
        </span>
        <SlButton v-if="showActionsSlot" slot="actions" primary>Start Chat</SlButton>
      </SlBlankslate>
    </div>
    <SlForm>
      <SlInputCheckbox v-model:value="showGraphicSlot" label="Graphic"/>
      <SlInputCheckbox v-model:value="showHeadingSlot" label="Heading"/>
      <SlInputCheckbox v-model:value="showDefaultSlot" label="Default"/>
      <SlInputCheckbox v-model:value="showActionsSlot" label="Actions"/>
    </SlForm>
  </div>
</template>

<style lang="scss" scoped>
  div.playground-blankslate {
    display: flex;
    flex-direction: row;
    > div.content {
      width: 60%;
      > sl-blankslate {
        width: 100%;
        sl-icon {
          color: var(--pr-cornflower-blue);
        }
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
