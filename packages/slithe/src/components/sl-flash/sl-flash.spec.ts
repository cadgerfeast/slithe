// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheFlash } from './sl-flash';

describe('sl-flash', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheFlash],
      html: '<sl-flash></sl-flash>',
    });
    expect(root).toBeTruthy();
  });
});
