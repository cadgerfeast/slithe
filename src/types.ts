export * from './index';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/** @ts-ignore */
declare module 'slithe/themes/primer' {
  import type { Theme } from './index';
  const primer: Theme;
  export default primer;
}
