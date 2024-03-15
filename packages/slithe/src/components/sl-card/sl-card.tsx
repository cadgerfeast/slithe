// Helpers
import { Component, Element, h, Prop, State } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { isEmptySlot } from '../../helpers/dom';

/**
 * @slot header - Slot for the card header
 * @slot default - Slot for the card default content
 * @slot footer - Slot for the card footer
 */
@Component({
  tag: 'sl-card',
  shadow: true
})
export class SlitheCard {
  @Element() host!: HTMLSlCardElement;
  // Modifiers
  @Prop({ reflect: true }) danger?: boolean;
  @Prop({ reflect: true }) small?: boolean;
  @Prop({ reflect: true }) medium?: boolean;
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
      [slotName]: !isEmptySlot(slot)
    };
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    updateStyle(this.host, {
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
