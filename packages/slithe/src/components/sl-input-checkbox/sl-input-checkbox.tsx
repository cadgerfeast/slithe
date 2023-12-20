// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-input-checkbox',
  shadow: true
})
export class SlitheInputCheckbox {
  @Element() host!: HTMLSlInputCheckboxElement;
  private input!: HTMLInputElement;
  private id!: string;
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
    syncWithTheme(this.host, {
      'display': 'flex'
    });
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
