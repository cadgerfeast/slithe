// Helpers
import { Component, Element, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-breadcrumbs',
  shadow: true
})
export class SlitheBreadcrumbs {
  @Element() host!: HTMLSlBreadcrumbsElement;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host, {
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
