// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheBreadcrumb } from './sl-breadcrumb';

describe('sl-breadcrumb', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheBreadcrumb],
      html: '<sl-breadcrumb></sl-breadcrumb>',
    });
    expect(root).toBeTruthy();
  });
});
