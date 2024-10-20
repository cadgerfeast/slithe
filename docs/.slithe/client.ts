import { definePlaygroundClient } from '@slithe/playground/client';
import { setTheme } from 'slithe';
import primer from '@slithe/primer';
import '@slithe/primer/global.css';

export const playground = definePlaygroundClient({
	setTheme: (theme) => {
		setTheme(theme, primer);
	}
});
