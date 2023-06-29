// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-input-number',
  shadow: true
})
export class SlitheInputNumber {
  @Element() host!: HTMLSlInputNumberElement;
  private input!: HTMLInputElement;
  private id!: string;
  // Props
  @Prop() value: number = 0;
  @Prop() placeholder: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() label: string = '';
  // TODO min
  // TODO max
  // TODO step
  // TODO decimal
  // TODO options
  // Handlers
  private handleInput () {
    this.value = +this.input.value;
  }
  private handleClick () {
    this.input.click();
  }
  // Lifecycle
  connectedCallback () {
    this.id = crypto.randomUUID();
    syncWithTheme(this.host, {
      'display': 'flex'
    });
  }
  // Template
  render () {
    return (
      <div class='sl-input-number'>
        <label htmlFor={this.id} onClick={() => this.handleClick()}>{this.label}</label>
        <input
          ref={(el) => this.input = el}
          type='number'
          name={this.id}
          value={this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={() => this.handleInput()}
        />
      </div>
    );
  }
}
