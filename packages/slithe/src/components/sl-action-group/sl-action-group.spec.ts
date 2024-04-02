// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheActionGroup } from './sl-action-group';

describe('sl-action-group', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheActionGroup],
      html: '<sl-action-group></sl-action-group>',
    });
    expect(root).toBeTruthy();
  });
});
