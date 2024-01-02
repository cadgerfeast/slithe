// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-avatar></sl-avatar>');
    const element = await page.find('sl-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
