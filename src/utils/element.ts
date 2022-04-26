export function getRootElement (el: HTMLElement) {
  if (el.parentNode instanceof ShadowRoot) {
    return el.parentNode.host as HTMLElement;
  }
  return null;
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
export function observeRect (target: Element, callback: ObserverCallback) {
  let callbacks: Set<ObserverCallback>;
  if (observers.has(target)) {
    callbacks = observers.get(target).callbacks;
    callbacks.add(callback);
  } else {
    callbacks = new Set([callback]);
    observers.set(target, { callbacks });
  }
  observeElements();
  return {
    dispose () {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        observers.delete(target);
      }
    }
  };
}
