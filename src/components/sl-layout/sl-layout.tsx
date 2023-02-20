// Helpers
import { Component, Element, h, Prop, State, Fragment, Method, Event, EventEmitter, Watch } from '@stencil/core';
import Sortable, { SortableEvent } from 'sortablejs';
import {
  Model,
  computeModel,
  SplitterModel,
  TabsModel,
  resizeSplitterInModel,
  setActiveTabInModel,
  sortTabInModel,
  moveTabInModel,
  getChildModelIndexModel,
  ensureValidModel,
  isSlotVisibleInModel,
  dropTabInModel
} from '../../helpers/model';
import { closest, dnd, Position, querySelector, querySelectorAll } from '../../helpers/dom';
import { clone } from '../../helpers/object';
import { syncWithTheme } from '../../helpers/theme';
import { Deferred } from '../../helpers/time';

@Component({
  tag: 'sl-layout',
  styleUrl: 'sl-layout.scss',
  shadow: true
})
export class SlitheLayout {
  @Element() host!: HTMLSlLayoutElement;
  private tabsContainer!: HTMLSlTabsElement;
  private ready = new Deferred();
  private group!: string;
  private slotElements: Map<string, HTMLDivElement> = new Map();
  private animationId: number;
  // Props
  @Prop() model: Model = {
    id: crypto.randomUUID(),
    type: 'tabs',
    items: []
  };
  // State
  @State() root: boolean = false;
  @State() dragging: boolean = false;
  @State() _model: Model;
  @State() dropzoneState: Position = 'none';
  // Computed
  get slots () {
    return this.getSlots(this._model);
  }
  get dropzoneClass () {
    const classList = ['dropzone', `dragover-${this.dropzoneState}`];
    if (this.dragging) {
      classList.push('active');
    }
    return classList.join(' ');
  }
  // Events
  @Event() update: EventEmitter<Model>;
  // Methods
  @Method()
  async getGroup () {
    if (this.group) {
      return this.group;
    } else {
      const parentLayout = closest<HTMLSlLayoutElement>(this.host.parentElement, 'sl-layout');
      return !parentLayout ? crypto.randomUUID() : await parentLayout.getGroup();
    }
  }
  @Method()
  async getRootLayout (): Promise<HTMLSlLayoutElement> {
    if (this.root) {
      return this.host;
    } else {
      return closest<HTMLSlLayoutElement>(this.host.parentElement, 'sl-layout').getRootLayout();
    }
  }
  @Method()
  async moveTab ({ item, from, to, oldIndex, newIndex }: SortableEvent) {
    const tabModel = getChildModelIndexModel(this._model, item.id);
    this._model = ensureValidModel(moveTabInModel(this._model, tabModel, from.id, oldIndex, to.id, newIndex));
    this.emitUpdate();
  }
  @Method()
  async sortTab ({ item, oldIndex, newIndex }: SortableEvent) {
    this._model = sortTabInModel(this._model, item.id, oldIndex, newIndex);
    this.emitUpdate();
  }
  @Method()
  async selectTab (id: string) {
    this._model = setActiveTabInModel(this._model, id);
    this.emitUpdate();
  }
  @Method()
  async resizeSplitter (id: string, size: number) {
    this._model = resizeSplitterInModel(this._model, id, size);
    this.emitUpdate();
  }
  @Method()
  async dropTab (tabId: string, containerId: string, position: Position) {
    const tabModel = getChildModelIndexModel(this._model, tabId);
    this._model = ensureValidModel(dropTabInModel(this._model, tabModel, containerId, position));
    this.emitUpdate();
  }
  @Method()
  async setRootDragging (dragging: boolean) {
    const children = querySelectorAll<HTMLSlLayoutElement>(this.host, 'sl-layout');
    for (const child of children) {
      child.setDragging(dragging);
    }
  }
  @Method()
  async setDragging (dragging: boolean) {
    this.dragging = dragging;
    this.dropzoneState = 'none';
  }
  private getSlots (model: Model) {
    const slots: string[] = [];
    switch (model.type) {
      case 'tabs': {
        for (const child of model.items) {
          slots.push(child.viewSlot);
        }
        break;
      }
      case 'splitter': {
        for (const child of model.items) {
          slots.push(...this.getSlots(child));
        }
        break;
      }
    }
    return slots;
  }
  private async _selectTab (id: string) {
    if (this._model.type === 'tabs') {
      const rootLayout = await this.getRootLayout();
      await rootLayout.selectTab(id);
    }
  }
  private emitUpdate () {
    this.update.emit(clone(this._model));
  }
  private updateSlotPositions () {
    for (const [key, slotElement] of this.slotElements.entries()) {
      if (slotElement) {
        if (isSlotVisibleInModel(this._model, key)) {
          const target = querySelector(this.host, `div.slot-container.${key}`);
          if (target) {
            const hostRect = this.host.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            slotElement.style.display = 'block';
            slotElement.style.top = `${targetRect.top - hostRect.top}px`;
            slotElement.style.right = `${hostRect.right - targetRect.right}px`;
            slotElement.style.bottom = `${hostRect.bottom - targetRect.bottom}px`;
            slotElement.style.left = `${targetRect.left - hostRect.left}px`;
          }
        } else {
          slotElement.style.display = 'none';
        }
      }
    }
    this.animationId = requestAnimationFrame(this.updateSlotPositions.bind(this));
  }
  private async _setDragging (dragging: boolean) {
    const rootLayout = await this.getRootLayout();
    await rootLayout.setRootDragging(dragging);
  }
  // Watchers
  @Watch('model')
  onModelChanged(newModel: Model) {
    this._model = computeModel(newModel);
  }
  // Handlers
  private handleResizeStart () {
    this._setDragging(true);
  }
  private async handleResizeEnd (e: CustomEvent<number>) {
    e.stopPropagation();
    this._setDragging(false);
    if (this._model.type === 'splitter') {
      const rootLayout = await this.getRootLayout();
      await rootLayout.resizeSplitter(this._model.id, e.detail);
    }
  }
  private handleDropzoneDragEnter () {
    dnd.dropzone = true;
  }
  private handleDropzoneDragOver (e: DragEvent) {
    const target = e.target as HTMLDivElement;
    const pX = e.offsetX * 100 / target.offsetWidth;
    const pY = e.offsetY * 100 / target.offsetHeight;
    if (pX < 30) {
      this.dropzoneState = 'left';
    } else if (pX > 70) {
      this.dropzoneState = 'right';
    } else if (pY < 15) {
      this.dropzoneState = 'top';
    } else if (pY > 85) {
      this.dropzoneState = 'bottom';
    } else {
      this.dropzoneState = 'center';
    }
    e.preventDefault();
  }
  private handleDropzoneDragLeave () {
    dnd.dropzone = false;
    this.dropzoneState = 'none';
  }
  private async handleDropzoneDrop () {
    const rootLayout = await this.getRootLayout();
    await rootLayout.dropTab(dnd.item.id, this._model.id, this.dropzoneState);
  }
  // Lifecycle
  async connectedCallback () {
    syncWithTheme(this.host);
    this._model = computeModel(this.model);
    this.root = !closest<HTMLSlLayoutElement>(this.host.parentElement, 'sl-layout');
    this.group = await this.getGroup();
    this.ready.resolve();
  }
  async componentDidLoad () {
    await this.ready.promise;
    if (this.root) {
      this.animationId = requestAnimationFrame(this.updateSlotPositions.bind(this));
    }
    if (this._model.type === 'tabs') {
      Sortable.create(this.tabsContainer, {
        animation: 150,
        group: this.group,
        ghostClass: 'placeholder',
        chosenClass: 'picked',
        dragClass: 'dragged',
        dragoverBubble: true,
        onAdd: async (e) => {
          if (this._model.type === 'tabs') {
            if (!dnd.dropzone) {
              const rootLayout = await this.getRootLayout();
              await rootLayout.moveTab(e);
            }
          }
        },
        onRemove: ({ item }) => {
          item.remove();
        },
        onUpdate: async (e) => {
          if (this._model.type === 'tabs') {
            if (!dnd.dropzone) {
              const rootLayout = await this.getRootLayout();
              await rootLayout.sortTab(e);
            }
          }
        },
        onStart: ({ item }) => {
          dnd.item = item;
          this._setDragging(true);
        },
        onEnd: () => {
          dnd.item = null;
          this._setDragging(false);
          this.dropzoneState = 'none';
        }
      });
    }
  }
  componentDidRender () {
    if (this.root) {
      if (Array.from(this.slotElements.values()).includes(null)) {
        const elements = querySelectorAll<HTMLDivElement>(this.host, 'div.slot-wrapper');
        for (const element of elements) {
          this.slotElements.set(element.dataset.slot, element);
        }
      }
    }
  }
  disconnectedCallback () {
    cancelAnimationFrame(this.animationId);
  }
  // Template
  private renderTabs (tabs: TabsModel) {
    return (
      <Fragment>
        <sl-tabs id={tabs.id} ref={(el) => this.tabsContainer = el} small>
          {tabs.items.map((item) => (
            <sl-tab id={item.id} key={item.id} active={item.active} onClick={() => this._selectTab(item.id)}>{item.name}</sl-tab>
          ))}
        </sl-tabs>
        <div class="tab-content">
          {tabs.items.map((item) => (
            <div class={{ 'tab-view': true, 'active': item.active && !item.placeholder }}>
              <div class={`slot-container ${item.viewSlot}`}/>
            </div>
          ))}
          <div
            class={this.dropzoneClass}
            onDragEnter={() => this.handleDropzoneDragEnter()}
            onDragOver={(e) => this.handleDropzoneDragOver(e)}
            onDragLeave={() => this.handleDropzoneDragLeave()}
            onDrop={() => this.handleDropzoneDrop()}
          />
        </div>
      </Fragment>
    );
  }
  private renderSplitter (splitter: SplitterModel) {
    return (
      <sl-splitter vertical={splitter.direction === 'vertical'} blueSize={splitter.blueSize} onResizeStart={() => this.handleResizeStart()} onResizeEnd={(e) => this.handleResizeEnd(e)}>
        <sl-layout slot="blue" model={splitter.items[0]}/>
        <sl-layout slot="green" model={splitter.items[1]}/>
      </sl-splitter>
    );
  }
  private renderSlots () {
    return (
      <div class={{ 'slots': true, 'dragging': this.dragging }}>
        {this.slots.map((slot) => (
          <div data-slot={slot} ref={(el) => this.slotElements.set(slot, el)} class='slot-wrapper'>
            <slot name={slot}/>
          </div>
        ))}
      </div>
    );
  }
  render () {
    return (
      <div key={this._model.id} class='sl-layout'>
        {this._model.type === 'tabs' && this.renderTabs(this._model)}
        {this._model.type === 'splitter' && this.renderSplitter(this._model)}
        {this.root && this.renderSlots()}
      </div>
    );
  }
}
