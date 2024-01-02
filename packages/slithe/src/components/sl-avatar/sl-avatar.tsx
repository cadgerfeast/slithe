// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { attachTooltip } from '../../helpers/dom';

@Component({
  tag: 'sl-avatar',
  shadow: true
})
export class SlitheAvatar {
  @Element() host!: HTMLSlAvatarElement;
  // Props
  @Prop({ reflect: true }) name: string;
  @Prop() src: string|null = null;
  @Prop() size: string = '32px';
  @Prop() background: string = 'var(--sl-avatar-background-color)';
  // Computed
  get style () {
    return {
      'width': this.size,
      'height': this.size,
      'background-color': this.background
    };
  }
  get initialsStyle () {
    return {
      'font-size': `calc(${this.size} / 2)`
    };
  }
  get initials () {
    const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
    const splits = [...this.name.matchAll(rgx)] || [];
    return ((splits.shift()?.[1] || '') + (splits.pop()?.[1] || '')).toUpperCase();
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host, {
      'display': 'inline-flex'
    });
    attachTooltip(this.host);
  }
  // Template
  render () {
    return (
      <div class='sl-avatar' style={this.style}>
        {
          this.src !== null ?
          (
            <img src={this.src} alt={this.name}/>
          ) :
          (
            <span style={this.initialsStyle}>{ this.initials }</span>
          )
        }
      </div>
    );
  }
}
