// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { AlertLevel } from '../../helpers/types';

@Component({
  tag: 'sl-flash',
  shadow: true
})
export class SlitheFlash {
  @Element() host!: HTMLSlFlashElement;
  // Props
  @Prop() type?: AlertLevel = 'info';
  @Prop() icon?: string;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host, {
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
