// Helpers
import { Component, Element, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';

@Component({
  tag: 'sl-breadcrumbs',
  shadow: { delegatesFocus: true }
})
export class SlitheBreadcrumbs {
  @Element() host!: HTMLSlBreadcrumbsElement;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    updateStyle(this.host, {
      'display': 'inline-flex'
    });
  }
  // Template
  render () {
    return (
      <nav class='sl-breadcrumbs'>
        <ul>
          <slot/>
        </ul>
      </nav>
    );
  }
}
