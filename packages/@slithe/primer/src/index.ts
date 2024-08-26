import { type Theme } from 'slithe';
import octicons from '@primer/octicons';
import variables from './variables.css?raw';
// Constants
const variablesStylesheet = new CSSStyleSheet();
const styles = import.meta.glob<{ default: string }>('./components/**/*.scss', { query: '?inline', eager: true });
const components: Record<string, CSSStyleSheet[]> = {};
const icons: Record<string, string> = {};

variablesStylesheet.replaceSync(variables);

for (const style in styles) {
  const componentStylesheet = new CSSStyleSheet();
  componentStylesheet.replaceSync(styles[style].default);
  components[style.split('/')[2].slice(0, -5)] = [variablesStylesheet, componentStylesheet];
}
for (const [name, octicon] of Object.entries(octicons)) {
  icons[name] = octicon.toSVG({ height: 16, width: 16 });
}

export default {
  components,
  icons,
  fallbackIcon: icons['diff-ignored']
} satisfies Theme;
