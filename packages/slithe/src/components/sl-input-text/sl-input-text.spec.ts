// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheInputText } from './sl-input-text';

describe('sl-input-text', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheInputText],
      html: '<sl-input-text></sl-input-text>',
    });
    expect(root).toBeTruthy();
  });
});
