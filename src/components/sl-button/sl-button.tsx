// Helpers
import { Component, Prop, h } from '@stencil/core';
import { addElementStylesheet } from '../../helpers/theme';

@Component({
  tag: 'sl-button',
  styleUrl: 'sl-button.scss',
  shadow: true
})
export class SlitheButton {
  // Props
  @Prop() type: 'button'|'submit' = 'button';
  @Prop() tooltip?: string;
  @Prop() disabled: boolean = false;
  // Lifecycle
  connectedCallback (this: HTMLElement) {
    addElementStylesheet(this);
  }
  // Template
  render () {
    return (
      <button class='sl-button' type={this.type} disabled={this.disabled}>
        <slot/>
      </button>
    );
  }
}
