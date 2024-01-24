import * as path from 'path';
import * as fs from 'fs';
import * as eta from 'eta';
import * as url from 'url';
import chokidar from 'chokidar';
// Constants
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const isWatching = args[0] === 'watch';

const srcPath = path.resolve(__dirname, '../../../src');

const componentsTemplate = fs.readFileSync(path.resolve(__dirname, './tpl/components.eta'), 'utf8');
const wrapperTemplate = fs.readFileSync(path.resolve(__dirname, './tpl/wrapper.eta'), 'utf8');

async function generateSourceFiles () {
  const { components } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../../../slithe/dist/components.json'), 'utf8'));
  const wrappers = [];
  for (const component of components) {
    const props = [];
    const imports = {};
    const bindings = [];
    for (const _prop of component.props) {
      const prop = {
        name: _prop.name,
        type: _prop.complexType.original,
        required: !_prop.default,
        default: _prop.default
      };
      props.push(prop);
      for (const docsTag of _prop.docsTags) {
        switch (docsTag.name) {
          case 'binding': {
            const event = docsTag.text.trim();
            bindings.push({
              type: prop.type,
              prop: prop.name,
              event
            });
            break;
          }
          case 'import': {
            if (_prop.complexType.references[prop.type]) {
              const lib = docsTag.text.trim();
              imports[lib] = imports[lib] || [];
              imports[lib].push(prop.type);
            }
            break;
          }
        }
      }
    }
    const pascalName = (`${component.tag[0].toUpperCase()}${component.tag.slice(1)}`).replace(/-./g, (x) => x[1].toUpperCase());
    const wrapper = {
      name: component.tag.slice(3),
      tagName: component.tag,
      typeName: `HTML${pascalName}Element`,
      pascalName,
      props,
      imports,
      bindings
    };
    wrappers.push(wrapper);
  }
  fs.writeFileSync(path.resolve(srcPath, 'components.ts'), eta.render(componentsTemplate, { wrappers }));
  fs.mkdirSync(path.resolve(srcPath, './wrappers'), { recursive: true });
  for (const wrapper of wrappers) {
    fs.writeFileSync(path.resolve(srcPath, `./wrappers/${wrapper.name}.svelte`), eta.render(wrapperTemplate, { wrapper }));
  }
}

generateSourceFiles();

if (isWatching) {
	chokidar.watch('../../../../../slithe/dist/components.json').on('all', async () => {
		await generateSourceFiles();
	});
}
