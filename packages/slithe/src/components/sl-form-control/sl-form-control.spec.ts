// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheFormControl } from './sl-form-control';

describe('sl-form-control', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheFormControl],
      html: '<sl-form-control></sl-form-control>',
    });
    expect(root).toBeTruthy();
  });
});
