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

export function attachToElement (parent: HTMLElement, target: HTMLElement) {
  console.info('SNETCH: attachToElement');
  console.info(parent);
  console.info(target);
  // TODO attach to keep position
}
