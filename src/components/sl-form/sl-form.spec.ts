// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheForm } from './sl-form';

describe('sl-form', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheForm],
      html: '<sl-form></sl-form>',
    });
    expect(root).toBeTruthy();
  });
});
