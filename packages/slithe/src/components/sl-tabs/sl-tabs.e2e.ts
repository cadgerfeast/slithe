// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-tabs></sl-tabs>');
    const element = await page.find('sl-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
