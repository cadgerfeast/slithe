// Helpers
import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';

@Component({
  tag: 'sl-form-control',
  shadow: true
})
export class SlitheFormControl {
  @Element() host!: HTMLSlFormControlElement;
  // Props
  @Prop() label: string = '';
  @Prop() caption: string = '';
  @Prop() name: string = crypto.randomUUID();
  @Prop({ reflect: true }) required: boolean = false;
  // TODO validation
  // Events
  @Event() labelClick: EventEmitter<void>;
  // Handlers
  private handleLabelClick () {
    this.labelClick.emit();
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
        {this.caption && <span class='caption'>{this.caption}</span>}
      </div>
    );
  }
}
