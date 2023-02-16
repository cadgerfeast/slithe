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

type TabModel = {
  id: string;
  name: string;
  viewSlot: string;
  active: boolean;
  placeholder?: boolean;
}
export type TabsModel = {
  id: string;
  type: 'tabs';
  items: TabModel[];
}
export type SplitterModel = {
  id: string;
  type: 'splitter';
  direction: 'horizontal'|'vertical';
  items: [Model, Model];
  blueSize: number;
}
export type Model = TabsModel|SplitterModel;
export function computeModel <T extends Model> (_model: T): T {
  const res = JSON.parse(JSON.stringify(_model)) as T;
  res.id = res.id || crypto.randomUUID();
  switch (res.type) {
    case 'tabs': {
      let hasActive = false;
      if (res.items.length > 0) {
        for (let i = 0; i < res.items.length; i++) {
          res.items[i].id = res.items[i].id || crypto.randomUUID();
          hasActive = hasActive || res.items[i].active;
        }
        if (!hasActive) {
          res.items[0].active = true;
        }
      }
      break;
    }
    case 'splitter': {
      res.blueSize = res.blueSize || 50;
      for (let i = 0; i < res.items.length; i++) {
        res.items[i] = computeModel(res.items[i]);
      }
      break;
    }
  }
  return res;
}
