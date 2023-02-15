// Helpers
import octicons from '@primer/octicons';
// Constants
// const styles = import.meta.glob<{ default: string }>('./components/**/*.scss', { as: 'inline', eager: true });
// const components: Record<string, CSSStyleSheet> = {};
const icons: Record<string, string> = {};

for (const [name, octicon] of Object.entries(octicons)) {
  icons[name] = octicon.toSVG({ height: 16, width: 16 });
}

export default {
  components: {},
  icons,
  fallbackIcon: icons['diff-ignored']
};
