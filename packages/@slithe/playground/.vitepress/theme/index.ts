import { watch } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { Theme, useData } from 'vitepress';

export default {
	extends: DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const { SlithePlugin } = await import('@slithe/vue');
      app.use(SlithePlugin);
    }
  },
  async setup () {
    const { isDark } = useData();
    if (!import.meta.env.SSR) {
      const config = await import('@theme/slithe');
      watch([isDark], () => {
        config.playground.setTheme(isDark.value ? 'dark': 'light');
      }, { immediate: true });
    }
  },
} satisfies Theme;
