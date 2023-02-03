// Components
import Preview from './components/preview.vue';
import '../themes/primer/global.css';
import { defineElements, setTheme, addNotification } from '../components/slithe';
import primer from '../themes/primer';

defineElements();
setTheme('light', primer);

export default [
  {
    components: [
      Preview
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
