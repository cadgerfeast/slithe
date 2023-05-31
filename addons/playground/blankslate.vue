<template>
  <div class="playground-blankslate">
    <div class="content">
      <sl-blankslate>
        <sl-icon v-if="showGraphicSlot" slot="graphic" name="hubot" size="4em"/>
        <span v-if="showHeadingSlot" slot="heading">
          Bip boup bip...
        </span>
        <span v-if="showDefaultSlot">
          Hubot can help you find what you need...
        </span>
        <sl-button v-if="showActionsSlot" slot="actions" primary>Start Chat</sl-button>
      </sl-blankslate>
    </div>
    <sl-form>
      <sl-input-checkbox v-model="showGraphicSlot" label="Graphic"/>
      <sl-input-checkbox v-model="showHeadingSlot" label="Heading"/>
      <sl-input-checkbox v-model="showDefaultSlot" label="Default"/>
      <sl-input-checkbox v-model="showActionsSlot" label="Actions"/>
    </sl-form>
  </div>
</template>

<script lang="ts">
  // Helpers
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'PlaygroundBlankslate',
    data () {
      return {
        showGraphicSlot: true,
        showHeadingSlot: true,
        showDefaultSlot: true,
        showActionsSlot: true
      };
    }
  });
</script>

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
