// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-icon></sl-icon>');
    const element = await page.find('sl-icon');
    expect(element).toHaveClass('hydrated');
  });
});
