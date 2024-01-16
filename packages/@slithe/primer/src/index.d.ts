interface Theme {
  components: Record<string, CSSStyleSheet>;
  icons: Record<string, string>;
  fallbackIcon: string;
}

export declare const primer: Theme;

export default primer;
