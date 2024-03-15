// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';

@Component({
  tag: 'sl-spinner',
  shadow: true
})
export class SlitheSpinner {
  @Element() host!: HTMLSlSpinnerElement;
  // Modifiers
  @Prop({ reflect: true }) small?: boolean = false;
  @Prop({ reflect: true }) large?: boolean = false;
  // Computed
  get size () {
    if (this.small) {
      return '16px';
    } else if (this.large) {
      return '64px';
    } else {
      return '32px';
    }
  }
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
      <div class='sl-spinner'>
        <svg height={this.size} width={this.size} viewBox='0 0 16 16' fill='none'>
          <circle cx='8' cy='8' r='7' stroke='currentColor' stroke-opacity='0.25' stroke-width='2' vector-effect='non-scaling-stroke'/>
          <path d='M15 8a7.002 7.002 0 00-7-7' stroke='currentColor' stroke-width='2' stroke-linecap='round' vector-effect='non-scaling-stroke'/>
        </svg>
      </div>
    );
  }
}
