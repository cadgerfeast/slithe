// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-popover></sl-popover>');
    const element = await page.find('sl-popover');
    expect(element).toHaveClass('hydrated');
  });
});
