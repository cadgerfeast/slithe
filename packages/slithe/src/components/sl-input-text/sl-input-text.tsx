// Helpers
import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { closest } from '../../helpers/dom';
import { TextAutocomplete, ValidationLevel } from '../../helpers/form';

/**
 * @import TextAutocomplete,slithe
 * @import ValidationLevel,slithe
 */
@Component({
  tag: 'sl-input-text',
  shadow: true
})
export class SlitheInputText {
  @Element() host!: HTMLSlInputTextElement;
  private input!: HTMLInputElement;
  private control: HTMLSlFormControlElement|null;
  // Props
  /**
   * @binding input
   */
  @Prop({ mutable: true }) value?: string;
  @Prop() placeholder?: string = '';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() type?: 'text'|'password' = 'text';
  @Prop() status?: ValidationLevel|null = null;
  @Prop() autocomplete?: TextAutocomplete = 'off';
  // Modifiers
  @Prop({ reflect: true }) small?: boolean;
  @Prop({ reflect: true }) medium?: boolean;
  @Prop({ reflect: true }) block?: boolean = false;
  // Computed
  get _placeholder () {
    return this.placeholder || '';
  }
  get class () {
    return {
      'sl-input-text': true,
      [this.status]: !!this.status
    };
  }
  get size () {
    return Math.max(this.value ? this.value.length : 0, this._placeholder.length);
  }
  // Events
  @Event({ eventName: 'input' }) inputEvent: EventEmitter<string>;
  @Event({ eventName: 'change' }) changeEvent: EventEmitter<string>;
  // TODO options
  // State
  private controlLabelClickListener: () => void;
  // Handlers
  private handleInput (e: InputEvent) {
    e.stopPropagation();
    this.value = this.input.value;
    this.inputEvent.emit(this.value);
  }
  private async handleChange (e: Event) {
    e.stopPropagation();
    this.changeEvent.emit(this.value);
    if (this.control) {
      await this.control.validate();
    }
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
      <div class={this.class}>
        <input
          ref={(el) => this.input = el}
          type={this.type}
          autocomplete={this.autocomplete}
          name={this.control?.name}
          value={this.value}
          size={this.size}
          placeholder={this._placeholder}
          disabled={this.disabled}
          onInput={(e) => this.handleInput(e)}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}
