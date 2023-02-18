// Helpers
import { newSpecPage } from '@stencil/core/testing';
import { SlitheKeyboard } from './sl-keyboard';

describe('sl-keyboard', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheKeyboard],
      html: '<sl-keyboard></sl-keyboard>',
    });
    expect(root).toBeTruthy();
  });
});
