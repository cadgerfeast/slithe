// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheAction } from './sl-action';

describe('sl-action', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheAction],
      html: '<sl-action></sl-action>',
    });
    expect(root).toBeTruthy();
  });
});
