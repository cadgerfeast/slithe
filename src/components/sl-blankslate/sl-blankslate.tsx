// Helpers
import { Component, Element, Prop, State, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-blankslate',
  shadow: true
})
export class SlitheBlankslate {
  @Element() host!: HTMLSlBlankslateElement;
  // Props
  @Prop() heading: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6' = 'h3';
  // State
  @State() slots = {
    graphic: false,
    heading: false,
    default: false,
    actions: false
  };
  // Computed
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
      [slotName]: !!slot.assignedNodes().length
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
          <slot name='graphic' onSlotchange={(e) => this.handleSlotChange(e)}/>
        </div>
        <this.heading>
          <slot name='heading' onSlotchange={(e) => this.handleSlotChange(e)}/>
        </this.heading>
        <p>
          <slot onSlotchange={(e) => this.handleSlotChange(e)}/>
        </p>
        <div class="actions">
          <slot name='actions' onSlotchange={(e) => this.handleSlotChange(e)}/>
        </div>
      </div>
    );
  }
}