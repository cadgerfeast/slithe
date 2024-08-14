import * as path from 'path';
import * as fs from 'fs';
import * as eta from 'eta';
import * as url from 'url';
import chokidar from 'chokidar';
import { computeComponentWrappers } from '@shared/utils/docs';
// Constants
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const isWatching = args[0] === 'watch';

const srcPath = path.resolve(__dirname, '../../../src');

const componentsTemplate = fs.readFileSync(path.resolve(__dirname, './tpl/components.eta'), 'utf8');
const wrapperTemplate = fs.readFileSync(path.resolve(__dirname, './tpl/wrapper.eta'), 'utf8');

function generateSourceFiles () {
  const wrappers = computeComponentWrappers();
  fs.writeFileSync(path.resolve(srcPath, 'components.ts'), eta.render(componentsTemplate, { wrappers }));
  fs.mkdirSync(path.resolve(srcPath, './wrappers'), { recursive: true });
  for (const wrapper of wrappers) {
    fs.writeFileSync(path.resolve(srcPath, `./wrappers/${wrapper.name}.vue`), eta.render(wrapperTemplate, { wrapper }));
  }
}

generateSourceFiles();

if (isWatching) {
	chokidar.watch('../../../../../slithe/dist/components.json').on('all', () => {
		generateSourceFiles();
	});
}
