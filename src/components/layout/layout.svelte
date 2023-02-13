<!-- Metadata -->
<script lang="ts" context="module">
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
  // Helpers
  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  import { draggable, droplist } from '../../helpers/dom';
  import { uuid } from '../../helpers/string';
  // TODO change active tabs
  // TODO slots should be displayed at correct position (sl-rel)
  // TODO Dispatch change events
  // TODO Dropzones
  // Types
  type TabModel = Model & {
    name: string;
    index?: number;
    active?: boolean;
    placeholder?: boolean;
  }
  interface Tabs {
    id?: string;
    type: 'tabs';
    items: TabModel[];
  }
  interface Splitter {
    id?: string;
    type: 'splitter';
    direction: 'horizontal'|'vertical';
    items: [Model, Model];
  }
  interface View {
    id?: string;
    type: 'view';
    viewSlot: string;
  }
  type Model = Tabs|Splitter|View;
  // Props
  export let model: Model = {
    type: 'tabs',
    items: []
  };
  // Data
  let curModel = computeModel(model);
  // Computed
  $: slots = getViewSlots(curModel);
  // Methods
  function computeModel <T extends TabModel|Model> (_model: T): T {
    const res = {..._model};
    res.id = res.id || uuid();
    switch (res.type) {
      case 'tabs': {
        let hasActive = false;
        if (res.items.length > 0) {
          for (let i = 0; i < res.items.length; i++) {
            hasActive = hasActive || res.items[i].active;
            res.items[i] = {
              index: i,
              ...computeModel(res.items[i])
            };
          }
          if (!hasActive) {
            res.items[0].active = true;
          }
        }
        break;
      }
      case 'splitter': {
        for (let i = 0; i < res.items.length; i++) {
          res.items[i] = computeModel(res.items[i]);
        }
        break;
      }
    }
    return res;
  }
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
  function generateClone (item: TabModel) {
    const tab = document.createElement('sl-tab');
    if (item.active) {
      tab.setAttribute('active', '');
    }
    tab.innerText = item.name;
    return tab;
  }
  // Handlers
  function onDragStart ({ item }) {
    const items = [...curModel.items];
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    curModel.items = items;
  }
  function onDragLeave ({ item }) {
    const items = [...curModel.items];
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    curModel.items = items;
  }
  function onDragOver ({ item }, newIndex: number) {
    const items = [...curModel.items];
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    items.splice(newIndex, 0, { ...item, placeholder: true });
    curModel.items = items;
  }
  function onDrop ({ item, dragContainer, dropContainer }) {
    const items = [...curModel.items];
    if (!dropContainer) {
      items.splice(item.startIndex, 0, item);
    }
    curModel.items = items.map((i) => { return { ...i, placeholder: false }; });
  }
  function onDropInside () {
    const items = [...curModel.items];
    curModel.items = items.map((i) => { return { ...i, placeholder: false }; });
  }
  // Lifecycle
  onMount(() => {
    curModel = computeModel(model);
  });
</script>
<!-- Template -->
<div class="sl-layout">
  {#if curModel.type === 'tabs'}
    <!-- Tabs -->
    <nav class='sl-tabs'>
      <ul>
        <div class="droplist" use:droplist={{ onDragOver, onDragLeave, onDropInside }}>
          {#each curModel.items as child (child.id)}
            <div id={child.id} class="dragitem" class:placeholder={child.placeholder} use:draggable={{ item: child, generateClone, onDragStart, onDrop }} animate:flip={{ duration: 200 }}>
              <li class='sl-tab' class:active={child.active}>
                <button>{child.name}</button>
              </li>
            </div>
          {/each}
        </div>
      </ul>
    </nav>
  {:else if curModel.type === 'splitter'}
    <!-- Splitter -->
    <sl-splitter vertical={curModel.direction === 'vertical'}>
      <sl-layout slot="blue" model={curModel.items[0]}/>
      <sl-layout slot="green" model={curModel.items[1]}/>
    </sl-splitter>
  {:else}
    <!-- View -->
    <span>View {curModel.viewSlot}</span>
  {/if}
  <!-- Slots -->
  {#each slots as slot}
    <div class="slot-wrapper">
      {@html `<slot name="${slot}"/>`}
    </div>
  {/each}
</div>
