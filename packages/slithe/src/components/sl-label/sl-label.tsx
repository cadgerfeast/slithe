// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';

@Component({
  tag: 'sl-label',
  shadow: { delegatesFocus: true }
})
export class SlitheLabel {
  @Element() host!: HTMLSlLabelElement;
  // Props
  @Prop() name: string;
  @Prop({ reflect: true }) required: boolean = false;
  // Computed
  get class () {
    return {
      'sl-label': true,
      'required': this.required
    };
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
      <label class={this.class} htmlFor={this.name}>
        <slot/>
      </label>
    );
  }
}
