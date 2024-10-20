import c from 'picocolors';
import { CLICommand } from '@slithe/cli';

import { devPlayground } from './api/dev.js';
import { buildPlayground } from './api/build.js';
import { previewPlayground } from './api/preview.js';

const help = [
  `${c.green(`@slithe/playground v${__VERSION__} in use.`)}`,
  '',
  'Usage:',
  `  slithe playground ${c.cyan('[cmd]')} ${c.yellow('{args}')}`,
  '',
  `${c.cyan('Commands')}:`,
  `  ${c.cyan('help')}: Show those helpful notes.`,
  `  ${c.cyan('version')}: Shows @slithe/playground version in use.`,
	`  ${c.cyan('dev')}: Starts playground in development mode.`,
	`  ${c.cyan('build')}: Builds playground for production.`,
	`  ${c.cyan('preview')}: Starts a preview of production build.`,
  '',
  `${c.yellow('Arguments')}:`,
  `  ${c.yellow('--help')}: Shows the help for a ${c.cyan('command')}.`,
  `  ${c.yellow('--version')}: Shows @slithe/playground version in use.`
].join('\n');

export default new CLICommand({
	name: 'playground',
	handler: (args) => {
		if (!args._[1]) {
			if (args.version) {
				console.info(__VERSION__);
			} else {
				console.info(help);
			}
		}
		switch (args._[1]) {
			case 'dev': {
				devPlayground();
				break;
			}
			case 'build': {
				buildPlayground();
				break;
			}
			case 'preview': {
				previewPlayground();
				break;
			}
			default: {
				console.error(`Command ${c.yellow(args._[1].toString())} does not exist.`);
				break;
			}
		}
	}
});
