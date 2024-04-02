// Helpers
import { Component, Element, h, Prop, State, Fragment, Method, Event, EventEmitter, Watch } from '@stencil/core';
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
import { closest, createDraggableList, createDropzoneBox, Position, querySelectorAll } from '../../helpers/dom';
import { clone } from '../../helpers/object';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { Deferred } from '../../helpers/time';
import { config } from '../../helpers/config';

/**
 * @import Model,slithe
 */
@Component({
  tag: 'sl-layout',
  shadow: { delegatesFocus: true }
})
export class SlitheLayout {
  @Element() host!: HTMLSlLayoutElement;
  private tabsContainer!: HTMLSlTabsElement;
  private tabsContent!: HTMLDivElement;
  private ready = new Deferred();
  private group!: string;
  // Props
  @Prop() model?: Model = { id: crypto.randomUUID(), type: 'tabs', items: [] };
  // State
  @State() root: boolean = false;
  @State() dragging: boolean = false;
  @State() _model: Model;
  @State() renderIndex: number = 0;
  // Events
  @Event({ eventName: 'update', bubbles: false }) updateEvent: EventEmitter<Model>;
  @Event({ eventName: 'close', bubbles: false }) closeEvent: EventEmitter<string>;
  // Methods
  /**
   * @private
   */
  @Method()
  async getGroup () {
    if (this.group) {
      return this.group;
    } else {
      const parentLayout = closest<HTMLSlLayoutElement>(this.host.parentElement, 'sl-layout');
      return !parentLayout ? crypto.randomUUID() : await parentLayout.getGroup();
    }
  }
  /**
   * @private
   */
  @Method()
  async getRootLayout (): Promise<HTMLSlLayoutElement> {
    if (this.root) {
      return this.host;
    } else {
      return closest<HTMLSlLayoutElement>(this.host.parentElement, 'sl-layout').getRootLayout();
    }
  }
  /**
   * @private
   */
  @Method()
  async moveTab (id: string, from: string, oldIndex: number, to: string, newIndex: number) {
    const tabModel = getChildModelIndexModel(this._model, id);
    this._model = ensureValidModel(moveTabInModel(this._model, tabModel, from, oldIndex, to, newIndex));
    this.emitUpdate();
  }
  /**
   * @private
   */
  @Method()
  async sortTab (id: string, oldIndex: number, newIndex: number) {
    this._model = sortTabInModel(this._model, id, oldIndex, newIndex);
    this.emitUpdate();
  }
  /**
   * @private
   */
  @Method()
  async selectTab (id: string) {
    this._model = setActiveTabInModel(this._model, id);
    this.emitUpdate();
  }
  /**
   * @private
   */
  @Method()
  async removeTab (id: string) {
    this._model = ensureValidModel(removeTabInModel(this._model, id));
    this.emitClose(id);
    this.emitUpdate();
  }
  /**
   * @private
   */
  @Method()
  async resizeSplitter (id: string, size: number) {
    this._model = resizeSplitterInModel(this._model, id, size);
    this.emitUpdate();
  }
  /**
   * @private
   */
  @Method()
  async dropTab (tabId: string, containerId: string, position: Position) {
    const tabModel = getChildModelIndexModel(this._model, tabId);
    this._model = ensureValidModel(dropTabInModel(this._model, tabModel, containerId, position));
    this.emitUpdate();
  }
  /**
   * @private
   */
  @Method()
  async setRootDragging (dragging: boolean) {
    const children = querySelectorAll<HTMLSlLayoutElement>(this.host, 'sl-layout');
    for (const child of children) {
      child.setDragging(dragging);
    }
  }
  /**
   * @private
   */
  @Method()
  async setDragging (dragging: boolean) {
    this.dragging = dragging;
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
  private emitClose (id: string) {
    this.closeEvent.emit(id);
  }
  private emitUpdate () {
    this.updateEvent.emit(clone(this._model));
    this.renderIndex++;
  }
  private async _setDragging (dragging: boolean) {
    const rootLayout = await this.getRootLayout();
    await rootLayout.setRootDragging(dragging);
  }
  private _setTabsRef (el: HTMLSlTabsElement) {
    this.tabsContainer = el;
    this.createSortableTabs();
  }
  private _setContentRef (el: HTMLDivElement) {
    this.tabsContent = el;
    this.createSortableTabs();
  }
  private createSortableTabs () {
    if (this._model.type === 'tabs' && this.tabsContainer && this.tabsContent) {
      createDraggableList({
        container: this.tabsContainer,
        disabled: this._model.droppable === false,
        group: this.group,
        items: 'sl-tab',
        filter: '.draggable',
        onStart: () => {
          this._setDragging(true);
        },
        onSort: async (id, from, to) => {
          if (from.id === to.id) {
            const rootLayout = await this.getRootLayout();
            await rootLayout.sortTab(id, from.index, to.index);
          } else {
            const rootLayout = await this.getRootLayout();
            await rootLayout.moveTab(id, from.id, from.index, to.id, to.index);
          }
        },
        onEnd: () => {
          this._setDragging(false);
        }
      });
      createDropzoneBox({
        container: this.tabsContent,
        disabled: this._model.splittable === false,
        onDrop: async (item, position) => {
          const rootLayout = await this.getRootLayout();
          await rootLayout.dropTab(item.id, this._model.id, position);
        }
      });
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
  // Lifecycle
  async connectedCallback () {
    syncWithTheme(this.host);
    updateStyle(this.host, {
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
  }
  // Template
  private renderTabs (tabs: TabsModel) {
    return (
      <Fragment>
        <sl-tabs id={tabs.id} ref={(el) => this._setTabsRef(el)} small>
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
        <div class="tab-content" ref={(el) => this._setContentRef(el)}>
          {tabs.items.map((item) => (
            <div class={{ 'tab-view': true, 'active': item.active && !item.placeholder }}>
              <slot name={item.viewSlot}/>
            </div>
          ))}
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
        onResizeStart={() => this.handleResizeStart()}
        onResizeEnd={(e) => this.handleResizeEnd(e)}
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
