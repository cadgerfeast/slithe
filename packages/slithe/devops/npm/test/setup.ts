global.MutationObserver = class MutationObserver {
  disconnect = jest.fn();
  observe = jest.fn();
  takeRecords = jest.fn();
};
global.crypto = {
  getRandomValues: jest.fn(),
  randomUUID: jest.fn(),
  subtle: {
    decrypt: jest.fn(),
    deriveBits: jest.fn(),
    deriveKey: jest.fn(),
    digest: jest.fn(),
    encrypt: jest.fn(),
    exportKey: jest.fn(),
    generateKey: jest.fn(),
    importKey: jest.fn(),
    sign: jest.fn(),
    unwrapKey: jest.fn(),
    verify: jest.fn(),
    wrapKey: jest.fn()
  }
};
global.CSSStyleSheet = class CSSStyleSheet {
  readonly cssRules: CSSRuleList;
  readonly ownerRule: CSSRule | null;
  readonly rules: CSSRuleList;
  addRule = jest.fn()
  deleteRule = jest.fn()
  insertRule = jest.fn()
  removeRule = jest.fn()
  replace = jest.fn()
  replaceSync = jest.fn()
  disabled: boolean;
  readonly href: string | null;
  readonly media: MediaList;
  readonly ownerNode: Element | ProcessingInstruction | null;
  readonly parentStyleSheet: CSSStyleSheet | null;
  readonly title: string | null;
  readonly type: string;
}
global.ShadowRoot = class ShadowRoot {
  readonly delegatesFocus: boolean;
  readonly host: Element;
  readonly mode: ShadowRootMode;
  onslotchange = jest.fn();
  readonly slotAssignment: SlotAssignmentMode;
  readonly activeElement: Element | null;
  adoptedStyleSheets: CSSStyleSheet[];
  readonly fullscreenElement: Element | null;
  readonly pictureInPictureElement: Element | null;
  readonly pointerLockElement: Element | null;
  readonly styleSheets: StyleSheetList;
  elementFromPoint = jest.fn();
  elementsFromPoint = jest.fn();
  getAnimations = jest.fn();
  innerHTML: string;
  readonly ownerDocument: Document;
  getElementById = jest.fn();
  readonly childElementCount: number;
  readonly children: HTMLCollection;
  readonly firstElementChild: Element | null;
  readonly lastElementChild: Element | null;
  append = jest.fn();
  prepend = jest.fn();
  querySelector = jest.fn();
  querySelectorAll = jest.fn();
  replaceChildren = jest.fn();
  readonly baseURI: string;
  readonly childNodes: NodeListOf<ChildNode>;
  readonly firstChild: ChildNode | null;
  readonly isConnected: boolean;
  readonly lastChild: ChildNode | null;
  readonly nextSibling: ChildNode | null;
  readonly nodeName: string;
  readonly nodeType: number;
  nodeValue: string | null;
  readonly parentElement: HTMLElement | null;
  readonly parentNode: ParentNode | null;
  readonly previousSibling: ChildNode | null;
  textContent: string | null;
  appendChild = jest.fn();
  cloneNode = jest.fn();
  compareDocumentPosition = jest.fn();
  contains = jest.fn();
  getRootNode = jest.fn();
  hasChildNodes = jest.fn();
  insertBefore = jest.fn();
  isDefaultNamespace = jest.fn();
  isEqualNode = jest.fn();
  isSameNode = jest.fn();
  lookupNamespaceURI = jest.fn();
  lookupPrefix = jest.fn();
  normalize = jest.fn();
  removeChild = jest.fn();
  replaceChild = jest.fn();
  readonly ELEMENT_NODE: 1;
  readonly ATTRIBUTE_NODE: 2;
  readonly TEXT_NODE: 3;
  readonly CDATA_SECTION_NODE: 4;
  readonly ENTITY_REFERENCE_NODE: 5;
  readonly ENTITY_NODE: 6;
  readonly PROCESSING_INSTRUCTION_NODE: 7;
  readonly COMMENT_NODE: 8;
  readonly DOCUMENT_NODE: 9;
  readonly DOCUMENT_TYPE_NODE: 10;
  readonly DOCUMENT_FRAGMENT_NODE: 11;
  readonly NOTATION_NODE: 12;
  readonly DOCUMENT_POSITION_DISCONNECTED: 0x01;
  readonly DOCUMENT_POSITION_PRECEDING: 0x02;
  readonly DOCUMENT_POSITION_FOLLOWING: 0x04;
  readonly DOCUMENT_POSITION_CONTAINS: 0x08;
  readonly DOCUMENT_POSITION_CONTAINED_BY: 0x10;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20;
  addEventListener = jest.fn();
  dispatchEvent = jest.fn();
  removeEventListener = jest.fn();
};
