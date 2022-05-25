// Helpers
import { describe, expect, it, beforeEach } from 'vitest';
// Components
import Button from '../../../src/components/button/button.svelte';

describe('sl-button', () => {
  let instance;
  beforeEach(() => {
    const host = document.createElement('div');
    document.body.append(host);
    instance = new Button({ target: host });
  });
  it('should mount()', () => {
    expect(instance).toBeTruthy();
  });
});
