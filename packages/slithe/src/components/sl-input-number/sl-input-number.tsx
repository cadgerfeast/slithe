// Helpers
import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { closest } from '../../helpers/dom';
import { NumberAutocomplete, ValidationLevel, formStore } from '../../helpers/form';

/**
 * @import NumberAutocomplete,slithe
 * @import ValidationLevel,slithe
 */
@Component({
  tag: 'sl-input-number',
  shadow: true
})
export class SlitheInputNumber {
  @Element() host!: HTMLSlInputNumberElement;
  private input!: HTMLInputElement;
  private form: HTMLSlFormElement|null;
  private formControl: HTMLSlFormControlElement|null;
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
  @Prop() autocomplete?: NumberAutocomplete = 'off';
  @Prop() status?: ValidationLevel|null = null;
  // Modifiers
  @Prop({ reflect: true }) small?: boolean;
  @Prop({ reflect: true }) medium?: boolean;
  @Prop({ reflect: true }) block?: boolean = false;
  // Events
  @Event({ eventName: 'input' }) inputEvent: EventEmitter<number>;
  @Event({ eventName: 'change' }) changeEvent: EventEmitter<number>;
  // TODO options
  // State
  private controlLabelClickListener: () => void;
  // Computed
  get _placeholder () {
    return this.placeholder || '';
  }
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
    if (this.form && this.formControl) {
      this.status = null;
      if (this.form.validation === 'input') {
        this.formControl.validate(true);
      }
    }
  }
  private async handleChange (e: Event) {
    e.stopPropagation();
    this.changeEvent.emit(this.value);
  }
  private async handleBlur () {
    if (this.form && this.formControl) {
      if (this.form.validation === 'input') {
        const { validations } = formStore.get('forms').get(this.form);
        if (!validations.get(this.formControl).shouldDisplay) {
          this.status = null;
          if (this.form.validation === 'input') {
            this.formControl.validate(true);
          }
        }
      }
    }
  }
  private onControlLabelClick () {
    this.input.focus();
  }
  // Lifecycle
  connectedCallback () {
    this.form = closest(this.host, 'sl-form');
    this.formControl = closest(this.host, 'sl-form-control');
    if (this.formControl) {
      this.controlLabelClickListener = this.onControlLabelClick.bind(this);
      this.formControl.addEventListener('labelClick', this.controlLabelClickListener);
    }
    syncWithTheme(this.host);
    updateStyle(this.host, {
      'display': 'flex'
    });
    formStore.onChange('forms', (forms) => {
      const form = forms.get(this.form);
      if (form) {
        const validation = form.validations.get(this.formControl);
        this.status = (validation && validation.shouldDisplay) ? (validation.status ? validation.status.type : null) : null;
      }
    });
  }
  disconnectedCallback () {
    if (this.formControl && this.controlLabelClickListener) {
      this.formControl.removeEventListener('labelClick', this.controlLabelClickListener);
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
          name={this.formControl?.name}
          value={this.value}
          min={this.min}
          max={this.max}
          step={this.step}
          placeholder={this._placeholder}
          disabled={this.disabled}
          onInput={(e) => this.handleInput(e)}
          onChange={(e) => this.handleChange(e)}
          onBlur={() => this.handleBlur()}
        />
      </div>
    );
  }
}
