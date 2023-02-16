// Helpers
import { Component, Element, h, Prop, State, Fragment } from '@stencil/core';
import { Model, computeModel, closest, SplitterModel, TabsModel } from '../../helpers/dom';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-layout',
  styleUrl: 'sl-layout.scss',
  shadow: true
})
export class SlitheLayout {
  @Element() host!: HTMLSlLayoutElement;
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
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    this.root = !closest<HTMLSlLayoutElement>(this.host.parentElement, 'sl-layout');
    this._model = computeModel(this.model);
  }
  // Template
  private renderTabs (tabs: TabsModel) {
    // TODO click events to change active
    // TODO drag and drop tabs
    // TODO dropzones
    return (
      <Fragment>
        <sl-tabs small>
          {tabs.items.map((item) => (
            <sl-tab active={item.active}>{item.name}</sl-tab>
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
      // TODO get events when resizing start and end
      // TODO keep model in sync (parent)
      <sl-splitter vertical={splitter.direction === 'vertical'} blueSize={splitter.blueSize}>
        <sl-layout slot="blue" model={splitter.items[0]}/>
        <sl-layout slot="green" model={splitter.items[1]}/>
      </sl-splitter>
    );
  }
  private renderSlots () {
    // TODO attach slots
    return (
      <div class={{ 'rels': true, 'dragging': this.dragging }}></div>
    );
  }
  render () {
    return (
      <div class='sl-layout'>
        {/* {#key curModel.id} */}
        {this._model.type === 'tabs' && this.renderTabs(this._model)}
        {this._model.type === 'splitter' && this.renderSplitter(this._model)}
        {/* {/key} */}
        {this.root && this.renderSlots()}
      </div>
    );
  }
}
