// Helpers
import { createStore } from '@stencil/store';

interface DND {
  item: HTMLElement|null;
  dropzone: boolean;
  dropping: boolean;
}

const { state } = createStore<DND>({
  item: null,
  dropzone: false,
  dropping: false
});

export { state as dnd };

interface DNDEvent {
  item: HTMLElement;
  event: PointerEvent;
  group: string;
  offsetX: number;
  offsetY: number;
}
interface CreateDraggableListOptions {
  container: HTMLElement;
  items: string;
  group: string;
  onStart: (item: HTMLElement) => void;
  onEnd: () => void;
}
export function createDraggableList ({ container, items, group, onStart, onEnd }: CreateDraggableListOptions) {
  let dndEvent: DNDEvent|null = null;
  let clone: HTMLElement|null = null;
  // TODO Check if dnd.item is set, and if clone is not (then check group) - Container
  // TODO Placeholder creation
  // TODO onAdd, onRemove, onSort events
  // TODO createDropzoneBpx to replace custom made one
  // Handlers
  function handlePointerDown (e: PointerEvent) {
    const item = closest(e.target as HTMLElement, items);
    if (item) {
      const rect = item.getBoundingClientRect();
      dndEvent = { item, event: e, group, offsetX: e.pageX - rect.left, offsetY: e.pageY - rect.top };
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }
  }
  function handlePointerMove (e: PointerEvent) {
    if (clone) {
      clone.style.top = `${e.pageY - dndEvent.offsetY}px`;
      clone.style.left = `${e.pageX - dndEvent.offsetX}px`;
    } else if (Math.abs(e.pageX - dndEvent.event.pageX) > 5 || Math.abs(e.pageY - dndEvent.event.pageY) > 5) {
      clone = dndEvent.item.cloneNode(true) as HTMLElement;
      clone.classList.add('dragged');
      clone.style.zIndex = '1';
      clone.style.pointerEvents = 'none';
      clone.style.position = 'fixed';
      clone.style.top = `${e.pageY - dndEvent.offsetY}px`;
      clone.style.left = `${e.pageX - dndEvent.offsetX}px`;
      container.appendChild(clone);
      onStart(dndEvent.item);
    }
  }
  function handlePointerUp () {
    if (clone) {
      onEnd();
      removeElement(clone);
      clone = null;
    }
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  }
  container.addEventListener('pointerdown', handlePointerDown);
}

export function removeElement (node: Element) {
  node.parentNode.removeChild(node);
}

export function closest <T extends HTMLElement> (node: Element, selector: string): T {
  if (node) {
    const found = node.closest(selector);
    if (found) {
      return found as T;
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
      for (const child of Array.from(parent.children)) {
        const found = querySelector(child as HTMLElement, selector);
        if (found) {
          return found;
        }
      }
    }
  }
  return null;
}
export function querySelectorAll <T = HTMLElement> (parent: HTMLElement|HTMLSlotElement|ShadowRoot, selector: string): T[] {
  return [...new Set(_querySelectorAll<T>(parent, selector))];
} 
function _querySelectorAll <T = HTMLElement> (parent: HTMLElement|HTMLSlotElement|ShadowRoot, selector: string): T[] {
  const res: T[] = [];
  if (parent) {
    if (parent instanceof Element && parent.matches(selector)) {
      res.push(parent as T);
    }
    if (parent instanceof Element && parent.shadowRoot) {
      res.push(...querySelectorAll<T>(parent.shadowRoot, selector));
    }
    if (parent instanceof HTMLSlotElement) {
      for (const child of parent.assignedNodes()) {
        res.push(...querySelectorAll<T>(child as HTMLElement, selector));
      }
    }
    if (parent.children) {
      for (const child of Array.from(parent.children)) {
        res.push(...querySelectorAll<T>(child as HTMLElement, selector));
      }
    }
  }
  return res;
}

export function attachTooltip (element: HTMLElement) {
  let tooltipText: string|null = element.getAttribute('tooltip');
  let tooltipElement: HTMLSlTooltipElement;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        tooltipText = element.getAttribute('tooltip');
      }
    });
  });
  observer.observe(element, {
    attributes: true
  });
  function handleMouseEnter (e: MouseEvent) {
    if (tooltipText) {
      tooltipElement = document.createElement('sl-tooltip');
      tooltipElement.target = element;
      tooltipElement.position = [e.clientX, e.clientY];
      tooltipElement.appendChild(document.createTextNode(tooltipText));
      tooltipElement.show();
      document.body.appendChild(tooltipElement);
    }
  }
  function handleMouseLeave () {
    if (tooltipElement) {
      tooltipElement.hide();
    }
  }
  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);
}

export type Position = 'top'|'right'|'bottom'|'left'|'center'|'none';
