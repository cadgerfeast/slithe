// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-label></sl-label>');
    const element = await page.find('sl-label');
    expect(element).toHaveClass('hydrated');
  });
});
