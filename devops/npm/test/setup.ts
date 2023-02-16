global.MutationObserver = class MutationObserver {
  disconnect = jest.fn();
  observe = jest.fn();
  takeRecords = jest.fn();
};
