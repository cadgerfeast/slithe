// Helpers
import { get, writable } from 'svelte/store';
import { MouseButton } from './browser';
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

export function tooltip (node: HTMLElement, _title?: string): ActionReturn {
  let title = _title;
  let tooltipElement;
	const handleMouseEnter = (e: MouseEvent) => {
    if (title) {
      tooltipElement = document.createElement('sl-tooltip');
      tooltipElement.target = node;
      tooltipElement.pos = [e.clientX, e.clientY];
      tooltipElement.appendChild(document.createTextNode(title));
      document.body.appendChild(tooltipElement);
    }
	};
  const handleMouseLeave = () => {
    if (tooltipElement) {
      tooltipElement.hide();
    }
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

export function contains (parent: Element|ShadowRoot, child: Node) {
  if (parent) {
    const found = parent.contains(child);
    if (found) {
      return true;
    } else {
      if (parent instanceof Element && parent.shadowRoot) {
        return contains(parent.shadowRoot, child);
      }
    }
  }
  return false;
}

export function querySelector (parent: HTMLElement|HTMLSlotElement|ShadowRoot, selector: string): HTMLElement {
  if (parent) {
    if (parent instanceof Element && parent.matches(selector)) {
      return parent;
    }
    if (parent instanceof Element && parent.shadowRoot) {
      const found = querySelector(parent.shadowRoot, selector);
      if (found) {
        return found;
      }
    }
    if (parent instanceof HTMLSlotElement) {
      for (const child of parent.assignedNodes()) {
        const found = querySelector(child as HTMLElement, selector);
        if (found) {
          return found;
        }
      }
    }
    if (parent.children) {
      for (const child of parent.children) {
        const found = querySelector(child as HTMLElement, selector);
        if (found) {
          return found;
        }
      }
    }
  }
  return null;
}

function isOnTop (el: HTMLElement, x: number, y: number) {
  const rect = el.getBoundingClientRect();
  return (
    rect.left < x &&
    rect.right > x &&
    rect.top < y &&
    rect.bottom > y
  );
}
function isAtRight (el: HTMLElement, x: number) {
  const rect = el.getBoundingClientRect();
  return x > (rect.left + (rect.width / 2));
}

interface DraggableOptions {
  item: any;
  startIndex: number,
  generateClone: any;
  onDragStart: any;
  onDrop: any;
}
let dragItem = null;
export function draggable (node: HTMLElement, options: DraggableOptions): ActionReturn {
  function handleMouseDown (e: MouseEvent) {
    if (e.button === MouseButton.Left) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      const rect = node.getBoundingClientRect();
      dragItem = {
        dragContainer: node.parentElement,
        item: options.item,
        startIndex: options.startIndex,
        startX: e.clientX,
        startY: e.clientY,
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
        curX: e.clientX,
        curY: e.clientY
      };
    }
	}
  function handleMouseMove (e: MouseEvent) {
    if (!dragItem.clone && ((Math.abs(dragItem.startX - e.clientX) > 5) || (Math.abs(dragItem.startY - e.clientY) > 5))) {
      dragItem.clone = node.cloneNode(false);
      dragItem.clone.appendChild(options.generateClone(dragItem.item));
      dragItem.clone.style.position = 'fixed';
      dragItem.clone.firstChild.setAttribute('dragged', '');
      document.body.appendChild(dragItem.clone);
      options.onDragStart(dragItem);
    }
    if (dragItem.clone) {
      dragItem.curX = e.clientX;
      dragItem.curY = e.clientY;
      dragItem.clone.style.top = `${dragItem.curY - dragItem.offsetY}px`;
      dragItem.clone.style.left = `${dragItem.curX - dragItem.offsetX}px`;
    }
	}
  function handleMouseUp () {
    if (dragItem.clone) {
      options.onDrop(dragItem);
      if (dragItem.dropContainer) {
        dragItem.dropContainer.dispatchEvent(new CustomEvent('drop'));
      }
    }
    removeElement(dragItem.clone);
    dragItem = null;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
	}
	node.addEventListener('mousedown', handleMouseDown);
	return {
		destroy () {
			node.removeEventListener('mousedown', handleMouseDown);
		}
	};
}
interface DroplistOptions {
  onDragOver: any;
  onDragLeave: any;
  onDropInside: any;
}
export function droplist (node: HTMLElement, options: DroplistOptions): ActionReturn {
  let hasLeft = false;
  function handleDrop () {
    options.onDropInside(dragItem);
  }
  function handleMouseMove () {
    if (dragItem?.clone) {
      if (isOnTop(node, dragItem.curX, dragItem.curY)) {
        dragItem.dropContainer = node;
        hasLeft = false;
        let index = 0;
        for (let i = 0; i < node.children.length; i++) {
          if (node.id !== dragItem.item.id) {
            if (isAtRight(node.children[i] as HTMLElement, dragItem.curX)) {
              index = i + 1;
            }
          }
        }
        options.onDragOver(dragItem, index);
      } else {
        if (!hasLeft) {
          dragItem.dropContainer = null;
          hasLeft = true;
          options.onDragLeave(dragItem);
        }
      }
    }
	}
  node.addEventListener('drop', handleDrop);
  window.addEventListener('mousemove', handleMouseMove);
	return {
		destroy () {
      node.removeEventListener('drop', handleDrop);
      window.removeEventListener('mousemove', handleMouseMove);
		}
	};
}
