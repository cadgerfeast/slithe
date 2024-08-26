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
