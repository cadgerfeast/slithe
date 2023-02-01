// Constants
const styles = import.meta.glob<{ default: string }>('./components/**/*.scss', { as: 'inline', eager: true });
const components: Record<string, CSSStyleSheet> = {};
const icons: Record<string, string> = {};

// TODO octicons from npm

for (const style in styles) {
  const stylesheet = new CSSStyleSheet();
  stylesheet.replaceSync(styles[style].default);
  components[`sl-${style.split('/')[2]}`] = stylesheet;
}

export default {
  components,
  icons
};
