// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-input-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-input-checkbox></sl-input-checkbox>');
    const element = await page.find('sl-input-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
