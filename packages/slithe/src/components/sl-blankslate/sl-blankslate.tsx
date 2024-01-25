// Helpers
import { Component, Element, Prop, State, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { isEmptySlot } from '../../helpers/dom';

/**
 * @slot graphic - Slot for the blankslate icon
 * @slot heading - Slot for the blankslate title
 * @slot default - Slot for the blankslate default message
 * @slot actions - Slot for the blankslate actions
 */
@Component({
  tag: 'sl-blankslate',
  shadow: true
})
export class SlitheBlankslate {
  @Element() host!: HTMLSlBlankslateElement;
  // Props
  /**
   * The blankslate heading level
   */
  @Prop() heading?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
  // State
  @State() slots = {
    graphic: false,
    heading: false,
    default: false,
    actions: false
  };
  // Computed
  get _heading () {
    return this.heading || 'h3';
  }
  get class () {
    return {
      'sl-blankslate': true,
      'has-graphic': this.slots.graphic,
      'has-heading': this.slots.heading,
      'has-default': this.slots.default,
      'has-actions': this.slots.actions
    };
  }
  // Handlers
  private handleSlotChange (e: Event) {
    const slot = e.target as HTMLSlotElement;
    const slotName = slot.getAttribute('name') || 'default';
    this.slots = {
      ...this.slots,
      [slotName]: !isEmptySlot(slot)
    };
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host, {
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center'
    });
  }
  // Template
  render () {
    return (
      <div class={this.class}>
        <div class="graphic">
          <slot name='graphic' onSlotchange={this.handleSlotChange}/>
        </div>
        <this._heading>
          <slot name='heading' onSlotchange={this.handleSlotChange}/>
        </this._heading>
        <p>
          <slot onSlotchange={this.handleSlotChange}/>
        </p>
        <div class="actions">
          <slot name='actions' onSlotchange={this.handleSlotChange}/>
        </div>
      </div>
    );
  }
}
