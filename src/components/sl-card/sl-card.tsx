// Helpers
import { Component, Element, h, State } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-card',
  shadow: true
})
export class SlitheCard {
  @Element() host!: HTMLSlCardElement;
  // State
  @State() slots = {
    header: false,
    default: false,
    footer: false
  };
  // Computed
  get class () {
    return {
      'sl-card': true,
      'has-header': this.slots.header,
      'has-default': this.slots.default,
      'has-footer': this.slots.footer
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
      'display': 'flex'
    });
  }
  // Template
  render () {
    return (
      <div class={this.class}>
        <header>
          <slot name="header" onSlotchange={(e) => this.handleSlotChange(e)}/>
        </header>
        <section>
          <slot onSlotchange={(e) => this.handleSlotChange(e)}/>
        </section>
        <footer>
          <slot name="footer" onSlotchange={(e) => this.handleSlotChange(e)}/>
        </footer>
      </div>
    );
  }
}
