// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-card></sl-card>');
    const element = await page.find('sl-card');
    expect(element).toHaveClass('hydrated');
  });
});
