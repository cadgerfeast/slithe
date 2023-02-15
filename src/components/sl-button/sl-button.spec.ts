import { newSpecPage } from '@stencil/core/testing';
import { SlitheButton } from './sl-button';

describe('sl-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SlitheButton],
      html: '<sl-button></sl-button>',
    });
    expect(root).toEqualHtml(`
      <sl-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </sl-button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SlitheButton],
      html: `<sl-button first="Stencil" last="'Don't call me a framework' JS"></sl-button>`,
    });
    expect(root).toEqualHtml(`
      <sl-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </sl-button>
    `);
  });
});
