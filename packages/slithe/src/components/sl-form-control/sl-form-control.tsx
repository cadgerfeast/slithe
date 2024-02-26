// Helpers
import { Component, Element, Event, EventEmitter, Method, Prop, State, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { Validation, ValidationHandler, noValidation } from '../../helpers/form';
import { config } from '../../helpers/config';
import { querySelector } from '../../helpers/dom';

/**
 * @import ValidationHandler,slithe
 */
@Component({
  tag: 'sl-form-control',
  shadow: true
})
export class SlitheFormControl {
  @Element() host!: HTMLSlFormControlElement;
  // Props
  @Prop() label?: string = '';
  @Prop() caption?: string = '';
  @Prop() name?: string = crypto.randomUUID();
  @Prop({ reflect: true }) required?: boolean = false;
  @Prop() validation?: ValidationHandler = noValidation;
  // State
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
  public async validate (): Promise<Validation|null> {
    this.status = null;
    const field = (
      querySelector<HTMLSlInputTextElement>(this.host, 'sl-input-text') ||
      querySelector<HTMLSlInputNumberElement>(this.host, 'sl-input-number') ||
      querySelector<HTMLSlInputCheckboxElement>(this.host, 'sl-input-checkbox')
    );
    if (field) {
      if (this.required && (!field.value || !field.value.toString().trim())) {
        this.status = { type: 'failure', message: 'Field cannot be left empty.' };
      } else if (this.validation) {
        this.status = this.validation(field.value) || null;
      } else if (this.required) {
        this.status = { type: 'success' };
      }
      field.status = this.status ? this.status.type : null;
    }
    return this.status;
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
  }
  // Template
  render () {
    return (
      <div class='sl-form-control'>
        {this.label && <sl-label name={this.name} required={this.required} onClick={() => this.handleLabelClick()}>{this.label}</sl-label>}
        <slot/>
        {this.status?.message && <div class={`status ${this.status.type}`}><sl-icon name={this.statusIcon} size='12px'/><span>{this.status.message}</span></div>}
        {this.caption && <span class='caption'>{this.caption}</span>}
      </div>
    );
  }
}
