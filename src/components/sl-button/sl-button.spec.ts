// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheButton } from './sl-button';

describe('sl-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheButton],
      html: '<sl-button></sl-button>',
    });
    expect(root).toBeTruthy();
  });
});
