// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-tooltip></sl-tooltip>');
    const element = await page.find('sl-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
