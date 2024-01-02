// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheAvatar } from './sl-avatar';

describe('sl-avatar', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheAvatar],
      html: '<sl-avatar name="John Doe"></sl-avatar>',
    });
    expect(root).toBeTruthy();
  });
});
