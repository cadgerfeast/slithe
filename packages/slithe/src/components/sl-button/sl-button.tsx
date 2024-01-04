// Helpers
import { Component, Prop, Element, h, State } from '@stencil/core';
import { closest, attachTooltip } from '../../helpers/dom';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-button',
  shadow: true
})
export class SlitheButton {
  @Element() host!: HTMLSlButtonElement;
  // Props
  @Prop() type: 'button'|'submit' = 'button';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) link: boolean = false;
  // State
  @State() iconOnly = false;
  // Computed
  get class () {
    return {
      'sl-button': true,
      'icon-only': this.iconOnly
    };
  }
  // Handlers
  private handleClick () {
    if (this.type === 'submit') {
      const form = closest<HTMLSlFormElement>(this.host, 'sl-form');
      if (form) {
        form.submit();
      }
    }
  }
  // Handlers
  private handleSlotChange (e: Event) {
    const slot = e.target as HTMLSlotElement;
    const children = slot.assignedNodes() as HTMLElement[];
    this.iconOnly = children.length === 1 && children[0].tagName === 'SL-ICON';
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host, {
      'display': 'inline-flex'
    });
    attachTooltip(this.host);
  }
  // Template
  render () {
    return (
      <button class={this.class} type={this.type} disabled={this.disabled} onClick={() => this.handleClick()}>
        <slot onSlotchange={(e) => this.handleSlotChange(e)}/>
      </button>
    );
  }
}
