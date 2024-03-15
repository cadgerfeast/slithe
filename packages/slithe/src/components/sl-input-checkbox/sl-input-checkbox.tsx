// Helpers
import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { closest } from '../../helpers/dom';
import { ValidationLevel } from '../../helpers/form';
import { config } from '../../helpers/config';

/**
 * @import ValidationLevel,slithe
 */
@Component({
  tag: 'sl-input-checkbox',
  shadow: true
})
export class SlitheInputCheckbox {
  @Element() host!: HTMLSlInputCheckboxElement;
  private input!: HTMLInputElement;
  private control: HTMLSlFormControlElement|null;
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
    return this.control?.name || crypto.randomUUID();
  }
  // Handlers
  private handleInput (e: InputEvent) {
    e.stopPropagation();
    this.value = this.input.checked;
    this.inputEvent.emit(this.value);
  }
  private async handleChange (e: Event) {
    e.stopPropagation();
    this.changeEvent.emit(this.value);
    if (this.control) {
      await this.control.validate();
    }
  }
  private handleClick () {
    this.input.click();
  }
  // Lifecycle
  connectedCallback () {
    this.control = closest(this.host, 'sl-form-control');
    syncWithTheme(this.host);
    updateStyle(this.host, {
      'display': 'flex'
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
          />
          {this.value && <sl-icon name={config.checkIcon} size='12px'/>}
        </div>
        {this.label && <sl-label name={this.effectiveName} required={this.control?.required} onClick={() => this.handleClick()}>{this.label}</sl-label>}
      </div>
    );
  }
}
