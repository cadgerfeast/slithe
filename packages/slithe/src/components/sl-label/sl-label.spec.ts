// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheLabel } from './sl-label';

describe('sl-label', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheLabel],
      html: '<sl-label></sl-label>',
    });
    expect(root).toBeTruthy();
  });
});
