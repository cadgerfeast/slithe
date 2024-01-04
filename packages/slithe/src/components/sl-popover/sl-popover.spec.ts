// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlithePopover } from './sl-popover';

describe('sl-popover', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlithePopover],
      html: '<button>Target</button><sl-popover></sl-popover>',
    });
    expect(root).toBeTruthy();
  });
});
