// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-input-text',
  shadow: true
})
export class SlitheInputText {
  @Element() host!: HTMLSlInputTextElement;
  // TODO datalist (menu, options (select))
  // TODO validate function with default helpers exported: "password"|"email"|"tel"|"url" (options for validation)
  private input!: HTMLInputElement;
  private id!: string;
  // Props
  @Prop() value: string = '';
  @Prop() placeholder: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() type: 'text'|'password' = 'text';
  @Prop() label: string = '';
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
        <input
          ref={(el) => this.input = el}
          type={this.type}
          name={this.id}
          value={this.value}
          size={this.value.length}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={() => this.handleInput()}
        />
        <label htmlFor={this.id} onClick={() => this.handleClick()}>{this.label}</label>
      </div>
    );
  }
}
