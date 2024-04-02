// Helpers
import { Component, Element, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { closest, contains } from '../../helpers/dom';
import { TextAutocomplete, ValidationLevel, formStore, TextOption } from '../../helpers/form';
import { fullTextMatch } from '../../helpers/text';

/**
 * @import TextAutocomplete,slithe
 * @import ValidationLevel,slithe
 * @import TextOption,slithe
 */
@Component({
  tag: 'sl-input-text',
  shadow: { delegatesFocus: true }
})
export class SlitheInputText {
  @Element() host!: HTMLSlInputTextElement;
  private input!: HTMLInputElement;
  private form: HTMLSlFormElement|null;
  private formControl: HTMLSlFormControlElement|null;
  // Props
  /**
   * @binding input
   */
  @Prop({ mutable: true }) value?: string;
  @Prop() placeholder?: string = '';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() type?: 'text'|'password' = 'text';
  @Prop() autocomplete?: TextAutocomplete = 'off';
  @Prop() status?: ValidationLevel|null = null;
  @Prop() options?: TextOption[] = [];
  // Modifiers
  @Prop({ reflect: true }) small?: boolean;
  @Prop({ reflect: true }) medium?: boolean;
  @Prop({ reflect: true }) block?: boolean = false;
  // Events
  @Event({ eventName: 'input' }) inputEvent: EventEmitter<string>;
  @Event({ eventName: 'change' }) changeEvent: EventEmitter<string>;
  // State
  @State() focused: boolean = false;
  @State() dirty: boolean = true;
  @State() actionFocusIndex: number = -1;
  private optionRefs: HTMLSlActionElement[] = [];
  private controlLabelClickListener: () => void;
  // Computed
  get _placeholder () {
    return this.placeholder || '';
  }
  get class () {
    return {
      'sl-input-text': true,
      'focused': this.focused,
      [this.status]: !!this.status
    };
  }
  get size () {
    return Math.max(this.value ? this.value.length : 0, this._placeholder.length);
  }
  get actionsOpened () {
    return this.focused && this.dirty;
  }
  get filteredOptions () {
    return (this.options || []).filter((option) => {
      if (this.value) {
        return fullTextMatch(option.name || option.value, this.value.toString());
      }
      return true;
    });
  }
  // Handlers
  private async handleChange (e: Event) {
    e.stopPropagation();
    this.changeEvent.emit(this.value);
  }
  private handleInput (e: InputEvent) {
    this.dirty = true;
    e.stopPropagation();
    this.value = this.input.value;
    this.emitAndValidate();
  }
  private handleFocus () {
    this.dirty = true;
    this.focused = true;
  }
  private handleBlur (e: FocusEvent) {
    if (!contains(this.input, e.relatedTarget as HTMLElement) && !contains(this.host, e.relatedTarget as HTMLElement)) {
      this.focused = false;
      this.actionFocusIndex = -1;
    }
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
  private handleKeyDown (e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp': {
        if (this.optionRefs.length) {
          e.preventDefault();
          this.optionRefs[this.optionRefs.length - 1].focus();
        }
        break;
      }
      case 'ArrowDown': {
        if (this.optionRefs.length) {
          e.preventDefault();
          this.optionRefs[0].focus();
        }
        break;
      }
      case 'Escape': {
        this.dirty = false;
        break;
      }
    }
  }
  private handleActionsFocus (index: number) {
    this.actionFocusIndex = index;
    this.focused = true;
  }
  private handleActionsBlur (e: FocusEvent) {
    if (!contains(this.input, e.relatedTarget as HTMLElement) && !contains(this.host, e.relatedTarget as HTMLElement)) {
      this.focused = false;
      this.actionFocusIndex = -1;
    }
  }
  private handleActionsKeyDown (e: KeyboardEvent, option: TextOption) {
    switch (e.key) {
      case 'ArrowUp': {
        e.preventDefault();
        if (this.optionRefs[this.actionFocusIndex - 1]) {
          this.optionRefs[this.actionFocusIndex - 1].focus();
        } else {
          this.optionRefs[this.optionRefs.length - 1].focus();
        }
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        if (this.optionRefs[this.actionFocusIndex + 1]) {
          this.optionRefs[this.actionFocusIndex + 1].focus();
        } else {
          this.optionRefs[0].focus();
        }
        break;
      }
      case 'Escape': {
        e.preventDefault();
        this.closeOptionsAndFocusInput();
        break;
      }
      case ' ':
      case 'Enter': {
        e.preventDefault();
        this.selectOption(option);
        this.closeOptionsAndFocusInput();
        break;
      }
    }
  }
  private selectOption ({ value }: TextOption) {
    this.value = value;
    this.emitAndValidate();
    this.dirty = false;
  }
  private onControlLabelClick () {
    this.input.focus();
  }
  private closeOptionsAndFocusInput () {
    this.input.focus();
    this.dirty = false;
  }
  private emitAndValidate () {
    this.inputEvent.emit(this.value);
    if (this.form && this.formControl) {
      this.status = null;
      if (this.form.validation === 'input') {
        this.formControl.validate(true);
      }
    }
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
          class={{ 'focused': this.focused }}
          type={this.type}
          autocomplete={this.autocomplete}
          name={this.formControl?.name}
          value={this.value}
          size={this.size}
          placeholder={this._placeholder}
          disabled={this.disabled}
          onInput={(e) => this.handleInput(e)}
          onChange={(e) => this.handleChange(e)}
          onFocus={() => this.handleFocus()}
          onBlur={(e) => this.handleBlur(e)}
          onKeyDown={(e) => this.handleKeyDown(e)}
        />
        {this.filteredOptions.length > 0 &&
          <sl-popover opened={this.actionsOpened} manual align='justify'>
            <sl-actions>
              {this.filteredOptions.map((option, index) => (
                <sl-action
                  ref={(el) => el ? (this.optionRefs[index] = el) : this.optionRefs.splice(index, 1)}
                  focusIndex={this.actionFocusIndex === index ? 0 : -1}
                  onFocus={() => this.handleActionsFocus(index)}
                  onBlur={(e) => this.handleActionsBlur(e)}
                  onKeyDown={(e) => this.handleActionsKeyDown(e, option)}
                  onClick={() => this.selectOption(option)}
                >
                  {option.name || option.value}
                </sl-action>
              ))}
            </sl-actions>
          </sl-popover>
        }
      </div>
    );
  }
}
