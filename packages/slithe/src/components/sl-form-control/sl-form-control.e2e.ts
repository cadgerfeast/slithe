// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-form-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-form-control></sl-form-control>');
    const element = await page.find('sl-form-control');
    expect(element).toHaveClass('hydrated');
  });
});
