// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheActions } from './sl-actions';

describe('sl-actions', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheActions],
      html: '<sl-actions></sl-actions>',
    });
    expect(root).toBeTruthy();
  });
});
