// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-splitter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-splitter></sl-splitter>');
    const element = await page.find('sl-splitter');
    expect(element).toHaveClass('hydrated');
  });
});
