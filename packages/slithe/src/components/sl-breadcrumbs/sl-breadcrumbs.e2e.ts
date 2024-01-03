// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-breadcrumbs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-breadcrumbs></sl-breadcrumbs>');
    const element = await page.find('sl-breadcrumbs');
    expect(element).toHaveClass('hydrated');
  });
});
