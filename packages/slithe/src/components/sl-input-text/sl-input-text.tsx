// Helpers
import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { closest } from '../../helpers/dom';

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
   * @binding slInput
   */
  @Prop({ reflect: true }) value?: string;
  @Prop() placeholder: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() type: 'text'|'password' = 'text';
  // Events
  @Event() slInput: EventEmitter<string>;
  // TODO options
  // State
  private controlLabelClickListener: () => void;
  // Handlers
  private handleInput () {
    this.value = this.input.value;
    this.slInput.emit(this.value);
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
      <div class='sl-input-text'>
        <input
          ref={(el) => this.input = el}
          type={this.type}
          name={this.control?.name}
          value={this.value}
          size={Math.max(this.value?.length || 0, this.placeholder.length)}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={() => this.handleInput()}
        />
      </div>
    );
  }
}
