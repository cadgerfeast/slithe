// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheTab } from './sl-tab';

describe('sl-tab', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheTab],
      html: '<sl-tab></sl-tab>',
    });
    expect(root).toBeTruthy();
  });
});
