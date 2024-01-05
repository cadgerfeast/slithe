// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { closest } from '../../helpers/dom';

@Component({
  tag: 'sl-input-number',
  shadow: true
})
export class SlitheInputNumber {
  @Element() host!: HTMLSlInputNumberElement;
  private input!: HTMLInputElement;
  private control: HTMLSlFormControlElement|null;
  // Props
  @Prop() value?: number;
  @Prop() placeholder: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() min: number;
  @Prop() max: number;
  @Prop() step: number;
  // TODO options
  // State
  private controlLabelClickListener: () => void;
  // Handlers
  private handleInput () {
    this.value = +this.input.value;
  }
  private onControlLabelClick () {
    this.input.focus();
  }
  // Lifecycle
  connectedCallback () {
    this.control = closest(this.host, 'sl-form-control');
    if (this.control) {
      this.controlLabelClickListener = this.onControlLabelClick.bind(this);
      this.control.addEventListener('labelClick', this.controlLabelClickListener);
    }
    syncWithTheme(this.host, {
      'display': 'flex'
    });
  }
  disconnectedCallback () {
    if (this.control && this.controlLabelClickListener) {
      this.control.removeEventListener('labelClick', this.controlLabelClickListener);
    }
  }
  // Template
  render () {
    return (
      <div class='sl-input-number'>
        <input
          ref={(el) => this.input = el}
          type='number'
          name={this.control?.name}
          value={this.value}
          min={this.min}
          max={this.max}
          step={this.step}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={() => this.handleInput()}
        />
      </div>
    );
  }
}
