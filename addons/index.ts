// Helpers
import { defineCustomElements, setTheme, addNotification } from '../';
import primer from '../primer';
// Style
import '../primer/global.css';
// Components
import Preview from './components/preview.vue';
import PlaygroundBlankslate from './playground/blankslate.vue';
import PlaygroundCard from './playground/card.vue';
import PlaygroundLayout from './playground/layout.vue';

defineCustomElements();
setTheme('light', primer);

export default [
  {
    components: [
      Preview,
      PlaygroundBlankslate,
      PlaygroundCard,
      PlaygroundLayout
    ],
    globalProperties: {
      $notify (msg: string) {
        addNotification({
          type: 'info',
          icon: {
            name: 'info',
            size: '16px'
          },
          message: msg
        });
      }
    }
  }
];
