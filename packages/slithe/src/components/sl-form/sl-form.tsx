// Helpers
import { Component, Element, Event, EventEmitter, Method, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { ValidationLevel, addForm, removeForm } from '../../helpers/form';
import { querySelectorAll } from '../../helpers/dom';

/**
 * @import ValidationLevel,slithe
 */
@Component({
  tag: 'sl-form',
  shadow: true
})
export class SlitheForm {
  @Element() host!: HTMLSlFormElement;
  // Props
  @Prop() validation?: 'submit'|'input' = 'input';
  // Events
  @Event({ eventName: 'submit' }) submitEvent: EventEmitter<ValidationLevel>;
  // Methods
  @Method()
  async submit () {
    const formControls = querySelectorAll<HTMLSlFormControlElement>(this.host, 'sl-form-control');
    const res = await Promise.all(formControls.map((formControl) => formControl.validate(true)));
    this.submitEvent.emit(res.find((validation) => validation?.type === 'failure') ? 'failure' : 'success');
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    addForm(this.host);
  }
  async componentDidRender () {
    const formControls = querySelectorAll<HTMLSlFormControlElement>(this.host, 'sl-form-control');
    Promise.all(formControls.map((formControl) => formControl.validate(false)));
  }
  disconnectedCallback () {
    removeForm(this.host);
  }
  // Template
  render () {
    return (
      <form class='sl-form'>
        <slot/>
      </form>
    );
  }
}
