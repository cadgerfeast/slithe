// Helpers
import { Component, Element, Event, EventEmitter, Method, Prop, State, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { Validation, ValidationHandler, formStore, noValidation, updateFormControlStatus } from '../../helpers/form';
import { config } from '../../helpers/config';
import { closest, querySelector } from '../../helpers/dom';

/**
 * @import ValidationHandler,slithe
 * @import Validation,slithe
 */
@Component({
  tag: 'sl-form-control',
  shadow: { delegatesFocus: true }
})
export class SlitheFormControl {
  @Element() host!: HTMLSlFormControlElement;
  private form: HTMLSlFormElement|null;
  // Props
  @Prop() label?: string = '';
  @Prop() caption?: string = '';
  @Prop() name?: string = crypto.randomUUID();
  @Prop({ reflect: true }) required?: boolean = false;
  @Prop() validator?: ValidationHandler = noValidation;
  // State
  @State() isValidating: boolean = false;
  @State() status: Validation|null = null;
  // Computed
  get statusIcon () {
    if (this.status?.type === 'success') {
      return config.successIcon;
    } else if (this.status?.type === 'failure') {
      return config.alertIcon;
    }
    return '';
  }
  // Events
  @Event({ eventName: 'labelClick' }) labelClickEvent: EventEmitter<void>;
  // Handlers
  private handleLabelClick () {
    this.labelClickEvent.emit();
  }
  // Methods
  @Method()
  public async validate (shouldDisplay: boolean): Promise<Validation|null> {
    let status: Validation|null = null;
    const field = (
      querySelector<HTMLSlInputTextElement>(this.host, 'sl-input-text') ||
      querySelector<HTMLSlInputNumberElement>(this.host, 'sl-input-number') ||
      querySelector<HTMLSlInputCheckboxElement>(this.host, 'sl-input-checkbox')
    );
    if (field) {
      if (this.required && (!field.value || !field.value.toString().trim())) {
        status = { type: 'failure', message: 'Field cannot be left empty.' };
      } else if (this.validator) {
        if (shouldDisplay) {
          this.isValidating = true;
        }
        status = await this.validator(field.value) || null;
        this.isValidating = false;
      } else if (this.required) {
        status = { type: 'success' };
      }
    }
    if (this.form) {
      updateFormControlStatus(this.form, this.host, status, shouldDisplay);
    }
    return status;
  }
  // Lifecycle
  connectedCallback () {
    this.form = closest(this.host, 'sl-form');
    syncWithTheme(this.host);
    formStore.onChange('forms', (forms) => {
      const form = forms.get(this.form);
      if (form) {
        const validation = form.validations.get(this.host);
        this.status = (validation && validation.shouldDisplay) ? validation.status : null;
      }
    });
  }
  // Template
  render () {
    return (
      <div class='sl-form-control'>
        {this.label && <sl-label name={this.name} required={this.required} onClick={() => this.handleLabelClick()}>{this.label}</sl-label>}
        <slot/>
        {this.isValidating && <sl-spinner small/>}
        {!this.isValidating && this.status?.message && <div class={`status ${this.status.type}`}><sl-icon name={this.statusIcon} size='12px'/><span>{this.status.message}</span></div>}
        {this.caption && <span class='caption'>{this.caption}</span>}
      </div>
    );
  }
}
