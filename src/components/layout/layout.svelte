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
    blueSize: number;
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
  let lastId = curModel.id;
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
  function updateModel (newModel: Model) {
    lastId = curModel.id;
    curModel = JSON.parse(JSON.stringify(newModel));
  }
  async function computeSlotRels () {
    if (!parented) {
      await tick();
      slotRels = slots.map((slot) => {
        return {
          name: slot,
          target: getSlotContainer(slot)
        };
      });
    }
  }
  function computeModel <T extends Model> (_model: T): T {
    const res = JSON.parse(JSON.stringify(_model)) as T;
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
        res.blueSize = res.blueSize || 50;
        for (let i = 0; i < res.items.length; i++) {
          res.items[i] = computeModel(res.items[i]);
        }
        break;
      }
    }
    return res;
  }
  function computeChangedModel <T extends Model> (_model: T): T {
    return JSON.parse(JSON.stringify(_model));
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
  function ensureNonEmptySplitterChild () {
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
          updateModel(curModel.items[1]);
        } else if (curModel.items[1].items.length === 0) {
          updateModel(curModel.items[0]);
        }
        break;
      }
    }
  }
  function getSlotContainer (slot: string) {
    return querySelector(root, `div.slot-container.${slot}`);
  }
  function updateTabItems (items: TabModel[]) {
    curModel.items = items;
    emitLayoutUpdate();
  }
  function emitLayoutUpdate () {
    if (parented) {
      wrapper.dispatchEvent(new CustomEvent('layout-update', { detail: { oldId: lastId, newModel: curModel} }));
    }
    computeSlotRels();
  }
  function emitChange () {
    if (parented) {
      wrapper.dispatchEvent(new CustomEvent('change', { detail: { oldId: lastId, newModel: curModel} }));
    } else {
      wrapper.dispatchEvent(new CustomEvent('change', { detail: computeChangedModel(curModel) }));
    }
    computeSlotRels();
  }
  function emitDragState () {
    if (parented) {
      wrapper.dispatchEvent(new CustomEvent('drag-state', { detail: dragging }));
    }
  }
  // Handlers
  function onTabClick (id: string) {
    setActiveTab(id);
    emitChange();
  }
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
    ensureNonEmptySplitterChild();
    emitChange();
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
          blueSize: 50,
          items: [
            tabs,
            curModel
          ]
        };
        updateModel(splitter);
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
          blueSize: 50,
          items: [
            curModel,
            tabs
          ]
        };
        updateModel(splitter);
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
          blueSize: 50,
          items: [
            curModel,
            tabs
          ]
        };
        updateModel(splitter);
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
          blueSize: 50,
          items: [
            tabs,
            curModel
          ]
        };
        updateModel(splitter);
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
    ensureNonEmptySplitterChild();
    emitLayoutUpdate();
  }
  function handleChange (e: CustomEvent) {
    const { oldId, newModel } = e.detail;
    let index = curModel.items.findIndex((i) => i.id === newModel.id);
    if (index === -1) {
      index = curModel.items.findIndex((i) => i.id === oldId);
    }
    curModel.items[index] = newModel;
    emitChange();
  }
  function handleLayoutUpdate (e: CustomEvent) {
    const { oldId, newModel } = e.detail;
    let index = curModel.items.findIndex((i) => i.id === newModel.id);
    if (index === -1) {
      index = curModel.items.findIndex((i) => i.id === oldId);
    }
    curModel.items[index] = newModel;
    emitLayoutUpdate();
  }
  function handleDragState (e: CustomEvent) {
    dragging = e.detail;
    emitDragState();
  }
  function handeResizeStart () {
    dragging = true;
    emitDragState();
  }
  function handeResizeEnd (e: CustomEvent) {
    dragging = false;
    emitDragState();
    (curModel as SplitterModel).blueSize = e.detail;
    emitLayoutUpdate();
    emitChange();
  }
  function handleRemoveTabs (e: CustomEvent) {
    const keep = (curModel as SplitterModel).items.find((i) => i.id !== e.detail);
    updateModel(keep);
    emitLayoutUpdate();
  }
  // Lifecycle
  onMount(() => {
    updateModel(computeModel(model));
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
                  <button on:click={() => onTabClick(child.id)}>{child.name}</button>
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
      <sl-splitter vertical={curModel.direction === 'vertical'} bluesize={curModel.blueSize} on:resize-start={handeResizeStart} on:resize-end={handeResizeEnd}>
        <sl-layout slot="blue" parented={true} model={curModel.items[0]} on:change={handleChange} on:layout-update={handleLayoutUpdate} on:drag-state={handleDragState} on:remove-tabs={handleRemoveTabs}/>
        <sl-layout slot="green" parented={true} model={curModel.items[1]} on:change={handleChange} on:layout-update={handleLayoutUpdate} on:drag-state={handleDragState} on:remove-tabs={handleRemoveTabs}/>
      </sl-splitter>
    {/if}
  {/key}
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
</div>
