/// <reference types="svelte" />
/// <reference types="vite/client" />

// Types
import type { SvelteComponentDev } from 'svelte/internal';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<unknown, unknown, unknown>;
  export default component;
}

interface SlitheComponentConstructor {
  new (): SvelteComponentDev;
}
declare interface SlitheComponent {
  public tag: string;
  public default: SlitheComponentConstructor;
  public style?: Record<string, string>;
  public initialize?: (el: HTMLElement) => void;
}

declare module '*.svelte' {
  export default SlitheComponent;
}
