// Helpers
import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { closest } from '../../helpers/dom';
import { NumberAutocomplete, ValidationLevel } from '../../helpers/form';

@Component({
  tag: 'sl-input-number',
  shadow: true
})
export class SlitheInputNumber {
  @Element() host!: HTMLSlInputNumberElement;
  private input!: HTMLInputElement;
  private control: HTMLSlFormControlElement|null;
  // Props
  /**
   * @binding input
   */
  @Prop({ mutable: true }) value?: number;
  @Prop() placeholder?: string = '';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() min?: number;
  @Prop() max?: number;
  @Prop() step?: number;
  /**
   * @import NumberAutocomplete,slithe
   */
  @Prop() autocomplete?: NumberAutocomplete = 'off';
  /**
   * @import ValidationLevel,slithe
   */
  @Prop() status?: ValidationLevel|null = null;
  // Modifiers
  @Prop({ reflect: true }) small?: boolean;
  @Prop({ reflect: true }) medium?: boolean;
  // Events
  @Event({ eventName: 'input' }) inputEvent: EventEmitter<number>;
  @Event({ eventName: 'change' }) changeEvent: EventEmitter<number>;
  // TODO options
  // State
  private controlLabelClickListener: () => void;
  // Computed
  get class () {
    return {
      'sl-input-number': true,
      [this.status]: !!this.status
    };
  }
  // Handlers
  private handleInput (e: InputEvent) {
    e.stopPropagation();
    this.value = +this.input.value;
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
          type='number'
          autocomplete={this.autocomplete}
          name={this.control?.name}
          value={this.value}
          min={this.min}
          max={this.max}
          step={this.step}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={(e) => this.handleInput(e)}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}
