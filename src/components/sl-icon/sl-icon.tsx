// Helpers
import { Component, Element, h, Prop } from '@stencil/core';
import { attachTooltip } from '../../helpers/dom';
import { syncWithTheme, theme } from '../../helpers/theme';

@Component({
  tag: 'sl-icon',
  styleUrl: 'sl-icon.scss',
  shadow: true
})
export class SlitheIcon {
  @Element() host!: HTMLSlIconElement;
  // Props
  @Prop() name: string;
  @Prop() size: string = '16px';
  // Computed
  get style () {
    return {
      'width': `var(--sl-icon-size, ${this.size})`,
      'height': `var(--sl-icon-size, ${this.size})`
    };
  }
  get svg () {
    return theme.model.icons[this.name] || theme.model.fallbackIcon;
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    attachTooltip(this.host);
  }
  // Template
  render () {
    return (
      <i class='sl-icon' style={this.style} innerHTML={this.svg}/>
    );
  }
}
