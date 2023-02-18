// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheLayout } from './sl-layout';

describe('sl-layout', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheLayout],
      html: '<sl-layout></sl-layout>',
    });
    expect(root).toBeTruthy();
  });
});
