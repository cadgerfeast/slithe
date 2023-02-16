// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheHud } from './sl-hud';

describe('sl-hud', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheHud],
      html: '<sl-hud></sl-hud>',
    });
    expect(root).toBeTruthy();
  });
});
