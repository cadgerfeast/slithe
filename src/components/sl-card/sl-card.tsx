// Helpers
import { Component, Element, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-card',
  styleUrl: 'sl-card.scss',
  shadow: true
})
export class SlitheCard {
  @Element() host!: HTMLSlCardElement;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
  }
  componentWillLoad () {
    // TODO slotmanager
  }
  // Template
  render () {
    return (
      <div class='sl-card'>
        <header>
          <slot name="header"/>
        </header>
        <section>
          <slot/>
        </section>
        <footer>
          <slot name="footer"/>
        </footer>
      </div>
    );
  }
}
