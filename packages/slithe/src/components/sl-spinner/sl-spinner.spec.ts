// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheSpinner } from './sl-spinner';

describe('sl-spinner', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheSpinner],
      html: '<sl-spinner></sl-spinner>',
    });
    expect(root).toBeTruthy();
  });
});
