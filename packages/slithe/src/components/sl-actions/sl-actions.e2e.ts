// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-actions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-actions></sl-actions>');
    const element = await page.find('sl-actions');
    expect(element).toHaveClass('hydrated');
  });
});
