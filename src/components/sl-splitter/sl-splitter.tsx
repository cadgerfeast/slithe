// Helpers
import { Component, Element, h, Prop, State, Listen, Event, EventEmitter } from '@stencil/core';
import { MouseButton } from '../../helpers/browser';
import { syncWithTheme } from '../../helpers/theme';
import { clamp } from '../../helpers/number';

@Component({
  tag: 'sl-splitter',
  styleUrl: 'sl-splitter.scss',
  shadow: true
})
export class SlitheSplitter {
  @Element() host!: HTMLSlSplitterElement;
  // Props
  @Prop() horizontal: boolean = true;
  @Prop() vertical: boolean = false;
  @Prop() blueSize: number = 50;
  // State
  @State() _blueSize: number;
  @State() resizing: boolean = false;
  // Events
  @Event() resizeStart: EventEmitter<void>;
  @Event() resizeEnd: EventEmitter<number>;
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    this._blueSize = this.blueSize;
  }
  // Computed
  get direction () {
    return this.vertical ? 'vertical' : 'horizontal';
  }
  get blueStyle () {
    if (this.direction === 'horizontal') {
      return {
        'min-width': '0px',
        'width': `${this._blueSize}%`
      };
    } else {
      return {
        'min-height': '0px',
        'height': `${this._blueSize}%`
      };
    }
  }
  get greenStyle () {
    if (this.direction === 'horizontal') {
      return {
        'min-width': '0px',
        'width': `calc(100% - ${this._blueSize}%)`
      };
    } else {
      return {
        'min-height': '0px',
        'height': `calc(100% - ${this._blueSize}%)`
      };
    }
  }
  // Methods
  private setResizing (resizing: boolean) {
    this.resizing = resizing;
    if (this.resizing) {
      this.resizeStart.emit();
    } else {
      this.resizeEnd.emit(this._blueSize);
    }
  }
  // Handlers
  private handleMouseDown (e: MouseEvent) {
    if (e.button === MouseButton.Left) {
      e.stopPropagation();
      this.setResizing(true);
    }
  }
  @Listen('mousemove', { target: 'window' })
  handleMouseMove (e: MouseEvent) {
    if (this.resizing) {
      const rect = this.host.getBoundingClientRect();
      if (this.direction === 'horizontal') {
        this._blueSize = clamp(0, (e.clientX - rect.left) * 100 / rect.width, 100);
      } else {
        this._blueSize = clamp(0, (e.clientY - rect.top) * 100 / rect.height, 100);
      }
    }
  }
  @Listen('mouseup', { target: 'window' })
  handleMouseUp () {
    if (this.resizing) {
      this.setResizing(false);
    }
  }
  // Template
  render () {
    return (
      <div class={`sl-splitter ${this.direction}`}>
        <div class="pane" style={this.blueStyle}>
            {this.resizing && <div class="catcher"/>}
          <slot name="blue"/>
        </div>
        <div class="handle" onMouseDown={(e) => this.handleMouseDown(e)}>
          <div class="divider"/>
        </div>
        <div class="pane" style={this.greenStyle}>
        {this.resizing && <div class="catcher"/>}
          <slot name="green"/>
        </div>
      </div>
    );
  }
}