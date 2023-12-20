// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-form></sl-form>');
    const element = await page.find('sl-form');
    expect(element).toHaveClass('hydrated');
  });
});
