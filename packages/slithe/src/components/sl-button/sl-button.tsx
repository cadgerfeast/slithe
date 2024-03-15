// Helpers
import { Component, Prop, Element, h, State, Watch } from '@stencil/core';
import { closest, attachTooltip, getValidSlotChildren } from '../../helpers/dom';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { formStore } from '../../helpers/form';

@Component({
  tag: 'sl-button',
  shadow: true
})
export class SlitheButton {
  @Element() host!: HTMLSlButtonElement;
  private form: HTMLSlFormElement|null;
  // Props
  @Prop() type?: 'button'|'submit' = 'button';
  @Prop({ reflect: true, mutable: true }) disabled?: boolean = false;
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
  // Methods
  private updateHostStyle () {
    
    updateStyle(this.host, {
      'display': this.block ? 'flex' : 'inline-flex',
      'vertical-align': 'middle'
    });
  }
  // Handlers
  private handleClick () {
    if (this.type === 'submit') {
      if (this.form) {
        this.form.submit();
      }
    }
  }
  private handleSlotChange (e: Event) {
    const slot = e.target as HTMLSlotElement;
    const children = getValidSlotChildren(slot);
    this.iconOnly = children.length === 1 && children[0].nodeName === 'SL-ICON';
  }
  @Watch('block')
  onBlockChange () {
    this.updateHostStyle();
  }
  // Lifecycle
  connectedCallback () {
    this.form = closest(this.host, 'sl-form');
    if (this.form) {
      formStore.onChange('forms', (forms) => {
        const form = forms.get(this.form);
        if (form && form.event === 'input') {
          this.disabled = [...form.validations.values()].some(({ status }) => status.type === 'failure')
        }
      });
    }
    syncWithTheme(this.host);
    this.updateHostStyle();
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
