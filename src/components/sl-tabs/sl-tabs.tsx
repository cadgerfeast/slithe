// Helpers
import { Component, Element, h, Prop } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-tabs',
  styleUrl: 'sl-tabs.scss',
  shadow: true
})
export class SlitheTabs {
  @Element() host!: HTMLSlTabsElement;
  // Props
  @Prop({ reflect: true }) small: boolean = false;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
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
