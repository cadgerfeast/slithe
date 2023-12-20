// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheCard } from './sl-card';

describe('sl-card', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheCard],
      html: '<sl-card></sl-card>',
    });
    expect(root).toBeTruthy();
  });
});
