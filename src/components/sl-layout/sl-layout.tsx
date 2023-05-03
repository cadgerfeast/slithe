// Helpers
import { Component, Element, h, Prop, State, Fragment, Method, Event, EventEmitter, Watch } from '@stencil/core';
// import Sortable, { SortableEvent } from 'sortablejs';
import {
  Model,
  computeModel,
  SplitterModel,
  TabsModel,
  resizeSplitterInModel,
  setActiveTabInModel,
  removeTabInModel,
  sortTabInModel,
  moveTabInModel,
  getChildModelIndexModel,
  ensureValidModel,
  dropTabInModel
} from '../../helpers/model';
import { closest, createDraggableList, dnd, Position, querySelectorAll } from '../../helpers/dom';
import { clone } from '../../helpers/object';
import { syncWithTheme } from '../../helpers/theme';
import { Deferred } from '../../helpers/time';
import { config } from '../../helpers/config';

@Component({
  tag: 'sl-layout',
  shadow: true
})
export class SlitheLayout {
  @Element() host!: HTMLSlLayoutElement;
  private tabsContainer!: HTMLSlTabsElement;
  private ready = new Deferred();
  private group!: string;
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
  @State() renderIndex: number = 0;
  // Computed
  get dropzoneClass () {
    const classList = ['dropzone', `dragover-${this.dropzoneState}`];
    if (this.dragging) {
      classList.push('active');
    }
    return classList.join(' ');
  }
  // Events
  @Event({ bubbles: false }) update: EventEmitter<Model>;
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
  // @Method()
  // async moveTab ({ item, from, to, oldIndex, newIndex }: SortableEvent) {
  //   const tabModel = getChildModelIndexModel(this._model, item.id);
  //   this._model = ensureValidModel(moveTabInModel(this._model, tabModel, from.id, oldIndex, to.id, newIndex));
  //   this.emitUpdate();
  // }
  // @Method()
  // async sortTab ({ item, oldIndex, newIndex }: SortableEvent) {
  //   this._model = sortTabInModel(this._model, item.id, oldIndex, newIndex);
  //   this.emitUpdate();
  // }
  @Method()
  async selectTab (id: string) {
    this._model = setActiveTabInModel(this._model, id);
    this.emitUpdate();
  }
  @Method()
  async removeTab (id: string) {
    this._model = ensureValidModel(removeTabInModel(this._model, id));
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
  private async _removeTab (e: MouseEvent, id: string) {
    e.stopPropagation();
    if (this._model.type === 'tabs') {
      const rootLayout = await this.getRootLayout();
      await rootLayout.removeTab(id);
    }
  }
  private emitUpdate () {
    this.update.emit(clone(this._model));
    this.renderIndex++;
  }
  private async _setDragging (dragging: boolean) {
    const rootLayout = await this.getRootLayout();
    await rootLayout.setRootDragging(dragging);
  }
  private createSortableTabs () {
    if (this._model.type === 'tabs') {
      createDraggableList({
        container: this.tabsContainer,
        group: this.group,
        items: 'sl-tab.draggable',
        onStart: (item) => {
          dnd.item = item;
          this._setDragging(true);
        },
        onEnd: () => {
          dnd.item = null;
          this._setDragging(false);
          this.dropzoneState = 'none';
        }
      });
      // Sortable.create(this.tabsContainer, {
      //   animation: 150,
      //   group: this.group,
      //   ghostClass: 'placeholder',
      //   chosenClass: 'picked',
      //   dragClass: 'dragged',
      //   dragoverBubble: true,
      //   onAdd: async (e) => {
      //     if (!dnd.dropping) {
      //       if (this._model.type === 'tabs') {
      //         if (!dnd.dropzone) {
      //           const rootLayout = await this.getRootLayout();
      //           await rootLayout.moveTab(e);
      //         }
      //       }
      //     }
      //     dnd.dropping = false;
      //   },
      //   onRemove: ({ item }) => {
      //     item.remove();
      //   },
      //   onUpdate: async (e) => {
      //     if (!dnd.dropping) {
      //       if (this._model.type === 'tabs') {
      //         if (!dnd.dropzone) {
      //           const rootLayout = await this.getRootLayout();
      //           await rootLayout.sortTab(e);
      //         }
      //       }
      //     }
      //     dnd.dropping = false;
      //   },
      //   onStart: ({ item }) => {
      //     dnd.item = item;
      //     this._setDragging(true);
      //   },
      //   onEnd: () => {
      //     dnd.item = null;
      //     this._setDragging(false);
      //     this.dropzoneState = 'none';
      //   }
      // });
    }
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
    if (this._model.type === 'tabs' && (this._model.splittable !== false)) {
      dnd.dropzone = true;
    }
  }
  private handleDropzoneDragOver (e: DragEvent) {
    if (this._model.type === 'tabs' && (this._model.splittable !== false)) {
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
  }
  private handleDropzoneDragLeave () {
    dnd.dropzone = false;
    this.dropzoneState = 'none';
  }
  private async handleDropzoneDrop () {
    dnd.dropping = true;
    const rootLayout = await this.getRootLayout();
    await rootLayout.dropTab(dnd.item.id, this._model.id, this.dropzoneState);
    dnd.dropzone = false;
    this.dropzoneState = 'none';
  }
  // Lifecycle
  async connectedCallback () {
    syncWithTheme(this.host, {
      'display': 'block',
      'position': 'relative',
      'height': '100%'
    });
    this._model = computeModel(this.model);
    this.root = !closest<HTMLSlLayoutElement>(this.host.parentElement, 'sl-layout');
    this.group = await this.getGroup();
    this.ready.resolve();
  }
  async componentDidLoad () {
    await this.ready.promise;
    this.createSortableTabs();
  }
  componentDidUpdate () {
    this.createSortableTabs();
  }
  componentDidRender () {
    if (this.root) {
      dnd.dropping = false;
    }
  }
  // Template
  private renderTabs (tabs: TabsModel) {
    return (
      <Fragment>
        <sl-tabs id={tabs.id} ref={(el) => this.tabsContainer = el} small>
          {tabs.items.map((item) => (
            <sl-tab
              class={{ draggable: item.draggable !== false }}
              id={item.id}
              key={item.id}
              active={item.active}
              onClick={() => this._selectTab(item.id)}
            >
              {item.name}
              {item.closable && <sl-icon class='close-btn' name={config.closeIcon} onClick={(e) => this._removeTab(e, item.id)}/>}
            </sl-tab>
          ))}
        </sl-tabs>
        <div class="tab-content">
          {tabs.items.map((item) => (
            <div class={{ 'tab-view': true, 'active': item.active && !item.placeholder }}>
              <slot name={item.viewSlot}/>
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
      <sl-splitter
        vertical={splitter.direction === 'vertical'}
        blueSize={splitter.blueSize}
        minBlue={splitter.minBlue}
        maxBlue={splitter.maxBlue}
        disabled={splitter.disabled}
        onResizeStart={() => this.handleResizeStart()} onResizeEnd={(e) => this.handleResizeEnd(e)}
      >
        <sl-layout slot="blue" model={splitter.items[0]}>
          {this.getSlots(splitter.items[0]).map((slot) => (
            <slot name={slot} slot={slot}/>
          ))}
        </sl-layout>
        <sl-layout slot="green" model={splitter.items[1]}>
          {this.getSlots(splitter.items[1]).map((slot) => (
            <slot name={slot} slot={slot}/>
          ))}
        </sl-layout>
      </sl-splitter>
    );
  }
  render () {
    return (
      <div key={this._model.id + this.renderIndex} class='sl-layout'>
        {this._model.type === 'tabs' && this.renderTabs(this._model)}
        {this._model.type === 'splitter' && this.renderSplitter(this._model)}
        {this._model.type !== 'splitter' && this.getSlots(this._model).map((slot) => (
          <slot name={slot} slot={slot}/>
        ))}
      </div>
    );
  }
}
