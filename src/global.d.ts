/// <reference types="svelte"/>
/// <reference types="vite/client"/>
/// <reference types="mdsvex/globals"/>

declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onclickoutside?: (e: CustomEvent<MouseEvent>) => void
  }
}
