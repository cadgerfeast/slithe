// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheIcon } from './sl-icon';

describe('sl-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheIcon],
      html: '<sl-icon></sl-icon>',
    });
    expect(root).toBeTruthy();
  });
});
