// Helpers
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
// Components
import Button from '../../../src/components/button/button.svelte';

describe('sl-button', () => {
  it('should mount()', () => {
    render(Button, {
      props: {
        type: 'button'
      }
    });
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });
});
