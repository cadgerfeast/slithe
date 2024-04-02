// Helpers
import { Component, Element, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';

@Component({
  tag: 'sl-action-divider',
  shadow: { delegatesFocus: true }
})
export class SlitheActionDivider {
  @Element() host!: HTMLSlActionDividerElement;
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
      <li class='sl-action-divider'/>
    );
  }
}
