// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheActionDivider } from './sl-action-divider';

describe('sl-action-divider', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheActionDivider],
      html: '<sl-action-divider></sl-action-divider>',
    });
    expect(root).toBeTruthy();
  });
});
