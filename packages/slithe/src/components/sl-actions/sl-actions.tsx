// Helpers
import { Component, Element, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';

@Component({
  tag: 'sl-actions',
  shadow: { delegatesFocus: true }
})
export class SlitheActions {
  @Element() host!: HTMLSlActionsElement;
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
      <ul class='sl-actions'>
        <slot/>
      </ul>
    );
  }
}
