// Helpers
import { Component, Element, Method, Prop, Watch, h } from '@stencil/core';
import { syncWithTheme, updateStyle } from '../../helpers/theme';
import { Alignment, contains } from '../../helpers/dom';

/**
 * @import Alignment,slithe
 */
@Component({
  tag: 'sl-popover',
  shadow: { delegatesFocus: true }
})
export class SlithePopover {
  @Element() host!: HTMLSlPopoverElement;
  // Props
  @Prop() target?: HTMLElement;
  @Prop() position?: 'top'|'right'|'bottom'|'left' = 'bottom';
  @Prop() align?: Alignment = 'start';
  @Prop() manual?: boolean = false;
  @Prop({ mutable: true }) opened?: boolean = false;
  @Prop() offset?: number = 0;
  // State
  private targetClickListener: () => void;
  private windowClickListener: () => void;
  // Computed
  get currentTarget () {
    return this.target || this.host.previousElementSibling as HTMLElement;
  }
  get effectiveOffset () {
    return (!isNaN(this.offset) ? this.offset : 8) + 1;
  }
  get class () {
    return {
      'sl-popover': true,
      'opened': this.opened,
      [this.position]: true,
      [this.align]: true
    };
  }
  get style () {
    const res: Record<string, string> = {};
    const targetRect = this.currentTarget.getBoundingClientRect();
    const hostRect = this.host.getBoundingClientRect();
    let top = targetRect.top + targetRect.height + ((this.effectiveOffset * 2) - 1);
    let left = targetRect.left;
    let height = 'max-content';
    let width = 'max-content';
    switch (this.position) {
      case 'top': {
        top = targetRect.top - ((this.effectiveOffset * 2) - 1);
        switch (this.align) {
          case 'start': {
            left = targetRect.left;
            break;
          }
          case 'center': {
            left = targetRect.left + (targetRect.width / 2);
            break;
          }
          case 'end': {
            left = targetRect.right;
            break;
          }
          case 'justify': {
            left = targetRect.left;
            width = `${targetRect.width}px`
            break;
          }
        }
        break;
      }
      case 'right': {
        left = targetRect.right + ((this.effectiveOffset * 2) - 1);
        switch (this.align) {
          case 'start': {
            top = targetRect.top;
            break;
          }
          case 'center': {
            top = targetRect.top + (targetRect.height / 2);
            break;
          }
          case 'end': {
            top = targetRect.bottom;
            break;
          }
          case 'justify': {
            top = targetRect.top;
            height = `${targetRect.height}px`
            break;
          }
        }
        break;
      }
      case 'bottom': {
        top = targetRect.top + targetRect.height + ((this.effectiveOffset * 2) - 1);
        switch (this.align) {
          case 'start': {
            left = targetRect.left;
            break;
          }
          case 'center': {
            left = targetRect.left + (targetRect.width / 2);
            break;
          }
          case 'end': {
            left = targetRect.right;
            break;
          }
          case 'justify': {
            left = targetRect.left;
            width = `${targetRect.width}px`
            break;
          }
        }
        break;
      }
      case 'left': {
        left = targetRect.left - ((this.effectiveOffset * 2) - 1);
        switch (this.align) {
          case 'start': {
            top = targetRect.top;
            break;
          }
          case 'center': {
            top = targetRect.top + (targetRect.height / 2);
            break;
          }
          case 'end': {
            top = targetRect.bottom;
            break;
          }
          case 'justify': {
            top = targetRect.top;
            height = `${targetRect.height}px`
            break;
          }
        }
        break;
      }
    }
    res['height'] = height;
    res['width'] = width;
    if ((top + hostRect.height) >= window.innerHeight) {
      res['bottom'] = `${this.effectiveOffset}px`;
    } else {
      res['top'] = `${top}px`;
    }
    if ((left + hostRect.width) >= window.innerWidth) {
      res['right'] = `${this.effectiveOffset}px`;
    } else {
      res['left'] = `${left}px`;
    }
    return res;
  }
  // Methods
  @Method()
  async open () {
    this.opened = true;
    this.windowClickListener = this.onWindowClick.bind(this);
    window.addEventListener('click', this.windowClickListener);
  }
  @Method()
  async close () {
    this.opened = false;
    if (this.windowClickListener) {
      window.removeEventListener('click', this.windowClickListener);
    }
  }
  private updateTargetListener (newTarget: HTMLElement, oldTarget?: HTMLElement) {
    if (!this.manual) {
      if (oldTarget && this.targetClickListener) {
        oldTarget.removeEventListener('click', this.targetClickListener);
      }
      this.targetClickListener = this.onTargetClick.bind(this);
      newTarget.addEventListener('click', this.targetClickListener);
    }
  }
  // Handlers
  private onTargetClick () {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  private onWindowClick (e: PointerEvent) {
    if (!contains(this.currentTarget, e.target as HTMLElement) && !contains(this.host, e.target as HTMLElement)) {
      this.close();
    }
  }
  @Watch('target')
  onTargetChange (newTarget: HTMLElement, oldTarget?: HTMLElement) {
    this.updateTargetListener(this.currentTarget, oldTarget);
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
    updateStyle(this.host, {
      'display': 'inline-flex'
    });
    this.updateTargetListener(this.currentTarget);
  }
  // Template
  render () {
    return (
      <div class={this.class} style={this.style}>
        <div class='popover-wrapper'>
          <div class='popover-container'>
            <slot/>
          </div>
        </div>
      </div>
    );
  }
}
