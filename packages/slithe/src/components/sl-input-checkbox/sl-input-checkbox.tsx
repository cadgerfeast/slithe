// Helpers
import { Component, Element, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { closest } from '../../helpers/dom';

@Component({
  tag: 'sl-input-checkbox',
  shadow: true
})
export class SlitheInputCheckbox {
  @Element() host!: HTMLSlInputCheckboxElement;
  private input!: HTMLInputElement;
  private control: HTMLSlFormControlElement|null;
  // Props
  @Prop() value: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() label: string = '';
  // Computed
  get effectiveName () {
    return this.control?.name || crypto.randomUUID();
  }
  // Handlers
  private handleInput () {
    this.value = this.input.checked;
  }
  private handleClick () {
    this.input.click();
  }
  // Lifecycle
  connectedCallback () {
    this.control = closest(this.host, 'sl-form-control');
    syncWithTheme(this.host, {
      'display': 'flex'
    });
  }
  // Template
  render () {
    return (
      <div class='sl-input-checkbox'>
        <input ref={(el) => this.input = el} type='checkbox' name={this.effectiveName} checked={this.value} disabled={this.disabled} onInput={() => this.handleInput()}/>
        {this.label && <sl-label name={this.effectiveName} required={this.control?.required} onClick={() => this.handleClick()}>{this.label}</sl-label>}
      </div>
    );
  }
}
