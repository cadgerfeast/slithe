// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheBreadcrumbs } from './sl-breadcrumbs';

describe('sl-breadcrumbs', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheBreadcrumbs],
      html: '<sl-breadcrumbs></sl-breadcrumbs>',
    });
    expect(root).toBeTruthy();
  });
});
