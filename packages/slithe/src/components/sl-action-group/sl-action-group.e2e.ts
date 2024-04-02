// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-action-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-action-group></sl-action-group>');
    const element = await page.find('sl-action-group');
    expect(element).toHaveClass('hydrated');
  });
});
