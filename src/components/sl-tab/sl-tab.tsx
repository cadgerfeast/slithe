// Helpers
import { Component, Element, h, Prop, Event, EventEmitter } from '@stencil/core';
import { syncWithTheme } from '../../helpers/theme';
import { config } from '../../helpers/config';
@Component({
  tag: 'sl-tab',
  styleUrl: 'sl-tab.scss',
  shadow: true
})
export class SlitheTab {
  @Element() host!: HTMLSlTabElement;
  // Props
  @Prop({ reflect: true }) active: boolean = false;
  @Prop({ reflect: true }) closable: boolean = false;
  // Events
  @Event() close: EventEmitter<void>;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
  }
  // Handlers
  handleCloseClick (e: MouseEvent) {
    e.stopPropagation();
    this.close.emit();
  }
  // Template
  private renderClosable () {
    return (
      <sl-icon name={config.closeIcon} onClick={(e) => this.handleCloseClick(e)}/>
    );
  }
  render () {
    return (
      <li class='sl-tab'>
        <button>
          <slot/>
          {this.closable && this.renderClosable()}
        </button>
      </li>
    );
  }
}
