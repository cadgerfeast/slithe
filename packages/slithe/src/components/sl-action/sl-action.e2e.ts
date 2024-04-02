// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-action', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-action></sl-action>');
    const element = await page.find('sl-action');
    expect(element).toHaveClass('hydrated');
  });
});
