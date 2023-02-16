// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-input-checkbox',
  styleUrl: 'sl-input-checkbox.scss',
  shadow: true
})
export class SlitheInputCheckbox {
  @Element() host!: HTMLSlInputCheckboxElement;
  input!: HTMLInputElement;
  id!: string;
  // Props
  @Prop() value: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() label: string = '';
  // Handlers
  private handleInput () {
    this.value = this.input.checked;
  }
  private handleClick () {
    this.input.click();
  }
  // Lifecycle
  connectedCallback () {
    this.id = crypto.randomUUID();
    syncWithTheme(this.host);
  }
  // Template
  render () {
    return (
      <div class='sl-input-checkbox'>
        <input ref={(el) => this.input = el} type='checkbox' name={this.id} checked={this.value} disabled={this.disabled} onInput={() => this.handleInput()}/>
        <label htmlFor={this.id} onClick={() => this.handleClick()}>{this.label}</label>
      </div>
    );
  }
}
