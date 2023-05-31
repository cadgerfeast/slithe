// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheBlankslate } from './sl-blankslate';

describe('sl-blankslate', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheBlankslate],
      html: '<sl-blankslate></sl-blankslate>',
    });
    expect(root).toBeTruthy();
  });
});
