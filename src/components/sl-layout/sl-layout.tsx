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
  ensureValidModel
} from '../../helpers/model';
import { closest, querySelector, attachToElement } from '../../helpers/dom';
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
  // Computed
  get slots () {
    return this.getSlots(this._model);
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
  private attachSlotContainers () {
    for (const [key, slotElement] of this.slotElements.entries()) {
      const target = querySelector(this.host, `div.slot-container.${key}`);
      attachToElement(slotElement, target);
      // TODO should set position absolute, relative to layout
      // TODO update when splitters are moving, trigger update
      // TODO update on container resize also
      // TODO update after render
    }
  }
  // Watchers
  @Watch('model')
  onModelChanged(newModel: Model) {
    this._model = computeModel(newModel);
  }
  // Handlers
  private handleResizeStart () {
    this.dragging = true;
  }
  private async handleResizeEnd (e: CustomEvent<number>) {
    this.dragging = false;
    if (this._model.type === 'splitter') {
      const rootLayout = await this.getRootLayout();
      await rootLayout.resizeSplitter(this._model.id, e.detail);
    }
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
    this.attachSlotContainers();
    if (this._model.type === 'tabs') {
      Sortable.create(this.tabsContainer, {
        animation: 150,
        group: this.group,
        ghostClass: 'placeholder',
        chosenClass: 'picked',
        dragClass: 'dragged',
        onAdd: async (e) => {
          if (this._model.type === 'tabs') {
            const rootLayout = await this.getRootLayout();
            await rootLayout.moveTab(e);
          }
        },
        onRemove: ({ item }) => {
          item.remove();
        },
        onUpdate: async (e) => {
          if (this._model.type === 'tabs') {
            const rootLayout = await this.getRootLayout();
            await rootLayout.sortTab(e);
          }
        },
        onStart: () => {
          this.dragging = true;
        },
        onEnd: () => {
          this.dragging = false;
        }
      });
    }
  }
  // Template
  private renderTabs (tabs: TabsModel) {
    // TODO dropzones
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
          <div ref={(el) => this.slotElements.set(slot, el)} class='slot-wrapper'>
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
