// Helpers
import { Component, Element, h, Prop } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';

@Component({
  tag: 'sl-tabs',
  shadow: true
})
export class SlitheTabs {
  @Element() host!: HTMLSlTabsElement;
  // Modifiers
  @Prop({ reflect: true }) small?: boolean = false;
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
      <nav class='sl-tabs'>
        <ul>
          <slot/>
        </ul>
      </nav>
    );
  }
}
