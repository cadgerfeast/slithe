// Helpers
import { Component, Element, Event, EventEmitter, Method, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { ValidationLevel } from '../../helpers/form';
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
  // Events
  @Event({ eventName: 'submit' }) submitEvent: EventEmitter<ValidationLevel>;
  // Methods
  @Method()
  async submit () {
    const formControls = querySelectorAll<HTMLSlFormControlElement>(this.host, 'sl-form-control');
    const res = await Promise.all(formControls.map((formControl) => formControl.validate()));
    this.submitEvent.emit(res.find((validation) => validation?.type === 'failure') ? 'failure' : 'success');
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
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
