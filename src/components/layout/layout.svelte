<!-- Metadata -->
<script context="module">
  export const tag = 'layout';
  export const style = {
    'display': 'block',
    'height': '100%'
  };
</script>
<!-- Options -->
<svelte:options tag={null}/>
<!-- Script -->
<script lang="ts">
  // TODO Reorder tabs
  // TODO Drag-n Drop tabs (VSCode dropzones)
  // TODO Dispatch change events
  // TODO slots should be displayed at correct position (sl-rel)
  // Types
  type TabModel = Model & {
    name: string;
    active?: boolean;
  }
  interface Tabs {
    type: 'tabs';
    items: TabModel[];
  }
  interface Splitter {
    type: 'splitter';
    direction: 'horizontal'|'vertical';
    items: [Model, Model];
  }
  interface View {
    type: 'view';
    viewSlot: string;
  }
  type Model = Tabs|Splitter|View;
  // Props
  export let model: Model = {
    type: 'tabs',
    items: []
  };
  // Computed
  $: slots = getViewSlots(model);
  // Methods
  function getViewSlots (_model: TabModel|Model) {
    const _slots: string[] = [];
    switch (_model.type) {
      case 'tabs':
      case 'splitter': {
        for (const child of _model.items) {
          _slots.push(...getViewSlots(child));
        }
        break;
      }
      case 'view': {
        _slots.push(_model.viewSlot);
        break;
      }
    }
    return _slots;
  }
</script>
<!-- Template -->
<div class="sl-layout">
  {#if model.type === 'tabs'}
    <!-- Tabs -->
    <sl-tabs>
      {#each model.items as child}
        <sl-tab active={child.active}>{child.name}</sl-tab>
      {/each}
    </sl-tabs>
  {:else if model.type === 'splitter'}
    <!-- Splitter -->
    <sl-splitter vertical={model.direction === 'vertical'}>
      <sl-layout slot="blue" model={model.items[0]}/>
      <sl-layout slot="green" model={model.items[1]}/>
    </sl-splitter>
  {:else}
    <!-- View -->
    <span>View {model.viewSlot}</span>
  {/if}
  <!-- Slots -->
  {#each slots as slot}
    <div class="slot-wrapper">
      {@html `<slot name="${slot}"/>`}
    </div>
  {/each}
</div>
