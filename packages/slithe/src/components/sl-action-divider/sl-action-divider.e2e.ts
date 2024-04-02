// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-action-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-action-divider></sl-action-divider>');
    const element = await page.find('sl-action-divider');
    expect(element).toHaveClass('hydrated');
  });
});
