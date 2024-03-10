// Helpers
import { Component, Prop, Element, h, State } from '@stencil/core';
import { closest, attachTooltip, getValidSlotChildren } from '../../helpers/dom';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-button',
  shadow: true
})
export class SlitheButton {
  @Element() host!: HTMLSlButtonElement;
  // Props
  @Prop() type?: 'button'|'submit' = 'button';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) link?: boolean = false;
  // Modifiers
  @Prop({ reflect: true }) primary?: boolean;
  @Prop({ reflect: true }) outline?: boolean;
  @Prop({ reflect: true }) danger?: boolean;
  @Prop({ reflect: true }) borderless?: boolean;
  @Prop({ reflect: true }) small?: boolean;
  @Prop({ reflect: true }) medium?: boolean;
  @Prop({ reflect: true }) large?: boolean;
  @Prop({ reflect: true }) block?: boolean = false;
  // State
  @State() iconOnly = false;
  // Computed
  get class () {
    return {
      'sl-button': true,
      'icon-only': this.iconOnly
    };
  }
  // Handlers
  private handleClick () {
    if (this.type === 'submit') {
      const form = closest<HTMLSlFormElement>(this.host, 'sl-form');
      if (form) {
        form.submit();
      }
    }
  }
  // Handlers
  private handleSlotChange (e: Event) {
    const slot = e.target as HTMLSlotElement;
    const children = getValidSlotChildren(slot);
    this.iconOnly = children.length === 1 && children[0].nodeName === 'SL-ICON';
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host, {
      'display': this.block ? 'flex' : 'inline-flex',
      'vertical-align': 'middle'
    });
    attachTooltip(this.host);
  }
  // Template
  render () {
    return (
      <button class={this.class} type={this.type} disabled={this.disabled} onClick={() => this.handleClick()}>
        <slot onSlotchange={(e) => this.handleSlotChange(e)}/>
      </button>
    );
  }
}
