// Helpers
import { Component, Prop, Element, h } from '@stencil/core';
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
  // Handlers
  private handleClick () {
    if (this.type === 'submit') {
      const form = closest<HTMLSlFormElement>(this.host, 'sl-form');
      if (form) {
        form.submit();
      }
    }
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
      <button class='sl-button' type={this.type} disabled={this.disabled} onClick={() => this.handleClick()}>
        <slot/>
      </button>
    );
  }
}