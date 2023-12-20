// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-keyboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-keyboard></sl-keyboard>');
    const element = await page.find('sl-keyboard');
    expect(element).toHaveClass('hydrated');
  });
});
