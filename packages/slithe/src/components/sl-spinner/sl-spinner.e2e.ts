// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-spinner></sl-spinner>');
    const element = await page.find('sl-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
