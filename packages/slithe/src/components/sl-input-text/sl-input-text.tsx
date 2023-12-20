// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-input-text',
  shadow: true
})
export class SlitheInputText {
  @Element() host!: HTMLSlInputTextElement;
  private input!: HTMLInputElement;
  private id!: string;
  // Props
  @Prop() value: string = '';
  @Prop() placeholder: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() type: 'text'|'password' = 'text';
  @Prop() label: string = '';
  // TODO options
  // Handlers
  private handleInput () {
    this.value = this.input.value;
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
      <div class='sl-input-text'>
        <label htmlFor={this.id} onClick={() => this.handleClick()}>{this.label}</label>
        <input
          ref={(el) => this.input = el}
          type={this.type}
          name={this.id}
          value={this.value}
          size={Math.max(this.value.length, this.placeholder.length)}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={() => this.handleInput()}
        />
      </div>
    );
  }
}
