// Helpers
import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { closest } from '../../helpers/dom';
import { ValidationLevel, formStore } from '../../helpers/form';
import { config } from '../../helpers/config';

/**
 * @imports ValidationLevel,slithe
 */
@Component({
  tag: 'sl-input-checkbox',
  shadow: { delegatesFocus: true }
})
export class SlitheInputCheckbox {
  @Element() host!: HTMLSlInputCheckboxElement;
  private input!: HTMLInputElement;
  private form: HTMLSlFormElement|null;
  private formControl: HTMLSlFormControlElement|null;
  // Props
  /**
   * @binding input
   */
  @Prop({ mutable: true }) value: boolean = false;
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() label?: string = '';
  @Prop() status?: ValidationLevel|null = null;
  // Events
  @Event({ eventName: 'input' }) inputEvent: EventEmitter<boolean>;
  @Event({ eventName: 'change' }) changeEvent: EventEmitter<boolean>;
  // Computed
  get class () {
    return {
      'sl-input-checkbox': true,
      [this.status]: !!this.status
    };
  }
  get effectiveName () {
    return this.formControl?.name || crypto.randomUUID();
  }
  // Handlers
  private handleInput (e: InputEvent) {
    e.stopPropagation();
    this.value = this.input.checked;
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
  private handleClick () {
    this.input.click();
  }
  // Lifecycle
  connectedCallback () {
    this.form = closest(this.host, 'sl-form');
    this.formControl = closest(this.host, 'sl-form-control');
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
  // Template
  render () {
    return (
      <div class={this.class}>
        <div class='checkbox-wrapper'>
          <input
            ref={(el) => this.input = el}
            type='checkbox'
            name={this.effectiveName}
            checked={this.value}
            disabled={this.disabled}
            onInput={(e) => this.handleInput(e)}
            onChange={(e) => this.handleChange(e)}
            onBlur={() => this.handleBlur()}
          />
          {this.value && <sl-icon name={config.checkIcon} size='12px'/>}
        </div>
        {this.label && <sl-label name={this.effectiveName} required={this.formControl?.required} onClick={() => this.handleClick()}>{this.label}</sl-label>}
      </div>
    );
  }
}
