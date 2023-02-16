// Helpers
import { newE2EPage } from '@stencil/core/testing';

describe('sl-hud', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sl-hud></sl-hud>');
    const element = await page.find('sl-hud');
    expect(element).toHaveClass('hydrated');
  });
});
