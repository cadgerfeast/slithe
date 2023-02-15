// Helpers
import { defineCustomElements, setTheme, addNotification } from '../';
import primer from '../primer';
// Style
import '../primer/global.css';
// Components
import Preview from './components/preview.vue';
import PlaygroundCard from './playground/card.vue';
import PlaygroundLayout from './playground/layout.vue';

defineCustomElements();
setTheme('light', primer);

export default [
  {
    components: [
      Preview,
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
