// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-layout></sl-layout>');
    const element = await page.find('sl-layout');
    expect(element).toHaveClass('hydrated');
  });
});
