// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheTabs } from './sl-tabs';

describe('sl-tabs', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheTabs],
      html: '<sl-tabs></sl-tabs>',
    });
    expect(root).toBeTruthy();
  });
});
