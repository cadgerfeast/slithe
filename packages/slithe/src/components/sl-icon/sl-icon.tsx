// Helpers
import { Component, Element, h, Prop } from '@stencil/core';
import { attachTooltip } from '../../helpers/dom';
import { syncWithTheme, updateStyle, theme } from '../../helpers/theme';

@Component({
  tag: 'sl-icon',
  shadow: { delegatesFocus: true }
})
export class SlitheIcon {
  @Element() host!: HTMLSlIconElement;
  // Props
  @Prop({ reflect: true }) name: string;
  @Prop() size?: string = '16px';
  // Computed
  get style () {
    return {
      'display': 'inline-flex',
      'align-items': 'center',
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
    updateStyle(this.host, {
      'display': 'inline-flex',
      'align-items': 'center'
    });
    attachTooltip(this.host);
  }
  // Template
  render () {
    return (
      <i class='sl-icon' style={this.style} innerHTML={this.svg}/>
    );
  }
}
