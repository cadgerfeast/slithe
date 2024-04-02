// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';

@Component({
  tag: 'sl-action-group',
  shadow: { delegatesFocus: true }
})
export class SlitheActionGroup {
  @Element() host!: HTMLSlActionGroupElement;
  // Props
  @Prop() label: string;
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
      <li class='sl-action-group'>
        <span class='label'>{this.label}</span>
        <sl-actions>
          <slot/>
        </sl-actions>
      </li>
    );
  }
}
