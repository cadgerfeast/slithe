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
  import { onMount, tick } from 'svelte';
  import { flip } from 'svelte/animate';
  import { draggable, droplist, getRootElement, querySelector } from '../../helpers/dom';
  import { uuid } from '../../helpers/string';
  // TODO keep only one tab-view (ignore the one currently dragged)
  // TODO Dispatch change events (updated JSON from root)
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
  export let child = false;
  // Data
  let root: HTMLDivElement;
  let wrapper: HTMLElement;
  let slotRels = [];
  let curModel = computeModel(model);
  // Computed
  $: slots = getViewSlots(curModel);
  $: {
    slots;
    computeSlotRels();
  }
  $: {
    root;
    if (root) {
      wrapper = getRootElement(root);
    }
  }
  // Methods
  async function computeSlotRels () {
    await tick();
    slotRels = slots.map((slot) => {
      return {
        name: slot,
        target: getSlotContainer(slot)
      };
    });
  }
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
  function setActiveTab (id: string) {
    let asActive = false;
    const items = [...curModel.items];
    for (const item of items) {
      item.active = item.id === id;
      asActive = asActive || item.active;
    }
    if (!asActive) {
      items[0].active = true;
    }
    updateTabItems(items);
  }
  function getSlotContainer (slot: string) {
    return querySelector(root, `div.slot-container.${slot}`);
  }
  function updateTabItems (items: TabModel[]) {
    curModel.items = items;
    emitChange();
  }
  function emitChange () {
    wrapper.dispatchEvent(new CustomEvent('change', { detail: curModel }));
  }
  // Handlers
  function onDragStart ({ item }) {
    const items = [...curModel.items];
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    updateTabItems(items);
  }
  function onDragLeave ({ item }) {
    const items = [...curModel.items];
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    updateTabItems(items);
  }
  function onDragOver ({ item }, newIndex: number) {
    const items = [...curModel.items];
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    items.splice(newIndex, 0, { ...item, placeholder: true });
    updateTabItems(items);
  }
  function onDrop ({ item, startIndex, dropContainer }) {
    const items = [...curModel.items];
    if (!dropContainer) {
      items.splice(startIndex, 0, item);
    }
    updateTabItems(items.map((i) => { return { ...i, placeholder: false }; }));
    setActiveTab(item.id);
  }
  function onDropInside ({ item }) {
    const items = [...curModel.items];
    updateTabItems(items.map((i) => { return { ...i, placeholder: false }; }));
    setActiveTab(item.id);
  }
  function handleChange () {
    emitChange();
    computeSlotRels();
  }
  // Lifecycle
  onMount(() => {
    curModel = computeModel(model);
  });
</script>
<!-- Template -->
<div bind:this={root} class="sl-layout">
  {#if curModel.type === 'tabs'}
    <!-- Tabs -->
    <nav class='sl-tabs'>
      <ul>
        <div class="droplist" use:droplist={{ onDragOver, onDragLeave, onDropInside }}>
          {#each curModel.items as child, index (child.id)}
            <div id={child.id} class="dragitem" class:placeholder={child.placeholder} use:draggable={{ item: child, startIndex: index, generateClone, onDragStart, onDrop }} animate:flip={{ duration: 200 }}>
              <li class='sl-tab' class:active={child.active}>
                <button on:click={() => setActiveTab(child.id)}>{child.name}</button>
              </li>
            </div>
          {/each}
        </div>
      </ul>
    </nav>
    {#each curModel.items as child (child.id)}
      <div class="tab-view" class:active={child.active}>
        <sl-layout model={child} child={true} on:change={handleChange}/>
      </div>
    {/each}
  {:else if curModel.type === 'splitter'}
    <!-- Splitter -->
    <sl-splitter vertical={curModel.direction === 'vertical'}>
      <sl-layout slot="blue" child={true} model={curModel.items[0]} on:change={handleChange}/>
      <sl-layout slot="green" child={true} model={curModel.items[1]} on:change={handleChange}/>
    </sl-splitter>
  {:else}
    <!-- View -->
    <div class={`slot-container ${curModel.viewSlot}`}/>
  {/if}
  <!-- Slots -->
  {#if !child}
    {#each slotRels as slotRel}
      <sl-rel for={slotRel.target}>
        {@html `<slot name="${slotRel.name}"/>`}
      </sl-rel>
    {/each}
  {/if}
</div>
