// Helpers
import { createStore } from '@stencil/store';

type DNDPosition = { id: string; index: number; };

interface DNDEvent {
  item: HTMLElement;
  event: PointerEvent;
  group: string;
  offsetX: number;
  offsetY: number;
  clone?: HTMLElement;
  from?: DNDPosition;
  to?: DNDPosition;
}
interface DND {
  dndEvent: DNDEvent|null;
  dropzone: boolean;
  dropping: boolean;
}

const { state, onChange } = createStore<DND>({
  dndEvent: null,
  dropzone: false,
  dropping: false
});

export { state as dnd };

interface CreateDraggableListOptions {
  container: HTMLElement;
  disabled: boolean;
  items: string;
  filter: string;
  group: string;
  onStart: (item: HTMLElement) => void;
  onEnd: () => void;
  onSort: (id: string, from: DNDPosition, to: DNDPosition) => void;
}
export function createDraggableList ({ container, disabled, items, filter, group, onStart, onSort, onEnd }: CreateDraggableListOptions) {
  if (!disabled) {
    function handleContainerPointerDown (e: PointerEvent) {
      const item = closest(e.target as HTMLElement, `${items}${filter}`);
      if (item) {
        const rect = item.getBoundingClientRect();
        state.dndEvent = {
          item,
          event: e,
          group,
          offsetX: e.pageX - rect.left,
          offsetY: e.pageY - rect.top
        };
        window.addEventListener('pointermove', handleWindowPointerMove);
        window.addEventListener('pointerup', handleWindowPointerUp);
      }
    }
    function handleContainerPointerMove (e: PointerEvent) {
      if (state.dndEvent && state.dndEvent.clone && state.dndEvent.group === group) {
        const offsetX = e.pageX - container.getBoundingClientRect().left;
        let leftSibling: HTMLElement|null = null;
        const elements = Array.from(querySelectorAll(container, items)).filter((el) => !el.classList.contains('clone') && !el.classList.contains('placeholder'));
        for (const element of elements) {
          if (offsetX > (element.offsetLeft + (element.offsetWidth / 2))) {
            leftSibling = element;
          }
        }
        if (!leftSibling) {
          removeElement(state.dndEvent.item);
          container.prepend(state.dndEvent.item);
        } else {
          removeElement(state.dndEvent.item);
          leftSibling.insertAdjacentElement('afterend', state.dndEvent.item);
        }
        state.dndEvent.to = {
          id: container.id,
          index: Array.from(querySelectorAll(container, items)).findIndex((el) => el === state.dndEvent.item)
        };
      }
    }
    function handleWindowPointerMove (e: PointerEvent) {
      if (state.dndEvent.clone) {
        state.dndEvent.clone.style.top = `${e.pageY - state.dndEvent.offsetY}px`;
        state.dndEvent.clone.style.left = `${e.pageX - state.dndEvent.offsetX}px`;
      } else if (Math.abs(e.pageX - state.dndEvent.event.pageX) > 5 || Math.abs(e.pageY - state.dndEvent.event.pageY) > 5) {
        state.dndEvent.from = {
          id: container.id,
          index: Array.from(querySelectorAll(container, items)).findIndex((el) => el === state.dndEvent.item)
        };
        state.dndEvent.clone = state.dndEvent.item.cloneNode(true) as HTMLElement;
        state.dndEvent.clone.classList.add('clone', 'dragged');
        state.dndEvent.clone.style.zIndex = '1';
        state.dndEvent.clone.style.pointerEvents = 'none';
        state.dndEvent.clone.style.position = 'fixed';
        state.dndEvent.clone.style.top = `${e.pageY - state.dndEvent.offsetY}px`;
        state.dndEvent.clone.style.left = `${e.pageX - state.dndEvent.offsetX}px`;
        container.appendChild(state.dndEvent.clone);
        state.dndEvent.item.classList.add('placeholder');
        onStart(state.dndEvent.item);
      }
    }
    function handleWindowPointerUp () {
      if (state.dndEvent) {
        if (state.dndEvent.item) {
          state.dndEvent.item.classList.remove('placeholder');
        }
        if (state.dndEvent.from && state.dndEvent.to) {
          onSort(state.dndEvent.item.id, state.dndEvent.from, state.dndEvent.to);
        }
        if (state.dndEvent.clone) {
          removeElement(state.dndEvent.clone);
        }
        state.dndEvent.clone = null;
        state.dndEvent = null;
      }
      onEnd();
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
    }
    container.addEventListener('pointerdown', handleContainerPointerDown);
    container.addEventListener('pointermove', handleContainerPointerMove);
  }
}

interface CreateDropzoneBoxOptions {
  container: HTMLElement;
  disabled: boolean;
  onDrop: (item: HTMLElement, position: Position) => void;
}
export function createDropzoneBox ({ container, disabled, onDrop }: CreateDropzoneBoxOptions) {
  const existingDropzone = container.querySelector('div.dropzone');
  if (!disabled) {
    let position: Position = 'none';
    let dropItem: HTMLElement|null = null;
    if (!existingDropzone) {
      const dropzone = document.createElement('div');
      dropzone.classList.add('dropzone');
      container.appendChild(dropzone);
      onChange('dndEvent', (dndEvent) => {
        if (dndEvent) {
          dropItem = dndEvent.item;
          dropzone.classList.add('active');
        } else {
          dropzone.classList.remove('active');
        }
      });
      dropzone.addEventListener('pointermove', (e) => {
        dropzone.classList.add('active');
        const pX = e.offsetX * 100 / dropzone.offsetWidth;
        const pY = e.offsetY * 100 / dropzone.offsetHeight;
        dropzone.classList.remove('dragover-left');
        dropzone.classList.remove('dragover-right');
        dropzone.classList.remove('dragover-top');
        dropzone.classList.remove('dragover-bottom');
        dropzone.classList.remove('dragover-center');
        position = 'none';
        if (pX < 30) {
          position = 'left';
          dropzone.classList.add('dragover-left');
        } else if (pX > 70) {
          position = 'right';
          dropzone.classList.add('dragover-right');
        } else if (pY < 15) {
          position = 'top';
          dropzone.classList.add('dragover-top');
        } else if (pY > 85) {
          position = 'bottom';
          dropzone.classList.add('dragover-bottom');
        } else {
          position = 'center';
          dropzone.classList.add('dragover-center');
        }
      });
      dropzone.addEventListener('pointerleave', (e) => {
        position = 'none';
        dropzone.classList.remove('dragover-left');
        dropzone.classList.remove('dragover-right');
        dropzone.classList.remove('dragover-top');
        dropzone.classList.remove('dragover-bottom');
        dropzone.classList.remove('dragover-center');
      });
      dropzone.addEventListener('pointerup', () => {
        if (position) {
          onDrop(dropItem, position);
        }
        state.dndEvent = null;
      });
    }
  } else if (existingDropzone) {
    removeElement(existingDropzone);
  }
}

export function removeElement (node: Element) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

export function closest <T extends HTMLElement> (node: Element, selector: string): T|null {
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

export function querySelector <T = HTMLElement> (parent: HTMLElement|HTMLSlotElement|ShadowRoot, selector: string): T {
  if (parent) {
    if (parent instanceof Element && parent.matches(selector)) {
      return parent as T;
    }
    if (parent instanceof Element && parent.shadowRoot) {
      const found = querySelector(parent.shadowRoot, selector);
      if (found) {
        return found as T;
      }
    }
    if (parent instanceof HTMLSlotElement) {
      for (const child of parent.assignedNodes()) {
        const found = querySelector(child as HTMLElement, selector);
        if (found) {
          return found as T;
        }
      }
    }
    if (parent.children) {
      for (const child of Array.from(parent.children)) {
        const found = querySelector(child as HTMLElement, selector);
        if (found) {
          return found as T;
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

export type Alignment = 'start'|'center'|'end'|'justify';

export function getValidSlotChildren (slot: HTMLSlotElement) {
  return slot.assignedNodes().filter((node) => (node.nodeName !== '#text') || node.textContent.length > 0);
}

export function isEmptySlot (slot: HTMLSlotElement) {
  return getValidSlotChildren(slot).length === 0;
}
