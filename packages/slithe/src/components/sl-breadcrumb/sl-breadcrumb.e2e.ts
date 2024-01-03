// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-breadcrumb></sl-breadcrumb>');
    const element = await page.find('sl-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
