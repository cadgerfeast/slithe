// Helpers
import { Component, Element, h, Prop } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
@Component({
  tag: 'sl-tab',
  shadow: true
})
export class SlitheTab {
  @Element() host!: HTMLSlTabElement;
  // Props
  @Prop({ reflect: true }) active: boolean = false;
  // Handlers
  handleCloseClick (e: MouseEvent) {
    e.stopPropagation();
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host, {
      'display': 'inline-flex'
    });
  }
  // Template
  render () {
    return (
      <li class='sl-tab'>
        <button>
          <slot/>
        </button>
      </li>
    );
  }
}
