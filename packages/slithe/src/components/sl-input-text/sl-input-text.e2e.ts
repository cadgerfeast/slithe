// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-input-text></sl-input-text>');
    const element = await page.find('sl-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
