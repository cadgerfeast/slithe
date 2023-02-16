// Helpers
import { Component, Element, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-keyboard',
  styleUrl: 'sl-keyboard.scss',
  shadow: true
})
export class SlitheKeyboard {
  @Element() host!: HTMLSlKeyboardElement;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
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
