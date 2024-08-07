// Helpers
import { Component, Element, h, Prop } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
@Component({
  tag: 'sl-tab',
  shadow: { delegatesFocus: true }
})
export class SlitheTab {
  @Element() host!: HTMLSlTabElement;
  // Props
  @Prop({ reflect: true }) active?: boolean = false;
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
      <li class='sl-tab'>
        <button>
          <slot/>
        </button>
      </li>
    );
  }
}
