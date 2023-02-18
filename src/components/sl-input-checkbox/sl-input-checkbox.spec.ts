// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheInputCheckbox } from './sl-input-checkbox';

describe('sl-input-checkbox', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheInputCheckbox],
      html: '<sl-input-checkbox></sl-input-checkbox>',
    });
    expect(root).toBeTruthy();
  });
});
