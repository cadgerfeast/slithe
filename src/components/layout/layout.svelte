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
  import { draggable, droplist, dropzone, getRootElement, querySelector, type DropPosition } from '../../helpers/dom';
  import { uuid } from '../../helpers/string';
  // TODO fix removed tabs
  // TODO fix slot refs
  // TODO send change event only on drop/change active tab
  // Types
  type TabModel = {
    id: string;
    name: string;
    viewSlot: string;
    active: boolean;
    placeholder?: boolean;
  }
  type TabsModel = {
    id: string;
    type: 'tabs';
    items: TabModel[];
  }
  type SplitterModel = {
    id: string;
    type: 'splitter';
    direction: 'horizontal'|'vertical';
    items: [Model, Model];
  }
  type Model = TabsModel|SplitterModel;
  // Props
  export let model: Model = {
    id: uuid(),
    type: 'tabs',
    items: []
  };
  export let parented = false;
  // Data
  let dragging = false;
  let root: HTMLDivElement;
  let wrapper: HTMLElement;
  let droplistElement: HTMLDivElement;
  let slotRels = [];
  let curModel = computeModel(model);
  // Reactive
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
  $: {
    dragging;
    emitDragState();
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
  function computeModel <T extends Model> (_model: T): T {
    const res = {..._model};
    res.id = res.id || uuid();
    switch (res.type) {
      case 'tabs': {
        let hasActive = false;
        if (res.items.length > 0) {
          for (let i = 0; i < res.items.length; i++) {
            res.items[i].id = res.items[i].id || uuid();
            hasActive = hasActive || res.items[i].active;
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
  function computeChangedModel <T extends Model> (_model: T): T {
    const res = {..._model};
    return JSON.parse(JSON.stringify(res));
  }
  function getViewSlots (_model: Model) {
    const _slots: string[] = [];
    switch (_model.type) {
      case 'tabs': {
        for (const child of _model.items) {
          _slots.push(child.viewSlot);
        }
        break;
      }
      case 'splitter': {
        for (const child of _model.items) {
          _slots.push(...getViewSlots(child));
        }
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
    const items = [...curModel.items] as TabModel[];
    updateTabItems(items.map((i) => { return { ...i, active: i.id === id }; }));
  }
  function ensureActiveTab () {
    const items = [...curModel.items] as TabModel[];
    let asActive = false;
    for (const item of items) {
      asActive = asActive || item.active;
    }
    if (!asActive && items.length > 0) {
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
    if (parented) {
      wrapper.dispatchEvent(new CustomEvent('_change', { detail: curModel }));
    } else {
      wrapper.dispatchEvent(new CustomEvent('change', { detail: computeChangedModel(curModel) }));
    }
  }
  function emitDragState () {
    if (parented) {
      wrapper.dispatchEvent(new CustomEvent('drag-state', { detail: dragging }));
    }
  }
  // Handlers
  function onDragStart (dragItem) {
    dragging = true;
    const items = [...curModel.items] as TabModel[];
    const index = items.findIndex((i) => i.id === dragItem.item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    updateTabItems(items);
  }
  function onDragLeave ({ item }) {
    const items = [...curModel.items] as TabModel[];
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    updateTabItems(items);
  }
  function onDragOver (dragItem, newIndex: number) {
    const items = [...curModel.items] as TabModel[];
    const index = items.findIndex((i) => i.id === dragItem.item.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    items.splice(newIndex, 0, { ...dragItem.item, placeholder: true });
    updateTabItems(items);
  }
  function onDropTab ({ item, startIndex, dropContainer }) {
    dragging = false;
    const items = [...curModel.items] as TabModel[];
    if (!dropContainer) {
      items.splice(startIndex, 0, item);
    }
    updateTabItems(items.map((i) => { return { ...i, placeholder: false }; }));
    setActiveTab(item.id);
    ensureNonEmptyTabs();
  }
  function ensureNonEmptyTabs () {
    switch (curModel.type) {
      case 'tabs': {
        if (curModel.items.length === 0) {
          wrapper.dispatchEvent(new CustomEvent('remove-tabs', { detail: curModel.id }));
        } else {
          ensureActiveTab();
        }
        break;
      }
      case 'splitter': {
        if (curModel.items[0].items.length === 0) {
          curModel = curModel.items[1];
        } else if (curModel.items[1].items.length === 0) {
          curModel = curModel.items[0];
        }
        break;
      }
    }
  }
  function onDropInsideDroplist ({ item }) {
    dragging = false;
    const items = [...curModel.items] as TabModel[];
    updateTabItems(items.map((i) => { return { ...i, placeholder: false }; }));
    setActiveTab(item.id);
  }
  function onDropInsideDropzone (dragItem, position: DropPosition) {
    switch (position) {
      case 'top': {
        const tabs: TabsModel = {
          id: uuid(),
          type: 'tabs',
          items: [dragItem.item]
        };
        const splitter: SplitterModel = {
          type: 'splitter',
          id: uuid(),
          direction: 'vertical',
          items: [
            tabs,
            curModel
          ]
        };
        curModel = splitter;
        break;
      }
      case 'right': {
        const tabs: TabsModel = {
          id: uuid(),
          type: 'tabs',
          items: [dragItem.item]
        };
        const splitter: SplitterModel = {
          type: 'splitter',
          id: uuid(),
          direction: 'horizontal',
          items: [
            curModel,
            tabs
          ]
        };
        curModel = splitter;
        break;
      }
      case 'bottom': {
        const tabs: TabsModel = {
          id: uuid(),
          type: 'tabs',
          items: [dragItem.item]
        };
        const splitter: SplitterModel = {
          type: 'splitter',
          id: uuid(),
          direction: 'vertical',
          items: [
            curModel,
            tabs
          ]
        };
        curModel = splitter;
        break;
      }
      case 'left': {
        const tabs: TabsModel = {
          id: uuid(),
          type: 'tabs',
          items: [dragItem.item]
        };
        const splitter: SplitterModel = {
          type: 'splitter',
          id: uuid(),
          direction: 'horizontal',
          items: [
            tabs,
            curModel
          ]
        };
        curModel = splitter;
        break;
      }
      case 'center': {
        const items = [...curModel.items] as TabModel[];
        items.push(dragItem.item);
        updateTabItems(items);
        setActiveTab(dragItem.item.id);
        break;
      }
    }
    ensureNonEmptyTabs();
    emitChange();
    computeSlotRels();
  }
  function handleChange (e: CustomEvent) {
    const index = curModel.items.findIndex((i) => i.id === e.detail.id);
    curModel.items[index] = e.detail;
    emitChange();
    computeSlotRels();
  }
  function handleDragState (e: CustomEvent) {
    dragging = e.detail;
    emitDragState();
  }
  function handeResizeStart () {
    dragging = true;
    emitDragState();
  }
  function handeResizeEnd () {
    dragging = false;
    emitDragState();
  }
  function handleRemoveTabs (e: CustomEvent) {
    curModel = (curModel as SplitterModel).items.find((i) => i.id !== e.detail);
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
  {#key curModel.id}
    {#if curModel.type === 'tabs'}
      <!-- Tabs -->
      <nav class='sl-tabs'>
        <ul>
          <div bind:this={droplistElement} class="droplist" use:droplist={{ onDragOver, onDragLeave, onDrop: onDropInsideDroplist }}>
            {#each curModel.items as child, index (child.id)}
              <div id={child.id} class="dragitem" class:placeholder={child.placeholder} use:draggable={{ item: child, startIndex: index, generateClone, onDragStart, onDrop: onDropTab }} animate:flip={{ duration: 200 }}>
                <li class='sl-tab' class:active={child.active}>
                  <button on:click={() => setActiveTab(child.id)}>{child.name}</button>
                </li>
              </div>
            {/each}
          </div>
        </ul>
      </nav>
      <div class="tab-content">
        <div class="dropzone" use:dropzone={{ onDrop: onDropInsideDropzone }}/>
        {#each curModel.items as child (child.id)}
          <div class="tab-view" class:active={child.active && !child.placeholder}>
            <div class={`slot-container ${child.viewSlot}`}/>
          </div>
        {/each}
      </div>
    {:else if curModel.type === 'splitter'}
      <!-- Splitter -->
      <sl-splitter vertical={curModel.direction === 'vertical'} on:resize-start={handeResizeStart} on:resize-end={handeResizeEnd}>
        <sl-layout slot="blue" parented={true} model={curModel.items[0]} on:_change={handleChange} on:drag-state={handleDragState} on:remove-tabs={handleRemoveTabs}/>
        <sl-layout slot="green" parented={true} model={curModel.items[1]} on:_change={handleChange} on:drag-state={handleDragState} on:remove-tabs={handleRemoveTabs}/>
      </sl-splitter>
    {/if}
    <!-- Slots -->
    {#if !parented}
      <div class="rels" class:dragging={dragging}>
        {#each slotRels as slotRel}
          <sl-rel for={slotRel.target}>
            {@html `<slot name="${slotRel.name}"/>`}
          </sl-rel>
        {/each}
      </div>
    {/if}
  {/key}
</div>
