// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-breadcrumb',
  shadow: true
})
export class SlitheBreadcrumb {
  @Element() host!: HTMLSlBreadcrumbElement;
  // Props
  @Prop({ reflect: true }) active: boolean = false;
  // Computed
  get class () {
    return {
      'sl-breadcrumb': true,
      'active': this.active
    };
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
      <li class={this.class}>
        <sl-button link disabled={this.active}>
          <slot/>
        </sl-button>
      </li>
    );
  }
}
