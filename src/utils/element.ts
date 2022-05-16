export function getRootElement (el: HTMLElement) {
  if (el.parentNode instanceof ShadowRoot) {
    return el.parentNode.host as HTMLElement;
  }
  return null;
};

export function removeElement (el: HTMLElement) {
  el.parentNode.removeChild(el);
};

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

export function clickOutside (node: Element) {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent('clickoutside', { detail: event }));
		}
	};
	document.addEventListener('click', handleClick);
	return {
		destroy () {
			document.removeEventListener('click', handleClick);
		}
	};
}
