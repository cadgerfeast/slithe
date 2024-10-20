import { setTheme } from 'slithe';
import primer from '@slithe/primer';
import '@slithe/primer/global.css';

export const playground = {
	setTheme: (theme: 'light'|'dark') => {
		setTheme(theme, primer);
	}
};
