// Helpers
import { Component, Element, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-keyboard',
  shadow: true
})
export class SlitheKeyboard {
  @Element() host!: HTMLSlKeyboardElement;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host, {
      'display': 'inline-flex'
    });
  }
  // Template
  render () {
    return (
      <kbd class='sl-keyboard'>
        <slot/>
      </kbd>
    );
  }
}
