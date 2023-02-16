// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheSplitter } from './sl-splitter';

describe('sl-splitter', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheSplitter],
      html: '<sl-splitter></sl-splitter>',
    });
    expect(root).toBeTruthy();
  });
});
