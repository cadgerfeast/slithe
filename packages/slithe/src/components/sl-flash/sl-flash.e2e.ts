// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-flash', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-flash></sl-flash>');
    const element = await page.find('sl-flash');
    expect(element).toHaveClass('hydrated');
  });
});
