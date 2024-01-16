import { watch } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { Theme, useData } from 'vitepress';
import '@slithe/primer/global.css';

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
      const { setTheme } = await import('slithe');
      const { default: primer } = await import('@slithe/primer');
      watch([isDark], () => {
        setTheme(isDark.value ? 'dark': 'light', primer);
      }, { immediate: true });
    }
  },
} satisfies Theme;
