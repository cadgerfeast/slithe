// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-tab></sl-tab>');
    const element = await page.find('sl-tab');
    expect(element).toHaveClass('hydrated');
  });
});
