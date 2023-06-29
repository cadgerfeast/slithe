// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-input-number', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-input-number></sl-input-number>');
    const element = await page.find('sl-input-number');
    expect(element).toHaveClass('hydrated');
  });
});
