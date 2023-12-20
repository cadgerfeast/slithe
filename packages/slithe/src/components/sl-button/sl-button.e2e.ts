// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-button></sl-button>');
    const element = await page.find('sl-button');
    expect(element).toHaveClass('hydrated');
  });
});
