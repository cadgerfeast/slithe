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
  readonly ATTRIBUTE_NODE: number;
  readonly CDATA_SECTION_NODE: number;
  readonly COMMENT_NODE: number;
  readonly DOCUMENT_FRAGMENT_NODE: number;
  readonly DOCUMENT_NODE: number;
  readonly DOCUMENT_POSITION_CONTAINED_BY: number;
  readonly DOCUMENT_POSITION_CONTAINS: number;
  readonly DOCUMENT_POSITION_DISCONNECTED: number;
  readonly DOCUMENT_POSITION_FOLLOWING: number;
  readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
  readonly DOCUMENT_POSITION_PRECEDING: number;
  readonly DOCUMENT_TYPE_NODE: number;
  readonly ELEMENT_NODE: number;
  readonly ENTITY_NODE: number;
  readonly ENTITY_REFERENCE_NODE: number;
  readonly NOTATION_NODE: number;
  readonly PROCESSING_INSTRUCTION_NODE: number;
  readonly TEXT_NODE: number;
  addEventListener = jest.fn();
  dispatchEvent = jest.fn();
  removeEventListener = jest.fn();
};
