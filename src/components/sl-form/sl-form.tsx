// Helpers
import { Component, Element, Method, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-form',
  styleUrl: 'sl-form.scss',
  shadow: true
})
export class SlitheForm {
  @Element() host!: HTMLSlFormElement;
  // Methods
  @Method()
  async submit () {
    this.host.dispatchEvent(new SubmitEvent('submit'));
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
  }
  // Template
  render () {
    return (
      <form class='sl-form'>
        <slot/>
      </form>
    );
  }
}