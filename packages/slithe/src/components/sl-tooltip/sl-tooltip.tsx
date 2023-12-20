// Helpers
import { Component, Element, h, Method, Prop, State, Listen } from '@stencil/core';
import { contains } from '../../helpers/dom';
import { syncWithTheme } from '../../helpers/theme';
import { Deferred, delay } from '../../helpers/time';

@Component({
  tag: 'sl-tooltip',
  shadow: true
})
export class SlitheTooltip {
  @Element() host!: HTMLSlTooltipElement;
  private ready = new Deferred();
  // Props
  @Prop() target: HTMLElement;
  @Prop() position: [number, number] = [0, 0];
  @Prop() debounce: number = 0.25;
  // State
  @State() opacity: number = 0;
  // Computed
  get style () {
    const res: Record<string, string> = {
      'position': 'fixed',
      'opacity': this.opacity.toString(),
      'transition': `opacity ${this.debounce}s ease-in-out`
    };
    const top = this.position[1] + 15;
    const left = this.position[0] + 15;
    const rect = this.host.getBoundingClientRect();
    if ((top + rect.height) >= window.innerHeight) {
      res['bottom'] = `${8}px`;
    } else {
      res['top'] = `${top}px`;
    }
    if ((left + rect.width) >= window.innerWidth) {
      res['right'] = `${8}px`;
    } else {
      res['left'] = `${left}px`;
    }
    return res;
  }
  // Methods
  @Method()
  async show () {
    await this.ready.promise;
    this.opacity = 1;
  }
  @Method()
  async hide () {
    this.opacity = 0;
    await delay(this.debounce * 1000);
    this.host.remove();
  }
  // Handlers
  @Listen('mousemove', { target: 'window' })
  handleMouseMove (e: MouseEvent) {
    if (contains(e.target as Element, this.target)) {
      this.position = [e.clientX, e.clientY];
    }
  }
  // Lifecycle
  connectedCallback () {
    syncWithTheme(this.host);
  }
  componentDidLoad () {
    this.ready.resolve();
  }
  // Template
  render () {
    return (
      <div class='sl-tooltip' style={this.style}>
        <slot/>
      </div>
    );
  }
}
