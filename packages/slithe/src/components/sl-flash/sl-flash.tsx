// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { AlertLevel } from '../../helpers/types';

/**
 * @imports AlertLevel,slithe
 */
@Component({
  tag: 'sl-flash',
  shadow: { delegatesFocus: true }
})
export class SlitheFlash {
  @Element() host!: HTMLSlFlashElement;
  // Props
  @Prop() type?: AlertLevel = 'info';
  @Prop() icon?: string;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    updateStyle(this.host, {
      'display': 'block'
    });
  }
  // Template
  render () {
    return (
      <div class={`sl-flash ${this.type}`}>
        {this.icon && <sl-icon name={this.icon}/>}
        <slot/>
      </div>
    );
  }
}
