// Helpers
import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';

@Component({
  tag: 'sl-action',
  shadow: { delegatesFocus: true }
})
export class SlitheAction {
  @Element() host!: HTMLSlActionElement;
  // Props
  @Prop() focusIndex?: number = 0;
  @Prop({ reflect: true }) danger?: boolean;
  // Events
  @Event({ eventName: 'click' }) clickEvent: EventEmitter<void>;
  // Handlers
  private handleClick (e: MouseEvent) {
    e.stopPropagation();
    this.clickEvent.emit();
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    updateStyle(this.host, {
      'display': 'flex'
    });
  }
  // Template
  render () {
    return (
      <li class='sl-action' tabIndex={this.focusIndex} onClick={(e) => this.handleClick(e)}>
        <slot/>
      </li>
    );
  }
}
