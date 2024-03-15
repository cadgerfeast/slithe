// MutationObserver
Object.defineProperty(global, 'MutationObserver', {
  value: class MutationObserver {
    observe = jest.fn()
  },
  configurable: true,
  writable: true
});
// crypto
Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: jest.fn()
  },
  configurable: true,
  writable: true
});
// CSSStyleSheet
Object.defineProperty(global, 'CSSStyleSheet', {
  value: class CSSStyleSheet {
    replaceSync = jest.fn()
  },
  configurable: true,
  writable: true
});
// CSSStyleSheet
Object.defineProperty(global, 'ShadowRoot', {
  value: class ShadowRoot {},
  configurable: true,
  writable: true
});
// HTMLSlotElement
Object.defineProperty(global, 'HTMLSlotElement', {
  value: class HTMLSlotElement {},
  configurable: true,
  writable: true
});
