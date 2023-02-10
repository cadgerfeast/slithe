// Helpers
import { defineElements, setTheme, addNotification } from '../components/slithe';
import primer from '../themes/primer';
// Style
import '../themes/primer/global.css';
// Components
import Preview from './components/preview.vue';
import PlaygroundCard from './playground/card.vue';
import PlaygroundLayout from './playground/layout.vue';

defineElements();
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
