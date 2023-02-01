// Components
import Preview from './components/preview.vue';
import '../themes/primer/global.css';
import { defineElements } from '../dist';

defineElements();

export default [
  {
    components: [
      Preview
    ]
  }
];
