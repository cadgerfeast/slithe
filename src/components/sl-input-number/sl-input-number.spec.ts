// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheInputNumber } from './sl-input-number';

describe('sl-input-number', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheInputNumber],
      html: '<sl-input-number></sl-input-number>',
    });
    expect(root).toBeTruthy();
  });
});
