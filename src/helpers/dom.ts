// Helpers
import { get, writable } from 'svelte/store';
// Types
import type { Writable } from 'svelte/store';
import type { ActionReturn } from 'svelte/action';

export function getRootElement (el: HTMLElement) {
  if (el.parentNode instanceof ShadowRoot) {
    return el.parentNode.host as HTMLElement;
  }
  return null;
}

export function removeElement (el: HTMLElement) {
  if (el?.parentNode) {
    el.parentNode.removeChild(el);
  }
}

let handler: number;
type ObserverCallback = (rect: DOMRect) => void;
interface ObserverState {
  rect?: DOMRect;
  callbacks: Set<ObserverCallback>;
}
const observers = new Map<Element, ObserverState>();
function observeElements () {
  if (observers.size === 0) {
    cancelAnimationFrame(handler);
    return;
  }
  observers.forEach((state, element) => {
    const rect = element.getBoundingClientRect();
    if (state.rect) {
      if (
        state.rect.top !== rect.top ||
        state.rect.left !== rect.left ||
        state.rect.height !== rect.height ||
        state.rect.width !== rect.width
      ) {
        for (const callback of state.callbacks) {
          callback(rect);
        }
      }
    }
    state.rect = rect;
  });
  handler = requestAnimationFrame(observeElements);
}
export function observeRect (node: Element, callback: ObserverCallback) {
  let callbacks: Set<ObserverCallback>;
  if (observers.has(node)) {
    callbacks = observers.get(node).callbacks;
    callbacks.add(callback);
  } else {
    callbacks = new Set([callback]);
    observers.set(node, { callbacks });
  }
  observeElements();
  return {
    dispose () {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        observers.delete(node);
      }
    }
  };
}

export function dispatchEvent (node: Element, key: string, detail = null) {
	node.dispatchEvent(new CustomEvent(key, { detail }));
}

export function dispatchHostEvent (node: HTMLElement, key: string, detail?: unknown) {
  const wrapper = getRootElement(node);
  dispatchEvent(wrapper, key, detail);
}

export function tooltip (node: HTMLElement, _title?: string): ActionReturn {
  let title = _title;
  let tooltipElement;
	const handleMouseEnter = (e: MouseEvent) => {
    if (title) {
      tooltipElement = document.createElement('sl-tooltip');
      tooltipElement.pos = [e.clientX, e.clientY];
      tooltipElement.appendChild(document.createTextNode(title));
      document.body.appendChild(tooltipElement);
    }
	};
  const handleMouseLeave = () => {
		removeElement(tooltipElement);
	};
	node.addEventListener('mouseenter', handleMouseEnter);
  node.addEventListener('mouseleave', handleMouseLeave);
	return {
    update (newTitle: string) {
      title = newTitle;
    },
		destroy () {
			node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
		}
	};
}

function hasTruthyAssignedNode (slot: HTMLSlotElement) {
  return !!slot.assignedNodes().filter((n) => {
    if (n.nodeName !== '#text') {
      return true;
    }
    return !!n.nodeValue.trim();
  }).length;
}

export class SlotManager {
  // Props
  public slots: Writable<Record<string, boolean>>;
  private _node?: HTMLElement;
  private _handlers: Record<string, () => void>;
  // Constructor
  constructor () {
    this.slots = writable({});
    this._handlers = {};
  }
  // Methods
  public initialize (node: HTMLElement) {
    this._node = node;
    this._node.querySelectorAll('slot').forEach((slot) => {
      const slotName = slot.name || 'default';
      this.slots.update((slots) => {
        return {...slots, [slotName]: hasTruthyAssignedNode(slot) }
      });
      this._handlers[slotName] = () => {
        if (this.slots[slotName] !== hasTruthyAssignedNode(slot)) {
          this.slots.update((slots) => {
            return {...slots, [slotName]: hasTruthyAssignedNode(slot) }
          });
        }
      };
      slot.addEventListener('slotchange', this._handlers[slotName]);
    });
  }
  public dispose () {
    if (this._node) {
      for (const slotName in get(this.slots)) {
        const slot = this._node.querySelector(`slot${slotName === 'default' ? ':not([name])' : `[name="${slotName}"]`}`);
        slot.removeEventListener('slotchange', this._handlers[slotName]);
      }
    }
  }
}

export function closest (node: Element, selector: string) {
  if (node) {
    const found = node.closest(selector);
    if (found) {
      return found;
    } else {
      if (node.parentNode instanceof ShadowRoot) {
        return closest(node.parentNode.host, selector);
      } else {
        return closest(node.parentElement, selector);
      }
    }
  }
  return null;
}