// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-blankslate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-blankslate></sl-blankslate>');
    const element = await page.find('sl-blankslate');
    expect(element).toHaveClass('hydrated');
  });
});
