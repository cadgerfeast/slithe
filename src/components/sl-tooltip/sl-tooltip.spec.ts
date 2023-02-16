// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheTooltip } from './sl-tooltip';

describe('sl-tooltip', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheTooltip],
      html: '<sl-tooltip></sl-tooltip>',
    });
    expect(root).toBeTruthy();
  });
});
